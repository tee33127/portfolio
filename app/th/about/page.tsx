import { dictionaries } from "@/lib/i18n";
import { bilingualPageMetadata } from "@/lib/metadata";
import AboutView from "../../components/AboutView";

const t = dictionaries.th;

export const metadata = bilingualPageMetadata(t, "about");

export default function ThaiAbout() {
  return <AboutView t={t} />;
}
