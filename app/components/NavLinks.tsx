import Link from "next/link";

export default function NavLinks() {
  return (
    <>
      <Link href="/" className="text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
        Work
      </Link>
      <Link href="/about" className="text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
        About
      </Link>
    </>
  );
}
