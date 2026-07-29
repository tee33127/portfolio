import Link from "next/link";
import { caseStudies, type CaseStudy } from "@/lib/case-studies";

export default function CaseStudyView({
  study,
  html,
}: {
  study: CaseStudy;
  html: string;
}) {
  const idx = caseStudies.findIndex((s) => s.slug === study.slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <article className="pb-16">
      <Link
        href="/"
        className="inline-block text-sm text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors mb-12"
      >
        ← Work
      </Link>

      {/* Title block */}
      <div className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight leading-tight mb-3">
          {study.title}
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed">
          {study.subtitle}
        </p>
      </div>

      {/* Metadata row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-zinc-100 dark:border-zinc-800 mb-12">
        <div>
          <p className="text-xs uppercase tracking-widest text-zinc-600 dark:text-zinc-400 mb-1">Type</p>
          <p className="text-sm text-zinc-700 dark:text-zinc-300">{study.type.split(" · ")[0]}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-zinc-600 dark:text-zinc-400 mb-1">Year</p>
          <p className="text-sm text-zinc-700 dark:text-zinc-300">{study.year}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-zinc-600 dark:text-zinc-400 mb-1">Role</p>
          <p className="text-sm text-zinc-700 dark:text-zinc-300">{study.role}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-zinc-600 dark:text-zinc-400 mb-1">Team</p>
          <p className="text-sm text-zinc-700 dark:text-zinc-300">{study.team}</p>
        </div>
      </div>

      {/* Key outcome callout */}
      <div className="w-full rounded-xl bg-zinc-100 px-6 py-5 mb-12">
        <p className="text-xs uppercase tracking-widest text-zinc-600 mb-1">Key outcome</p>
        <p className="text-base font-medium text-zinc-900">{study.outcome}</p>
      </div>

      {/* Case study content (stays in English) */}
      <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />

      {/* Full document link */}
      <div className="mt-12 mb-12">
        <a
          href={study.doc}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium border border-zinc-200 dark:border-zinc-700 rounded-lg px-5 py-2.5 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
        >
          View full research report
          <span className="text-zinc-400">↗</span>
        </a>
      </div>

      {/* Next project */}
      <div className="mt-16 pt-8 border-t border-zinc-100 dark:border-zinc-800">
        <p className="text-xs uppercase tracking-widest text-zinc-600 dark:text-zinc-400 mb-4">Next</p>
        <Link
          href={`/work/${next.slug}`}
          className="group inline-flex items-baseline gap-2 font-medium text-black dark:text-white hover:opacity-60 transition-opacity"
        >
          {next.title}
          <span className="text-zinc-400 group-hover:translate-x-0.5 transition-transform inline-block">→</span>
        </Link>
      </div>
    </article>
  );
}
