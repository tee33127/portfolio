// Checks that every internal link on the built Thai pages stays in /th.
// Run after `npm run build`:  node scripts/check-thai-links.mjs
//
// Allowed exceptions:
// - the EN option of the language toggle
// - a case study card or "Next" link to /work/<slug> while content/th/<slug>.md
//   doesn't exist yet (marked hreflang="en")
// - files: PDFs, images, videos
// It also fails if a /th link points to a Thai page that wasn't built.

import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const appDir = path.join(root, ".next/server/app");
const siteOrigin = "https://teetawat.vercel.app";

if (!fs.existsSync(path.join(appDir, "th.html"))) {
  console.error("No built Thai pages found. Run `npm run build` first.");
  process.exit(1);
}

const thaiDir = path.join(root, "content/th");
const thaiSlugs = fs.existsSync(thaiDir)
  ? fs.readdirSync(thaiDir).filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, ""))
  : [];

// Built Thai pages, as URL paths: th.html -> /th, th/about.html -> /th/about
function listHtml(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return listHtml(full);
    return entry.name.endsWith(".html") ? [full] : [];
  });
}
const files = [path.join(appDir, "th.html"), ...listHtml(path.join(appDir, "th"))];
const toUrlPath = (file) => "/" + path.relative(appDir, file).replace(/\.html$/, "");
const builtPages = new Set(files.map(toUrlPath));

const attr = (tag, name) => tag.match(new RegExp(`\\s${name}="([^"]*)"`, "i"))?.[1];
const isFile = (p) => /\.(pdf|png|jpe?g|webp|svg|mp4|webm)$/i.test(p) || /^\/(images|media|docs)\//.test(p);

const problems = [];
let checked = 0;

for (const file of files) {
  const page = toUrlPath(file);
  const html = fs.readFileSync(file, "utf-8");

  for (const [tag] of html.matchAll(/<a\s[^>]*>/gi)) {
    let href = attr(tag, "href");
    if (!href || href.startsWith("#") || href.startsWith("mailto:")) continue;
    href = href.replace(/&amp;/g, "&");
    if (href.startsWith(siteOrigin)) href = href.slice(siteOrigin.length) || "/";
    if (!href.startsWith("/") || href.startsWith("//")) continue; // external site

    checked++;
    const target = href.split(/[#?]/)[0];
    const hreflang = attr(tag, "hreflang");

    if (isFile(target)) continue;

    if (target === "/th" || target.startsWith("/th/")) {
      if (!builtPages.has(target)) problems.push(`${page}: ${href} (Thai page doesn't exist)`);
      continue;
    }

    if (hreflang === "en" && attr(tag, "aria-label") === "English") continue; // language toggle

    const work = target.match(/^\/work\/([^/]+)$/);
    if (work && hreflang === "en") {
      if (thaiSlugs.includes(work[1])) {
        problems.push(`${page}: ${href} (Thai version exists, link to /th/work/${work[1]})`);
      }
      continue;
    }

    problems.push(`${page}: ${href} (leaves /th)`);
  }
}

if (problems.length) {
  console.error(`✗ ${problems.length} link problem(s) on Thai pages:`);
  for (const p of problems) console.error(`  ${p}`);
  process.exit(1);
}
console.log(`✓ ${checked} internal links on ${files.length} Thai pages all stay in /th (or are allowed English fallbacks).`);
