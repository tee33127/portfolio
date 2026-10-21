import { dictionaries } from "@/lib/i18n";
import NotFoundView from "../components/NotFoundView";

export default function NotFound() {
  return <NotFoundView t={dictionaries.en} />;
}
