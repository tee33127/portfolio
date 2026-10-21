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
- Case study text: `content/<slug>.md`
- Case study card metadata: `lib/case-studies.ts`
- Visual & Motion work: `lib/visual-work.ts`
- Images: `public/images/<slug>/` (webp)
- Visual work videos: `public/media/visual-work/`
- Case study PDF reports: `public/docs/`
- Resume: `public/` (PDF)
- UI text for both languages (nav, homepage, About, footer, form): `lib/i18n.ts`
- English pages: `app/(en)/`. Thai pages: `app/th/` (own root layout, `<html lang="th">`, Thai font)
- Shared header, footer and contact form: `app/components/SiteShell.tsx` and `app/components/`
- Case study template: `app/(en)/work/[slug]/` (`page.tsx`, `CaseStudyView.tsx`, `SectionNav.tsx`)

## Rules
- I'm not a developer. Keep solutions simple and avoid adding dependencies unless they're needed.
- Run `npm run build` and `npm run lint` before saying something is done.
- Commit after each task with a clear message.
- ASK ME before `git push`. Pushing deploys the live site.
- Accessibility is my specialty. Every change must meet WCAG 2.2 AA: contrast, alt text, keyboard access, visible focus.

## Languages
- The site is becoming bilingual: English, plus Thai at `/th` for the homepage and About only (added later).
- Case studies stay English only.
- Once Thai exists, every UI text change must update both languages.
- Thai copy: semi-formal and natural, first person with "ผม" (never "กระผม").
  Keep common English UX terms (UX, usability testing, prototype, Figma) in English.

## Writing tone
- First person, clear, honest, no hype.
- Never invent numbers or results.
- No em dashes or en dashes in my copy. Write date ranges as "Sep 2020 to Mar 2022".

## Roadmap
- The improvement plan is in `../CLAUDE_CODE_INSTRUCTIONS.md` (Task 0 to Task 5).
- Do one task at a time and wait for me to say "next".
