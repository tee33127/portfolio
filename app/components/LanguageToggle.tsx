"use client";
import { usePathname } from "next/navigation";
import { alternatePath, type Lang } from "@/lib/i18n";

const languages: { lang: Lang; short: string; name: string }[] = [
  { lang: "en", short: "EN", name: "English" },
  { lang: "th", short: "TH", name: "ภาษาไทย" },
];

// EN / TH switch. Each option is a real link to the same page in that
// language, named in its own language for screen readers.
export default function LanguageToggle({ current, label }: { current: Lang; label: string }) {
  const pathname = usePathname();

  return (
    <div role="group" aria-label={label} className="flex items-center gap-1.5 text-sm whitespace-nowrap">
      {languages.map(({ lang, short, name }, i) => {
        const isCurrent = lang === current;
        return (
          <span key={lang} className="flex items-center gap-1.5">
            {i > 0 && (
              <span aria-hidden="true" className="text-zinc-400 dark:text-zinc-500">
                /
              </span>
            )}
            <a
              href={isCurrent ? pathname : alternatePath(pathname, lang)}
              hrefLang={lang}
              lang={lang}
              aria-label={name}
              aria-current={isCurrent ? "true" : undefined}
              className={
                isCurrent
                  ? "font-medium text-black dark:text-white"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
              }
            >
              {short}
            </a>
          </span>
        );
      })}
    </div>
  );
}
