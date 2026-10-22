import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/case-studies";
import { caseStudyContent, thaiCaseStudySlugs } from "@/lib/case-study-content";
import { dictionaries } from "@/lib/i18n";
import { caseStudyMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import CaseStudyView from "@/app/components/CaseStudyView";

const t = dictionaries.th;

// A Thai case study page exists only once content/th/<slug>.md exists.
// Any other slug is a 404 (the Thai homepage card links to English instead).
export const dynamicParams = false;

export function generateStaticParams() {
  return thaiCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};
  return caseStudyMetadata(t, study);
}

export default async function ThaiCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  const { html, sections } = await caseStudyContent(slug, "th");
  return <CaseStudyView t={t} study={study} html={html} sections={sections} />;
}
