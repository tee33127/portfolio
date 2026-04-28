"use client";
import { useLanguage } from "./LanguageProvider";
import { i18n } from "@/lib/i18n";

export default function FooterHeading() {
  const { lang } = useLanguage();
  return (
    <h2 className="text-2xl font-semibold tracking-tight" style={{ marginBottom: "20px" }}>
      {i18n.footer.heading[lang]}
    </h2>
  );
}
