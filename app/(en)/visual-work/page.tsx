import { dictionaries } from "@/lib/i18n";
import { bilingualPageMetadata } from "@/lib/metadata";
import VisualWorkView from "@/app/components/VisualWorkView";

const t = dictionaries.en;

export const metadata = bilingualPageMetadata(t, "visual");

export default function VisualWork() {
  return <VisualWorkView t={t} />;
}
