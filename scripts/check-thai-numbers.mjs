// Checks that a Thai case study has exactly the same numbers and percentages
// as the English one, so nothing changes in translation.
//
//   node scripts/check-thai-numbers.mjs             every file in content/th/
//   node scripts/check-thai-numbers.mjs kidsconnect one project
//   node scripts/check-thai-numbers.mjs kidsconnect path/to/draft.md
//
// Image and link URLs are ignored (file names like heatmap-round1.webp).
// Alt text and captions are checked, since they are translated too.

import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const [slugArg, draftPath] = process.argv.slice(2);

const thaiDir = path.join(root, "content/th");
const slugs = slugArg
  ? [slugArg]
  : fs.existsSync(thaiDir)
    ? fs.readdirSync(thaiDir).filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, ""))
    : [];

if (slugs.length === 0) {
  console.log("No Thai case studies in content/th/ yet.");
  process.exit(0);
}

// Every number in the text, as "56.3%", "2016", "3.70" and so on.
function numbers(markdown) {
  const text = markdown
    .replace(/\]\([^)\s]+/g, "](") // image and link URLs
    .replace(/<[^>]+>/g, " "); // HTML tags
  const counts = new Map();
  for (const [n] of text.matchAll(/\d+(?:[.,]\d+)*%?/g)) counts.set(n, (counts.get(n) ?? 0) + 1);
  return counts;
}

let failed = false;
for (const slug of slugs) {
  const en = numbers(fs.readFileSync(path.join(root, "content", `${slug}.md`), "utf-8"));
  const th = numbers(fs.readFileSync(draftPath ?? path.join(thaiDir, `${slug}.md`), "utf-8"));
  const mismatches = [...new Set([...en.keys(), ...th.keys()])]
    .filter((n) => en.get(n) !== th.get(n))
    .map((n) => `  ${n}: English ${en.get(n) ?? 0}×, Thai ${th.get(n) ?? 0}×`);

  if (mismatches.length) {
    failed = true;
    console.error(`✗ ${slug}: numbers differ`);
    console.error(mismatches.join("\n"));
  } else {
    const total = [...en.values()].reduce((a, b) => a + b, 0);
    console.log(`✓ ${slug}: all ${total} numbers match`);
  }
}
process.exit(failed ? 1 : 0);
