import type { Metadata } from "next";
import Image from "next/image";
import { visualWork, type VisualWork } from "@/lib/visual-work";
import LazyVideo from "../components/LazyVideo";

export const metadata: Metadata = {
  title: "Visual & Motion Work — Tee",
  description:
    "Video editing and motion graphics work from Tee's time as a Video Editor at Garena Online.",
  alternates: {
    canonical: "/visual-work",
  },
};

const descriptionByType: Record<VisualWork["type"], string> = {
  video:
    "Edited supplied footage and graphic assets. Created the sequence, character and text animation, transitions, music, and sound design.",
  image:
    "Created the composition using supplied character artwork. Designed the frames, typography, layout, and visual effects.",
};

// Below sm (640px): full width. At sm+: bounded to max-width 560px and
// max-height 70vh (aspect ratio preserved by the child's own aspect-ratio
// style — this class only controls the outer box's width).
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
  work,
  priority,
  featured,
}: {
  work: VisualWork;
  priority?: boolean;
  featured?: boolean;
}) {
  const featuredClassName = featured ? `featured-media-${work.width}-${work.height}` : undefined;

  return (
    <div className={featuredClassName}>
      {featured && <FeaturedWidthStyle width={work.width} height={work.height} />}
      <div className="overflow-hidden rounded-xl mb-4 bg-zinc-100 dark:bg-zinc-900">
        {work.type === "video" ? (
          <LazyVideo
            src={work.src}
            poster={work.poster}
            title={work.title}
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
      <p className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-500 mb-1">
        {work.category}
      </p>
      <p className="text-lg font-medium text-black dark:text-white leading-snug">
        {work.title}
      </p>
      <p className="text-base text-zinc-600 dark:text-zinc-400 mt-1">
        {work.role}
      </p>
      <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-2 leading-relaxed">
        {descriptionByType[work.type]}
      </p>
    </div>
  );
}

export default function VisualWork() {
  const [featured, ...rest] = visualWork;

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight mb-3">
        Visual & Motion Work
      </h1>
      <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl mb-12">
        Before UX, I worked as a Video Editor at Garena Online, producing video
        edits and motion graphics for in-house digital channels. A selection
        of that work is below.
      </p>

      <div className="mb-10">
        <VisualWorkCard work={featured} priority featured />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {rest.map((work) => (
          <VisualWorkCard key={work.slug} work={work} />
        ))}
      </div>

      <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-16 max-w-xl">
        Original game footage and character artwork were supplied by Garena.
        My contribution focused on editing, animation, composition,
        typography, and visual presentation.
      </p>
    </div>
  );
}
