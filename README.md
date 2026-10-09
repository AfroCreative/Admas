# Admas: Eritrean & Ethiopian Restaurant and Bar

Website for Admas, 5125 E Main St, Columbus, OH 43213.

Static site with no build step. Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
```

## Editing the menu

All dishes, prices and drinks live in `assets/js/menu-data.js`. Change a price or add an
item there and the menu and bar sections update automatically.

## Structure

- `index.html`: page markup and SEO / schema.org data
- `assets/css/styles.css`: styles
- `assets/js/main.js`: menu tabs, mobile nav, scroll reveals
- `assets/img/`: dish photos (cropped from the printed menu) and favicon

Any static host works (GitHub Pages, Netlify, Cloudflare Pages).
