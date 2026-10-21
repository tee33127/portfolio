import type { Metadata } from "next";
import { dictionaries, type Dictionary } from "./i18n";

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

// Metadata for the pages that exist in both languages, with hreflang
// alternates (en, th, x-default) pointing at each other.
export function bilingualPageMetadata(t: Dictionary, page: "home" | "about"): Metadata {
  const title = page === "home" ? t.meta.homeTitle : t.meta.aboutTitle;
  const description = page === "home" ? t.meta.homeDescription : t.meta.aboutDescription;
  const shareDescription = page === "home" ? t.meta.shareDescription : t.meta.aboutDescription;
  const other = t.lang === "en" ? dictionaries.th : dictionaries.en;

  return {
    title,
    description,
    alternates: {
      canonical: t.paths[page],
      languages: {
        en: dictionaries.en.paths[page],
        th: dictionaries.th.paths[page],
        "x-default": dictionaries.en.paths[page],
      },
    },
    openGraph: {
      title,
      description: shareDescription,
      url: t.paths[page],
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
