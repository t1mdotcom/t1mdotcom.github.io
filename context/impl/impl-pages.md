---
created: "2026-04-16"
last_edited: "2026-04-16"
---
# Implementation Tracking: pages

Build site: context/plans/build-site.md

| Task | Status | Notes |
|------|--------|-------|
| T-020 | DONE | `src/pages/index.astro` — name/role/intro, CTAs to /projects + /contact, featured teaser (up to 3 from getFeaturedProjects). |
| T-021 | DONE | `src/pages/about.astro` — loads about.md via `import { Content, frontmatter }`. Header shows name/role/location. Body renders markdown with themed prose. |
| T-022 | DONE | `src/pages/projects/index.astro` — sorted date desc, cover (astro:assets Image), title links detail, repo/live conditional, tech tags, no infinite scroll. |
| T-023 | DONE | `src/pages/projects/[slug].astro` — getStaticPaths filters !draft. Renders body + meta (title/date/tech/repoUrl/liveUrl). Drafts not generated → 404 in production. ogType='article'. |
| T-024 | DONE | `src/pages/contact.astro` — mailto from siteConfig.email, GPG link from socialLinks.platform==='GPG', profile links (GitHub/LinkedIn/Xing) filtered from socialLinks. No `<form>` element. |
| T-025 | DONE | 404 page h1 + link to `/` via BaseLayout (T-015 wiring). |
| T-026 | DONE | Skip-to-content link is first focusable element in BaseLayout (visually hidden until focus), targets #main. Exactly one `<h1>` per page, `<nav>` in Header, `<main>` wraps content. |
| T-028 | DONE | Every page passes unique title + description to BaseLayout. Verified via grep over dist/*.html: each has unique `<title>` and meta description and matching og:title/og:description. |
| T-029 | DONE | Project detail wraps body in `<article class="project-detail">`. Cover Image alt = entry.data.title (always non-empty because title is required). |
