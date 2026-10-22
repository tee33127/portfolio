import Image from "next/image";
import { visualWork, localizedWork, type VisualWork } from "@/lib/visual-work";
import type { Dictionary } from "@/lib/i18n";
import LazyVideo from "./LazyVideo";

// Visual & Motion page for both languages. Page text comes from lib/i18n.ts,
// titles and roles from lib/visual-work.ts.

// Below sm (640px): full width. At sm+: bounded to max-width 560px and
// max-height 70vh (aspect ratio preserved by the child's own aspect-ratio
// style. This class only controls the outer box's width).
function FeaturedWidthStyle({ width, height }: { width: number; height: number }) {
  const ratio = width / height;
  const className = `featured-media-${width}-${height}`;
  return (
    <style>{`
      .${className} { width: 100%; }
      @media (min-width: 640px) {
        .${className} {
          width: min(560px, calc(70vh * ${ratio}));
          margin-left: auto;
          margin-right: auto;
        }
      }
    `}</style>
  );
}

function VisualWorkCard({
  t,
  work: baseWork,
  priority,
  featured,
}: {
  t: Dictionary;
  work: VisualWork;
  priority?: boolean;
  featured?: boolean;
}) {
  const work = localizedWork(baseWork, t.lang);
  const featuredClassName = featured ? `featured-media-${work.width}-${work.height}` : undefined;

  return (
    <div id={work.slug} className={`scroll-mt-8 ${featuredClassName ?? ""}`}>
      {featured && <FeaturedWidthStyle width={work.width} height={work.height} />}
      <div className="overflow-hidden rounded-xl mb-4 bg-zinc-100 dark:bg-zinc-900">
        {work.type === "video" ? (
          <LazyVideo
            src={work.src}
            poster={work.poster}
            title={work.title}
            playLabel={t.visual.play}
            width={work.width}
            height={work.height}
            priority={priority}
            featured={featured}
          />
        ) : (
          <div
            className="relative w-full"
            style={{ aspectRatio: `${work.width} / ${work.height}` }}
          >
            <Image
              src={work.src}
              alt={work.title}
              fill
              priority={priority}
              loading={priority ? undefined : "lazy"}
              sizes={
                featured
                  ? "(min-width: 640px) 560px, 100vw"
                  : "(min-width: 640px) 50vw, 100vw"
              }
              className="object-cover"
            />
          </div>
        )}
      </div>
      <p lang="en" className="text-xs uppercase tracking-widest text-zinc-600 dark:text-zinc-400 mb-1">
        {work.category}
      </p>
      <p className="text-lg font-medium text-black dark:text-white leading-snug">
        {work.title}
      </p>
      <p className="text-base text-zinc-600 dark:text-zinc-400 mt-1">
        {work.role}
      </p>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
        {t.visual.descriptionByType[work.type]}
      </p>
    </div>
  );
}

export default function VisualWorkView({ t }: { t: Dictionary }) {
  const [featured, ...rest] = visualWork;

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight mb-3">{t.visual.heading}</h1>
      <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl mb-12">
        {t.visual.intro}
      </p>

      <div className="mb-10">
        <VisualWorkCard t={t} work={featured} priority featured />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {rest.map((work) => (
          <VisualWorkCard key={work.slug} t={t} work={work} />
        ))}
      </div>

      <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-16 max-w-xl">{t.visual.credit}</p>
    </div>
  );
}
