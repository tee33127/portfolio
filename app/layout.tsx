import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import { ThemeProvider } from "./components/ThemeProvider";
import { LanguageProvider } from "./components/LanguageProvider";
import NavLinks from "./components/NavLinks";
import LanguageToggle from "./components/LanguageToggle";
import ThemeToggle from "./components/ThemeToggle";
import ContactForm from "./components/ContactForm";
import FooterHeading from "./components/FooterHeading";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Teetawat T. — UX Designer & Researcher",
  description:
    "UX Designer and Researcher based in Chicago. Master's in Human-Computer Interaction, DePaul University.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable} suppressHydrationWarning>
      <body className="bg-white dark:bg-zinc-950 text-black dark:text-white transition-colors">
        <ThemeProvider>
          <LanguageProvider>
            <div className="max-w-5xl mx-auto px-8 sm:px-12">
              <header className="flex items-center justify-between py-8 mb-12">
                <Link
                  href="/"
                  className="text-sm font-medium text-black dark:text-white hover:opacity-60 transition-opacity"
                >
                  Teetawat T.
                </Link>
                <nav className="flex items-center gap-6 text-sm">
                  <NavLinks />
                  {/* <LanguageToggle /> */}
                  <ThemeToggle />
                </nav>
              </header>
              <main>{children}</main>
            </div>
            <footer id="contact" className="mt-24 bg-zinc-100 dark:bg-zinc-900">
              <div className="max-w-5xl mx-auto px-8 sm:px-12">
                <div style={{ paddingTop: "30px", paddingBottom: "30px" }}>
                  <FooterHeading />
                  <ContactForm />
                </div>
                <div className="py-6 border-t border-zinc-200 dark:border-zinc-700">
                  <p className="text-sm text-zinc-400 dark:text-zinc-500">
                    Teetawat T. ·{" "}
                    <a
                      href="mailto:tee33127@gmail.com"
                      className="hover:text-black dark:hover:text-white transition-colors"
                    >
                      tee33127@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </footer>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
