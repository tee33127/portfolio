import type { Metadata } from "next";
import { dictionaries, localePath, type Dictionary } from "./i18n";
import { localizedStudy, type CaseStudy } from "./case-studies";
import { thaiCaseStudySlugs } from "./case-study-content";

const ogImage = { url: "/images/og-portfolio.jpg", width: 1200, height: 630 };

// Site-wide defaults for a root layout (English or Thai).
export function layoutMetadata(t: Dictionary): Metadata {
  return {
    metadataBase: new URL("https://teetawat.vercel.app"),
    title: t.meta.homeTitle,
    description: t.meta.homeDescription,
    openGraph: {
      title: t.meta.homeTitle,
      description: t.meta.shareDescription,
      locale: t.meta.ogLocale,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.homeTitle,
      description: t.meta.shareDescription,
      images: [ogImage.url],
    },
  };
}

// hreflang alternates (en, th, x-default) for a page that exists in both languages.
function languageAlternates(path: string) {
  return {
    en: localePath("en", path),
    th: localePath("th", path),
    "x-default": localePath("en", path),
  };
}

const bilingualPages = {
  home: { path: "/", title: "homeTitle", description: "homeDescription", share: "shareDescription" },
  about: { path: "/about", title: "aboutTitle", description: "aboutDescription", share: "aboutDescription" },
  visual: { path: "/visual-work", title: "visualTitle", description: "visualDescription", share: "visualDescription" },
} as const;

// Metadata for the pages that exist in both languages, with hreflang
// alternates pointing at each other.
export function bilingualPageMetadata(t: Dictionary, page: keyof typeof bilingualPages): Metadata {
  const { path, ...keys } = bilingualPages[page];
  const title = t.meta[keys.title];
  const description = t.meta[keys.description];
  const shareDescription = t.meta[keys.share];
  const other = t.lang === "en" ? dictionaries.th : dictionaries.en;
  const url = localePath(t.lang, path);

  return {
    title,
    description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      title,
      description: shareDescription,
      url,
      locale: t.meta.ogLocale,
      alternateLocale: [other.meta.ogLocale],
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: shareDescription,
      images: [ogImage.url],
    },
  };
}

// Case study metadata. hreflang alternates appear only once the Thai
// version exists. The share image comes from the route's opengraph-image.tsx.
export function caseStudyMetadata(t: Dictionary, baseStudy: CaseStudy): Metadata {
  const study = localizedStudy(baseStudy, t.lang);
  const path = `/work/${study.slug}`;
  const url = localePath(t.lang, path);
  const title = `${study.title}: ${t.meta.titleSuffix}`;
  const hasThai = thaiCaseStudySlugs().includes(study.slug);

  return {
    title,
    description: study.description,
    alternates: {
      canonical: url,
      ...(hasThai && { languages: languageAlternates(path) }),
    },
    openGraph: {
      title,
      description: study.description,
      url,
      locale: t.meta.ogLocale,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: study.description,
    },
  };
}
