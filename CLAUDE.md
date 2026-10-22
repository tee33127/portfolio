@AGENTS.md

# Project brief

## Who I am
- Tee (Teetawat Trakulsuebchai), UX designer and researcher.
- M.S. Human-Computer Interaction, DePaul University (GPA 3.83).
- Based in Bangkok. Looking for UX/Product Designer or UX Researcher roles in Thailand (Singapore possible).
- Before UX: Video Editor at Garena Online (2020 to 2022). That work is shown in Visual & Motion.

## Stack and hosting
- Next.js 16 App Router, Tailwind CSS v4, next-themes, marked.
- Live site: https://teetawat.vercel.app
- Repo: github.com/tee33127/portfolio
- Vercel auto-deploys on every push to `main`.
- Contact form posts to Formspree (form ID `xeevbzqr`).

## Where things are
- Case study text: `content/<slug>.md`, Thai in `content/th/<slug>.md` (a Thai case study page exists only when that file exists)
- Case study card metadata: `lib/case-studies.ts` (Thai text in each project's `th` block)
- Visual & Motion work: `lib/visual-work.ts` (Thai titles and roles in `th`)
- Images: `public/images/<slug>/` (webp)
- Visual work videos: `public/media/visual-work/`
- Case study PDF reports: `public/docs/`
- Resume: `public/` (PDF)
- UI text for both languages (nav, homepage, About, Visual & Motion, case study labels, footer, form): `lib/i18n.ts`
- Internal links: always `localePath(lang, "/path")` from `lib/i18n.ts`, never a hard-coded href. Case study links: `caseStudyLink()` in `lib/case-study-content.ts`.
- English pages: `app/(en)/`. Thai pages: `app/th/` (own root layout, `<html lang="th">`, Thai font)
- Shared header, footer and contact form: `app/components/SiteShell.tsx` and `app/components/`
- Case study template: `app/components/CaseStudyView.tsx` and `SectionNav.tsx`; markdown rendering in `lib/case-study-content.ts`. Routes: `app/(en)/work/[slug]/` and `app/th/work/[slug]/`
- Share images: `app/components/CaseStudyOgImage.tsx`. The Thai one is drawn with sharp and IBM Plex Sans Thai from `assets/fonts/`, because next/og can't stack Thai tone marks.
- Link check: `node scripts/check-thai-links.mjs` after `npm run build` (fails if a Thai page links out of /th)

## Rules
- I'm not a developer. Keep solutions simple and avoid adding dependencies unless they're needed.
- Run `npm run build` and `npm run lint` before saying something is done.
- Commit after each task with a clear message.
- ASK ME before `git push`. Pushing deploys the live site.
- Accessibility is my specialty. Every change must meet WCAG 2.2 AA: contrast, alt text, keyboard access, visible focus.

## Languages
- The site is bilingual: English, plus Thai at `/th` (homepage, About, Visual & Motion).
- Case studies are being translated one at a time (Round 2, Task 7). Until a project has `content/th/<slug>.md`, its Thai card links to the English page.
- The EN/TH toggle always goes to the same page in the other language, or to /th if there is no Thai version yet.
- Once Thai exists, every UI text change must update both languages.
- Thai case study headings: design-thinking stage names (Empathize, Define, Ideate, Prototype, Test, Reflect) stay English; all other headings are Thai with the English id kept, e.g. `## ปัญหา {#the-problem}`.
- Check numbers after editing a Thai case study: `node scripts/check-thai-numbers.mjs`.
- Thai copy: semi-formal and natural, first person with "ผม" (never "กระผม"). Write the repeat sign with a space: "พอ ๆ".
  Keep common English UX terms (UX, usability testing, prototype, Figma) in English.

## Writing tone
- First person, clear, honest, no hype.
- Never invent numbers or results.
- No em dashes or en dashes in my copy. Write date ranges as "Sep 2020 to Mar 2022".

## Roadmap
- The improvement plan is in `../CLAUDE_CODE_INSTRUCTIONS.md` (Task 0 to Task 5, then Round 2: Task 6 to Task 8).
- Do one task at a time and wait for me to say "next".
