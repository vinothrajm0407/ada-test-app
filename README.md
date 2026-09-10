# ada-test-app
Seeded accessibility issues for testing ADA Tool Auto-Fix.

Live crawl target: https://vinothrajm0407.github.io/ada-test-app/ (served from `docs/`, GitHub Pages).

Pages, each seeded with a different spread of WCAG/axe violations:
- `docs/index.html` — home: duplicate id, missing image alt, empty button/link, heading-order skip, color contrast, missing iframe title, unlabeled select, positive tabindex, list built from divs
- `docs/products.html` — product grid: unlabeled filter input, missing/filler image alt, empty icon buttons, invalid `role="checkbox"` div, duplicate labels
- `docs/contact.html` — form: placeholder-as-label, invalid autocomplete token, color-only error state, unlabeled select, radio group without fieldset/legend, link nested in button
- `docs/dashboard.html` — data view: empty document title, heading-order skip, chart image with no alt, table headers built with `td` instead of `th`, `aria-hidden` wrapping a focusable button, unreachable scrollable region, clickable div with no keyboard support
- `docs/media.html` — media: missing `html lang`, low-contrast body text, video without captions, iframe without title, autoplaying audio, tiny tap targets, positive tabindex

`src/` is an unused Vite/React scaffold — not built or deployed; `docs/` is the actual crawl target.
