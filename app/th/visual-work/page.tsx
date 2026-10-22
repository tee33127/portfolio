import { dictionaries } from "@/lib/i18n";
import { bilingualPageMetadata } from "@/lib/metadata";
import VisualWorkView from "@/app/components/VisualWorkView";

const t = dictionaries.th;

export const metadata = bilingualPageMetadata(t, "visual");

export default function ThaiVisualWork() {
  return <VisualWorkView t={t} />;
}
