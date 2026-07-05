# Enjazat Albaina — ULTRA website

A faithful implementation of the Claude Design prototype (`Enjazat Albaina - Website.dc.html`)
as a dependency-free static site. Bilingual (English / Arabic) with full RTL support, hardened
for a client-ready launch (performance, accessibility, SEO, shareable URLs).

## Stack

Plain HTML + CSS + vanilla JavaScript — no build step, no dependencies.
Deploys to any static host (Netlify, Vercel, GitHub Pages, S3, nginx…) by serving this folder.

## Files

- `index.html` — page shell, fonts, favicon, hero preload, Open Graph/Twitter, canonical,
  hreflang, and Organization structured data.
- `styles.css` — all styling. Design tokens in `:root`; RTL swaps fonts via `[dir="rtl"]` and
  uses CSS logical properties so the layout mirrors automatically. Focus-visible outlines,
  reduced-motion support, and an `.sr-only` utility. Responsive at 1100 / 900 / 560px.
- `app.js` — the app: EN/AR copy, product data, view rendering, **hash-based routing**,
  language toggle (persisted), product filtering, per-view `<title>`/meta + Product JSON-LD,
  and the contact form handler.
- `assets/` — logos, `favicon.svg`, and `products/` (product photos).
- `server.js` — a tiny static file server for local preview (Cache-Control + gzip). Not needed
  in production.
- `robots.txt`, `sitemap.xml` — SEO.

## Run locally

```bash
node server.js            # → http://localhost:4173
# or any static server, e.g.
python3 -m http.server 4173
```

## URLs / routing

The site is a single-page app with **shareable, deep-linkable hash URLs** and working
browser Back/Forward:

- `#/` — Home
- `#/products` — Products
- `#/product/<key>` — a product detail page (keys: `blu`, `superflex`, `flex`, `fix`,
  `fiber1`, `fiber2`)
- `#/about`, `#/contact`

The chosen language is remembered across visits (`localStorage`).

## Adding / matching product images  ← do this to swap in real photos

Product image mapping lives in one place: the `RAW` array near the top of `app.js`.

1. Drop the image into `assets/products/` (e.g. `assets/products/c2te-super-flex.jpg`).
2. On that product's row in `RAW`, set `image` to the path and (optionally) `iw`/`ih` to the
   file's pixel width/height (prevents layout shift):

   ```js
   { key: 'superflex', name: 'C2TE S2 SUPER FLEX', image: 'assets/products/c2te-super-flex.jpg',
     iw: 900, ih: 1200, /* …rest unchanged… */ }
   ```

3. Leave `image: null` to keep the CSS-drawn ULTRA bag mockup.

**Keep images light.** For photos on a solid background, export JPEG (quality ~80). For
product cut-outs that sit on coloured sections (like the hero), use a transparent PNG and
quantise it (e.g. Pillow `FASTOCTREE`) — the current `blu-piscina-hero.png` is a transparent
cut-out, ~125 KB at 696×1200. Aim for ~800–1200px on the long edge and well under ~300 KB each.

## Performance notes

- The hero image is preloaded (`fetchpriority="high"`); below-the-fold images are
  `loading="lazy"` + `decoding="async"` with intrinsic `width`/`height`.
- Navigation only swaps the main view — the header/footer aren't rebuilt — so there's no
  image re-fetch or flicker between pages/filters.
- For production hosting set long-lived cache headers on `assets/*`
  (`Cache-Control: public, max-age=31536000, immutable`), short cache on `styles.css`/`app.js`,
  `no-cache` on `index.html`, and enable gzip/Brotli. Consider minifying `styles.css`/`app.js`.

## Before launch — placeholders to replace

These are intentionally left as clear placeholders:

- **Phone** `+966 5X XXX XXXX` (footer + contact) — set the real number.
- **WhatsApp** `WA_LINK` in `app.js` (`https://wa.me/9665XXXXXXXX`) — set the real number.
- **Contact form** currently shows a success message client-side only — wire it to a backend
  or a form service (e.g. Formspree) to actually receive submissions.
- **Map** on the Contact page is a placeholder — embed a real map (Google Maps / Mapbox).
- **Datasheet** buttons on product pages are no-ops — link to real PDFs.
- **Domain** `https://enjazatalbaina.com` is assumed in `index.html`, `robots.txt`, and
  `sitemap.xml` — update if the production domain differs.
- Unused logo variants `enjazat-logo-green.png` / `enjazat-logo-terra.png` are kept for future
  use; they aren't loaded at runtime.
