import { dictionaries } from "@/lib/i18n";
import { bilingualPageMetadata } from "@/lib/metadata";
import AboutView from "../../components/AboutView";

const t = dictionaries.en;

export const metadata = bilingualPageMetadata(t, "about");

export default function About() {
  return <AboutView t={t} />;
}
