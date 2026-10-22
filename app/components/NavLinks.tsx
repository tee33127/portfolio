import Link from "next/link";
import { RESUME_PATH, localePath, type Dictionary } from "@/lib/i18n";

const linkClass =
  "whitespace-nowrap text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors";

export default function NavLinks({ t }: { t: Dictionary }) {
  return (
    <>
      <Link href={localePath(t.lang, "/")} className={linkClass}>
        {t.nav.work}
      </Link>
      <Link href={localePath(t.lang, "/visual-work")} aria-label={t.nav.visual} className={linkClass}>
        <span className="sm:hidden">{t.nav.visualShort}</span>
        <span className="hidden sm:inline">{t.nav.visual}</span>
      </Link>
      <Link href={localePath(t.lang, "/about")} className={linkClass}>
        {t.nav.about}
      </Link>
      <a href={RESUME_PATH} target="_blank" rel="noopener noreferrer" className={linkClass}>
        {t.nav.resume} <span aria-hidden="true">↗</span>
        <span className="sr-only">{t.common.newTab}</span>
      </a>
    </>
  );
}
