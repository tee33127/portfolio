import { Geist } from "next/font/google";
import { dictionaries } from "@/lib/i18n";
import { layoutMetadata } from "@/lib/metadata";
import SiteShell from "../components/SiteShell";
import "../globals.css";

// Root layout for the English site (every page except /th).
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const t = dictionaries.en;

export const metadata = layoutMetadata(t);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable} suppressHydrationWarning>
      <body className="bg-white dark:bg-zinc-950 text-black dark:text-white transition-colors">
        <SiteShell t={t}>{children}</SiteShell>
      </body>
    </html>
  );
}
