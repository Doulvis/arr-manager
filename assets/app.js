'use strict';

/* =========================================================================
 * Icons (Material Design paths)
 * ========================================================================= */
const I = {
  movie: 'M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z',
  tv: 'M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z',
  radar: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z',
  settings: 'M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z',
  search: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z',
  refresh: 'M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z',
  back: 'M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z',
  open: 'M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z',
  download: 'M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z',
  delete: 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z',
  list: 'M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z',
  bookmark: 'M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z',
  bookmark_o: 'M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z',
  edit: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z',
  add: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z',
  close: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
  expand: 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z',
  play: 'M8 5v14l11-7z',
  check: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z',
  send: 'M2.01 21L23 12 2.01 3 2 10l15 2-15 2z',
  link: 'M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z',
  copy: 'M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z',
  bolt: 'M7 2v11h3v9l7-12h-4l4-8z',
};
const icon = (n, cls = '') => `<svg class="ic ${cls}" viewBox="0 0 24 24"><path d="${I[n]}"/></svg>`;

/* =========================================================================
 * Language (French / English)
 * ========================================================================= */
let LANG = 'en';
/** Inline translation: L('texte français', 'English text'). */
const L = (fr, en) => LANG === 'fr' ? fr : en;
const LOC = () => LANG === 'fr' ? 'fr-FR' : 'en-US';
const dec = s => LANG === 'fr' ? String(s).replace('.', ',') : String(s);
const plural = (n, fr, en) => `${n} ${LANG === 'fr' ? fr : en}${n === 1 ? '' : 's'}`;
function applyLang() {
  const sys = (navigator.language || 'en').toLowerCase().startsWith('fr') ? 'fr' : 'en';
  LANG = cfg.lang === 'fr' || cfg.lang === 'en' ? cfg.lang : sys;
  document.documentElement.lang = LANG;
}

/* =========================================================================
 * Utilities
 * ========================================================================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const pad2 = n => String(n).padStart(2, '0');
const epCode = e => e ? `S${pad2(e.seasonNumber)}E${pad2(e.episodeNumber)}` : '';
const opts = (arr, sel) => arr.map(([v, l]) => `<option value="${esc(v)}"${String(v) === String(sel) ? ' selected' : ''}>${esc(l)}</option>`).join('');
const field = (label, inner) => `<label class="field"><span>${esc(label)}</span>${inner}</label>`;
const chk = (id, label, on) => `<label class="check"><input type="checkbox" id="${id}"${on ? ' checked' : ''}> ${esc(label)}</label>`;
const loading = (msg = '') => `<div class="center col"><div class="spinner"></div>${msg ? `<div class="muted small">${esc(msg)}</div>` : ''}</div>`;

function fmtSize(b) {
  if (!b) return LANG === 'fr' ? '0 o' : '0 B';
  const u = LANG === 'fr' ? ['o', 'Ko', 'Mo', 'Go', 'To'] : ['B', 'KB', 'MB', 'GB', 'TB'];
  let i = 0;
  while (b >= 1024 && i < u.length - 1) { b /= 1024; i++; }
  return dec(b.toFixed(i >= 3 ? 2 : i ? 1 : 0)) + ' ' + u[i];
}
function fmtDate(d, withTime) {
  if (!d) return '—';
  const x = new Date(d);
  if (isNaN(x)) return '—';
  return x.toLocaleDateString(LOC(), { day: 'numeric', month: 'short', year: 'numeric' }) +
    (withTime ? ' ' + x.toLocaleTimeString(LOC(), { hour: '2-digit', minute: '2-digit' }) : '');
}
const fmtTime = d => new Date(d).toLocaleTimeString(LOC(), { hour: '2-digit', minute: '2-digit' });
function fmtAge(d) {
  const m = (Date.now() - new Date(d)) / 60000;
  if (isNaN(m)) return '—';
  if (m < 60) return Math.max(0, Math.round(m)) + ' min';
  const h = m / 60;
  if (h < 24) return Math.round(h) + ' h';
  const days = h / 24;
  if (days < 60) return Math.round(days) + L(' j', ' d');
  if (days < 730) return Math.round(days / 30) + L(' mois', ' mo');
  return dec((days / 365).toFixed(1)) + L(' ans', ' y');
}
const ago = d => L(`il y a ${fmtAge(d)}`, `${fmtAge(d)} ago`);
const fmtRuntime = min => !min ? '' : (min >= 60 ? `${Math.floor(min / 60)} h ${pad2(min % 60)}` : `${min} min`);
function kv(rows) {
  const r = rows.filter(([, v]) => v !== null && v !== undefined && v !== '' && v !== false);
  return r.length ? `<dl class="kv">${r.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('')}</dl>` : '';
}
const rejText = x => typeof x === 'string' ? x : (x?.reason || x?.message || JSON.stringify(x));

/* =========================================================================
 * Configuration
 * ========================================================================= */
const SERVICES = {
  radarr: { name: 'Radarr', ver: 'v3', color: '#ffc230', port: 7878 },
  sonarr: { name: 'Sonarr', ver: 'v3', color: '#35c5f4', port: 8989 },
  prowlarr: { name: 'Prowlarr', ver: 'v1', color: '#e66000', port: 9696 },
};
let cfg = loadCfg();
applyLang();

function loadCfg() {
  let s = '';
  try { s = window.Native ? Native.loadConfig() : localStorage.getItem('cfg'); } catch (e) { }
  let c = {};
  try { c = JSON.parse(s || '{}') || {}; } catch (e) { }
  for (const k of Object.keys(SERVICES)) c[k] = Object.assign({ url: '', apiKey: '' }, c[k]);
  c.insecure = !!c.insecure;
  c.prefs = c.prefs || {};
  c.lang = c.lang || 'auto';
  return c;
}
function saveCfg() {
  const s = JSON.stringify(cfg);
  try { window.Native ? Native.saveConfig(s) : localStorage.setItem('cfg', s); } catch (e) { }
}
const configured = svc => !!(cfg[svc] && cfg[svc].url.trim() && cfg[svc].apiKey.trim());
function baseUrl(svc) {
  let u = cfg[svc].url.trim().replace(/\/+$/, '');
  if (!/^https?:\/\//i.test(u)) u = 'http://' + u;
  return u;
}

/* =========================================================================
 * HTTP (through the native bridge → no CORS, cleartext allowed)
 * ========================================================================= */
let _rid = 0;
const _pending = {};
window.__nativeCb = (id, status, err) => {
  const cb = _pending[id];
  if (!cb) return;
  delete _pending[id];
  let body = '';
  try { body = Native.take(String(id)); } catch (e) { }
  cb({ status, body, err });
};
function httpRaw(method, url, headers, body) {
  if (window.Native) {
    return new Promise(res => {
      const id = ++_rid;
      _pending[id] = res;
      Native.request(id, method, url, JSON.stringify(headers || {}), body || '', !!cfg.insecure);
    });
  }
  return fetch(url, { method, headers, body: body || undefined })
    .then(async r => ({ status: r.status, body: await r.text(), err: '' }), e => ({ status: 0, body: '', err: String(e) }));
}
async function api(svc, method, path, body, allowFail) {
  if (!configured(svc)) throw new Error(L(`${SERVICES[svc].name} n'est pas configuré (onglet Réglages).`, `${SERVICES[svc].name} is not configured (Settings tab).`));
  const url = `${baseUrl(svc)}/api/${SERVICES[svc].ver}${path}`;
  const r = await httpRaw(method, url, {
    'X-Api-Key': cfg[svc].apiKey.trim(), 'Accept': 'application/json', 'Content-Type': 'application/json',
  }, body != null ? JSON.stringify(body) : '');
  if (r.status === 0) throw new Error(L('Connexion impossible : ', 'Unable to connect: ') + (r.err || L('erreur réseau', 'network error')));
  let data = null;
  if (r.body) { try { data = JSON.parse(r.body); } catch (e) { data = r.body; } }
  if (r.status === 401) throw new Error(L('Clé API refusée (401). Vérifie la clé dans les Réglages.', 'API key rejected (401). Check the key in Settings.'));
  if (r.status >= 400 && allowFail && typeof data === 'object') return data;
  if (r.status >= 400) {
    let msg = '';
    if (Array.isArray(data)) msg = data.map(x => x.errorMessage || x.message).filter(Boolean).join('\n');
    else if (data && typeof data === 'object') msg = data.message || data.title || data.error || data.description || '';
    else if (typeof data === 'string') msg = data.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 200);
    throw new Error(msg || L(`Erreur HTTP ${r.status}`, `HTTP error ${r.status}`));
  }
  if (typeof data === 'string' && /^\s*</.test(data)) throw new Error(L("Réponse inattendue (page HTML). Vérifie l'URL et la base URL du service.", 'Unexpected response (HTML page). Check the URL and the service base URL.'));
  return data;
}
const GET = (s, p) => api(s, 'GET', p);
const POST = (s, p, b) => api(s, 'POST', p, b ?? {});
const PUT = (s, p, b) => api(s, 'PUT', p, b);
const DEL = (s, p) => api(s, 'DELETE', p);
async function command(svc, name, extra = {}, label) {
  await POST(svc, '/command', { name, ...extra });
  toast(`${label || name}${L(' : lancé ✓', ': started ✓')}`);
}

/* Cache */
const cache = {};
const cacheT = {};
async function cached(key, loader, maxAge = 300000) {
  if (cache[key] !== undefined && Date.now() - cacheT[key] < maxAge) return cache[key];
  const v = await loader();
  cache[key] = v; cacheT[key] = Date.now();
  return v;
}
function setCache(key, v) { cache[key] = v; cacheT[key] = Date.now(); }
function dropCache(prefix) { for (const k of Object.keys(cache)) if (k.startsWith(prefix)) { delete cache[k]; delete cacheT[k]; } }
const profilesOf = svc => cached(svc + ':profiles', () => GET(svc, '/qualityprofile'));
const rootsOf = svc => cached(svc + ':roots', () => GET(svc, '/rootfolder'), 30000);

function imgUrl(svc, images, type) {
  const im = (images || []).find(i => i.coverType === type);
  if (!im) return '';
  if (im.remoteUrl) return im.remoteUrl;
  if (!im.url) return '';
  let u = im.url;
  if (!/^https?:/i.test(u)) {
    try { u = new URL(baseUrl(svc)).origin + (u.startsWith('/') ? '' : '/') + u; } catch (e) { return ''; }
  }
  return u + (u.includes('?') ? '&' : '?') + 'apikey=' + encodeURIComponent(cfg[svc].apiKey.trim());
}
const posterHtml = (src, title, extra = '') =>
  `<div class="poster"><span class="ph">${esc(title)}</span>${src ? `<img loading="lazy" src="${esc(src)}" onerror="this.remove()">` : ''}${extra}</div>`;
const thumbHtml = src => `<div class="thumb">${src ? `<img loading="lazy" src="${esc(src)}" onerror="this.remove()">` : ''}</div>`;

function openWeb(svc, path = '') {
  const u = baseUrl(svc) + path;
  if (window.Native) Native.openWeb(u, !!cfg.insecure);
  else window.open(u, '_blank');
}
function openExternal(url) {
  if (window.Native) Native.openExternal(url);
  else window.open(url, '_blank');
}

/* =========================================================================
 * UI primitives: toast, sheet, actions
 * ========================================================================= */
function toast(msg, err) {
  const t = $('#toast');
  t.textContent = msg;
  t.className = err ? 'err' : '';
  t.hidden = false;
  clearTimeout(toast._t);
  toast._t = setTimeout(() => { t.hidden = true; }, err ? 5000 : 2500);
}
let sheetOnClose = null;
function openSheet(html) {
  const sh = $('#sheet');
  sh.innerHTML = '<div class="sheet-handle"></div>' + html;
  sh.hidden = false; $('#sheet-bg').hidden = false;
  sh.scrollTop = 0;
  return sh;
}
function closeSheet() {
  $('#sheet').hidden = true; $('#sheet-bg').hidden = true; $('#sheet').innerHTML = '';
  const cb = sheetOnClose; sheetOnClose = null;
  if (cb) cb(null);
}
/** Confirmation sheet with optional checkboxes. Resolves to {key:bool} or null if cancelled. */
function confirmSheet({ title, msg = '', ok = L('Confirmer', 'Confirm'), danger = false, checks = [] }) {
  return new Promise(res => {
    const sh = openSheet(`<h2>${esc(title)}</h2>${msg ? `<p class="muted">${esc(msg)}</p>` : ''}
      ${checks.map(c => `<label class="check"><input type="checkbox" data-k="${c.k}"${c.on ? ' checked' : ''}> ${esc(c.label)}</label>`).join('')}
      <div class="sheet-actions"><button class="btn ghost" data-r="0">${L('Annuler', 'Cancel')}</button><button class="btn ${danger ? 'danger fill' : 'primary'}" data-r="1">${esc(ok)}</button></div>`);
    sheetOnClose = res;
    $('[data-r="0"]', sh).onclick = closeSheet;
    $('[data-r="1"]', sh).onclick = () => {
      const v = {};
      $$('input[data-k]', sh).forEach(i => { v[i.dataset.k] = i.checked; });
      sheetOnClose = null; closeSheet(); res(v);
    };
  });
}
/** Form sheet: onOk(sheet) may throw → error toast, sheet stays open. */
function formSheet(title, body, okLabel, onOk) {
  const sh = openSheet(`<h2>${esc(title)}</h2><div class="form">${body}</div>
    <div class="sheet-actions"><button class="btn ghost" id="sh-cancel">${L('Annuler', 'Cancel')}</button><button class="btn primary" id="sh-ok">${esc(okLabel)}</button></div>`);
  $('#sh-cancel', sh).onclick = closeSheet;
  $('#sh-ok', sh).onclick = e => act(e.currentTarget, async () => { await onOk(sh); closeSheet(); });
  return sh;
}
async function act(btn, fn) {
  if (btn) { if (btn.disabled) return; btn.disabled = true; btn.classList.add('busy'); }
  try { await fn(); } catch (e) { console.error(e); toast(e.message || String(e), true); }
  finally { if (btn) { btn.disabled = false; btn.classList.remove('busy'); } }
}
function showError(box, e) {
  box.innerHTML = `<div class="error-box"><b>${L('Erreur', 'Error')}</b><p>${esc(e.message || e)}</p><button class="btn small" id="retry">${icon('refresh')} ${L('Réessayer', 'Retry')}</button></div>`;
  $('#retry', box).onclick = () => render();
}

