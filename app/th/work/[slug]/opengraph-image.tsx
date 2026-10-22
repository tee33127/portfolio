import { thaiCaseStudySlugs } from "@/lib/case-study-content";
import { caseStudyOgAlt, caseStudyOgImage, ogSize } from "@/app/components/CaseStudyOgImage";

// Thai share image for each Thai case study (layout in CaseStudyOgImage.tsx).

export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return thaiCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateImageMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return [{ id: "og", size, contentType, alt: caseStudyOgAlt(slug, "th") }];
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return caseStudyOgImage(slug, "th");
}
