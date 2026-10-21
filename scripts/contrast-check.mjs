// Contrast check for the colour pairs this site uses.
// Run: node scripts/contrast-check.mjs
//
// Tailwind colours (e.g. "zinc-500") are read from the installed Tailwind
// theme, so the numbers match what the browser actually draws. Plain hex
// values come from app/globals.css.
//
// Targets (WCAG 2.2 AA):
//   text   4.5:1 for normal text, 3:1 for large text (24px, or 18.66px bold)
//   ui     3:1 for focus outlines and other non-text indicators

import fs from "node:fs";

const theme = fs.readFileSync(
  new URL("../node_modules/tailwindcss/theme.css", import.meta.url),
  "utf8"
);

// oklch(L% C H) to sRGB [0..1], following the CSS Color 4 reference maths.
function oklchToRgb(l, c, h) {
  const a = c * Math.cos((h * Math.PI) / 180);
  const b = c * Math.sin((h * Math.PI) / 180);
  const l_ = l + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = l - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = l - 0.0894841775 * a - 1.291485548 * b;
  const [L, M, S] = [l_ ** 3, m_ ** 3, s_ ** 3];
  const lin = [
    4.0767416621 * L - 3.3077115913 * M + 0.2309699292 * S,
    -1.2684380046 * L + 2.6097574011 * M - 0.3413193965 * S,
    -0.0041960863 * L - 0.7034186147 * M + 1.707614701 * S,
  ];
  return lin.map((v) => {
    const x = Math.min(1, Math.max(0, v));
    return x <= 0.0031308 ? 12.92 * x : 1.055 * x ** (1 / 2.4) - 0.055;
  });
}

function color(name) {
  if (name.startsWith("#")) {
    const hex = name.length === 4 ? name.replace(/[0-9a-f]/gi, "$&$&").slice(1) : name.slice(1);
    return [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  }
  if (name === "white") return [1, 1, 1];
  if (name === "black") return [0, 0, 0];
  const match = theme.match(
    new RegExp(`--color-${name}:\\s*oklch\\(([\\d.]+)%\\s+([\\d.]+)\\s+([\\d.]+)\\)`)
  );
  if (!match) throw new Error(`Unknown colour: ${name}`);
  return oklchToRgb(match[1] / 100, Number(match[2]), Number(match[3]));
}

function luminance(rgb) {
  const [r, g, b] = rgb.map((v) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function ratio(fg, bg) {
  const [hi, lo] = [luminance(color(fg)), luminance(color(bg))].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

// [where it's used, foreground, background, kind]
// kind: "text" = 4.5:1, "large" = 3:1 (large text), "ui" = 3:1 (non-text)
const pairs = [
  ["Light: body and prose text", "#111", "white", "text"],
  ["Light: prose paragraphs", "#333", "white", "text"],
  ["Light: table cells", "#444", "white", "text"],
  ["Light: blockquotes", "#666", "white", "text"],
  ["Light: case study section labels (h2)", "#52525b", "white", "text"],
  ["Light: image captions", "#52525b", "white", "text"],
  ["Light: nav links, hero intro, subtitles", "zinc-500", "white", "text"],
  ["Light: small labels and card text", "zinc-600", "white", "text"],
  ["Light: case study metadata values", "zinc-700", "white", "text"],
  ["Light: footer text and form labels", "zinc-600", "zinc-100", "text"],
  ["Light: Key outcome label", "zinc-600", "zinc-100", "text"],
  ["Light: Key outcome text", "zinc-900", "zinc-100", "text"],
  ["Light: form placeholder", "zinc-500", "white", "text"],
  ["Light: form error message", "red-700", "zinc-100", "text"],
  ["Light: primary button text", "white", "black", "text"],
  ["Light: focus outline on page", "#18181b", "white", "ui"],
  ["Light: focus outline in footer", "#18181b", "zinc-100", "ui"],

  ["Dark: body text", "#f4f4f5", "zinc-950", "text"],
  ["Dark: prose paragraphs and lists", "#d4d4d8", "zinc-950", "text"],
  ["Dark: section labels (h2)", "#a1a1aa", "zinc-950", "text"],
  ["Dark: image captions", "#a1a1aa", "zinc-950", "text"],
  ["Dark: table cells and blockquotes", "#a1a1aa", "zinc-950", "text"],
  ["Dark: nav links and secondary text", "zinc-400", "zinc-950", "text"],
  ["Dark: case study metadata values", "zinc-300", "zinc-950", "text"],
  ["Dark: footer text and form labels", "zinc-400", "zinc-900", "text"],
  ["Dark: Key outcome label", "zinc-400", "zinc-900", "text"],
  ["Dark: Key outcome text", "zinc-100", "zinc-900", "text"],
  ["Dark: form input text", "white", "zinc-800", "text"],
  ["Dark: form placeholder", "zinc-400", "zinc-800", "text"],
  ["Dark: form error message", "red-400", "zinc-900", "text"],
  ["Dark: primary button text", "black", "white", "text"],
  ["Dark: focus outline on page", "#f4f4f5", "zinc-950", "ui"],
  ["Dark: focus outline in footer", "#f4f4f5", "zinc-900", "ui"],
];

const targets = { text: 4.5, large: 3, ui: 3 };
let failures = 0;

console.log(`${"Where".padEnd(42)} ${"Foreground".padEnd(11)} ${"Background".padEnd(11)} Ratio    Need   Result`);
console.log("-".repeat(96));
for (const [label, fg, bg, kind] of pairs) {
  const r = ratio(fg, bg);
  const pass = r >= targets[kind];
  if (!pass) failures++;
  console.log(
    `${label.padEnd(42)} ${fg.padEnd(11)} ${bg.padEnd(11)} ${r.toFixed(2).padStart(5)}:1  ${String(targets[kind]).padStart(3)}:1  ${pass ? "pass" : "FAIL"}`
  );
}
console.log("-".repeat(96));
console.log(failures === 0 ? `All ${pairs.length} pairs pass.` : `${failures} pair(s) fail.`);
process.exitCode = failures === 0 ? 0 : 1;
