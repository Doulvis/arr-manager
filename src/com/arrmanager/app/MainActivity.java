package com.arrmanager.app;

import android.app.Activity;
import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Color;
import android.net.Uri;
import android.net.http.SslError;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.webkit.JavascriptInterface;
import android.webkit.SslErrorHandler;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.security.SecureRandom;
import java.security.cert.X509Certificate;
import java.util.Iterator;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSession;
import javax.net.ssl.SSLSocketFactory;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;

public class MainActivity extends Activity {
    private static final String ASSET_URL = "file:///android_asset/index.html";

    private WebView web;
    private final ExecutorService pool = Executors.newFixedThreadPool(6);
    private final ConcurrentHashMap<String, String> results = new ConcurrentHashMap<>();
    private final Handler ui = new Handler(Looper.getMainLooper());
    private SharedPreferences prefs;
    private volatile boolean insecure = false;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().setStatusBarColor(Color.parseColor("#161B22"));
        getWindow().setNavigationBarColor(Color.parseColor("#161B22"));
        prefs = getSharedPreferences("arr", Context.MODE_PRIVATE);

        web = new WebView(this);
        web.setBackgroundColor(Color.parseColor("#0E1116"));
        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW);
        s.setLoadsImagesAutomatically(true);

        web.setWebChromeClient(new WebChromeClient());
        web.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                String url = request.getUrl().toString();
                if (url.startsWith("file:///android_asset/")) return false;
                openExternal(url);
                return true;
            }

            @Override
            public void onReceivedSslError(WebView view, SslErrorHandler handler, SslError error) {
                if (insecure) handler.proceed();
                else handler.cancel();
            }
        });
        web.addJavascriptInterface(new Bridge(), "Native");
        setContentView(web);
        web.loadUrl(ASSET_URL);
    }

    @Override
    public void onBackPressed() {
        web.evaluateJavascript("window.__onBack ? window.__onBack() : false", value -> {
            if (!"true".equals(value)) finish();
        });
    }

    @Override
    protected void onDestroy() {
        pool.shutdownNow();
        web.destroy();
        super.onDestroy();
    }

    private void openExternal(String url) {
        try {
            Intent i = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
            i.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            startActivity(i);
        } catch (Exception e) {
            Toast.makeText(this, "Aucune application ne peut ouvrir ce lien", Toast.LENGTH_LONG).show();
        }
    }

    private static SSLSocketFactory insecureFactory;

    static synchronized SSLSocketFactory insecureSocketFactory() throws Exception {
        if (insecureFactory == null) {
            TrustManager[] tm = new TrustManager[]{new X509TrustManager() {
                public void checkClientTrusted(X509Certificate[] chain, String authType) {}
                public void checkServerTrusted(X509Certificate[] chain, String authType) {}
                public X509Certificate[] getAcceptedIssuers() { return new X509Certificate[0]; }
            }};
            SSLContext ctx = SSLContext.getInstance("TLS");
            ctx.init(null, tm, new SecureRandom());
            insecureFactory = ctx.getSocketFactory();
        }
        return insecureFactory;
    }

    private static String readAll(InputStream in) throws Exception {
        if (in == null) return "";
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        byte[] buf = new byte[16384];
        int n;
        while ((n = in.read(buf)) != -1) out.write(buf, 0, n);
        in.close();
        return out.toString("UTF-8");
    }

    private class Bridge {
        /** Performs an HTTP request off the UI thread; result is fetched with take(id). */
        @JavascriptInterface
        public void request(final int id, final String method, final String url, final String headers,
                            final String body, final boolean allowInsecure) {
            insecure = allowInsecure;
            pool.execute(() -> {
                int status = 0;
                String resp = "";
                String err = "";
                HttpURLConnection c = null;
                try {
                    c = (HttpURLConnection) new URL(url).openConnection();
                    if (allowInsecure && c instanceof HttpsURLConnection) {
                        HttpsURLConnection hc = (HttpsURLConnection) c;
                        hc.setSSLSocketFactory(insecureSocketFactory());
                        hc.setHostnameVerifier(new HostnameVerifier() {
                            public boolean verify(String h, SSLSession s) { return true; }
                        });
                    }
                    c.setConnectTimeout(15000);
                    c.setReadTimeout(180000);
                    c.setRequestMethod(method);
                    c.setInstanceFollowRedirects(true);
                    JSONObject h = new JSONObject(headers == null || headers.isEmpty() ? "{}" : headers);
                    Iterator<String> keys = h.keys();
                    while (keys.hasNext()) {
                        String k = keys.next();
                        c.setRequestProperty(k, h.getString(k));
                    }
                    if (body != null && !body.isEmpty()) {
                        byte[] b = body.getBytes("UTF-8");
                        c.setDoOutput(true);
                        c.setFixedLengthStreamingMode(b.length);
                        OutputStream os = c.getOutputStream();
                        os.write(b);
                        os.close();
                    }
                    status = c.getResponseCode();
                    resp = readAll(status >= 400 ? c.getErrorStream() : c.getInputStream());
                } catch (Exception e) {
                    status = 0;
                    err = e.getClass().getSimpleName() + (e.getMessage() != null ? ": " + e.getMessage() : "");
                } finally {
                    if (c != null) c.disconnect();
                }
                results.put(String.valueOf(id), resp);
                final String js = "window.__nativeCb(" + id + "," + status + "," + JSONObject.quote(err) + ")";
                ui.post(() -> web.evaluateJavascript(js, null));
            });
        }

        @JavascriptInterface
        public String take(String id) {
            String r = results.remove(id);
            return r == null ? "" : r;
        }

        @JavascriptInterface
        public String appVersion() {
            try {
                return getPackageManager().getPackageInfo(getPackageName(), 0).versionName;
            } catch (Exception e) {
                return "";
            }
        }

        @JavascriptInterface
        public String loadConfig() {
            return prefs.getString("config", "");
        }

        @JavascriptInterface
        public void saveConfig(String json) {
            prefs.edit().putString("config", json).apply();
        }

        @JavascriptInterface
        public void openWeb(String url, boolean allowInsecure) {
            Intent i = new Intent(MainActivity.this, WebActivity.class);
            i.putExtra("url", url);
            i.putExtra("insecure", allowInsecure);
            startActivity(i);
        }

        @JavascriptInterface
        public void openExternal(String url) {
            ui.post(() -> MainActivity.this.openExternal(url));
        }

        @JavascriptInterface
        public void copy(String text) {
            ui.post(() -> {
                ClipboardManager cm = (ClipboardManager) getSystemService(Context.CLIPBOARD_SERVICE);
                cm.setPrimaryClip(ClipData.newPlainText("Arr Manager", text));
            });
        }
    }
}
