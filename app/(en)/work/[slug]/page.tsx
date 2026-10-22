import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/case-studies";
import { caseStudyContent } from "@/lib/case-study-content";
import { dictionaries } from "@/lib/i18n";
import { caseStudyMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import CaseStudyView from "@/app/components/CaseStudyView";

const t = dictionaries.en;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
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

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  const { html, sections } = await caseStudyContent(slug, "en");
  return <CaseStudyView t={t} study={study} html={html} sections={sections} />;
}
