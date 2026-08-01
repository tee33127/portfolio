import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import { ThemeProvider } from "./components/ThemeProvider";
import NavLinks from "./components/NavLinks";
import ThemeToggle from "./components/ThemeToggle";
import ContactForm from "./components/ContactForm";
import FooterHeading from "./components/FooterHeading";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://teetawat.vercel.app"),
  title: "Teetawat T. — UX Designer & Researcher",
  description:
    "UX Designer and Researcher based in Bangkok, Thailand. Master's in Human-Computer Interaction from DePaul University.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Teetawat T. — UX Designer & Researcher",
    description: "UX Designer and Researcher based in Bangkok, Thailand.",
    url: "/",
    images: [
      {
        url: "/images/og-portfolio.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teetawat T. — UX Designer & Researcher",
    description: "UX Designer and Researcher based in Bangkok, Thailand.",
    images: ["/images/og-portfolio.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable} suppressHydrationWarning>
      <body className="bg-white dark:bg-zinc-950 text-black dark:text-white transition-colors">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 bg-black text-white dark:bg-white dark:text-black px-4 py-2.5 rounded-lg text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 dark:focus-visible:ring-zinc-400 focus-visible:ring-offset-2"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          <div className="max-w-5xl mx-auto px-8 sm:px-12">
            <header className="py-8 mb-12">
              <div className="flex sm:hidden items-center justify-between">
                <Link
                  href="/"
                  className="text-sm font-medium text-black dark:text-white hover:opacity-60 transition-opacity"
                >
                  Teetawat T.
                </Link>
                <ThemeToggle />
              </div>
              <nav className="flex sm:hidden items-center gap-6 text-sm mt-4">
                <NavLinks />
              </nav>

              <div className="hidden sm:flex items-center justify-between">
                <Link
                  href="/"
                  className="text-sm font-medium text-black dark:text-white hover:opacity-60 transition-opacity"
                >
                  Teetawat T.
                </Link>
                <nav className="flex items-center gap-6 text-sm">
                  <NavLinks />
                  <ThemeToggle />
                </nav>
              </div>
            </header>
            <main id="main-content" tabIndex={-1}>{children}</main>
          </div>
          <footer id="contact" className="mt-24 bg-zinc-100 dark:bg-zinc-900">
            <div className="max-w-5xl mx-auto px-8 sm:px-12">
              <div style={{ paddingTop: "30px", paddingBottom: "30px" }}>
                <FooterHeading />
                <ContactForm />
              </div>
              <div className="py-6 border-t border-zinc-200 dark:border-zinc-700">
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
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
        </ThemeProvider>
      </body>
    </html>
  );
}
