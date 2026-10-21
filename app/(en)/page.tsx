import { dictionaries } from "@/lib/i18n";
import { bilingualPageMetadata } from "@/lib/metadata";
import HomeView from "../components/HomeView";

const t = dictionaries.en;

export const metadata = bilingualPageMetadata(t, "home");

export default function Home() {
  return <HomeView t={t} />;
}