/* =========================================================================
 * Navigation
 * ========================================================================= */
const state = {
  svc: 'radarr',
  tabs: { radarr: 'library', sonarr: 'library', prowlarr: 'search', settings: 'main' },
  stack: [],
  lib: {}, add: {}, ps: null,
};
const scrollPos = {};
let pendingScroll = null;
let timers = [];
const TABS = () => ({
  radarr: [['library', L('Films', 'Movies')], ['add', L('Ajouter', 'Add')], ['queue', L('Téléchargements', 'Downloads')], ['calendar', L('Calendrier', 'Calendar')], ['history', L('Historique', 'History')], ['blocklist', L('Liste noire', 'Blocklist')], ['system', L('Système', 'System')]],
  sonarr: [['library', L('Séries', 'Series')], ['add', L('Ajouter', 'Add')], ['queue', L('Téléchargements', 'Downloads')], ['wanted', L('Manquants', 'Wanted')], ['calendar', L('Calendrier', 'Calendar')], ['history', L('Historique', 'History')], ['blocklist', L('Liste noire', 'Blocklist')], ['system', L('Système', 'System')]],
  prowlarr: [['search', L('Recherche', 'Search')], ['indexers', L('Indexeurs', 'Indexers')], ['stats', L('Statistiques', 'Stats')], ['apps', 'Applications'], ['history', L('Historique', 'History')], ['system', L('Système', 'System')]],
  settings: [],
});
const PAGES = {
  radarr: {
    library: b => libraryPage(b, 'radarr'), add: b => addPage(b, 'radarr'), queue: b => queuePage(b, 'radarr'),
    calendar: b => calendarPage(b, 'radarr'), history: b => historyPage(b, 'radarr'), blocklist: b => blocklistPage(b, 'radarr'),
    system: b => systemPage(b, 'radarr'),
  },
  sonarr: {
    library: b => libraryPage(b, 'sonarr'), add: b => addPage(b, 'sonarr'), queue: b => queuePage(b, 'sonarr'),
    wanted: b => sonarrWanted(b), calendar: b => calendarPage(b, 'sonarr'), history: b => historyPage(b, 'sonarr'),
    blocklist: b => blocklistPage(b, 'sonarr'), system: b => systemPage(b, 'sonarr'),
  },
  prowlarr: {
    search: b => prowlarrSearch(b), indexers: b => prowlarrIndexers(b), stats: b => prowlarrStats(b),
    apps: b => prowlarrApps(b), history: b => historyPage(b, 'prowlarr'), system: b => systemPage(b, 'prowlarr'),
  },
  settings: { main: b => settingsPage(b) },
};
const scrollKey = () => `${state.svc}|${state.tabs[state.svc]}|${state.stack.length}`;

function renderChrome() {
  const names = { radarr: 'Radarr', sonarr: 'Sonarr', prowlarr: 'Prowlarr', settings: L('Réglages', 'Settings') };
  $$('#bottom button').forEach(b => { $('span', b).textContent = names[b.dataset.svc]; });
  $('#webBtn').title = L('Interface web', 'Web interface');
  $('#refreshBtn').title = L('Actualiser', 'Refresh');
}

function render() {
  timers.forEach(clearInterval); timers = [];
  const view = $('#view');
  const svc = state.svc;
  $$('#bottom button').forEach(b => b.classList.toggle('active', b.dataset.svc === svc));
  document.documentElement.style.setProperty('--accent', svc === 'settings' ? '#8b9cff' : SERVICES[svc].color);
  const top = state.stack[state.stack.length - 1];
  $('#backBtn').hidden = !top;
  $('#webBtn').hidden = svc === 'settings' || !configured(svc);
  $('#refreshBtn').hidden = svc === 'settings';

  const sub = $('#subtabs');
  const tabs = TABS()[svc];
  if (top || !tabs.length || (svc !== 'settings' && !configured(svc))) sub.hidden = true;
  else {
    sub.hidden = false;
    sub.innerHTML = tabs.map(([k, l]) => `<button data-tab="${k}" class="${state.tabs[svc] === k ? 'active' : ''}">${l}</button>`).join('');
    const a = $('.active', sub);
    if (a) sub.scrollLeft = a.offsetLeft - sub.clientWidth / 2 + a.clientWidth / 2;
  }

  const box = document.createElement('div');
  view.replaceChildren(box);
  view.scrollTop = 0;
  let fn;
  if (top) { $('#title').textContent = top.title || ''; fn = top.render; }
  else {
    $('#title').textContent = svc === 'settings' ? L('Réglages', 'Settings') : SERVICES[svc].name;
    if (svc !== 'settings' && !configured(svc)) return notConfigured(box, svc);
    fn = PAGES[svc][state.tabs[svc]];
  }
  Promise.resolve().then(() => fn(box)).then(() => restoreScroll(box), e => { console.error(e); if (box.isConnected) showError(box, e); });
}
function restoreScroll(box) {
  if (pendingScroll == null || !box.isConnected) return;
  $('#view').scrollTop = pendingScroll;
  pendingScroll = null;
}
function push(title, renderFn) {
  scrollPos[scrollKey()] = $('#view').scrollTop;
  state.stack.push({ title, render: renderFn });
  pendingScroll = null;
  render();
}
function pop() {
  state.stack.pop();
  pendingScroll = scrollPos[scrollKey()] ?? null;
  render();
}
function setTitle(box, t) {
  if (!box.isConnected) return;
  $('#title').textContent = t;
  const top = state.stack[state.stack.length - 1];
  if (top) top.title = t;
}
function goTab(svc, tab) { state.svc = svc; state.stack = []; state.tabs[svc] = tab; render(); }
window.__onBack = () => {
  if (!$('#sheet').hidden) { closeSheet(); return true; }
  if (state.stack.length) { pop(); return true; }
  return false;
};

