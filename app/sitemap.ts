import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";

const baseUrl = "https://teetawat.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/visual-work"].map((path) => ({
    url: `${baseUrl}${path}`,
  }));

  const work = caseStudies.map((study) => ({
    url: `${baseUrl}/work/${study.slug}`,
  }));

  return [...pages, ...work];
}
