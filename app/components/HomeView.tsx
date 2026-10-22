import Link from "next/link";
import Image from "next/image";
import { caseStudies, localizedStudy } from "@/lib/case-studies";
import { caseStudyLink } from "@/lib/case-study-content";
import { visualWork, localizedWork } from "@/lib/visual-work";
import { localePath, type Dictionary } from "@/lib/i18n";
import ScrollToContact from "./ScrollToContact";

const featuredVisualWorkSlugs = ["moonlight-blade-perspective", "rov-skin-promo"];

// Homepage for both languages. On the Thai page, a case study card links to
// the Thai case study once it exists, and to the English one until then.
export default function HomeView({ t }: { t: Dictionary }) {
  return (
    <>
      <section className="mb-20 flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left gap-10">
        <div className="w-[240px] h-[240px] rounded-full overflow-hidden shrink-0">
          <Image
            src="/images/profile.jpg"
            alt={t.home.photoAlt}
            width={240}
            height={240}
            className="w-full h-full object-cover"
            style={{ transform: "scale(1.4) translateX(8px)", transformOrigin: "center 50%" }}
          />
        </div>
        <div>
          <h1 className="text-4xl font-semibold tracking-tight mb-4">{t.home.name}</h1>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xl">
            {t.home.intro}
          </p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3">{t.home.location}</p>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <ScrollToContact label={t.home.contact} />
            <Link
              href={localePath(t.lang, "/about")}
              className="text-sm font-medium border border-zinc-200 dark:border-zinc-700 text-black dark:text-white px-5 py-2.5 rounded-lg hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
            >
              {t.home.moreAbout}
            </Link>
          </div>
        </div>
      </section>

      <section>
        <h2
          className={`text-xs font-medium uppercase tracking-widest text-zinc-600 dark:text-zinc-400 ${
            t.home.caseStudiesNote ? "mb-2" : "mb-8"
          }`}
        >
          {t.home.caseStudiesHeading}
        </h2>
        {t.home.caseStudiesNote && (
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-8">{t.home.caseStudiesNote}</p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {caseStudies.map((study) => {
            const card = localizedStudy(study, t.lang);
            const link = caseStudyLink(t.lang, study.slug);
            return (
              <Link
                key={study.slug}
                href={link.href}
                hrefLang={link.fallbackToEnglish ? "en" : undefined}
                className="group block"
              >
                <div className="overflow-hidden rounded-xl mb-5">
                  <Image
                    src={study.thumbnail}
                    alt=""
                    width={800}
                    height={500}
                    className="w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p lang="en" className="text-lg font-medium text-black dark:text-white leading-snug">
                      {study.title}
                    </p>
                    <p className="text-base text-zinc-600 dark:text-zinc-400 mt-1">{card.subtitle}</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{card.outcome}</p>
                  </div>
                  <span className="text-sm text-zinc-600 dark:text-zinc-400 shrink-0 mt-1">
                    {study.year}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-xs font-medium uppercase tracking-widest text-zinc-600 dark:text-zinc-400 mb-6">
          {t.home.visualHeading}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {featuredVisualWorkSlugs.map((slug) => {
            const item = visualWork.find((w) => w.slug === slug);
            if (!item) return null;
            const work = localizedWork(item, t.lang);
            return (
              <Link key={slug} href={localePath(t.lang, `/visual-work#${slug}`)} className="group block">
                <div
                  className="relative w-full overflow-hidden rounded-xl mb-3"
                  style={{ aspectRatio: `${work.width} / ${work.height}` }}
                >
                  <Image
                    src={work.poster}
                    alt=""
                    fill
                    loading="lazy"
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.02]"
                  />
                </div>
                <p className="text-base font-medium text-black dark:text-white leading-snug">
                  {work.title}
                </p>
              </Link>
            );
          })}
        </div>
        <Link
          href={localePath(t.lang, "/visual-work")}
          className="text-sm font-medium text-black dark:text-white hover:opacity-60 transition-opacity"
        >
          {t.home.visualLink} <span aria-hidden="true">→</span>
        </Link>
      </section>
    </>
  );
}