function notConfigured(box, svc) {
  const n = SERVICES[svc].name;
  box.innerHTML = `<div class="empty-state">${icon(svc === 'radarr' ? 'movie' : svc === 'sonarr' ? 'tv' : 'radar')}
    <h2>${L(`${n} n'est pas configuré`, `${n} is not configured`)}</h2>
    <p class="muted">${L(`Ajoute l'URL et la clé API de ${n} dans les réglages pour commencer.`, `Add the ${n} URL and API key in Settings to get started.`)}</p>
    <button class="btn primary" id="go">${icon('settings')} ${L('Ouvrir les réglages', 'Open settings')}</button></div>`;
  $('#go', box).onclick = () => goTab('settings', 'main');
}

/* =========================================================================
 * Library (Radarr movies / Sonarr series)
 * ========================================================================= */
const MSTATUS = () => ({ tba: L('À déterminer', 'TBA'), announced: L('Annoncé', 'Announced'), inCinemas: L('Au cinéma', 'In cinemas'), released: L('Sorti', 'Released'), deleted: L('Supprimé', 'Deleted') });
const AVAIL = () => ({ announced: L('Annoncé', 'Announced'), inCinemas: L('Au cinéma', 'In cinemas'), released: L('Sorti', 'Released') });
const SSTATUS = () => ({ continuing: L('En cours', 'Continuing'), ended: L('Terminée', 'Ended'), upcoming: L('À venir', 'Upcoming'), deleted: L('Supprimée', 'Deleted') });
const STYPE = () => ({ standard: 'Standard', daily: L('Quotidienne', 'Daily'), anime: 'Anime' });

function movieStatus(m) {
  if (m.hasFile) return ['ok', L('Disponible', 'Downloaded')];
  if (!m.monitored) return ['off', L('Non surveillé', 'Unmonitored')];
  if (m.isAvailable) return ['bad', L('Manquant', 'Missing')];
  return ['soon', MSTATUS()[m.status] || L('À venir', 'Upcoming')];
}
function seriesStatus(s) {
  const st = s.statistics || {};
  if (!s.monitored) return ['off', L('Non surveillée', 'Unmonitored')];
  if (st.episodeCount && st.episodeFileCount >= st.episodeCount) return ['ok', s.status === 'ended' ? L('Complète', 'Complete') : L('À jour', 'Up to date')];
  if ((st.episodeFileCount || 0) < (st.episodeCount || 0)) return ['bad', L('Incomplète', 'Incomplete')];
  return ['soon', L('À venir', 'Upcoming')];
}
const rating = x => x.ratings?.imdb?.value ?? x.ratings?.tmdb?.value ?? x.ratings?.value ?? 0;
const sizeOf = x => x.sizeOnDisk ?? x.statistics?.sizeOnDisk ?? 0;
const SORTS = () => [['title', L('Titre (A→Z)', 'Title (A→Z)')], ['added', L('Ajout récent', 'Recently added')], ['year', L('Année', 'Year')], ['rating', L('Note', 'Rating')], ['size', L('Taille', 'Size')]];
const LIB = {
  radarr: {
    key: 'radarr:movies', path: '/movie',
    noun: () => L('films', 'movies'),
    filters: () => [['all', L('Tous', 'All')], ['monitored', L('Surveillés', 'Monitored')], ['missing', L('Manquants', 'Missing')], ['downloaded', L('Téléchargés', 'Downloaded')], ['upcoming', L('À venir', 'Upcoming')], ['unmonitored', L('Non surveillés', 'Unmonitored')]],
    filter: (m, f) => f === 'monitored' ? m.monitored : f === 'missing' ? (m.monitored && !m.hasFile && m.isAvailable)
      : f === 'downloaded' ? m.hasFile : f === 'upcoming' ? (!m.hasFile && !m.isAvailable) : f === 'unmonitored' ? !m.monitored : true,
    sub: m => m.year || '', status: movieStatus, progress: null,
    open: (id, t) => openMovie(id, t),
    missingCmd: () => ['MissingMoviesSearch', L('Recherche des films manquants', 'Missing movies search')],
  },
  sonarr: {
    key: 'sonarr:series', path: '/series',
    noun: () => L('séries', 'series'),
    filters: () => [['all', L('Toutes', 'All')], ['monitored', L('Surveillées', 'Monitored')], ['missing', L('Épisodes manquants', 'Missing episodes')], ['continuing', L('En cours', 'Continuing')], ['ended', L('Terminées', 'Ended')], ['unmonitored', L('Non surveillées', 'Unmonitored')]],
    filter: (s, f) => {
      const st = s.statistics || {};
      return f === 'monitored' ? s.monitored : f === 'missing' ? (st.episodeFileCount || 0) < (st.episodeCount || 0)
        : f === 'continuing' ? s.status === 'continuing' : f === 'ended' ? s.status === 'ended' : f === 'unmonitored' ? !s.monitored : true;
    },
    sub: s => { const st = s.statistics || {}; return `${st.episodeFileCount || 0}/${st.episodeCount || 0} ${L('ép.', 'ep.')}`; },
    status: seriesStatus,
    progress: s => { const st = s.statistics || {}; return st.episodeCount ? Math.min(100, 100 * (st.episodeFileCount || 0) / st.episodeCount) : 0; },
    open: (id, t) => openSeries(id, t),
    missingCmd: () => ['MissingEpisodeSearch', L('Recherche des épisodes manquants', 'Missing episodes search')],
  },
};

async function libraryPage(box, svc) {
  const L_ = LIB[svc];
  const st = state.lib[svc] = state.lib[svc] || { q: '', filter: 'all', sort: 'title' };
  box.innerHTML = `<div class="toolbar">
      <input class="input" type="search" id="q" placeholder="${L(`Filtrer les ${L_.noun()}…`, `Filter ${L_.noun()}…`)}">
      <div class="row"><select class="select" id="flt">${opts(L_.filters(), st.filter)}</select><select class="select" id="srt">${opts(SORTS(), st.sort)}</select></div>
      <div class="row between"><span class="muted small" id="count"></span><span id="extra"></span></div>
    </div>
    <div class="grid" id="grid"></div>
    <button class="fab" id="fab" title="${L('Ajouter', 'Add')}">${icon('add')}</button>`;
  const grid = $('#grid', box);
  $('#q', box).value = st.q;
  let items = cache[L_.key];

  const draw = () => {
    if (!items) return;
    const q = st.q.trim().toLowerCase();
    let list = items.filter(x => L_.filter(x, st.filter) && (!q || (x.title || '').toLowerCase().includes(q) || (x.originalTitle || '').toLowerCase().includes(q)));
    const cmp = {
      title: (a, b) => (a.sortTitle || a.title || '').localeCompare(b.sortTitle || b.title || '', LANG),
      added: (a, b) => new Date(b.added) - new Date(a.added),
      year: (a, b) => (b.year || 0) - (a.year || 0),
      rating: (a, b) => rating(b) - rating(a),
      size: (a, b) => sizeOf(b) - sizeOf(a),
    }[st.sort];
    list.sort(cmp);
    $('#count', box).textContent = `${list.length} ${L_.noun()}` + (list.length !== items.length ? L(` sur ${items.length}`, ` of ${items.length}`) : '');
    const extra = $('#extra', box);
    extra.innerHTML = st.filter === 'missing' && list.length ? `<button class="btn small" id="allmiss">${icon('search')} ${L('Tout rechercher', 'Search all')}</button>` : '';
    if ($('#allmiss', box)) $('#allmiss', box).onclick = e => { const [c, l] = L_.missingCmd(); act(e.currentTarget, () => command(svc, c, {}, l)); };
    grid.innerHTML = list.length ? list.map(x => {
      const [cls, label] = L_.status(x);
      const p = L_.progress ? L_.progress(x) : null;
      const extraHtml = `<span class="dot ${cls}"></span>${p !== null ? `<div class="pbar"><i class="${p >= 100 ? 'ok' : ''}" style="width:${p}%"></i></div>` : ''}`;
      return `<div class="card" data-id="${x.id}">${posterHtml(imgUrl(svc, x.images, 'poster'), x.title, extraHtml)}
        <div class="ct">${esc(x.title)}</div><div class="cs">${esc(L_.sub(x))} · <span class="st-${cls}">${esc(label)}</span></div></div>`;
    }).join('') : `<div class="empty" style="grid-column:1/-1">${L('Aucun résultat.', 'No results.')}</div>`;
  };

  $('#q', box).oninput = e => { st.q = e.target.value; draw(); };
  $('#flt', box).onchange = e => { st.filter = e.target.value; draw(); };
  $('#srt', box).onchange = e => { st.sort = e.target.value; draw(); };
  grid.onclick = e => {
    const c = e.target.closest('[data-id]');
    if (c) L_.open(+c.dataset.id, $('.ct', c).textContent);
  };
  $('#fab', box).onclick = () => goTab(svc, 'add');

  if (items) { draw(); restoreScroll(box); }
  else grid.innerHTML = `<div style="grid-column:1/-1">${loading()}</div>`;
  if (!items || Date.now() - cacheT[L_.key] > 30000) {
    try {
      items = await GET(svc, L_.path);
      setCache(L_.key, items);
      draw();
    } catch (e) {
      if (!cache[L_.key]) throw e;
      toast(e.message, true);
    }
  }
}

/* =========================================================================
 * Movie detail (Radarr)
 * ========================================================================= */
function openMovie(id, title) { push(title || L('Film', 'Movie'), b => movieDetail(b, id)); }

function mediaRows(f) {
  const mi = f.mediaInfo || {};
  return [
    [L('Fichier', 'File'), f.relativePath], [L('Qualité', 'Quality'), f.quality?.quality?.name], [L('Taille', 'Size'), f.size ? fmtSize(f.size) : null],
    [L('Vidéo', 'Video'), [mi.resolution, mi.videoCodec, mi.videoDynamicRangeType].filter(Boolean).join(' · ')],
    ['Audio', [mi.audioCodec, mi.audioChannels, mi.audioLanguages].filter(Boolean).join(' · ')],
    [L('Sous-titres', 'Subtitles'), mi.subtitles], [L('Langues', 'Languages'), (f.languages || []).map(l => l.name).join(', ')],
    [L('Groupe', 'Group'), f.releaseGroup], [L('Score formats', 'Format score'), f.customFormatScore ? String(f.customFormatScore) : null],
    [L('Ajouté le', 'Added'), f.dateAdded && fmtDate(f.dateAdded, true)],
  ];
}
const abtn = (a, ic, label, cls = '') => `<button class="abtn ${cls}" data-a="${a}">${icon(ic)}<span>${esc(label)}</span></button>`;
const deleteChecks = () => [
  { k: 'files', label: L('Supprimer aussi les fichiers du disque', 'Also delete files from disk'), on: false },
  { k: 'excl', label: L("Ajouter à la liste d'exclusion d'import", 'Add to import exclusion list'), on: false },
];

async function movieDetail(box, id) {
  box.innerHTML = loading();
  const [m, profiles] = await Promise.all([GET('radarr', '/movie/' + id), profilesOf('radarr')]);
  setTitle(box, m.title);
  const [cls, label] = movieStatus(m);
  const prof = profiles.find(p => p.id === m.qualityProfileId);
  const f = m.movieFile;
  const rat = [m.ratings?.imdb?.value && `IMDb ${m.ratings.imdb.value.toFixed(1)}`, m.ratings?.tmdb?.value && `TMDb ${m.ratings.tmdb.value.toFixed(1)}`].filter(Boolean);
  box.innerHTML = `${hero('radarr', m, [m.year, fmtRuntime(m.runtime), m.certification].filter(Boolean).join(' · '),
      `<span class="badge ${cls}">${label}</span>${rat.map(r => `<span class="badge">${r}</span>`).join('')}`)}
    <div class="actions">
      ${abtn('search', 'search', L('Rechercher', 'Search'))}${abtn('interactive', 'list', L('Manuelle', 'Interactive'))}
      ${abtn('monitor', m.monitored ? 'bookmark' : 'bookmark_o', m.monitored ? L('Surveillé', 'Monitored') : L('Non surveillé', 'Unmonitored'), m.monitored ? 'on' : '')}
      ${abtn('edit', 'edit', L('Modifier', 'Edit'))}${abtn('refresh', 'refresh', L('Actualiser', 'Refresh'))}${abtn('delete', 'delete', L('Supprimer', 'Delete'), 'danger')}
    </div>
    ${m.overview ? `<p class="overview">${esc(m.overview)}</p>` : ''}
    <div class="section"><h3>${L('Informations', 'Details')}</h3>${kv([
      [L('Profil qualité', 'Quality profile'), prof?.name], [L('Disponibilité min.', 'Min. availability'), AVAIL()[m.minimumAvailability] || m.minimumAvailability],
      [L('Statut', 'Status'), MSTATUS()[m.status] || m.status], [L('Titre original', 'Original title'), m.originalTitle !== m.title ? m.originalTitle : null],
      ['Studio', m.studio], ['Genres', (m.genres || []).join(', ')],
      [L('Au cinéma', 'In cinemas'), m.inCinemas && fmtDate(m.inCinemas)], [L('Sortie numérique', 'Digital release'), m.digitalRelease && fmtDate(m.digitalRelease)],
      [L('Sortie physique', 'Physical release'), m.physicalRelease && fmtDate(m.physicalRelease)], [L('Chemin', 'Path'), m.path],
      [L('Taille', 'Size'), m.sizeOnDisk ? fmtSize(m.sizeOnDisk) : null], [L('Ajouté le', 'Added'), fmtDate(m.added)],
    ])}</div>
    ${f ? `<div class="section"><h3>${L('Fichier', 'File')}</h3>${kv(mediaRows(f))}<div class="row" style="margin-top:12px"><button class="btn danger small" id="delfile">${icon('delete')} ${L('Supprimer le fichier', 'Delete file')}</button></div></div>` : ''}
    <div class="section"><h3>${L('Historique', 'History')}</h3><div id="hist">${loading()}</div></div>`;

  $('.actions', box).onclick = e => {
    const b = e.target.closest('[data-a]');
    if (!b) return;
    const a = b.dataset.a;
    if (a === 'search') act(b, () => command('radarr', 'MoviesSearch', { movieIds: [id] }, L('Recherche', 'Search')));
    else if (a === 'interactive') openReleases('radarr', 'movieId=' + id, m.title);
    else if (a === 'monitor') act(b, async () => {
      await PUT('radarr', '/movie/' + id, { ...m, monitored: !m.monitored });
      dropCache('radarr:movies'); toast(m.monitored ? L('Film non surveillé', 'Movie unmonitored') : L('Film surveillé', 'Movie monitored')); render();
    });
    else if (a === 'refresh') act(b, () => command('radarr', 'RefreshMovie', { movieIds: [id] }, L('Actualisation', 'Refresh')));
    else if (a === 'edit') formSheet(L('Modifier le film', 'Edit movie'), `
        ${field(L('Profil de qualité', 'Quality profile'), `<select class="select" id="prof">${opts(profiles.map(p => [p.id, p.name]), m.qualityProfileId)}</select>`)}
        ${field(L('Disponibilité minimale', 'Minimum availability'), `<select class="select" id="avail">${opts(Object.entries(AVAIL()), m.minimumAvailability)}</select>`)}
        ${field(L('Chemin', 'Path'), `<input class="input" id="path" value="${esc(m.path)}">`)}
        ${chk('mon', L('Surveillé', 'Monitored'), m.monitored)}
        ${chk('move', L('Déplacer les fichiers si le chemin change', 'Move files if the path changes'), true)}`, L('Enregistrer', 'Save'), async sh => {
        const path = $('#path', sh).value.trim();
        await PUT('radarr', `/movie/${id}?moveFiles=${$('#move', sh).checked && path !== m.path}`, {
          ...m, qualityProfileId: +$('#prof', sh).value, minimumAvailability: $('#avail', sh).value,
          monitored: $('#mon', sh).checked, path,
        });
        dropCache('radarr:movies'); toast(L('Film mis à jour', 'Movie updated')); render();
      });
    else if (a === 'delete') confirmSheet({
      title: L(`Supprimer « ${m.title} » ?`, `Delete "${m.title}"?`), ok: L('Supprimer', 'Delete'), danger: true, checks: deleteChecks(),
    }).then(v => v && act(null, async () => {
      await DEL('radarr', `/movie/${id}?deleteFiles=${v.files}&addImportExclusion=${v.excl}`);
      dropCache('radarr:movies'); toast(L('Film supprimé', 'Movie deleted')); pop();
    }));
  };
  if (f) $('#delfile', box).onclick = e => confirmSheet({ title: L('Supprimer le fichier ?', 'Delete file?'), msg: f.relativePath, ok: L('Supprimer', 'Delete'), danger: true })
    .then(v => v && act(e.target, async () => { await DEL('radarr', '/moviefile/' + f.id); dropCache('radarr:movies'); toast(L('Fichier supprimé', 'File deleted')); render(); }));

  try {
    const h = await GET('radarr', '/history/movie?movieId=' + id);
    const arr = (Array.isArray(h) ? h : h.records || []).sort((a, b) => new Date(b.date) - new Date(a.date));
    $('#hist', box).innerHTML = arr.length ? arr.slice(0, 30).map(x => historyRow('radarr', x, true)).join('') : `<div class="muted small">${L('Aucun historique.', 'No history.')}</div>`;
  } catch (e) { $('#hist', box).innerHTML = `<div class="muted small">${esc(e.message)}</div>`; }
}

function hero(svc, x, sub, badges) {
  const fan = imgUrl(svc, x.images, 'fanart');
  const po = imgUrl(svc, x.images, 'poster');
  return `<div class="hero">${fan ? `<img class="hero-bg" src="${esc(fan)}" onerror="this.remove()">` : ''}
    <div class="hero-in">${posterHtml(po, x.title)}<div class="hero-txt"><h1>${esc(x.title)}</h1>
    <div class="muted">${esc(sub)}</div><div class="badges">${badges}</div></div></div></div>`;
}

/* =========================================================================
 * Series detail (Sonarr)
 * ========================================================================= */
function openSeries(id, title) { push(title || L('Série', 'Series'), b => seriesDetail(b, id)); }
const openSeasons = {};
const seasonName = n => n ? L('Saison ', 'Season ') + n : L('Épisodes spéciaux', 'Specials');

async function seriesDetail(box, id) {
  box.innerHTML = loading();
  const [s, eps, files, profiles] = await Promise.all([
    GET('sonarr', '/series/' + id), GET('sonarr', '/episode?seriesId=' + id),
    GET('sonarr', '/episodefile?seriesId=' + id), profilesOf('sonarr'),
  ]);
  setTitle(box, s.title);
  const fmap = Object.fromEntries(files.map(f => [f.id, f]));
  const emap = Object.fromEntries(eps.map(e => [e.id, e]));
  const open = openSeasons[id] = openSeasons[id] || new Set();
  const st = s.statistics || {};
  const [cls, label] = seriesStatus(s);
  const prof = profiles.find(p => p.id === s.qualityProfileId);
  const now = new Date();
  const seasons = [...s.seasons].sort((a, b) => (b.seasonNumber || -1) - (a.seasonNumber || -1));
  if (!open.size && seasons.length) {
    const firstWithEps = seasons.find(se => se.seasonNumber > 0);
    if (firstWithEps) open.add(firstWithEps.seasonNumber);
  }

  const epHtml = e => {
    const f = fmap[e.episodeFileId];
    const aired = e.airDateUtc && new Date(e.airDateUtc) < now;
    const stat = e.hasFile ? `<span class="st-ok">${esc(f?.quality?.quality?.name || L('Téléchargé', 'Downloaded'))}${f ? ' · ' + fmtSize(f.size) : ''}</span>`
      : aired ? `<span class="st-${e.monitored ? 'bad' : 'off'}">${e.monitored ? L('Manquant', 'Missing') : L('Non surveillé', 'Unmonitored')}</span>`
        : `<span class="st-soon">${e.airDateUtc ? L('À venir', 'Upcoming') : L('Date inconnue', 'Unknown date')}</span>`;
    return `<div class="ep" data-eid="${e.id}">
      <button class="icon-btn mon ${e.monitored ? 'on' : ''}" data-a="emon">${icon(e.monitored ? 'bookmark' : 'bookmark_o')}</button>
      <div class="grow" data-a="einfo"><div class="small"><b>${e.episodeNumber}.</b> ${esc(e.title || 'TBA')}</div>
      <div class="muted xs">${e.airDateUtc ? fmtDate(e.airDateUtc) : '—'} · ${stat}</div></div>
      <button class="icon-btn" data-a="esearch">${icon('search')}</button>
      <button class="icon-btn" data-a="eint">${icon('list')}</button></div>`;
  };
  const seasonHtml = se => {
    const sEps = eps.filter(e => e.seasonNumber === se.seasonNumber).sort((a, b) => b.episodeNumber - a.episodeNumber);
    const ss = se.statistics || {};
    const have = sEps.filter(e => e.hasFile).length;
    const pct = sEps.length ? 100 * have / sEps.length : 0;
    return `<div class="season ${open.has(se.seasonNumber) ? 'open' : ''}" data-sn="${se.seasonNumber}">
      <div class="season-head">
        <button class="icon-btn mon ${se.monitored ? 'on' : ''}" data-a="smon">${icon(se.monitored ? 'bookmark' : 'bookmark_o')}</button>
        <div class="grow" data-a="toggle"><div class="b">${seasonName(se.seasonNumber)}</div>
          <div class="muted xs">${have}/${sEps.length} ${L('épisodes', 'episodes')}${ss.sizeOnDisk ? ' · ' + fmtSize(ss.sizeOnDisk) : ''}</div>
          <div class="pbar"><i class="${pct >= 100 ? 'ok' : ''}" style="width:${pct}%"></i></div></div>
        <button class="icon-btn" data-a="ssearch">${icon('search')}</button>
        <button class="icon-btn" data-a="sint">${icon('list')}</button>
        <button class="icon-btn chev" data-a="toggle">${icon('expand')}</button>
      </div><div class="eps">${sEps.map(epHtml).join('') || `<div class="muted small" style="padding:6px">${L('Aucun épisode.', 'No episodes.')}</div>`}</div></div>`;
  };

  box.innerHTML = `${hero('sonarr', s, [s.year, s.network, s.runtime ? s.runtime + ' min' : '', s.certification].filter(Boolean).join(' · '),
      `<span class="badge ${cls}">${label}</span><span class="badge">${esc(SSTATUS()[s.status] || s.status)}</span>${s.ratings?.value ? `<span class="badge">★ ${s.ratings.value.toFixed(1)}</span>` : ''}`)}
    <div class="actions">
      ${abtn('search', 'search', L('Tout rechercher', 'Search all'))}
      ${abtn('monitor', s.monitored ? 'bookmark' : 'bookmark_o', s.monitored ? L('Surveillée', 'Monitored') : L('Non surveillée', 'Unmonitored'), s.monitored ? 'on' : '')}
      ${abtn('edit', 'edit', L('Modifier', 'Edit'))}${abtn('refresh', 'refresh', L('Actualiser', 'Refresh'))}${abtn('delete', 'delete', L('Supprimer', 'Delete'), 'danger')}
    </div>
    ${s.overview ? `<p class="overview">${esc(s.overview)}</p>` : ''}
    <div class="section"><h3>${L('Saisons', 'Seasons')}</h3>${seasons.map(seasonHtml).join('') || `<div class="muted small">${L('Aucune saison.', 'No seasons.')}</div>`}</div>
    <div class="section"><h3>${L('Informations', 'Details')}</h3>${kv([
      [L('Profil qualité', 'Quality profile'), prof?.name], ['Type', STYPE()[s.seriesType] || s.seriesType], [L('Statut', 'Status'), SSTATUS()[s.status] || s.status],
      [L('Chaîne', 'Network'), s.network], ['Genres', (s.genres || []).join(', ')],
      [L('Épisodes', 'Episodes'), `${st.episodeFileCount || 0} / ${st.episodeCount || 0} (total ${st.totalEpisodeCount || 0})`],
      [L('Prochaine diffusion', 'Next airing'), s.nextAiring && fmtDate(s.nextAiring, true)], [L('Dernière diffusion', 'Previous airing'), s.previousAiring && fmtDate(s.previousAiring)],
      [L('Chemin', 'Path'), s.path], [L('Taille', 'Size'), st.sizeOnDisk ? fmtSize(st.sizeOnDisk) : null],
      [L('Dossiers de saison', 'Season folders'), s.seasonFolder ? L('Oui', 'Yes') : L('Non', 'No')], [L('Ajoutée le', 'Added'), fmtDate(s.added)],
    ])}</div>`;

  box.onclick = e => {
    const b = e.target.closest('[data-a]');
    if (!b) return;
    const a = b.dataset.a;
    const seasonEl = b.closest('.season');
    const sn = seasonEl ? +seasonEl.dataset.sn : null;
    const epEl = b.closest('.ep');
    const ep = epEl ? emap[+epEl.dataset.eid] : null;
    switch (a) {
      case 'toggle':
        seasonEl.classList.toggle('open');
        if (seasonEl.classList.contains('open')) open.add(sn); else open.delete(sn);
        break;
      case 'search': act(b, () => command('sonarr', 'SeriesSearch', { seriesId: id }, L('Recherche de la série', 'Series search'))); break;
      case 'refresh': act(b, () => command('sonarr', 'RefreshSeries', { seriesId: id }, L('Actualisation', 'Refresh'))); break;
      case 'monitor': act(b, async () => {
        await PUT('sonarr', '/series/' + id, { ...s, monitored: !s.monitored });
        dropCache('sonarr:series'); toast(s.monitored ? L('Série non surveillée', 'Series unmonitored') : L('Série surveillée', 'Series monitored')); render();
      }); break;
      case 'smon': act(b, async () => {
        const seasonsUpd = s.seasons.map(x => x.seasonNumber === sn ? { ...x, monitored: !x.monitored } : x);
        await PUT('sonarr', '/series/' + id, { ...s, seasons: seasonsUpd });
        dropCache('sonarr:series'); render();
      }); break;
      case 'ssearch': act(b, () => command('sonarr', 'SeasonSearch', { seriesId: id, seasonNumber: sn }, L(`Recherche saison ${sn}`, `Season ${sn} search`))); break;
      case 'sint': openReleases('sonarr', `seriesId=${id}&seasonNumber=${sn}`, `${s.title} — ${seasonName(sn)}`); break;
      case 'emon': act(b, async () => {
        await PUT('sonarr', '/episode/monitor', { episodeIds: [ep.id], monitored: !ep.monitored });
        render();
      }); break;
      case 'esearch': act(b, () => command('sonarr', 'EpisodeSearch', { episodeIds: [ep.id] }, L(`Recherche ${epCode(ep)}`, `${epCode(ep)} search`))); break;
      case 'eint': openReleases('sonarr', 'episodeId=' + ep.id, `${s.title} ${epCode(ep)}`); break;
      case 'einfo': episodeSheet(s, ep, fmap[ep.episodeFileId]); break;
      case 'edit': formSheet(L('Modifier la série', 'Edit series'), `
          ${field(L('Profil de qualité', 'Quality profile'), `<select class="select" id="prof">${opts(profiles.map(p => [p.id, p.name]), s.qualityProfileId)}</select>`)}
          ${field(L('Type de série', 'Series type'), `<select class="select" id="stype">${opts(Object.entries(STYPE()), s.seriesType)}</select>`)}
          ${field(L('Chemin', 'Path'), `<input class="input" id="path" value="${esc(s.path)}">`)}
          ${chk('mon', L('Surveillée', 'Monitored'), s.monitored)}${chk('sf', L('Utiliser des dossiers de saison', 'Use season folders'), s.seasonFolder)}
          ${chk('move', L('Déplacer les fichiers si le chemin change', 'Move files if the path changes'), true)}`, L('Enregistrer', 'Save'), async sh => {
          const path = $('#path', sh).value.trim();
          await PUT('sonarr', `/series/${id}?moveFiles=${$('#move', sh).checked && path !== s.path}`, {
            ...s, qualityProfileId: +$('#prof', sh).value, seriesType: $('#stype', sh).value,
            monitored: $('#mon', sh).checked, seasonFolder: $('#sf', sh).checked, path,
          });
          dropCache('sonarr:series'); toast(L('Série mise à jour', 'Series updated')); render();
        }); break;
      case 'delete': confirmSheet({
        title: L(`Supprimer « ${s.title} » ?`, `Delete "${s.title}"?`), ok: L('Supprimer', 'Delete'), danger: true, checks: deleteChecks(),
      }).then(v => v && act(null, async () => {
        await DEL('sonarr', `/series/${id}?deleteFiles=${v.files}&addImportListExclusion=${v.excl}`);
        dropCache('sonarr:series'); toast(L('Série supprimée', 'Series deleted')); pop();
      })); break;
    }
  };
}

function episodeSheet(s, ep, f) {
  const sh = openSheet(`<h2>${esc(epCode(ep))} · ${esc(ep.title || 'TBA')}</h2>
    <p class="muted small">${esc(s.title)} · ${ep.airDateUtc ? fmtDate(ep.airDateUtc, true) : L('Date inconnue', 'Unknown date')}</p>
    ${ep.overview ? `<p class="small" style="line-height:1.5">${esc(ep.overview)}</p>` : ''}
    ${f ? `<div class="section" style="margin:12px 0">${kv(mediaRows(f))}</div>` : ''}
    <div class="btn-col">
      <button class="btn primary" id="es">${icon('search')} ${L('Recherche automatique', 'Automatic search')}</button>
      <button class="btn" id="ei">${icon('list')} ${L('Recherche manuelle', 'Interactive search')}</button>
      ${f ? `<button class="btn danger" id="ed">${icon('delete')} ${L('Supprimer le fichier', 'Delete file')}</button>` : ''}
    </div>`);
  $('#es', sh).onclick = e => act(e.currentTarget, async () => { await command('sonarr', 'EpisodeSearch', { episodeIds: [ep.id] }, L(`Recherche ${epCode(ep)}`, `${epCode(ep)} search`)); closeSheet(); });
  $('#ei', sh).onclick = () => { closeSheet(); openReleases('sonarr', 'episodeId=' + ep.id, `${s.title} ${epCode(ep)}`); };
  if (f) $('#ed', sh).onclick = () => confirmSheet({ title: L('Supprimer le fichier ?', 'Delete file?'), msg: f.relativePath, ok: L('Supprimer', 'Delete'), danger: true })
    .then(v => v && act(null, async () => { await DEL('sonarr', '/episodefile/' + f.id); dropCache('sonarr:series'); toast(L('Fichier supprimé', 'File deleted')); render(); }));
}

/* =========================================================================
 * Interactive search (releases) — Radarr & Sonarr
 * ========================================================================= */
function openReleases(svc, query, title) { push(L('Recherche manuelle', 'Interactive search'), b => releasesPage(b, svc, query, title)); }

async function releasesPage(box, svc, query, title) {
  box.innerHTML = `<div class="toolbar"><div class="b">${esc(title)}</div></div>${loading(L("Interrogation des indexeurs… cela peut prendre jusqu'à une minute.", 'Querying indexers… this can take up to a minute.'))}`;
  const rels = await GET(svc, '/release?' + query);
  const st = { sort: 'default', hide: false, q: '' };
  box.innerHTML = `<div class="toolbar"><div class="b">${esc(title)}</div>
      <input class="input" type="search" id="q" placeholder="${L('Filtrer les résultats…', 'Filter results…')}">
      <div class="row"><select class="select" id="srt">${opts([['default', L('Pertinence', 'Relevance')], ['seeders', 'Seeders'], ['size_d', L('Taille ↓', 'Size ↓')], ['size_a', L('Taille ↑', 'Size ↑')], ['age', L('Plus récent', 'Newest')], ['score', L('Score formats', 'Format score')]], st.sort)}</select></div>
      <div class="row between">${chk('hide', L('Masquer les rejetés', 'Hide rejected'), st.hide)}<span class="muted small" id="cnt"></span></div></div>
    <div id="rels"></div>`;
  const list = $('#rels', box);
  const draw = () => {
    const q = st.q.trim().toLowerCase();
    let arr = rels.map((r, i) => ({ r, i })).filter(({ r }) => (!st.hide || !r.rejected) && (!q || r.title.toLowerCase().includes(q)));
    const cmp = {
      seeders: (a, b) => (b.r.seeders || 0) - (a.r.seeders || 0),
      size_d: (a, b) => b.r.size - a.r.size, size_a: (a, b) => a.r.size - b.r.size,
      age: (a, b) => new Date(b.r.publishDate) - new Date(a.r.publishDate),
      score: (a, b) => (b.r.customFormatScore || 0) - (a.r.customFormatScore || 0),
    }[st.sort];
    if (cmp) arr.sort(cmp);
    $('#cnt', box).textContent = plural(arr.length, 'résultat', 'result');
    list.innerHTML = arr.length ? arr.map(({ r, i }) => `<div class="rel ${r.rejected ? 'rejected' : ''}">
        <div class="rel-title">${esc(r.title)}</div>
        <div class="chips">
          <span class="chip q">${esc(r.quality?.quality?.name || '?')}</span>
          <span class="chip">${fmtSize(r.size)}</span>
          ${r.protocol === 'torrent' ? `<span class="chip ${r.seeders > 0 ? 'ok' : 'bad'}">▲ ${r.seeders ?? '?'} ▼ ${r.leechers ?? '?'}</span>` : '<span class="chip">Usenet</span>'}
          <span class="chip">${fmtAge(r.publishDate)}</span>
          <span class="chip">${esc(r.indexer)}</span>
          ${(r.languages || []).map(l => `<span class="chip">${esc(l.name)}</span>`).join('')}
          ${r.customFormatScore ? `<span class="chip ${r.customFormatScore > 0 ? 'ok' : 'bad'}">CF ${r.customFormatScore > 0 ? '+' : ''}${r.customFormatScore}</span>` : ''}
          ${svc === 'sonarr' && r.fullSeason ? `<span class="chip warn">${L('Saison complète', 'Full season')}</span>` : ''}
        </div>
        ${r.rejected ? `<div class="rej">${(r.rejections || []).map(x => '• ' + esc(rejText(x))).join('<br>')}</div>` : ''}
        <div class="row">${r.infoUrl ? `<button class="btn small ghost" data-info="${i}">${icon('open')} Info</button>` : ''}
          <button class="btn small primary" data-dl="${i}">${icon('download')} ${L('Télécharger', 'Download')}</button></div>
      </div>`).join('') : `<div class="empty">${L('Aucun résultat trouvé par les indexeurs.', 'No results found by the indexers.')}</div>`;
  };
  $('#q', box).oninput = e => { st.q = e.target.value; draw(); };
  $('#srt', box).onchange = e => { st.sort = e.target.value; draw(); };
  $('#hide', box).onchange = e => { st.hide = e.target.checked; draw(); };
  list.onclick = async e => {
    const info = e.target.closest('[data-info]');
    if (info) return openExternal(rels[+info.dataset.info].infoUrl);
    const b = e.target.closest('[data-dl]');
    if (!b) return;
    const r = rels[+b.dataset.dl];
    if (r.rejected) {
      const ok = await confirmSheet({
        title: L('Release rejetée', 'Rejected release'),
        msg: (r.rejections || []).map(rejText).join('\n') + L('\n\nTélécharger quand même ?', '\n\nDownload anyway?'),
        ok: L('Télécharger', 'Download'),
      });
      if (!ok) return;
    }
    act(b, async () => {
      await POST(svc, '/release', { guid: r.guid, indexerId: r.indexerId });
      b.classList.remove('primary'); b.classList.add('done'); b.innerHTML = `${icon('check')} ${L('Envoyé', 'Sent')}`;
      toast(L('Envoyé au client de téléchargement ✓', 'Sent to download client ✓'));
    });
  };
  draw();
}

/* =========================================================================
 * Add movie / series
 * ========================================================================= */
async function addPage(box, svc) {
  const st = state.add[svc] = state.add[svc] || { q: '', results: null };
  const isR = svc === 'radarr';
  box.innerHTML = `<div class="toolbar"><form class="searchbar" id="f">
      <input class="input" type="search" id="q" placeholder="${isR ? L('Titre du film, imdb:tt…, tmdb:…', 'Movie title, imdb:tt…, tmdb:…') : L('Nom de la série, tvdb:…', 'Series name, tvdb:…')}" enterkeyhint="search">
      <button class="btn primary" type="submit">${icon('search')}</button></form></div>
    <div id="res" class="list"></div>`;
  const res = $('#res', box);
  $('#q', box).value = st.q;
  const draw = () => {
    if (!st.results) {
      res.innerHTML = `<div class="empty">${isR ? L(`Recherche un film à ajouter à Radarr.`, 'Search for a movie to add to Radarr.') : L('Recherche une série à ajouter à Sonarr.', 'Search for a series to add to Sonarr.')}</div>`;
      return;
    }
    res.innerHTML = st.results.length ? st.results.map((x, i) => `<div class="li click" data-i="${i}">
        ${thumbHtml(imgUrl(svc, x.images, 'poster'))}
        <div class="grow"><div class="b">${esc(x.title)} ${x.year ? `<span class="muted">(${x.year})</span>` : ''}</div>
          <div class="chips">${x.id ? `<span class="chip ok">✓ ${L('Déjà dans la bibliothèque', 'Already in library')}</span>` : ''}
            ${isR ? (x.runtime ? `<span class="chip">${fmtRuntime(x.runtime)}</span>` : '') : `<span class="chip">${plural(x.seasonCount || x.seasons?.length || 0, 'saison', 'season')}</span>${x.network ? `<span class="chip">${esc(x.network)}</span>` : ''}`}
            ${x.status ? `<span class="chip">${esc((isR ? MSTATUS() : SSTATUS())[x.status] || x.status)}</span>` : ''}</div>
          <div class="muted xs" style="margin-top:6px;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden">${esc(x.overview || '')}</div></div></div>`).join('')
      : `<div class="empty">${L('Aucun résultat.', 'No results.')}</div>`;
  };
  $('#f', box).onsubmit = async e => {
    e.preventDefault();
    const q = $('#q', box).value.trim();
    if (!q) return;
    st.q = q;
    $('#q', box).blur();
    res.innerHTML = loading();
    try {
      st.results = await GET(svc, `/${isR ? 'movie' : 'series'}/lookup?term=${encodeURIComponent(q)}`);
      if (box.isConnected) draw();
    } catch (err) { if (box.isConnected) res.innerHTML = `<div class="error-box">${esc(err.message)}</div>`; }
  };
  res.onclick = e => {
    const li = e.target.closest('[data-i]');
    if (!li) return;
    const x = st.results[+li.dataset.i];
    if (x.id) return isR ? openMovie(x.id, x.title) : openSeries(x.id, x.title);
    (isR ? addMovieSheet : addSeriesSheet)(x).catch(err => toast(err.message, true));
  };
  draw();
}

const rootOpts = roots => roots.map(r => [r.path, `${r.path} — ${fmtSize(r.freeSpace)} ${L('libres', 'free')}`]);
const noRoot = svc => new Error(L(`Aucun dossier racine configuré dans ${svc} (Settings › Media Management).`, `No root folder configured in ${svc} (Settings › Media Management).`));

async function addMovieSheet(m) {
  const [profiles, roots] = await Promise.all([profilesOf('radarr'), rootsOf('radarr')]);
  if (!roots.length) throw noRoot('Radarr');
  const p = cfg.prefs.radarr || {};
  formSheet(`${m.title}${m.year ? ` (${m.year})` : ''}`, `
    ${field(L('Dossier racine', 'Root folder'), `<select class="select" id="root">${opts(rootOpts(roots), p.root)}</select>`)}
    ${field(L('Profil de qualité', 'Quality profile'), `<select class="select" id="prof">${opts(profiles.map(x => [x.id, x.name]), p.profile)}</select>`)}
    ${field(L('Disponibilité minimale', 'Minimum availability'), `<select class="select" id="avail">${opts(Object.entries(AVAIL()), p.avail || 'released')}</select>`)}
    ${chk('mon', L('Surveiller le film', 'Monitor movie'), true)}
    ${chk('search', L('Lancer la recherche immédiatement', 'Start search now'), p.search !== false)}`, L('Ajouter le film', 'Add movie'), async sh => {
    const v = { root: $('#root', sh).value, profile: +$('#prof', sh).value, avail: $('#avail', sh).value, search: $('#search', sh).checked };
    const mon = $('#mon', sh).checked;
    cfg.prefs.radarr = v; saveCfg();
    const body = { ...m, qualityProfileId: v.profile, rootFolderPath: v.root, monitored: mon, minimumAvailability: v.avail,
      addOptions: { searchForMovie: v.search && mon, monitor: mon ? 'movieOnly' : 'none' } };
    delete body.id;
    const added = await POST('radarr', '/movie', body);
    dropCache('radarr:movies');
    toast(L(`${m.title} ajouté`, `${m.title} added`) + (v.search && mon ? L(' — recherche lancée', ' — search started') : '') + ' ✓');
    openMovie(added.id, added.title);
  });
}

async function addSeriesSheet(s) {
  const [profiles, roots, status] = await Promise.all([profilesOf('sonarr'), rootsOf('sonarr'), cached('sonarr:status', () => GET('sonarr', '/system/status'))]);
  if (!roots.length) throw noRoot('Sonarr');
  let langs = null;
  if (String(status.version || '').startsWith('3.')) langs = await cached('sonarr:langprofiles', () => GET('sonarr', '/languageprofile')).catch(() => null);
  const p = cfg.prefs.sonarr || {};
  const MON = [['all', L('Tous les épisodes', 'All episodes')], ['future', L('Épisodes futurs', 'Future episodes')], ['missing', L('Épisodes manquants', 'Missing episodes')], ['existing', L('Épisodes existants', 'Existing episodes')],
    ['firstSeason', L('Première saison', 'First season')], ['latestSeason', L('Dernière saison', 'Latest season')], ['pilot', L('Pilote', 'Pilot')], ['none', L('Aucun', 'None')]];
  formSheet(`${s.title}${s.year ? ` (${s.year})` : ''}`, `
    ${field(L('Dossier racine', 'Root folder'), `<select class="select" id="root">${opts(rootOpts(roots), p.root)}</select>`)}
    ${field(L('Épisodes à surveiller', 'Monitor'), `<select class="select" id="mon">${opts(MON, p.monitor || 'all')}</select>`)}
    ${field(L('Profil de qualité', 'Quality profile'), `<select class="select" id="prof">${opts(profiles.map(x => [x.id, x.name]), p.profile)}</select>`)}
    ${langs ? field(L('Profil de langue', 'Language profile'), `<select class="select" id="lang">${opts(langs.map(x => [x.id, x.name]), p.lang)}</select>`) : ''}
    ${field(L('Type de série', 'Series type'), `<select class="select" id="stype">${opts(Object.entries(STYPE()), s.seriesType || 'standard')}</select>`)}
    ${chk('sf', L('Utiliser des dossiers de saison', 'Use season folders'), p.seasonFolder !== false)}
    ${chk('search', L('Rechercher les épisodes manquants', 'Search for missing episodes'), p.search !== false)}`, L('Ajouter la série', 'Add series'), async sh => {
    const v = { root: $('#root', sh).value, profile: +$('#prof', sh).value, monitor: $('#mon', sh).value,
      seasonFolder: $('#sf', sh).checked, search: $('#search', sh).checked, lang: langs ? +$('#lang', sh).value : undefined };
    cfg.prefs.sonarr = v; saveCfg();
    const body = { ...s, qualityProfileId: v.profile, rootFolderPath: v.root, seasonFolder: v.seasonFolder,
      seriesType: $('#stype', sh).value, monitored: v.monitor !== 'none',
      addOptions: { monitor: v.monitor, searchForMissingEpisodes: v.search, searchForCutoffUnmetEpisodes: false } };
    if (langs) body.languageProfileId = v.lang;
    delete body.id;
    const added = await POST('sonarr', '/series', body);
    dropCache('sonarr:series');
    toast(L(`${s.title} ajoutée`, `${s.title} added`) + (v.search ? L(' — recherche lancée', ' — search started') : '') + ' ✓');
    openSeries(added.id, added.title);
  });
}

/* =========================================================================
 * Queue (activity)
 * ========================================================================= */
const QSTAT = () => ({
  downloading: L('Téléchargement', 'Downloading'), paused: L('En pause', 'Paused'), queued: L('En attente', 'Queued'), completed: L('Terminé', 'Completed'), delay: L('Différé', 'Delayed'),
  downloadClientUnavailable: L('Client indisponible', 'Client unavailable'), warning: L('Avertissement', 'Warning'), failed: L('Échec', 'Failed'), fallback: 'Fallback',
  importPending: L('Import en attente', 'Import pending'), importing: L('Import en cours', 'Importing'), imported: L('Importé', 'Imported'), failedPending: L('Échec (en attente)', 'Failed (pending)'),
  importBlocked: L('Import bloqué', 'Import blocked'), unknown: L('Inconnu', 'Unknown'),
});
async function queuePage(box, svc) {
  box.innerHTML = `<div class="toolbar row between"><span class="muted small" id="cnt"></span>
      <button class="btn small" id="refdl">${icon('refresh')} ${L('Rafraîchir les clients', 'Refresh clients')}</button></div><div id="q">${loading()}</div>`;
  const qbox = $('#q', box);
  let records = [];
  $('#refdl', box).onclick = e => act(e.currentTarget, () => command(svc, 'RefreshMonitoredDownloads', {}, L('Rafraîchissement', 'Refresh')));
  const load = async () => {
    const inc = svc === 'radarr' ? 'includeMovie=true&includeUnknownMovieItems=true' : 'includeSeries=true&includeEpisode=true&includeUnknownSeriesItems=true';
    const d = await GET(svc, `/queue?page=1&pageSize=200&${inc}`);
    records = d.records || [];
    if (!box.isConnected) return;
    $('#cnt', box).textContent = L(`${records.length} élément(s) en file`, plural(records.length, '', 'item') + ' in queue');
    const QS = QSTAT();
    qbox.innerHTML = records.length ? records.map((q, i) => {
      const pct = q.size ? Math.max(0, Math.min(100, 100 * (1 - q.sizeleft / q.size))) : 0;
      const name = svc === 'radarr' ? (q.movie?.title || q.title) : (q.series ? `${q.series.title} — ${epCode(q.episode)}` : q.title);
      const tState = q.trackedDownloadState;
      const label = QS[['importPending', 'importing', 'failedPending', 'importBlocked', 'imported'].includes(tState) ? tState : q.status] || q.status;
      const tcls = q.trackedDownloadStatus === 'error' || q.status === 'failed' ? 'bad' : q.trackedDownloadStatus === 'warning' ? 'warn' : q.status === 'completed' ? 'ok' : 'info';
      const msgs = (q.statusMessages || []).flatMap(m => m.messages || []).concat(q.errorMessage ? [q.errorMessage] : []);
      return `<div class="qi"><div class="row between" style="flex-wrap:nowrap"><div class="grow"><div class="b ellipsis">${esc(name)}</div>
          <div class="muted xs ellipsis">${esc(q.title)}</div></div><span class="badge ${tcls}">${esc(label)}</span></div>
        <div class="pbar big"><i class="${pct >= 100 ? 'ok' : ''}" style="width:${pct}%"></i></div>
        <div class="row between xs muted" style="margin-top:6px"><span>${dec(pct.toFixed(1))}${L(' %', '%')} ·${fmtSize(q.size - q.sizeleft)} / ${fmtSize(q.size)}</span>
          <span>${q.timeleft ? L('Reste ', 'ETA ') + esc(q.timeleft) : ''}</span></div>
        <div class="chips"><span class="chip q">${esc(q.quality?.quality?.name || '?')}</span><span class="chip">${esc(q.protocol || '')}</span>
          ${q.downloadClient ? `<span class="chip">${esc(q.downloadClient)}</span>` : ''}${q.indexer ? `<span class="chip">${esc(q.indexer)}</span>` : ''}</div>
        ${msgs.length ? `<div class="msg">${msgs.map(m => '• ' + esc(m)).join('<br>')}</div>` : ''}
        <div class="row" style="justify-content:flex-end;margin-top:8px">
          ${q.status === 'delay' ? `<button class="btn small" data-grab="${i}">${icon('bolt')} ${L('Forcer', 'Force')}</button>` : ''}
          <button class="btn small danger" data-rm="${i}">${icon('delete')} ${L('Retirer', 'Remove')}</button></div></div>`;
    }).join('') : `<div class="empty">${L('Aucun téléchargement en cours.', 'No active downloads.')}</div>`;
  };
  qbox.onclick = e => {
    const g = e.target.closest('[data-grab]');
    if (g) return act(g, async () => { await POST(svc, '/queue/grab/' + records[+g.dataset.grab].id); toast(L('Téléchargement forcé ✓', 'Download forced ✓')); load(); });
    const b = e.target.closest('[data-rm]');
    if (!b) return;
    const q = records[+b.dataset.rm];
    confirmSheet({
      title: L('Retirer de la file ?', 'Remove from queue?'), msg: q.title, ok: L('Retirer', 'Remove'), danger: true,
      checks: [{ k: 'client', label: L('Supprimer aussi du client de téléchargement', 'Also remove from download client'), on: true },
        { k: 'block', label: L('Ajouter à la liste noire (ne plus télécharger cette release)', 'Add release to blocklist'), on: false },
        { k: 'skip', label: L('Ne pas relancer de recherche automatique', 'Skip automatic re-download search'), on: false }],
    }).then(v => v && act(null, async () => {
      await DEL(svc, `/queue/${q.id}?removeFromClient=${v.client}&blocklist=${v.block}&skipRedownload=${v.skip}`);
      toast(L('Retiré de la file', 'Removed from queue')); load();
    }));
  };
  await load();
  timers.push(setInterval(() => { if (box.isConnected && $('#sheet').hidden) load().catch(() => { }); }, 5000));
}

/* =========================================================================
 * Calendar
 * ========================================================================= */
async function calendarPage(box, svc) {
  box.innerHTML = loading();
  const start = new Date(); start.setHours(0, 0, 0, 0); start.setDate(start.getDate() - 7);
  const end = new Date(start); end.setDate(end.getDate() + 7 + 60);
  const data = await GET(svc, `/calendar?start=${start.toISOString()}&end=${end.toISOString()}&unmonitored=true${svc === 'sonarr' ? '&includeSeries=true' : ''}`);
  const now = new Date();
  const entries = [];
  const lbl = (hasFile, past, monitored) => hasFile ? ['ok', L('Téléchargé', 'Downloaded')]
    : past ? (monitored ? ['bad', L('Manquant', 'Missing')] : ['off', L('Non surveillé', 'Unmonitored')]) : ['info', L('À venir', 'Upcoming')];
  if (svc === 'sonarr') {
    for (const ep of data) {
      if (!ep.airDateUtc) continue;
      const d = new Date(ep.airDateUtc);
      const [cls, label] = lbl(ep.hasFile, d < now, ep.monitored);
      entries.push({ d, time: true, title: ep.series?.title || '', sub: `${epCode(ep)} · ${ep.title || 'TBA'}`, cls, label,
        img: imgUrl('sonarr', ep.series?.images, 'poster'), open: () => openSeries(ep.seriesId, ep.series?.title) });
    }
  } else {
    for (const m of data) {
      for (const [k, kl] of [['inCinemas', L('Sortie cinéma', 'Cinema release')], ['digitalRelease', L('Sortie numérique', 'Digital release')], ['physicalRelease', L('Sortie physique', 'Physical release')]]) {
        if (!m[k]) continue;
        const d = new Date(m[k]);
        if (d < start || d > end) continue;
        const [cls, label] = lbl(m.hasFile, d < now, m.monitored);
        entries.push({ d, title: m.title, sub: kl, cls, label, img: imgUrl('radarr', m.images, 'poster'), open: () => openMovie(m.id, m.title) });
      }
    }
  }
  entries.sort((a, b) => a.d - b.d);
  if (!entries.length) { box.innerHTML = `<div class="empty">${L('Rien de prévu dans les 60 prochains jours.', 'Nothing scheduled in the next 60 days.')}</div>`; return; }
  const dayKey = d => `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
  const todayK = dayKey(now);
  const tm = new Date(now); tm.setDate(tm.getDate() + 1);
  const ye = new Date(now); ye.setDate(ye.getDate() - 1);
  const dayLabel = d => {
    const k = dayKey(d);
    if (k === todayK) return L("Aujourd'hui", 'Today');
    if (k === dayKey(tm)) return L('Demain', 'Tomorrow');
    if (k === dayKey(ye)) return L('Hier', 'Yesterday');
    return d.toLocaleDateString(LOC(), { weekday: 'long', day: 'numeric', month: 'long' });
  };
  let html = '', last = '';
  entries.forEach((x, i) => {
    const k = dayKey(x.d);
    if (k !== last) {
      html += `<div class="day-head ${k === todayK ? 'today' : ''}" data-day="${k}">${esc(dayLabel(x.d))}</div>`;
      last = k;
    }
    html += `<div class="li click" data-i="${i}">${thumbHtml(x.img)}<div class="grow"><div class="b">${esc(x.title)}</div>
      <div class="small">${esc(x.sub)}</div><div class="xs muted">${x.time ? fmtTime(x.d) + ' · ' : ''}<span class="st-${x.cls}">${x.label}</span></div></div></div>`;
  });
  box.innerHTML = html;
  box.onclick = e => { const li = e.target.closest('[data-i]'); if (li) entries[+li.dataset.i].open(); };
  const target = $$('[data-day]', box).find(el => el.dataset.day >= todayK);
  if (target && pendingScroll == null) $('#view').scrollTop = target.offsetTop;
}

