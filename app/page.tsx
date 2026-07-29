"use client";
import Link from "next/link";
import Image from "next/image";
import { caseStudies } from "@/lib/case-studies";
import ScrollToContact from "./components/ScrollToContact";

export default function Home() {
  return (
    <>
      <section className="mb-20 flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left gap-10">
        <div className="w-[240px] h-[240px] rounded-full overflow-hidden shrink-0">
          <Image
            src="/images/profile.JPG"
            alt="Teetawat"
            width={240}
            height={240}
            className="w-full h-full object-cover"
            style={{ transform: "scale(1.4) translateX(8px)", transformOrigin: "center 50%" }}
          />
        </div>
        <div>
          <h1 className="text-4xl font-semibold tracking-tight mb-4">Teetawat</h1>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xl">
            UX designer and researcher with a Master’s in Human-Computer Interaction from DePaul University. I use research, accessibility, and usability testing to make digital products clearer and easier to use.
          </p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3">
            Based in Bangkok, Thailand · Open to UX design and research roles
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <ScrollToContact />
            <Link
              href="/about"
              className="text-sm font-medium border border-zinc-200 dark:border-zinc-700 text-black dark:text-white px-5 py-2.5 rounded-lg hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
            >
              More about me
            </Link>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xs font-medium uppercase tracking-widest text-zinc-600 dark:text-zinc-400 mb-8">
          Work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/work/${study.slug}`}
              className="group block"
            >
              <div className="overflow-hidden rounded-xl mb-5">
                <Image
                  src={study.thumbnail}
                  alt={study.title}
                  width={800}
                  height={500}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-lg font-medium text-black dark:text-white leading-snug">
                    {study.title}
                  </p>
                  <p className="text-base text-zinc-600 dark:text-zinc-400 mt-1">
                    {study.subtitle}
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                    {study.outcome}
                  </p>
                </div>
                <span className="text-sm text-zinc-600 dark:text-zinc-400 shrink-0 mt-1">
                  {study.year}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
