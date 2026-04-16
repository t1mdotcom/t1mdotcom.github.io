---
created: "2026-04-16"
last_edited: "2026-04-16"
---
# Implementation Overview

Build site: context/plans/build-site.md

## Domain Status

| Domain | Tasks Done / Total | Status |
|--------|---------------------|--------|
| site-shell | 17/18 | COMPLETE (T-032 pending external verify after first deploy) |
| content | 6/6 | COMPLETE |
| pages | 9/9 | COMPLETE |

## Summary

- Tier 0 (6 tasks): DONE — Astro scaffold + content config + theme + site config.
- Tier 1 (4 tasks): DONE — BaseLayout + Header/Footer + projects helper + seed content + schema verify.
- Tier 2 (5 tasks): DONE — SEO plumbing verified + sitemap + robots + 404.
- Tier 3 (12 tasks): DONE — Home/About/Projects list/Project detail/Contact/skip-link/article wrapper/contrast audit/responsive audit.
- Tier 4 (5 tasks): 4/5 DONE — deploy workflow, public/CNAME, per-page meta, cover alt. T-032 pending external verify after first push.

## Validation

- `npm run build` — 7 static pages, sitemap emitted, CNAME in dist.
- `npm run typecheck` — 0 errors across 15 files.
- `npm run dev` — Astro 5.18 dev server starts clean on :4321.
- T-009 schema validation manually verified: missing field → exit 1, wrong type → exit 1, both error messages name file + field.

## Outstanding

- T-032 Verify deployed Home serves 200 on custom domain — requires pushing to main, waiting for first workflow run, then `curl -I https://www.heinemann.foo`. Mark as DONE once confirmed.
