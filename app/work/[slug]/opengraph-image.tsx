import { ImageResponse } from "next/og";
import { caseStudies } from "@/lib/case-studies";

// Share preview (LinkedIn, Slack, iMessage) for each case study: a 1200x630
// PNG with the title, key outcome and my name, in the site's minimal style.
// Uses Geist, which next/og ships with, so no font files are needed.

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateImageMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  return [
    {
      id: "og",
      size,
      contentType,
      alt: study ? `${study.title}: ${study.outcome}` : "Case study by Teetawat T.",
    },
  ];
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  const title = study?.title ?? "Case study";
  const outcome = study?.outcome ?? "";
  const type = study?.type.split(" · ")[0] ?? "";

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
          {`UX CASE STUDY · ${type.toUpperCase()}`}
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
          <div style={{ display: "flex" }}>Teetawat T. · UX Designer & Researcher</div>
          <div style={{ display: "flex", color: "#71717a" }}>teetawat.vercel.app</div>
        </div>
      </div>
    ),
    size
  );
}
