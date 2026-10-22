import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";
import { thaiCaseStudySlugs } from "@/lib/case-study-content";
import { localePath } from "@/lib/i18n";

const baseUrl = "https://teetawat.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const thai = thaiCaseStudySlugs();
  const paths = [
    { path: "/", hasThai: true },
    { path: "/about", hasThai: true },
    { path: "/visual-work", hasThai: true },
    ...caseStudies.map((study) => ({
      path: `/work/${study.slug}`,
      hasThai: thai.includes(study.slug),
    })),
  ];

  // Pages that exist in both languages list each other as alternates.
  return paths.flatMap(({ path, hasThai }) => {
    const en = `${baseUrl}${path === "/" ? "" : path}`;
    if (!hasThai) return [{ url: en }];
    const th = `${baseUrl}${localePath("th", path)}`;
    const alternates = { languages: { en, th } };
    return [
      { url: en, alternates },
      { url: th, alternates },
    ];
  });
}