/* =========================================================================
 * History & blocklist
 * ========================================================================= */
const EVT = () => ({
  grabbed: L('Récupéré', 'Grabbed'), downloadFolderImported: L('Importé', 'Imported'), downloadFailed: L('Échec', 'Failed'),
  movieFileDeleted: L('Fichier supprimé', 'File deleted'), episodeFileDeleted: L('Fichier supprimé', 'File deleted'),
  movieFileRenamed: L('Renommé', 'Renamed'), episodeFileRenamed: L('Renommé', 'Renamed'), downloadIgnored: L('Ignoré', 'Ignored'),
  movieFolderImported: L('Dossier importé', 'Folder imported'), seriesFolderImported: L('Dossier importé', 'Folder imported'), downloadImported: L('Importé', 'Imported'),
  indexerQuery: L('Recherche', 'Query'), releaseGrabbed: L('Release envoyée', 'Release grabbed'), indexerRss: 'RSS', indexerAuth: L('Authentification', 'Auth'), indexerInfoQuery: 'Info',
});
function historyRow(svc, h, compact) {
  const ev = h.eventType;
  const t = EVT()[ev] || ev;
  const cls = h.successful === false || /fail/i.test(ev) ? 'bad' : /import/i.test(ev) ? 'ok' : /grab/i.test(ev) ? 'info' : /delet/i.test(ev) ? 'warn' : '';
  let main = '', sub = h.sourceTitle || '';
  if (svc === 'radarr') main = compact ? '' : (h.movie?.title || '');
  else if (svc === 'sonarr') main = h.series ? `${h.series.title} ${h.episode ? epCode(h.episode) : ''}` : '';
  else {
    main = indexerName(h.indexerId);
    sub = h.data?.grabTitle || h.data?.query || (ev === 'indexerRss' ? L('Flux RSS', 'RSS feed') : '') || '';
    if (h.data?.source) sub += L(` (via ${h.data.source})`, ` (via ${h.data.source})`);
  }
  const q = h.quality?.quality?.name;
  return `<div class="li"><span class="badge ${cls}">${esc(t)}</span><div class="grow">${main ? `<div class="b small">${esc(main)}</div>` : ''}
    <div class="small mono" style="font-family:inherit">${esc(sub)}</div>
    <div class="muted xs">${fmtDate(h.date, true)}${q ? ' · ' + esc(q) : ''}${h.data?.downloadClient ? ' · ' + esc(h.data.downloadClient) : ''}${h.data?.elapsedTime ? ' · ' + h.data.elapsedTime + ' ms' : ''}</div></div></div>`;
}
function indexerName(id) {
  const x = (cache['prowlarr:indexers'] || []).find(i => i.id === id);
  return x ? x.name : (id ? L(`Indexeur #${id}`, `Indexer #${id}`) : '');
}
function moreButton(box, hasMore, onMore) {
  const more = $('#more', box);
  if (hasMore) {
    more.innerHTML = `<button class="btn">${L('Charger plus', 'Load more')}</button>`;
    more.firstChild.onclick = e => act(e.currentTarget, onMore);
  } else more.innerHTML = '';
}
async function historyPage(box, svc) {
  if (svc === 'prowlarr') await cached('prowlarr:indexers', () => GET('prowlarr', '/indexer')).catch(() => { });
  box.innerHTML = `<div id="list">${loading()}</div><div class="more" id="more"></div>`;
  const list = $('#list', box);
  let page = 1, html = '';
  const inc = svc === 'radarr' ? '&includeMovie=true' : svc === 'sonarr' ? '&includeSeries=true&includeEpisode=true' : '';
  const load = async () => {
    const d = await GET(svc, `/history?page=${page}&pageSize=40&sortKey=date&sortDirection=descending${inc}`);
    html += (d.records || []).map(h => historyRow(svc, h)).join('');
    list.innerHTML = html || `<div class="empty">${L('Historique vide.', 'History is empty.')}</div>`;
    moreButton(box, page * 40 < (d.totalRecords || 0), async () => { page++; await load(); });
  };
  await load();
}
async function blocklistPage(box, svc) {
  box.innerHTML = `<div class="toolbar row between"><span class="muted small" id="cnt"></span><button class="btn small danger" id="clear">${icon('delete')} ${L('Tout vider', 'Clear all')}</button></div><div id="list">${loading()}</div>`;
  const d = await GET(svc, `/blocklist?page=1&pageSize=200&sortKey=date&sortDirection=descending${svc === 'radarr' ? '&includeMovie=true' : '&includeSeries=true'}`);
  const recs = d.records || [];
  const n = d.totalRecords || recs.length;
  $('#cnt', box).textContent = L(`${n} release(s) bloquée(s)`, plural(n, '', 'blocked release'));
  $('#list', box).innerHTML = recs.length ? recs.map(r => `<div class="li"><div class="grow">
      <div class="b small">${esc(svc === 'radarr' ? (r.movie?.title || '') : (r.series?.title || ''))}</div>
      <div class="small">${esc(r.sourceTitle)}</div>
      <div class="muted xs">${fmtDate(r.date, true)} · ${esc(r.quality?.quality?.name || '')} · ${esc(r.indexer || '')}${r.message ? ' · ' + esc(r.message) : ''}</div></div>
      <button class="icon-btn" data-del="${r.id}">${icon('delete')}</button></div>`).join('') : `<div class="empty">${L('La liste noire est vide.', 'The blocklist is empty.')}</div>`;
  $('#list', box).onclick = e => {
    const b = e.target.closest('[data-del]');
    if (b) act(b, async () => { await DEL(svc, '/blocklist/' + b.dataset.del); b.closest('.li').remove(); toast(L('Retiré de la liste noire', 'Removed from blocklist')); });
  };
  $('#clear', box).onclick = () => recs.length && confirmSheet({
    title: L('Vider la liste noire ?', 'Clear the blocklist?'),
    msg: L(`${recs.length} release(s) seront retirées.`, `${plural(recs.length, '', 'release')} will be removed.`), ok: L('Vider', 'Clear'), danger: true,
  }).then(v => v && act(null, async () => {
    await api(svc, 'DELETE', '/blocklist/bulk', { ids: recs.map(r => r.id) }).catch(async () => {
      for (const r of recs) await DEL(svc, '/blocklist/' + r.id);
    });
    toast(L('Liste noire vidée', 'Blocklist cleared')); render();
  }));
}

