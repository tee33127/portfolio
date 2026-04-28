import { notFound } from "next/navigation";
import { marked, Renderer } from "marked";
import fs from "fs";
import path from "path";
import { caseStudies } from "@/lib/case-studies";
import type { Metadata } from "next";
import CaseStudyView from "./CaseStudyView";

const renderer = new Renderer();
renderer.image = ({ href, text }) => {
  return `<figure><img src="${href}" alt="${text}" /><figcaption>${text}</figcaption></figure>`;
};

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
  return {
    title: `${study.title} — Tee`,
    description: study.description,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  const filePath = path.join(process.cwd(), "content", `${slug}.md`);
  const markdown = fs.readFileSync(filePath, "utf-8");
  const html = await marked(markdown, { renderer });

  return <CaseStudyView study={study} html={html} />;
}
