// Checks that a Thai case study has exactly the same numbers and percentages
// as the English one, so nothing changes in translation.
//
//   node scripts/check-thai-numbers.mjs             every file in content/th/
//   node scripts/check-thai-numbers.mjs kidsconnect one project
//   node scripts/check-thai-numbers.mjs kidsconnect path/to/draft.md
//
// Image and link URLs are ignored (file names like heatmap-round1.webp).
// Alt text and captions are checked, since they are translated too.
// An English number word may become a digit in Thai ("Four participants"
// -> "ผู้เข้าร่วม 4 คน"), so English words one to twenty can cover an extra
// Thai digit. Any other difference fails.

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

const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
  "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];

function numberWords(markdown) {
  const counts = new Map();
  for (const [w] of markdown.toLowerCase().matchAll(/\b[a-z]+\b/g)) {
    const n = words.indexOf(w);
    if (n >= 0) counts.set(String(n), (counts.get(String(n)) ?? 0) + 1);
  }
  return counts;
}

let failed = false;
for (const slug of slugs) {
  const enText = fs.readFileSync(path.join(root, "content", `${slug}.md`), "utf-8");
  const en = numbers(enText);
  const enWords = numberWords(enText);
  const th = numbers(fs.readFileSync(draftPath ?? path.join(thaiDir, `${slug}.md`), "utf-8"));
  const mismatches = [...new Set([...en.keys(), ...th.keys()])]
    .filter((n) => {
      const extra = (th.get(n) ?? 0) - (en.get(n) ?? 0);
      return extra < 0 || extra > (enWords.get(n) ?? 0);
    })
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