/* =========================================================================
 * Sonarr: wanted / missing
 * ========================================================================= */
async function sonarrWanted(box) {
  box.innerHTML = `<div class="toolbar row between"><span class="muted small" id="cnt"></span>
    <button class="btn small primary" id="all">${icon('search')} ${L('Tout rechercher', 'Search all')}</button></div><div id="list">${loading()}</div><div class="more" id="more"></div>`;
  $('#all', box).onclick = e => act(e.currentTarget, () => command('sonarr', 'MissingEpisodeSearch', {}, L('Recherche des épisodes manquants', 'Missing episodes search')));
  const list = $('#list', box);
  let page = 1, html = '';
  const recs = [];
  const load = async () => {
    const base = `/wanted/missing?page=${page}&pageSize=40&includeSeries=true&monitored=true`;
    let d;
    try { d = await GET('sonarr', base + '&sortKey=episodes.airDateUtc&sortDirection=descending'); }
    catch (e) { d = await GET('sonarr', base); }
    const n = d.totalRecords || 0;
    $('#cnt', box).textContent = L(`${n} épisode(s) manquant(s)`, plural(n, '', 'missing episode'));
    for (const ep of d.records || []) {
      const i = recs.push(ep) - 1;
      html += `<div class="li"><div class="grow click" data-open="${i}"><div class="b small">${esc(ep.series?.title || '')}</div>
        <div class="small">${epCode(ep)} · ${esc(ep.title || 'TBA')}</div><div class="muted xs">${L('Diffusé le', 'Aired')} ${fmtDate(ep.airDateUtc)}</div></div>
        <button class="icon-btn" data-s="${i}">${icon('search')}</button><button class="icon-btn" data-m="${i}">${icon('list')}</button></div>`;
    }
    list.innerHTML = html || `<div class="empty">${L('Aucun épisode manquant 🎉', 'No missing episodes 🎉')}</div>`;
    moreButton(box, page * 40 < n, async () => { page++; await load(); });
  };
  list.onclick = e => {
    const s = e.target.closest('[data-s]'), m = e.target.closest('[data-m]'), o = e.target.closest('[data-open]');
    if (s) { const ep = recs[+s.dataset.s]; act(s, () => command('sonarr', 'EpisodeSearch', { episodeIds: [ep.id] }, L(`Recherche ${epCode(ep)}`, `${epCode(ep)} search`))); }
    else if (m) { const ep = recs[+m.dataset.m]; openReleases('sonarr', 'episodeId=' + ep.id, `${ep.series?.title || ''} ${epCode(ep)}`); }
    else if (o) { const ep = recs[+o.dataset.open]; openSeries(ep.seriesId, ep.series?.title); }
  };
  await load();
}

