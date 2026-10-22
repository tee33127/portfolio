import Link from "next/link";
import { caseStudies, localizedStudy, type CaseStudy } from "@/lib/case-studies";
import { caseStudyLink, type Section } from "@/lib/case-study-content";
import { localePath, type Dictionary } from "@/lib/i18n";
import SectionNav from "./SectionNav";

// Case study page for both languages. Labels come from lib/i18n.ts, the
// header text from the project's fields (or its `th` block) in lib/case-studies.ts.
export default function CaseStudyView({
  t,
  study: baseStudy,
  html,
  sections,
}: {
  t: Dictionary;
  study: CaseStudy;
  html: string;
  sections: Section[];
}) {
  const study = localizedStudy(baseStudy, t.lang);
  const l = t.caseStudy;
  const idx = caseStudies.findIndex((s) => s.slug === study.slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];
  const nextLink = caseStudyLink(t.lang, next.slug);

  return (
    <article className="pb-16">
      <Link
        href={localePath(t.lang, "/")}
        className="inline-block text-sm text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors mb-12"
      >
        <span aria-hidden="true">←</span> {l.back}
      </Link>

      <div className="lg:grid lg:grid-cols-[120px_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[140px_minmax(0,1fr)] xl:gap-14">
        <SectionNav sections={sections} label={l.sectionsLabel} />

        <div className="min-w-0">
          {/* Title block */}
          <div className="mb-10">
            <h1 lang="en" className="text-3xl font-semibold tracking-tight leading-tight mb-3">
              {study.title}
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed">
              {study.subtitle}
            </p>
          </div>

          {/* Metadata row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-zinc-100 dark:border-zinc-800 mb-12">
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-600 dark:text-zinc-400 mb-1">{l.type}</p>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">{study.type.split(" · ")[0]}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-600 dark:text-zinc-400 mb-1">{l.year}</p>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">{study.year}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-600 dark:text-zinc-400 mb-1">{l.role}</p>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">{study.role}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-600 dark:text-zinc-400 mb-1">{l.team}</p>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">{study.team}</p>
            </div>
          </div>

          {/* Key outcome callout */}
          <div className="w-full rounded-xl bg-zinc-100 dark:bg-zinc-900 px-6 py-5 mb-12">
            <p className="text-xs uppercase tracking-widest text-zinc-600 dark:text-zinc-400 mb-1">{l.keyOutcome}</p>
            <p className="text-base font-medium text-zinc-900 dark:text-zinc-100">{study.outcome}</p>
          </div>

          {/* At a glance */}
          <section aria-labelledby="at-a-glance" className="mb-12">
            <h2 id="at-a-glance" className="text-xs uppercase tracking-widest text-zinc-600 dark:text-zinc-400 mb-4">
              {l.atAGlance}
            </h2>
            <dl className="space-y-4 max-w-[68ch]">
              {[
                [l.problem, study.problem],
                [l.whatIDid, study.myContribution],
                [l.result, study.result],
              ].map(([label, text]) => (
                <div key={label} className="sm:grid sm:grid-cols-[120px_minmax(0,1fr)] sm:gap-6">
                  <dt className="text-sm font-medium text-black dark:text-white mb-1 sm:mb-0">{label}</dt>
                  <dd className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">{text}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Case study content from content/<slug>.md or content/th/<slug>.md */}
          <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />

          {/* Full document link */}
          {study.doc && (
            <div className="mt-12 mb-12">
              <a
                href={study.doc}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium border border-zinc-200 dark:border-zinc-700 rounded-lg px-5 py-2.5 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
              >
                {l.report}
                <span className="text-zinc-400" aria-hidden="true">↗</span>
                <span className="sr-only">{t.common.newTab}</span>
              </a>
            </div>
          )}

          {/* Next project */}
          <div className="mt-16 pt-8 border-t border-zinc-100 dark:border-zinc-800">
            <p className="text-xs uppercase tracking-widest text-zinc-600 dark:text-zinc-400 mb-4">{l.next}</p>
            <Link
              href={nextLink.href}
              hrefLang={nextLink.fallbackToEnglish ? "en" : undefined}
              className="group inline-flex items-baseline gap-2 font-medium text-black dark:text-white hover:opacity-60 transition-opacity"
            >
              <span lang="en">{next.title}</span>
              <span aria-hidden="true" className="text-zinc-400 motion-safe:group-hover:translate-x-0.5 transition-transform inline-block">→</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
