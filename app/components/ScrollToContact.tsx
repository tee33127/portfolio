"use client";
import { scrollToAndFocus } from "@/lib/scroll";

export default function ScrollToContact({ label }: { label: string }) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    scrollToAndFocus("contact");
  }

  return (
    <a
      href="#contact"
      onClick={handleClick}
      className="text-sm font-medium bg-black dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-lg hover:opacity-70 transition-opacity"
    >
      {label}
    </a>
  );
}
