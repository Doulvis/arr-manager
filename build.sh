#!/usr/bin/env bash
# Builds ArrManager.apk without Gradle: aapt2 -> javac -> d8 -> zipalign -> apksigner (Linux/macOS)
#
# Requirements: JDK 17+, zip, and an Android SDK ($ANDROID_HOME or $ANDROID_SDK_ROOT)
# with "platforms;android-34" and a build-tools package.
#
# Signing (optional): ARR_KEYSTORE, ARR_KEYSTORE_PASSWORD, ARR_KEY_ALIAS, ARR_KEY_PASSWORD.
# Without them a throwaway debug key is generated in build/ (fine for testing, not for releases).
set -euo pipefail

SDK="${ANDROID_HOME:-${ANDROID_SDK_ROOT:-}}"
[ -n "$SDK" ] || { echo "ANDROID_HOME is not set" >&2; exit 1; }
ANDROID_JAR="$SDK/platforms/android-34/android.jar"
[ -f "$ANDROID_JAR" ] || { echo "android.jar not found (sdkmanager \"platforms;android-34\")" >&2; exit 1; }
BT="$(ls -d "$SDK"/build-tools/*/ | sort -V | tail -n 1)"
BT="${BT%/}"
VERSION_NAME="${VERSION_NAME:-1.0.0}"
VERSION_CODE="${VERSION_CODE:-1}"

P="$(cd "$(dirname "$0")" && pwd)"
B="$P/build"
rm -rf "$B"
mkdir -p "$B/classes" "$B/dex"

"$BT/aapt2" compile --dir "$P/res" -o "$B/res.zip"
"$BT/aapt2" link -I "$ANDROID_JAR" --manifest "$P/AndroidManifest.xml" -A "$P/assets" \
  --min-sdk-version 26 --target-sdk-version 34 \
  --version-code "$VERSION_CODE" --version-name "$VERSION_NAME" \
  -o "$B/unsigned.apk" "$B/res.zip"

find "$P/src" -name '*.java' > "$B/sources.txt"
javac -encoding UTF-8 -source 8 -target 8 -Xlint:-options -cp "$ANDROID_JAR" -d "$B/classes" @"$B/sources.txt"

find "$B/classes" -name '*.class' > "$B/classes.txt"
"$BT/d8" --release --min-api 26 --lib "$ANDROID_JAR" --output "$B/dex" $(cat "$B/classes.txt")

(cd "$B/dex" && zip -q "$B/unsigned.apk" classes.dex)
"$BT/zipalign" -p -f 4 "$B/unsigned.apk" "$B/aligned.apk"

KS="${ARR_KEYSTORE:-}"
KS_PASS="${ARR_KEYSTORE_PASSWORD:-}"
ALIAS="${ARR_KEY_ALIAS:-}"
KEY_PASS="${ARR_KEY_PASSWORD:-}"
if [ -z "$KS" ]; then
  echo "ARR_KEYSTORE not set: signing with a throwaway debug key." >&2
  KS="$B/debug.jks"; KS_PASS=android; ALIAS=debug; KEY_PASS=android
  keytool -genkeypair -keystore "$KS" -storepass "$KS_PASS" -keypass "$KEY_PASS" -alias "$ALIAS" \
    -keyalg RSA -keysize 2048 -validity 10000 -dname "CN=Android Debug" >/dev/null 2>&1
fi
KEY_PASS="${KEY_PASS:-$KS_PASS}"
"$BT/apksigner" sign --ks "$KS" --ks-pass "pass:$KS_PASS" --ks-key-alias "$ALIAS" --key-pass "pass:$KEY_PASS" \
  --out "$P/ArrManager.apk" "$B/aligned.apk"
"$BT/apksigner" verify "$P/ArrManager.apk"
echo "OK -> $P/ArrManager.apk"
