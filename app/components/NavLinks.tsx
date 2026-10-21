import Link from "next/link";

export default function NavLinks() {
  return (
    <>
      <Link href="/" className="whitespace-nowrap text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
        UX Work
      </Link>
      <Link href="/visual-work" aria-label="Visual & Motion" className="whitespace-nowrap text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
        <span className="sm:hidden">Visual</span>
        <span className="hidden sm:inline">Visual & Motion</span>
      </Link>
      <Link href="/about" className="whitespace-nowrap text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
        About
      </Link>
      <a
        href="/Teetawat_Trakulsuebchai_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="whitespace-nowrap text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
      >
        Resume <span aria-hidden="true">↗</span>
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    </>
  );
}
