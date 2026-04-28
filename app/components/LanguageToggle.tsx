"use client";
import { useLanguage } from "./LanguageProvider";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="flex items-center gap-1 text-sm">
      <button
        onClick={() => setLang("en")}
        className={`cursor-pointer transition-colors ${
          lang === "en"
            ? "text-black dark:text-white font-medium"
            : "text-zinc-400 dark:text-zinc-600 hover:text-zinc-600 dark:hover:text-zinc-400"
        }`}
      >
        EN
      </button>
      <span className="text-zinc-300 dark:text-zinc-700">/</span>
      <button
        onClick={() => setLang("th")}
        className={`cursor-pointer transition-colors ${
          lang === "th"
            ? "text-black dark:text-white font-medium"
            : "text-zinc-400 dark:text-zinc-600 hover:text-zinc-600 dark:hover:text-zinc-400"
        }`}
      >
        TH
      </button>
    </div>
  );
}
