import { caseStudies } from "@/lib/case-studies";
import { caseStudyOgAlt, caseStudyOgImage, ogSize } from "@/app/components/CaseStudyOgImage";

// Share image for each English case study (layout in CaseStudyOgImage.tsx).

export const size = ogSize;
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
  return [{ id: "og", size, contentType, alt: caseStudyOgAlt(slug, "en") }];
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return caseStudyOgImage(slug, "en");
}
