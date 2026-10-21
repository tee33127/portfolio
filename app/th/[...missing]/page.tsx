import { notFound } from "next/navigation";

// Any URL that matches no page lands here, so the 404 renders inside this
// language's site layout (with the right <html lang>), not a bare error page.
export default function Missing() {
  notFound();
}