/* =========================================================================
 * System (all services)
 * ========================================================================= */
const QUICK = () => ({
  radarr: [['RssSync', L('Synchroniser les flux RSS', 'RSS sync')], ['MissingMoviesSearch', L('Rechercher tous les films manquants', 'Search all missing movies')],
    ['RefreshMovie', L('Actualiser tous les films', 'Refresh all movies')], ['RefreshMonitoredDownloads', L('Rafraîchir les téléchargements', 'Refresh downloads')], ['Backup', L('Créer une sauvegarde', 'Create backup')]],
  sonarr: [['RssSync', L('Synchroniser les flux RSS', 'RSS sync')], ['MissingEpisodeSearch', L('Rechercher tous les épisodes manquants', 'Search all missing episodes')],
    ['RefreshSeries', L('Actualiser toutes les séries', 'Refresh all series')], ['RefreshMonitoredDownloads', L('Rafraîchir les téléchargements', 'Refresh downloads')], ['Backup', L('Créer une sauvegarde', 'Create backup')]],
  prowlarr: [['ApplicationIndexerSync', L('Synchroniser les indexeurs vers les applis', 'Sync indexers to apps')], ['CheckHealth', L('Vérifier la santé', 'Check health')], ['Backup', L('Créer une sauvegarde', 'Create backup')]],
});
async function systemPage(box, svc) {
  box.innerHTML = loading();
  const [st, health, disk, tasks] = await Promise.all([
    GET(svc, '/system/status'), GET(svc, '/health').catch(() => []),
    svc === 'prowlarr' ? Promise.resolve([]) : GET(svc, '/diskspace').catch(() => []),
    GET(svc, '/system/task').catch(() => []),
  ]);
  const name = SERVICES[svc].name;
  const hType = t => t === 'error' ? ['bad', L('Erreur', 'Error')] : t === 'warning' ? ['warn', L('Alerte', 'Warning')] : ['info', 'Info'];
  box.innerHTML = `
    <div class="section"><h3>${L('Santé', 'Health')}</h3>${health.length ? health.map(h => {
      const [c, l] = hType(h.type);
      return `<div class="li"><span class="badge ${c}">${l}</span><div class="grow small">${esc(h.message)}</div></div>`;
    }).join('') : `<div class="ok-line">✓ ${L('Aucun problème détecté', 'No issues detected')}</div>`}</div>
    ${disk.length ? `<div class="section"><h3>${L('Espace disque', 'Disk space')}</h3>${disk.map(d => {
      const used = d.totalSpace ? 100 * (1 - d.freeSpace / d.totalSpace) : 0;
      return `<div class="disk"><div class="row between"><span class="small ellipsis grow">${esc(d.label || d.path)}</span>
        <span class="muted xs">${fmtSize(d.freeSpace)} ${L('libres', 'free')} / ${fmtSize(d.totalSpace)}</span></div>
        <div class="pbar big"><i class="${used > 90 ? 'bad' : ''}" style="width:${used}%"></i></div></div>`;
    }).join('')}</div>` : ''}
    <div class="section"><h3>Actions</h3><div class="btn-col">${QUICK()[svc].map(([c, l]) => `<button class="btn" data-cmd="${c}" data-l="${esc(l)}">${esc(l)}</button>`).join('')}</div></div>
    ${tasks.length ? `<div class="section"><h3>${L('Tâches planifiées', 'Scheduled tasks')}</h3>${tasks.map(t => `<div class="li"><div class="grow">
        <div class="b small">${esc(t.name)}</div>
        <div class="muted xs">${L('Dernière', 'Last')} : ${t.lastExecution && new Date(t.lastExecution).getFullYear() > 2000 ? ago(t.lastExecution) : '—'} · ${L('Prochaine', 'Next')} : ${t.nextExecution ? fmtDate(t.nextExecution, true) : '—'}</div></div>
        <button class="icon-btn" data-cmd="${esc(t.taskName)}" data-l="${esc(t.name)}">${icon('play')}</button></div>`).join('')}</div>` : ''}
    <div class="section"><h3>${L('À propos', 'About')}</h3>${kv([
      ['Version', st.version], [L('Branche', 'Branch'), st.branch], [L('Système', 'OS'), [st.osName, st.osVersion].filter(Boolean).join(' ')],
      ['Docker', st.isDocker ? L('Oui', 'Yes') : null], ['Runtime', st.runtimeName ? `${st.runtimeName} ${st.runtimeVersion || ''}` : null],
      [L('Base de données', 'Database'), st.databaseType ? `${st.databaseType} ${st.databaseVersion || ''}` : null],
      [L('Démarré le', 'Started'), st.startTime && fmtDate(st.startTime, true)], [L('Données', 'App data'), st.appData], ['Base URL', st.urlBase],
    ])}</div>
    <div class="section btn-col">
      <button class="btn" id="logs">${icon('list')} ${L('Journaux', 'Logs')}</button>
      <button class="btn" id="web">${icon('open')} ${L("Ouvrir l'interface web complète", 'Open full web interface')}</button>
      <button class="btn danger" id="restart">${icon('refresh')} ${L('Redémarrer', 'Restart')} ${name}</button>
    </div>`;
  box.onclick = e => {
    const b = e.target.closest('[data-cmd]');
    if (b) act(b, () => command(svc, b.dataset.cmd, {}, b.dataset.l));
  };
  $('#logs', box).onclick = () => openLogs(svc);
  $('#web', box).onclick = () => openWeb(svc);
  $('#restart', box).onclick = () => confirmSheet({ title: L(`Redémarrer ${name} ?`, `Restart ${name}?`), ok: L('Redémarrer', 'Restart'), danger: true })
    .then(v => v && act(null, async () => { await POST(svc, '/system/restart'); toast(L(`${name} redémarre…`, `${name} is restarting…`)); }));
}
function openLogs(svc) {
  push(L('Journaux', 'Logs'), async box => {
    box.innerHTML = loading();
    const d = await GET(svc, '/log?page=1&pageSize=100&sortKey=time&sortDirection=descending');
    const recs = d.records || [];
    box.innerHTML = recs.length ? recs.map(l => `<div class="li"><span class="badge ${/error|fatal/.test(l.level) ? 'bad' : l.level === 'warn' ? 'warn' : 'info'}">${esc(l.level)}</span>
      <div class="grow"><div class="muted xs">${fmtDate(l.time, true)} · ${esc(l.logger)}</div><div class="small mono">${esc(l.message)}</div>
      ${l.exception ? `<pre class="xs">${esc(l.exception)}</pre>` : ''}</div></div>`).join('') : `<div class="empty">${L('Aucun journal.', 'No logs.')}</div>`;
  });
}

