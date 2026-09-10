"use client";

import { useEffect, useState } from "react";
import type { Section } from "./page";

export default function SectionNav({ sections }: { sections: Section[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (sections.length === 0) return;

    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    // The active section is the last heading that has scrolled up past
    // roughly a quarter of the viewport — it stays active until the next
    // heading crosses that same line, instead of going blank in between.
    let ticking = false;
    const updateActive = () => {
      ticking = false;
      const threshold = window.innerHeight * 0.25;
      let current: string | null = elements[0].id;
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= threshold) {
          current = el.id;
        } else {
          break;
        }
      }
      setActiveId(current);
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateActive);
      }
    };

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sections]);

  if (sections.length === 0) return null;

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav aria-label="Case study sections" className="hidden lg:block">
      <ol className="sticky top-8 space-y-3 border-l border-zinc-200 dark:border-zinc-800">
        {sections.map((section) => {
          const isActive = section.id === activeId;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={(e) => handleClick(e, section.id)}
                aria-current={isActive ? "true" : undefined}
                className={`block pl-4 -ml-px border-l text-xs uppercase tracking-widest transition-colors ${
                  isActive
                    ? "border-black dark:border-white text-black dark:text-white font-medium"
                    : "border-transparent text-zinc-500 dark:text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300"
                }`}
              >
                {section.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
