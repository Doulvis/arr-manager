# Arr Manager

Application Android légère pour piloter **Radarr**, **Sonarr** et **Prowlarr** depuis ton téléphone : ajouter des films et des séries, lancer des téléchargements, choisir une release à la main, suivre la file d'attente, gérer les indexeurs…

> 🇬🇧 *Lightweight Android client for Radarr, Sonarr and Prowlarr. Add movies and series, trigger automatic or interactive searches, monitor downloads and manage indexers. The UI is in French.*

<p>
  <img src="docs/screenshots/library.png" width="200" alt="Bibliothèque">
  <img src="docs/screenshots/movie.png" width="200" alt="Fiche film">
  <img src="docs/screenshots/series.png" width="200" alt="Fiche série">
  <img src="docs/screenshots/interactive-search.png" width="200" alt="Recherche manuelle">
</p>

## Fonctionnalités

**Radarr**
- Bibliothèque en grille d'affiches, avec filtres (manquants, téléchargés, à venir…) et tris
- Ajout de films (dossier racine, profil de qualité, disponibilité minimale, recherche immédiate)
- Fiche film : recherche automatique, **recherche manuelle** avec choix de la release, surveillance, modification, actualisation, suppression (film et/ou fichier), historique

**Sonarr**
- Mêmes fonctions pour les séries
- Surveillance et recherche **par saison** et **par épisode**, recherche manuelle de packs de saison
- Onglet « Manquants » avec recherche groupée

**Prowlarr**
- Recherche sur tous les indexeurs, envoi direct au client de téléchargement ou copie du lien magnet
- Indexeurs : activer/désactiver, tester, supprimer · statistiques · applications liées et synchronisation

**Commun**
- File de téléchargement en temps réel (retirer, liste noire, forcer), calendrier, historique, liste noire
- Santé, espace disque, tâches planifiées, journaux, sauvegarde, redémarrage
- Accès à l'**interface web complète** de chaque service depuis l'app, pour les réglages avancés

## Installation

1. Télécharge le dernier `ArrManager-x.y.z.apk` depuis la page [Releases](../../releases).
2. Ouvre-le sur ton téléphone (Android 8.0 ou plus récent) et autorise l'installation depuis cette source.
3. Dans l'onglet **Réglages**, saisis pour chaque service :
   - l'**URL**, par exemple `http://192.168.1.10:7878` (Radarr), `:8989` (Sonarr), `:9696` (Prowlarr) ;
   - la **clé API**, visible dans *Settings › General › Security › API Key*.
4. Appuie sur **Tester la connexion**.

Depuis l'extérieur de ton réseau, utilise une URL joignable : VPN (WireGuard, Tailscale…) ou reverse proxy. Si le service est servi sous un sous-chemin, indique l'URL complète, par exemple `https://example.com/radarr`.

## Confidentialité

- Aucune télémétrie, aucun compte, aucun serveur intermédiaire : l'app ne parle **qu'à tes propres serveurs**.
- Les URL et les clés API sont stockées localement sur le téléphone et exclues des sauvegardes Android.
- Les affiches sont chargées depuis les URL fournies par tes serveurs (en général TMDB/TheTVDB).
- L'option « Accepter les certificats auto-signés » désactive la vérification TLS : ne l'active que pour tes propres serveurs.

## Compiler soi-même

Le projet n'utilise pas Gradle : l'APK est construit directement avec les outils du SDK Android (`aapt2`, `javac`, `d8`, `zipalign`, `apksigner`). Le résultat pèse environ 50 Ko.

Prérequis : JDK 17+, et un SDK Android avec `platforms;android-34` et `build-tools;34.0.0`.

```bash
# Linux / macOS
export ANDROID_HOME=/chemin/vers/android-sdk
./build.sh
```

```powershell
# Windows
$env:ANDROID_HOME = "C:\chemin\vers\android-sdk"
$env:JAVA_HOME    = "C:\chemin\vers\jdk-17"
.\build.ps1
```

Sans clé configurée, l'APK est signé avec une clé de debug temporaire. Pour signer avec ta propre clé, définis `ARR_KEYSTORE`, `ARR_KEYSTORE_PASSWORD`, `ARR_KEY_ALIAS` et `ARR_KEY_PASSWORD`.

### Structure

```
AndroidManifest.xml
src/com/arrmanager/app/   MainActivity (WebView + pont HTTP natif), WebActivity (interface web complète)
assets/                   index.html, style.css, app.js : toute l'interface
res/                      icône
build.sh / build.ps1      scripts de compilation
```

L'interface est une page HTML/JS embarquée. Les appels API passent par le code natif (`HttpURLConnection`), ce qui évite les problèmes de CORS et autorise le HTTP en réseau local.

## Publier une version (mainteneurs)

Le workflow GitHub Actions compile l'APK à chaque push. Quand tu pousses un tag `vX.Y.Z`, il crée la Release avec l'APK en pièce jointe :

```bash
git tag v1.0.0
git push origin v1.0.0
```

Pour que les mises à jour s'installent par-dessus les versions précédentes, toutes les versions doivent être signées avec **la même clé**. Ajoute ces secrets au dépôt (*Settings › Secrets and variables › Actions*) :

| Secret | Contenu |
|---|---|
| `KEYSTORE_BASE64` | le fichier `.jks` encodé en base64 |
| `KEYSTORE_PASSWORD` | mot de passe du keystore |
| `KEY_ALIAS` | alias de la clé |
| `KEY_PASSWORD` | mot de passe de la clé |

Créer une clé et l'encoder :

```bash
keytool -genkeypair -keystore release.jks -alias arr -keyalg RSA -keysize 2048 -validity 10000
base64 -w0 release.jks        # Linux
# Windows (PowerShell) : [Convert]::ToBase64String([IO.File]::ReadAllBytes("release.jks"))
```

Ne commite jamais le fichier `.jks` (il est déjà dans `.gitignore`).

## Avertissement

Projet indépendant, **non affilié** aux équipes Radarr, Sonarr ou Prowlarr. Ces noms appartiennent à leurs projets respectifs. L'app se contente d'utiliser leurs API publiques. Utilise-la uniquement pour gérer des contenus que tu as le droit de télécharger.

## Licence

[MIT](LICENSE)
