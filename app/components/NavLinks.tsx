"use client";
import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { i18n } from "@/lib/i18n";

export default function NavLinks() {
  const { lang } = useLanguage();
  return (
    <>
      <Link href="/" className="text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
        {i18n.nav.work[lang]}
      </Link>
      <Link href="/about" className="text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
        {i18n.nav.about[lang]}
      </Link>
    </>
  );
}
