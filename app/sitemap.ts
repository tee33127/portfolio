import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";

const baseUrl = "https://teetawat.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  // Home and About exist in English and Thai, so each lists its alternate.
  const bilingual = [
    { en: "", th: "/th" },
    { en: "/about", th: "/th/about" },
  ].flatMap(({ en, th }) => {
    const alternates = {
      languages: { en: `${baseUrl}${en}`, th: `${baseUrl}${th}` },
    };
    return [
      { url: `${baseUrl}${en}`, alternates },
      { url: `${baseUrl}${th}`, alternates },
    ];
  });

  const pages = [{ url: `${baseUrl}/visual-work` }];

  const work = caseStudies.map((study) => ({
    url: `${baseUrl}/work/${study.slug}`,
  }));

  return [...bilingual, ...pages, ...work];
}
