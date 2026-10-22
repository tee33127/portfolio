import Link from "next/link";
import { localePath, type Dictionary } from "@/lib/i18n";

// 404 page content, rendered inside the English or Thai site layout.
export default function NotFoundView({ t }: { t: Dictionary }) {
  return (
    <div className="py-12">
      <h1 className="text-3xl font-semibold tracking-tight mb-4">{t.notFound.heading}</h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">{t.notFound.body}</p>
      <Link
        href={localePath(t.lang, "/")}
        className="text-sm font-medium border border-zinc-200 dark:border-zinc-700 text-black dark:text-white px-5 py-2.5 rounded-lg hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
      >
        {t.notFound.link}
      </Link>
    </div>
  );
}
