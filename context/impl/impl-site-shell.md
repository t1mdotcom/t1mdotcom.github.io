---
created: "2026-04-16"
last_edited: "2026-04-16"
---
# Implementation Tracking: site-shell

Build site: context/plans/build-site.md

| Task | Status | Notes |
|------|--------|-------|
| T-001 | DONE | Astro 5.18 + TS strict scaffold. build/typecheck/dev smoke pass. |
| T-002 | DONE | `src/content/config.ts` declares `projects` collection. |
| T-003 | DONE | `src/styles/global.css` — bg `#111`, monospace, accent `rgba(0,255,26,0.5)`, `.site-header` glow shadow, @font-face Hack Nerd Font. |
| T-007 | DONE | `src/layouts/BaseLayout.astro` — head metadata (title/description/OG/canonical/twitter), skip-link, Header, main#main, Footer. `ogType` prop defaults to `website`. |
| T-011 | DONE | `src/components/Header.astro` — site-name links `/`, nav links About/Projects/Contact, aria-current on active page. |
| T-012 | DONE | `src/components/Footer.astro` — copyright year + author from siteConfig. |
| T-013 | DONE | BaseLayout renders per-page title/description + og:title/og:description/og:url/og:type. Verified in every built page. |
| T-014 | DONE | `@astrojs/sitemap` emits dist/sitemap-index.xml + sitemap-0.xml with all 6 routed pages. public/robots.txt references sitemap URL. |
| T-015 | DONE | `src/pages/404.astro` uses BaseLayout, heading "404 — Page not found", link to `/`. Built as dist/404.html. |
| T-016 | DONE | Header applies `aria-current="page"` + `.is-active` class on matching route. |
| T-017 | DONE | `:focus-visible` outline on all anchors and buttons. |
| T-018 | DONE | Responsive Header <640px stacks nav under site-name. |
| T-019 | DONE | No-horizontal-scroll: `overflow-x: hidden; max-width: 100%` on html/body; content wrapper 1100px max + 20px padding; images max-width 100%; nav flex-wrap. Audited at 375/640/1280. |
| T-027 | DONE | WCAG AA contrast manually computed: body #989898 on #111 ≈ 6.38:1 (AA pass); link rgba(0,255,26,0.5) blend on #111 ≈ 4.58:1 (AA pass); hover rgba(0,255,26,0.9) ≈ 10.6:1 (AAA pass). Focus indicators: 2px solid rgba(0,255,26,0.9) outline meets contrast. |
| T-030 | DONE | `.github/workflows/deploy.yml` — triggers on push to main, npm ci, npm run build, uploads ./dist artifact, deploys via actions/deploy-pages@v4. Node 22. |
| T-031 | DONE | `public/CNAME` contains `www.heinemann.foo`. Astro copies to dist/CNAME on every build. Removed stale root-level CNAME. |
| T-032 | PENDING-REMOTE | External check — requires actual GitHub Pages deploy run. Must verify `curl -I https://www.heinemann.foo` returns 200 after first successful workflow. |
