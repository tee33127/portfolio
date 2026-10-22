import path from "path";
import sharp from "sharp";
import { ImageResponse } from "next/og";
import { caseStudies, localizedStudy } from "@/lib/case-studies";
import { dictionaries, type Lang } from "@/lib/i18n";

// Share preview (LinkedIn, Slack, iMessage) for each case study: a 1200x630
// PNG with the title, key outcome and my name, in the site's minimal style.
//
// English uses next/og with Geist, which it ships with. next/og can't stack
// Thai vowel and tone marks (เพิ่ม comes out as เพิม), so the Thai image is drawn
// with sharp, whose text engine shapes Thai properly, using IBM Plex Sans Thai
// from assets/fonts (no network).

export const ogSize = { width: 1200, height: 630 };

const fontDir = path.join(process.cwd(), "assets/fonts");
const thaiFontFile = path.join(fontDir, "IBMPlexSansThai-Regular.ttf");
// Use only the bundled font, on Mac (which otherwise uses system fonts) and on Vercel.
process.env.FONTCONFIG_FILE = path.join(fontDir, "fonts.conf");
process.env.PANGOCAIRO_BACKEND = "fc";

export function caseStudyOgAlt(slug: string, lang: Lang) {
  const base = caseStudies.find((s) => s.slug === slug);
  if (!base) return "Case study by Teetawat T.";
  const study = localizedStudy(base, lang);
  return `${study.title}: ${study.outcome}`;
}

function englishOgImage(slug: string) {
  const lang: Lang = "en";
  const t = dictionaries[lang];
  const base = caseStudies.find((s) => s.slug === slug);
  const study = base && localizedStudy(base, lang);
  const title = study?.title ?? "Case study";
  const outcome = study?.outcome ?? "";
  const type = study?.type.split(" · ")[0] ?? "";
  const label = `${t.caseStudy.ogLabel} · ${type}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "72px 80px",
          color: "#09090b",
        }}
      >
        <div style={{ display: "flex", fontSize: 24, letterSpacing: 3, color: "#52525b" }}>
          {label.toUpperCase()}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 88, letterSpacing: -2, lineHeight: 1.05 }}>
            {title}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 38,
              lineHeight: 1.3,
              color: "#52525b",
              maxWidth: 980,
            }}
          >
            {outcome}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid #e4e4e7",
            paddingTop: 28,
            fontSize: 26,
            color: "#3f3f46",
          }}
        >
          <div style={{ display: "flex" }}>{t.caseStudy.ogByline}</div>
          <div style={{ display: "flex", color: "#71717a" }}>teetawat.vercel.app</div>
        </div>
      </div>
    ),
    ogSize
  );
}

// One block of text as a transparent PNG, wrapped to `width` if given.
async function textImage(text: string, size: number, color: string, width?: number, tracking = 0) {
  const escaped = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const input = await sharp({
    text: {
      text: `<span foreground="${color}" letter_spacing="${tracking * 1024}">${escaped}</span>`,
      font: `IBM Plex Sans Thai ${size}`,
      fontfile: thaiFontFile,
      rgba: true,
      dpi: 72,
      width,
      wrap: "word",
      spacing: Math.round(size * 0.35),
    },
  })
    .png()
    .toBuffer();
  const { width: w = 0, height: h = 0 } = await sharp(input).metadata();
  return { input, w, h };
}

// Same layout as the English image: label at the top, title and outcome in
// the middle, a rule and my name at the bottom.
async function thaiOgImage(slug: string) {
  const t = dictionaries.th;
  const base = caseStudies.find((s) => s.slug === slug);
  const study = base && localizedStudy(base, "th");
  const pad = { x: 80, y: 72 };
  const muted = "#52525b";

  const [label, title, outcome, byline, site] = await Promise.all([
    textImage(`${t.caseStudy.ogLabel} · ${study?.type.split(" · ")[0] ?? ""}`, 24, muted),
    textImage(study?.title ?? "Case study", 88, "#09090b", undefined, -2),
    // A non-breaking space keeps a number on the same line as its noun ("8 แอป").
    textImage((study?.outcome ?? "").replace(/(\d[\d.,%]*) /g, "$1\u00a0"), 38, muted, 980),
    textImage(t.caseStudy.ogByline, 26, "#3f3f46"),
    textImage("teetawat.vercel.app", 26, "#71717a"),
  ]);

  const footerTop = ogSize.height - pad.y - byline.h;
  const ruleTop = footerTop - 28;
  const blockHeight = title.h + 28 + outcome.h;
  const blockTop = Math.round(pad.y + label.h + (ruleTop - pad.y - label.h - blockHeight) / 2);

  const png = await sharp({
    create: { ...ogSize, channels: 4, background: "#ffffff" },
  })
    .composite([
      { input: label.input, left: pad.x, top: pad.y },
      { input: title.input, left: pad.x, top: blockTop },
      { input: outcome.input, left: pad.x, top: blockTop + title.h + 28 },
      {
        input: { create: { width: ogSize.width - pad.x * 2, height: 2, channels: 4, background: "#e4e4e7" } },
        left: pad.x,
        top: ruleTop,
      },
      { input: byline.input, left: pad.x, top: footerTop },
      { input: site.input, left: ogSize.width - pad.x - site.w, top: footerTop },
    ])
    .png()
    .toBuffer();

  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
}

export function caseStudyOgImage(slug: string, lang: Lang) {
  return lang === "th" ? thaiOgImage(slug) : englishOgImage(slug);
}