/* =========================================================================
 * Prowlarr
 * ========================================================================= */
const CATS = () => [['', L('Toutes catégories', 'All categories')], ['2000', L('Films', 'Movies')], ['5000', L('Séries TV', 'TV')], ['3000', 'Audio'], ['7000', L('Livres', 'Books')], ['4000', L('PC / Logiciels', 'PC / Software')], ['1000', 'Console'], ['6000', 'XXX'], ['8000', L('Autre', 'Other')]];
const PRIV = () => ({ public: 'Public', private: L('Privé', 'Private'), semiPrivate: L('Semi-privé', 'Semi-private') });

async function prowlarrSearch(box) {
  const st = state.ps = state.ps || { q: '', type: 'search', cat: '', idx: '', sort: 'seeders', results: null };
  const indexers = await cached('prowlarr:indexers', () => GET('prowlarr', '/indexer'), 60000);
  const enabled = indexers.filter(i => i.enable).sort((a, b) => a.name.localeCompare(b.name));
  box.innerHTML = `<div class="toolbar"><form class="searchbar" id="f">
      <input class="input" type="search" id="q" placeholder="${L('Rechercher sur tous les indexeurs…', 'Search all indexers…')}" enterkeyhint="search">
      <button class="btn primary" type="submit">${icon('search')}</button></form>
      <div class="row"><select class="select" id="type">${opts([['search', L('Recherche libre', 'Basic search')], ['movie', L('Film', 'Movie')], ['tvsearch', L('Série TV', 'TV')], ['music', L('Musique', 'Music')], ['book', L('Livre', 'Book')]], st.type)}</select>
        <select class="select" id="cat">${opts(CATS(), st.cat)}</select></div>
      <div class="row"><select class="select" id="idx">${opts([['', L(`Tous les indexeurs (${enabled.length})`, `All indexers (${enabled.length})`)], ...enabled.map(i => [i.id, i.name])], st.idx)}</select>
        <select class="select" id="srt">${opts([['seeders', 'Seeders'], ['age', L('Plus récent', 'Newest')], ['size_d', L('Taille ↓', 'Size ↓')], ['size_a', L('Taille ↑', 'Size ↑')], ['grabs', L('Téléchargements', 'Grabs')]], st.sort)}</select></div>
      <div class="muted small" id="cnt"></div></div><div id="res"></div>`;
  const res = $('#res', box);
  $('#q', box).value = st.q;
  const draw = () => {
    if (!st.results) {
      res.innerHTML = `<div class="empty">${enabled.length
        ? L('Lance une recherche : les résultats peuvent être envoyés directement à ton client de téléchargement.', 'Run a search: results can be sent straight to your download client.')
        : L('Aucun indexeur activé dans Prowlarr.', 'No indexer enabled in Prowlarr.')}</div>`;
      return;
    }
    const cmp = {
      seeders: (a, b) => (b.seeders || 0) - (a.seeders || 0), age: (a, b) => new Date(b.publishDate) - new Date(a.publishDate),
      size_d: (a, b) => b.size - a.size, size_a: (a, b) => a.size - b.size, grabs: (a, b) => (b.grabs || 0) - (a.grabs || 0),
    }[st.sort];
    const arr = st.results.map((r, i) => ({ r, i })).sort((a, b) => cmp(a.r, b.r));
    $('#cnt', box).textContent = plural(arr.length, 'résultat', 'result');
    res.innerHTML = arr.length ? arr.map(({ r, i }) => `<div class="rel"><div class="rel-title">${esc(r.title)}</div>
        <div class="chips"><span class="chip">${fmtSize(r.size)}</span>
          ${r.protocol === 'torrent' ? `<span class="chip ${r.seeders > 0 ? 'ok' : 'bad'}">▲ ${r.seeders ?? '?'} ▼ ${r.leechers ?? '?'}</span>` : '<span class="chip">Usenet</span>'}
          <span class="chip">${fmtAge(r.publishDate)}</span><span class="chip q">${esc(r.indexer)}</span>
          ${r.grabs != null ? `<span class="chip">${r.grabs} DL</span>` : ''}
          ${(r.categories || []).slice(0, 2).map(c => `<span class="chip">${esc(c.name)}</span>`).join('')}</div>
        <div class="row">${r.infoUrl ? `<button class="icon-btn" data-info="${i}">${icon('open')}</button>` : ''}
          ${r.magnetUrl || r.downloadUrl ? `<button class="icon-btn" data-copy="${i}">${icon('copy')}</button>` : ''}
          <button class="btn small primary" data-grab="${i}">${icon('send')} ${L('Envoyer au client', 'Send to client')}</button></div></div>`).join('')
      : `<div class="empty">${L('Aucun résultat.', 'No results.')}</div>`;
  };
  const doSearch = async () => {
    const q = $('#q', box).value.trim();
    st.q = q; st.type = $('#type', box).value; st.cat = $('#cat', box).value; st.idx = $('#idx', box).value;
    const p = new URLSearchParams({ query: q, type: st.type, limit: '100', offset: '0' });
    if (st.cat) p.append('categories', st.cat);
    (st.idx ? [st.idx] : enabled.map(i => i.id)).forEach(id => p.append('indexerIds', id));
    res.innerHTML = loading(L('Recherche sur les indexeurs…', 'Searching indexers…'));
    $('#cnt', box).textContent = '';
    try {
      st.results = await GET('prowlarr', '/search?' + p.toString());
      if (box.isConnected) draw();
    } catch (e) { if (box.isConnected) res.innerHTML = `<div class="error-box">${esc(e.message)}</div>`; }
  };
  $('#f', box).onsubmit = e => { e.preventDefault(); $('#q', box).blur(); doSearch(); };
  $('#srt', box).onchange = e => { st.sort = e.target.value; draw(); };
  res.onclick = e => {
    const info = e.target.closest('[data-info]');
    if (info) return openExternal(st.results[+info.dataset.info].infoUrl);
    const cp = e.target.closest('[data-copy]');
    if (cp) {
      const r = st.results[+cp.dataset.copy];
      const link = r.magnetUrl || r.downloadUrl;
      if (window.Native) Native.copy(link); else navigator.clipboard?.writeText(link);
      return toast(L('Lien copié ✓', 'Link copied ✓'));
    }
    const b = e.target.closest('[data-grab]');
    if (!b) return;
    const r = st.results[+b.dataset.grab];
    act(b, async () => {
      await POST('prowlarr', '/search', { guid: r.guid, indexerId: r.indexerId });
      b.classList.remove('primary'); b.classList.add('done'); b.innerHTML = `${icon('check')} ${L('Envoyé', 'Sent')}`;
      toast(L('Envoyé au client de téléchargement ✓', 'Sent to download client ✓'));
    });
  };
  draw();
}

