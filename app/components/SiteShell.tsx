import Link from "next/link";
import type { Dictionary } from "@/lib/i18n";
import { ThemeProvider } from "./ThemeProvider";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import ContactForm from "./ContactForm";
import FooterHeading from "./FooterHeading";

// Skip link, header, footer and contact form, shared by the English and Thai
// root layouts. All text comes from the dictionary in lib/i18n.ts.
export default function SiteShell({
  t,
  children,
}: {
  t: Dictionary;
  children: React.ReactNode;
}) {
  const themeLabels = { toDark: t.common.themeToDark, toLight: t.common.themeToLight };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 bg-black text-white dark:bg-white dark:text-black px-4 py-2.5 rounded-lg text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 dark:focus-visible:ring-zinc-400 focus-visible:ring-offset-2"
      >
        {t.common.skipLink}
      </a>
      <ThemeProvider>
        <div className="max-w-5xl mx-auto px-5 sm:px-12">
          <header className="py-8 mb-12">
            <div className="flex sm:hidden items-center justify-between">
              <Link
                href={t.paths.home}
                className="text-sm font-medium text-black dark:text-white hover:opacity-60 transition-opacity"
              >
                Teetawat T.
              </Link>
              <div className="flex items-center gap-4">
                <LanguageToggle current={t.lang} label={t.common.languageGroup} />
                <ThemeToggle labels={themeLabels} />
              </div>
            </div>
            <nav className="flex sm:hidden items-center gap-4 text-sm mt-4">
              <NavLinks t={t} />
            </nav>

            <div className="hidden sm:flex items-center justify-between">
              <Link
                href={t.paths.home}
                className="text-sm font-medium text-black dark:text-white hover:opacity-60 transition-opacity"
              >
                Teetawat T.
              </Link>
              <div className="flex items-center gap-6 text-sm">
                <nav className="flex items-center gap-6">
                  <NavLinks t={t} />
                </nav>
                <LanguageToggle current={t.lang} label={t.common.languageGroup} />
                <ThemeToggle labels={themeLabels} />
              </div>
            </div>
          </header>
          <main id="main-content" tabIndex={-1}>{children}</main>
        </div>
        <footer id="contact" className="mt-24 bg-zinc-100 dark:bg-zinc-900">
          <div className="max-w-5xl mx-auto px-5 sm:px-12">
            <div style={{ paddingTop: "30px", paddingBottom: "30px" }}>
              <FooterHeading text={t.footer.heading} />
              <ContactForm t={t.footer} />
            </div>
            <div className="py-6 border-t border-zinc-200 dark:border-zinc-700">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Teetawat T. ·{" "}
                <a
                  href="mailto:tee33127@gmail.com"
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  tee33127@gmail.com
                </a>{" "}
                ·{" "}
                <a
                  href="https://www.linkedin.com/in/teetawatt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  LinkedIn <span aria-hidden="true">↗</span>
                  <span className="sr-only">{t.common.newTab}</span>
                </a>
              </p>
            </div>
          </div>
        </footer>
      </ThemeProvider>
    </>
  );
}
