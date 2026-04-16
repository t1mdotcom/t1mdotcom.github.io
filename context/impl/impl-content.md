---
created: "2026-04-16"
last_edited: "2026-04-16"
---
# Implementation Tracking: content

Build site: context/plans/build-site.md

| Task | Status | Notes |
|------|--------|-------|
| T-004 | DONE | `projects` collection with Zod schema (title, desc<=200, tech>=1, repoUrl/liveUrl url, cover image, date coerce, featured/draft bool default false). |
| T-005 | DONE | `src/content/about.md` with frontmatter name/role/location/email. placeholder body. build-time only. |
| T-006 | DONE | `src/config.ts` exports typed siteConfig + SocialLink type. siteUrl `https://www.heinemann.foo`. 4 socialLinks (GitHub/LinkedIn/Xing/GPG real URLs). typecheck clean. |
| T-008 | TODO | Collection access helper — Tier 1. |
| T-009 | TODO | Schema validation behaviour verification — Tier 1. |
| T-010 | TODO | Seed projects — Tier 1. |