async function prowlarrIndexers(box) {
  box.innerHTML = loading();
  const [list, status] = await Promise.all([GET('prowlarr', '/indexer'), GET('prowlarr', '/indexerstatus').catch(() => [])]);
  setCache('prowlarr:indexers', list);
  list.sort((a, b) => a.name.localeCompare(b.name));
  const stMap = Object.fromEntries(status.map(s => [s.indexerId, s]));
  const nOn = list.filter(i => i.enable).length;
  box.innerHTML = `<div class="toolbar row between"><span class="muted small">${L(`${list.length} indexeur(s) · ${nOn} actif(s)`, `${plural(list.length, '', 'indexer')} · ${nOn} enabled`)}</span>
      <div class="row"><button class="btn small" id="testall">${icon('check')} ${L('Tout tester', 'Test all')}</button>
      <button class="btn small primary" id="add">${icon('add')} ${L('Ajouter', 'Add')}</button></div></div>
    <div class="list">${list.map((x, i) => {
      const s = stMap[x.id];
      const dis = s?.disabledTill && new Date(s.disabledTill) > new Date();
      return `<div class="li" data-row="${x.id}"><label class="switch"><input type="checkbox" data-en="${i}"${x.enable ? ' checked' : ''}><span></span></label>
        <div class="grow"><div class="b">${esc(x.name)}</div>
          <div class="chips"><span class="chip">${x.protocol === 'torrent' ? 'Torrent' : 'Usenet'}</span><span class="chip">${esc(PRIV()[x.privacy] || x.privacy || '')}</span>
          <span class="chip">${L('Priorité', 'Priority')} ${x.priority}</span>${dis ? `<span class="chip bad">${L("En échec jusqu'à", 'Failing until')} ${fmtDate(s.disabledTill, true)}</span>` : ''}</div>
          <div class="xs" id="tr-${x.id}"></div></div>
        <button class="icon-btn" data-test="${i}" title="Test">${icon('check')}</button>
        <button class="icon-btn" data-del="${i}" title="${L('Supprimer', 'Delete')}">${icon('delete')}</button></div>`;
    }).join('') || `<div class="empty">${L("Aucun indexeur. Ajoute-en un depuis l'interface web.", 'No indexers. Add one from the web interface.')}</div>`}</div>
    <div class="muted small" style="padding:12px">${L("L'ajout et la configuration détaillée des indexeurs s'ouvrent dans l'interface web de Prowlarr.", "Adding and configuring indexers opens Prowlarr's web interface.")}</div>`;
  const setRes = (id, ok, msg) => { const el = $('#tr-' + id, box); if (el) el.innerHTML = `<span class="st-${ok ? 'ok' : 'bad'}">${esc(msg)}</span>`; };
  box.onchange = e => {
    const c = e.target.closest('[data-en]');
    if (!c) return;
    const x = list[+c.dataset.en];
    act(null, async () => {
      try {
        await PUT('prowlarr', '/indexer/' + x.id, { ...x, enable: c.checked });
        x.enable = c.checked; dropCache('prowlarr:indexers');
        toast(`${x.name} ${c.checked ? L('activé', 'enabled') : L('désactivé', 'disabled')}`);
      } catch (err) { c.checked = !c.checked; throw err; }
    });
  };
  box.onclick = e => {
    const t = e.target.closest('[data-test]'), d = e.target.closest('[data-del]');
    if (t) {
      const x = list[+t.dataset.test];
      act(t, async () => {
        try { await POST('prowlarr', '/indexer/test', x); setRes(x.id, true, L('✓ Test réussi', '✓ Test passed')); }
        catch (err) { setRes(x.id, false, '✗ ' + err.message); }
      });
    } else if (d) {
      const x = list[+d.dataset.del];
      confirmSheet({ title: L(`Supprimer ${x.name} ?`, `Delete ${x.name}?`), ok: L('Supprimer', 'Delete'), danger: true })
        .then(v => v && act(null, async () => { await DEL('prowlarr', '/indexer/' + x.id); dropCache('prowlarr:indexers'); toast(L('Indexeur supprimé', 'Indexer deleted')); render(); }));
    }
  };
  $('#testall', box).onclick = e => act(e.currentTarget, async () => {
    // testall answers 400 with the per-indexer results when at least one fails
    const r = await api('prowlarr', 'POST', '/indexer/testall', {}, true);
    (Array.isArray(r) ? r : []).forEach(x => setRes(x.id, x.isValid, x.isValid ? '✓ OK' : '✗ ' + (x.validationFailures || []).map(v => v.errorMessage).join(', ')));
    toast(L('Tests terminés', 'Tests complete'));
  });
  $('#add', box).onclick = () => openWeb('prowlarr', '/');
}

async function prowlarrStats(box) {
  box.innerHTML = loading();
  await cached('prowlarr:indexers', () => GET('prowlarr', '/indexer')).catch(() => { });
  const d = await GET('prowlarr', '/indexerstats');
  const arr = (d.indexers || []).slice().sort((a, b) => (b.numberOfQueries || 0) - (a.numberOfQueries || 0));
  const sum = k => arr.reduce((s, x) => s + (x[k] || 0), 0);
  const maxQ = Math.max(1, ...arr.map(x => x.numberOfQueries || 0));
  box.innerHTML = `<div class="section"><h3>Total</h3><div class="totals">
      <div class="total"><b>${sum('numberOfQueries')}</b><span>${L('Requêtes', 'Queries')}</span></div>
      <div class="total"><b>${sum('numberOfGrabs')}</b><span>${L('Téléchargements', 'Grabs')}</span></div>
      <div class="total"><b>${sum('numberOfFailedQueries') + sum('numberOfFailedGrabs')}</b><span>${L('Échecs', 'Failures')}</span></div></div></div>
    <div class="section"><h3>${L('Par indexeur', 'Per indexer')}</h3>${arr.map(x => {
      const fails = (x.numberOfFailedQueries || 0) + (x.numberOfFailedGrabs || 0);
      return `<div class="stat-row">
      <div class="row between"><span class="b small">${esc(x.indexerName || indexerName(x.indexerId))}</span><span class="muted xs">${x.averageResponseTime || 0} ms</span></div>
      <div class="pbar"><i style="width:${100 * (x.numberOfQueries || 0) / maxQ}%"></i></div>
      <div class="muted xs" style="margin-top:4px">${x.numberOfQueries || 0} ${L('requêtes', 'queries')} · ${x.numberOfGrabs || 0} grabs · ${x.numberOfRssQueries || 0} RSS
        ${fails ? ` · <span class="st-bad">${fails} ${L('échecs', 'failures')}</span>` : ''}</div></div>`;
    }).join('') || `<div class="muted small">${L('Aucune donnée.', 'No data.')}</div>`}</div>`;
}

async function prowlarrApps(box) {
  box.innerHTML = loading();
  const apps = await GET('prowlarr', '/applications');
  const SYNC = { disabled: L('Désactivée', 'Disabled'), addOnly: L('Ajout seulement', 'Add and remove only'), fullSync: L('Synchro complète', 'Full sync') };
  box.innerHTML = `<div class="toolbar row between"><span class="muted small">${plural(apps.length, 'application', 'application')}</span>
      <div class="row"><button class="btn small primary" id="sync">${icon('refresh')} ${L('Synchroniser', 'Sync')}</button></div></div>
    <div class="list">${apps.map((a, i) => `<div class="li"><div class="grow"><div class="b">${esc(a.name)}</div>
      <div class="chips"><span class="chip">${esc(a.implementationName || a.implementation)}</span><span class="chip">${esc(SYNC[a.syncLevel] || a.syncLevel)}</span></div>
      <div class="xs" id="ar-${i}"></div></div><button class="icon-btn" data-test="${i}" title="Test">${icon('check')}</button></div>`).join('') || `<div class="empty">${L('Aucune application liée.', 'No linked applications.')}</div>`}</div>
    <div class="section btn-col"><button class="btn" id="web">${icon('open')} ${L('Gérer les applications (interface web)', 'Manage applications (web interface)')}</button></div>`;
  $('#sync', box).onclick = e => act(e.currentTarget, () => command('prowlarr', 'ApplicationIndexerSync', {}, L('Synchronisation des indexeurs', 'Indexer sync')));
  $('#web', box).onclick = () => openWeb('prowlarr', '/settings/applications');
  box.onclick = e => {
    const t = e.target.closest('[data-test]');
    if (!t) return;
    const i = +t.dataset.test;
    act(t, async () => {
      const el = $('#ar-' + i, box);
      try { await POST('prowlarr', '/applications/test', apps[i]); el.innerHTML = `<span class="st-ok">✓ ${L('Connexion OK', 'Connection OK')}</span>`; }
      catch (err) { el.innerHTML = `<span class="st-bad">✗ ${esc(err.message)}</span>`; }
    });
  };
}

/* =========================================================================
 * Settings
 * ========================================================================= */
function appVersion() {
  try { return window.Native && Native.appVersion ? Native.appVersion() : ''; } catch (e) { return ''; }
}
function settingsPage(box) {
  box.innerHTML = `<div class="section"><h3>${L('Langue', 'Language')}</h3>
      <select class="select" id="lang">${opts([['auto', L('Automatique (langue du téléphone)', 'Automatic (device language)')], ['fr', 'Français'], ['en', 'English']], cfg.lang)}</select></div>` +
    Object.entries(SERVICES).map(([k, s]) => `<div class="section svc-card" style="--accent:${s.color}">
      <h3><span class="dot"></span>${s.name}</h3>
      ${field(L('URL du serveur', 'Server URL'), `<input class="input" data-k="${k}" data-f="url" placeholder="http://192.168.1.10:${s.port}" inputmode="url" autocapitalize="off" autocorrect="off" spellcheck="false">`)}
      ${field(L('Clé API', 'API key'), `<input class="input" data-k="${k}" data-f="apiKey" placeholder="${L('32 caractères', '32 characters')}" autocapitalize="off" autocorrect="off" spellcheck="false">`)}
      <div class="row"><button class="btn small" data-test="${k}">${icon('check')} ${L('Tester la connexion', 'Test connection')}</button><span class="small grow" id="res-${k}"></span></div>
    </div>`).join('') + `
    <div class="section"><h3>Options</h3>${chk('insecure', L('Accepter les certificats HTTPS auto-signés', 'Accept self-signed HTTPS certificates'), cfg.insecure)}</div>
    <div class="section muted small" style="line-height:1.5">
      <p style="margin-top:0">🔑 ${L('La clé API se trouve dans chaque application :', 'The API key is found in each app under')} <b>Settings › General › Security › API Key</b>.</p>
      <p>🌐 ${L("Si un service est derrière un reverse proxy avec un sous-chemin, indique l'URL complète (ex. <i>https://example.com/radarr</i>).", 'If a service sits behind a reverse proxy with a sub-path, enter the full URL (e.g. <i>https://example.com/radarr</i>).')}</p>
      <p>📱 ${L("Depuis l'extérieur de ton réseau, utilise une URL accessible (VPN, Tailscale, reverse proxy…).", 'Outside your home network, use a reachable URL (VPN, Tailscale, reverse proxy…).')}</p>
      <p style="margin-bottom:0">Arr Manager ${esc(appVersion())} · ${L('projet open source, non affilié à Radarr, Sonarr ou Prowlarr.', 'open-source project, not affiliated with Radarr, Sonarr or Prowlarr.')}</p></div>`;
  $('#lang', box).onchange = e => { cfg.lang = e.target.value; saveCfg(); applyLang(); renderChrome(); render(); };
  $$('input[data-k]', box).forEach(inp => {
    inp.value = cfg[inp.dataset.k][inp.dataset.f] || '';
    inp.oninput = () => { cfg[inp.dataset.k][inp.dataset.f] = inp.value.trim(); saveCfg(); dropCache(inp.dataset.k + ':'); };
  });
  $('#insecure', box).onchange = e => { cfg.insecure = e.target.checked; saveCfg(); };
  box.onclick = e => {
    const b = e.target.closest('[data-test]');
    if (!b) return;
    const k = b.dataset.test;
    const out = $('#res-' + k, box);
    out.textContent = '';
    act(b, async () => {
      try {
        const st = await GET(k, '/system/status');
        out.innerHTML = `<span class="st-ok">✓ ${esc(st.appName || SERVICES[k].name)} ${esc(st.version)}</span>`;
      } catch (err) { out.innerHTML = `<span class="st-bad">✗ ${esc(err.message)}</span>`; }
    });
  };
}

/* =========================================================================
 * Boot
 * ========================================================================= */
function init() {
  $$('[data-ic]').forEach(el => { el.innerHTML = icon(el.dataset.ic); });
  $('#backBtn').innerHTML = icon('back');
  $('#webBtn').innerHTML = icon('open');
  $('#refreshBtn').innerHTML = icon('refresh');
  renderChrome();
  $('#bottom').onclick = e => {
    const b = e.target.closest('button');
    if (!b) return;
    const svc = b.dataset.svc;
    if (svc === state.svc && !state.stack.length) { $('#view').scrollTop = 0; return; }
    state.svc = svc; state.stack = []; pendingScroll = null;
    render();
  };
  $('#subtabs').onclick = e => {
    const b = e.target.closest('button');
    if (!b) return;
    state.tabs[state.svc] = b.dataset.tab; pendingScroll = null;
    render();
  };
  $('#backBtn').onclick = () => window.__onBack();
  $('#refreshBtn').onclick = () => { if (state.svc !== 'settings') dropCache(state.svc + ':'); render(); };
  $('#webBtn').onclick = () => openWeb(state.svc);
  $('#sheet-bg').onclick = closeSheet;
  const first = Object.keys(SERVICES).find(configured);
  state.svc = first || 'settings';
  render();
}
init();
