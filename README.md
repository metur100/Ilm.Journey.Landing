# Ilm Journey – website

Landing page for [Ilm Journey](https://github.com/metur100/Ilm.Journey), the free Islamic learning app
for the whole family: 119 games, the stories of all 25 prophets, the Seerah, Quran and Arabic in one app.

**Live:** https://metur100.github.io/Ilm.Journey.Landing/

- React 19 + Vite + TypeScript
- Every page is prerendered to static HTML – indexable and readable without JavaScript
- English, German and Bosnian (`/en/`, `/de/`, `/bs/`) with `hreflang`, sitemap and structured data
- No cookies, no analytics, no external fonts or scripts

## Pages

| Path | Content |
| --- | --- |
| `/<lang>/` | Landing page: hero, features, the 119 games, screenshots, principles, families, FAQ, download |
| `/<lang>/privacy/` | Privacy policy – **this is the URL for Google Play and the App Store** |
| `/<lang>/imprint/` | Imprint (Impressum) |
| `/<lang>/support/` | Support page with contact details |
| `404.html` | Not-found page |

`<lang>` is one of `en`, `de`, `bs`.

## Editing content

All texts live in `src/content/`:

- `site.ts` – site URL, contact details, store links (`SITE.stores`), app name and package
- `copy.ts` – every page text in English, German and Bosnian
- `legal.ts` – privacy policy and imprint

Screenshots go to `src/assets/screenshots/<lang>/NN-name.jpg` (phone, 540 × 960, 9:16). They are sorted by
file name; English is the fallback for a missing language. The eight slots match the eight captions in
`copy.ts` (`captures`).

Feature graphics, the app icon, favicons and the Open Graph image are in `public/assets/`:

- `feature-<lang>.png` – 1024 × 500, shown in the download section
- `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`, `favicon.png`
- `og-image.png` – 1200 × 630, used for social previews

`scripts/generate-images.py` regenerates the favicons, the Apple touch icon and `og-image.png` from
`icon-512.png` (requires Pillow: `pip install pillow`).

## Store links

The app is not live in the stores yet, so both badges show “Coming soon”. In `SITE.stores` (`site.ts`):

- set `play: true` once the app is live on Google Play;
- set `appStoreId` to the number from `https://apps.apple.com/app/id<number>` once it is live on the App Store.

The badges then become links automatically – no other changes are needed.

## Development

```bash
npm install
npm run dev        # dev server
npm run typecheck
npm run build      # client build + SSR build + prerender into dist/
npm run preview    # serve dist/
```

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`: install, typecheck, build and deploy `dist/` to
GitHub Pages (Settings → Pages → Source: GitHub Actions). The Vite `base` is `/Ilm.Journey.Landing/`.

## Related

- App: https://github.com/metur100/Ilm.Journey
- All Islamic learning apps: https://metur100.github.io/Islam.Apps.Landing/

The fonts (Lora, Nunito) are licensed under the SIL Open Font License – see `src/assets/fonts/OFL.txt`.
