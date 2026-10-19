# Builds ArrManager.apk without Gradle: aapt2 -> javac -> d8 -> zipalign -> apksigner (Windows)
#
# Requirements: JDK 17+ and an Android SDK with "platforms;android-34" and a build-tools package.
#   -SdkDir  defaults to $env:ANDROID_HOME, $env:ANDROID_SDK_ROOT or %LOCALAPPDATA%\Android\Sdk
#   -JdkDir  defaults to $env:JAVA_HOME (or java on PATH)
#
# Signing (optional): set ARR_KEYSTORE, ARR_KEYSTORE_PASSWORD, ARR_KEY_ALIAS, ARR_KEY_PASSWORD.
# Without them a throwaway debug key is generated in build\ (fine for testing, not for releases).
param(
    [string]$SdkDir = $(if ($env:ANDROID_HOME) { $env:ANDROID_HOME } elseif ($env:ANDROID_SDK_ROOT) { $env:ANDROID_SDK_ROOT } else { "$env:LOCALAPPDATA\Android\Sdk" }),
    [string]$JdkDir = $env:JAVA_HOME,
    [string]$VersionName = $(if ($env:VERSION_NAME) { $env:VERSION_NAME } else { '1.0.0' }),
    [int]$VersionCode = $(if ($env:VERSION_CODE) { [int]$env:VERSION_CODE } else { 1 })
)
$ErrorActionPreference = 'Continue'
function Fail($msg) { Write-Host "FAILED: $msg" -ForegroundColor Red; exit 1 }
function Check($step) { if ($LASTEXITCODE -ne 0) { Fail $step } }

if ($JdkDir) { $env:JAVA_HOME = $JdkDir; $env:Path = "$JdkDir\bin;$env:Path" }
if (-not (Get-Command javac -ErrorAction SilentlyContinue)) { Fail 'javac not found (install JDK 17 or pass -JdkDir)' }
$androidJar = "$SdkDir\platforms\android-34\android.jar"
if (-not (Test-Path $androidJar)) { Fail "android.jar not found in $SdkDir (sdkmanager `"platforms;android-34`")" }
$bt = Get-ChildItem "$SdkDir\build-tools" -Directory -ErrorAction SilentlyContinue |
    Sort-Object { [version]($_.Name -replace '-.*$', '') } | Select-Object -Last 1 -ExpandProperty FullName
if (-not $bt) { Fail "no build-tools found in $SdkDir (sdkmanager `"build-tools;34.0.0`")" }

$p = $PSScriptRoot
$b = "$p\build"
if (Test-Path $b) { Remove-Item -Recurse -Force $b }
New-Item -ItemType Directory -Force "$b\classes", "$b\dex" | Out-Null

& "$bt\aapt2.exe" compile --dir "$p\res" -o "$b\res.zip"; Check 'aapt2 compile'
& "$bt\aapt2.exe" link -I $androidJar --manifest "$p\AndroidManifest.xml" -A "$p\assets" `
    --min-sdk-version 26 --target-sdk-version 34 --version-code $VersionCode --version-name $VersionName `
    -o "$b\unsigned.apk" "$b\res.zip"; Check 'aapt2 link'

$srcs = Get-ChildItem -Recurse "$p\src" -Filter *.java | ForEach-Object FullName
& javac -encoding UTF-8 -source 8 -target 8 -Xlint:-options -cp $androidJar -d "$b\classes" $srcs; Check 'javac'

$classes = Get-ChildItem -Recurse "$b\classes" -Filter *.class | ForEach-Object FullName
& "$bt\d8.bat" --release --min-api 26 --lib $androidJar --output "$b\dex" $classes; Check 'd8'

Push-Location "$b\dex"
& "$bt\aapt.exe" add "$b\unsigned.apk" classes.dex | Out-Null; $ok = $LASTEXITCODE
Pop-Location
if ($ok -ne 0) { Fail 'aapt add' }

& "$bt\zipalign.exe" -p -f 4 "$b\unsigned.apk" "$b\aligned.apk"; Check 'zipalign'

$ks = $env:ARR_KEYSTORE; $ksPass = $env:ARR_KEYSTORE_PASSWORD
$alias = $env:ARR_KEY_ALIAS; $keyPass = $env:ARR_KEY_PASSWORD
if (-not $ks) {
    Write-Host 'ARR_KEYSTORE not set: signing with a throwaway debug key.' -ForegroundColor Yellow
    $ks = "$b\debug.jks"; $ksPass = 'android'; $alias = 'debug'; $keyPass = 'android'
    & keytool -genkeypair -keystore $ks -storepass $ksPass -keypass $keyPass -alias $alias `
        -keyalg RSA -keysize 2048 -validity 10000 -dname "CN=Android Debug" 2>$null | Out-Null; Check 'keytool'
}
if (-not $keyPass) { $keyPass = $ksPass }
& "$bt\apksigner.bat" sign --ks $ks --ks-pass "pass:$ksPass" --ks-key-alias $alias --key-pass "pass:$keyPass" `
    --out "$p\ArrManager.apk" "$b\aligned.apk"; Check 'apksigner'
& "$bt\apksigner.bat" verify "$p\ArrManager.apk"; Check 'verify'
Write-Host "OK -> $p\ArrManager.apk" -ForegroundColor Green
