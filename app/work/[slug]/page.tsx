import { notFound } from "next/navigation";
import { marked, Renderer } from "marked";
import fs from "fs";
import path from "path";
import sharp from "sharp";
import { caseStudies } from "@/lib/case-studies";
import { slugify } from "@/lib/slugify";
import type { Metadata } from "next";
import CaseStudyView from "./CaseStudyView";

export type Section = { id: string; label: string };

function extractSections(markdown: string): Section[] {
  return [...markdown.matchAll(/^##\s+(.+)$/gm)].map((m) => ({
    id: slugify(m[1]),
    label: m[1],
  }));
}

async function renderMarkdown(markdown: string): Promise<string> {
  const hrefs = [...markdown.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)].map((m) => m[1]);
  const dimensions = new Map<string, { width: number; height: number }>();
  await Promise.all(
    hrefs.map(async (href) => {
      const { width, height } = await sharp(
        path.join(process.cwd(), "public", href)
      ).metadata();
      if (width && height) dimensions.set(href, { width, height });
    })
  );

  const escapeAttr = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;");

  const renderer = new Renderer();
  renderer.image = ({ href, text }) => {
    const dim = dimensions.get(href);
    const sizeAttrs = dim ? ` width="${dim.width}" height="${dim.height}"` : "";
    return `<figure><img src="${href}" alt="${escapeAttr(text)}"${sizeAttrs} decoding="async" /><figcaption>${text}</figcaption></figure>`;
  };
  renderer.heading = ({ text, depth }) => {
    if (depth === 2) {
      return `<h2 id="${slugify(text)}">${text}</h2>`;
    }
    return `<h${depth}>${text}</h${depth}>`;
  };
  // A paragraph containing only an image renders as a block-level <figure>.
  // Marked would otherwise wrap it in <p>, which the browser then splits into
  // an empty <p> plus a sibling <figure> (invalid nesting) — harmless on its
  // own, but that stray empty <p> becomes a real cell inside a CSS grid.
  renderer.paragraph = (token) => {
    if (token.tokens.length === 1 && token.tokens[0].type === "image") {
      return renderer.image(token.tokens[0] as Parameters<typeof renderer.image>[0]);
    }
    return `<p>${renderer.parser.parseInline(token.tokens)}</p>`;
  };

  return marked(markdown, { renderer });
}

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
  const title = `${study.title}: Tee`;
  const url = `/work/${study.slug}`;
  return {
    title,
    description: study.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: study.description,
      url,
      images: [
        {
          url: study.thumbnail,
          width: 1200,
          height: 751,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: study.description,
      images: [study.thumbnail],
    },
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
  const html = await renderMarkdown(markdown);
  const sections = extractSections(markdown);

  return <CaseStudyView study={study} html={html} sections={sections} />;
}
