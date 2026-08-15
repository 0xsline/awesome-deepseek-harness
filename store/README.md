# DSH Plugin Store 🐋

Plugin storefront for the DeepSeek Harness ecosystem (this directory is deployed
to GitHub Pages) plus the data feed for the `dsh-store` CLI.

| File | Purpose |
|---|---|
| `index.html` / `app.js` / `style.css` | Zero-dependency storefront (search / filter / detail / copy install & check commands) |
| `catalog.json` | Data feed — **generated**, do not edit by hand |

## Regenerating catalog.json

```sh
python3 scripts/generate-store-catalog.py CATALOG.md store/catalog.json
```

The `sync-catalog` workflow regenerates it on every hub-catalog sync, and the
`deploy-store` workflow (re)generates it before deploying to Pages, so it stays
in sync automatically.

## CLI

Install and conflict-checking live in [`scripts/dsh-store`](../scripts/dsh-store)
(`dsh-store.js`). See the [README](../README.md#plugin-store) for usage.

## Local preview

```sh
python3 -m http.server 8080 --directory store
# open http://127.0.0.1:8080
```
