---
created: "2026-04-16"
last_edited: "2026-04-16"
---
# Implementation Tracking: site-shell

Build site: context/plans/build-site.md

| Task | Status | Notes |
|------|--------|-------|
| T-001 | DONE | Astro 5.18 + TS strict scaffold. build/typecheck/dev smoke pass. |
| T-002 | DONE | `src/content/config.ts` declares `projects` collection. build syncs it. |
| T-003 | DONE | `src/styles/global.css` — bg `#111`, monospace stack, accent `rgba(0,255,26,0.5)`, `.site-header` glow shadow, `@font-face` Hack Nerd Font. |
| T-007 | DONE | `src/layouts/BaseLayout.astro` — head (title, description, favicon, OG, canonical), Header + Footer, main slot with id=main, skip-link, global body bg #111. Accepts title/description/ogType props. |
| T-011 | PARTIAL | `src/components/Header.astro` done in Tier 1 for layout wiring — site-name links /, nav links About/Projects/Contact, aria-current on active, keyboard-focusable, responsive <640px (stacked). Covers T-011, T-016, T-017, T-018 de-facto. Re-validated per task in Tier 2/3. |
| T-012 | DONE | `src/components/Footer.astro` mounted in BaseLayout — copyright + author from siteConfig. |
| T-013 | DONE | BaseLayout renders per-page title/description + og:title/og:description/og:url/og:type. Canonical URL derived from siteUrl + pathname. |
| T-014 | TODO | `@astrojs/sitemap` wired; sitemap emitted only after pages exist (Tier 3 adds pages). Robots.txt still missing — Tier 2. |
| T-015 | TODO | 404 page — Tier 2. |
| T-016 | DONE | Active-link `aria-current="page"` + `.is-active` class added in Header. |
| T-017 | DONE | `:focus-visible` outline on anchors/buttons in global.css. Nav links keyboard reachable. |
| T-018 | DONE | Responsive: <640px Header stacks nav under site-name. Verified visually. |
| T-019 | TODO | Full responsive audit at 375/640/1280 — Tier 3. |
| T-027 | TODO | WCAG contrast audit — Tier 3. |
| T-030 | TODO | Deploy workflow — Tier 4. |
| T-031 | TODO | CNAME public/ — Tier 4. |
| T-032 | TODO | Live verify — Tier 4. |
