# CypherSpartan Stream Commands

A static command directory designed for GitHub Pages.

## Files
- `index.html` — page structure
- `style.css` — visual styling and responsive layout
- `commands.js` — command data
- `script.js` — search, filters, detail dialog and copy behavior

## Publish with GitHub Pages
1. Create a **public** repository named `commands` under `cypherspartan`.
2. Upload the four website files (`index.html`, `style.css`, `script.js`, `commands.js`) to the repository root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose branch **main**, folder **/(root)**, then click **Save**.
6. Wait for GitHub Pages to publish the site. It should appear at:
   https://cypherspartan.github.io/commands/

## Edit your commands
Open `commands.js`. Each command is one object with:
- `name`
- `category`
- `description`
- `usage`
- `platforms`
- `permission`
- `cooldown`

Edit the sample entries to match your exact Streamer.bot command settings. The sample cooldown and permission text is intentionally generic where exact settings were not confirmed.

## Important
Do not put Streamer.bot credentials, API keys, private tokens, or other secrets in this public repository. This starter site is a public read-only command directory. Platform point balances remain separate; this site does not combine them.
