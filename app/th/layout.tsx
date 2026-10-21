import { Geist, IBM_Plex_Sans_Thai } from "next/font/google";
import { dictionaries } from "@/lib/i18n";
import { layoutMetadata } from "@/lib/metadata";
import SiteShell from "../components/SiteShell";
import "../globals.css";

// Root layout for the Thai site (/th and /th/about). A separate root layout
// is what lets these pages use <html lang="th"> and load the Thai font.
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const plexThai = IBM_Plex_Sans_Thai({
  subsets: ["thai"],
  weight: ["400", "500", "600"],
  variable: "--font-thai",
});

const t = dictionaries.th;

export const metadata = layoutMetadata(t);

export default function ThaiRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={`${geist.variable} ${plexThai.variable}`} suppressHydrationWarning>
      <body className="bg-white dark:bg-zinc-950 text-black dark:text-white transition-colors">
        <SiteShell t={t}>{children}</SiteShell>
      </body>
    </html>
  );
}
