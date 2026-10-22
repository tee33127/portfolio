import fs from "fs";
import path from "path";
import { marked, Renderer } from "marked";
import sharp from "sharp";
import { slugify } from "./slugify";
import { localePath, type Lang } from "./i18n";

// Server-only helpers for case study pages: which Thai case studies exist,
// where a case study link should go, and markdown to HTML.

export type Section = { id: string; label: string };

const contentDir = path.join(process.cwd(), "content");

// Slugs that have a Thai version in content/th/<slug>.md.
export function thaiCaseStudySlugs(): string[] {
  const dir = path.join(contentDir, "th");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

// Link to a case study. On the Thai site, a case study without a Thai
// version yet links to the English page (fallbackToEnglish = true).
export function caseStudyLink(lang: Lang, slug: string) {
  const hasThai = thaiCaseStudySlugs().includes(slug);
  const fallbackToEnglish = lang === "th" && !hasThai;
  return {
    href: localePath(fallbackToEnglish ? "en" : lang, `/work/${slug}`),
    fallbackToEnglish,
  };
}

function extractSections(markdown: string): Section[] {
  return [...markdown.matchAll(/^##\s+(.+)$/gm)].map((m) => ({
    id: slugify(m[1]),
    label: m[1],
  }));
}

async function renderMarkdown(markdown: string): Promise<string> {
  const hrefs = [...markdown.matchAll(/!\[[^\]]*\]\(([^)\s]+)/g)].map((m) => m[1]);
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
  const escapeHtml = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // Markdown alt text becomes the image's alt. A visible caption only appears
  // when the image has a markdown title: ![alt](src "caption"). Using alt as
  // the caption too made screen readers announce the same text twice.
  const renderer = new Renderer();
  renderer.image = ({ href, title, text }) => {
    const dim = dimensions.get(href);
    const sizeAttrs = dim ? ` width="${dim.width}" height="${dim.height}"` : "";
    const caption = title ? `<figcaption>${escapeHtml(title)}</figcaption>` : "";
    return `<figure><img src="${href}" alt="${escapeAttr(text)}"${sizeAttrs} decoding="async" />${caption}</figure>`;
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

// content/<slug>.md for English, content/th/<slug>.md for Thai.
export async function caseStudyContent(slug: string, lang: Lang) {
  const file = path.join(contentDir, lang === "th" ? "th" : "", `${slug}.md`);
  const markdown = fs.readFileSync(file, "utf-8");
  return { html: await renderMarkdown(markdown), sections: extractSections(markdown) };
}
