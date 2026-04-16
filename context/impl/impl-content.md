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
| T-008 | DONE | `src/lib/projects.ts` exports `getPublishedProjects()` (filter draft, sort date desc) and `getFeaturedProjects(limit)`. typecheck pass. |
| T-009 | DONE | Verified schema validation: missing `title` → `npm run build` exit 1, error names file+field. Wrong type (string for `tech`) → exit 1, error names field with expected type. See verification procedure below. |
| T-010 | DONE | Seed content: `cavekit-portfolio.md` (featured), `gpg-identity.md` (featured). siteConfig.socialLinks contains real GitHub (t1mdotcom), LinkedIn (tim-heinemann-524764190), Xing (Tim_Heinemann15), GPG keyserver URL. about.md email=tim@heinemann.foo. |

## T-009 Verification Procedure

To re-verify schema validation fails the build:

1. Create a broken entry (missing required field):
   ```
   src/content/projects/_verify-missing.md
   ---
   description: test
   tech: [test]
   date: 2026-01-01
   ---
   ```
2. Rename with no leading underscore (so Astro picks it up) and run `npm run build`. Expect exit 1 and error naming file + `title: Required`.
3. Repeat with wrong type (e.g. `tech: just-a-string`). Expect exit 1 and error naming `tech: Expected type "array", received "string"`.
4. Remove broken file. Build passes again.

Confirmed 2026-04-16 on Astro 5.18.
