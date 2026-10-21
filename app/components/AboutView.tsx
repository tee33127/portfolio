import Image from "next/image";
import { RESUME_PATH, type Dictionary } from "@/lib/i18n";

// About page for both languages. All text comes from lib/i18n.ts.
export default function AboutView({ t }: { t: Dictionary }) {
  const a = t.about;

  return (
    <div className="prose">
      <h1>{a.heading}</h1>

      <div className="not-prose mb-8">
        <div className="w-3/4 aspect-[4/5] rounded-xl overflow-hidden">
          <Image
            src="/images/about-image.jpg"
            alt={a.photoAlt}
            width={800}
            height={360}
            className="w-full h-full object-cover grayscale"
            style={{ objectPosition: "center 35%" }}
          />
        </div>
      </div>

      {a.intro.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

      <hr />

      <h2>{a.educationHeading}</h2>
      {a.education.map((item) => (
        <p key={item.title}>
          <strong>{item.title}</strong>
          <br />
          {item.detail}
        </p>
      ))}

      <h2>{a.certificationsHeading}</h2>
      {a.certifications.map((item) => (
        <p key={item.title}>
          <strong>{item.title}</strong>
          <br />
          {item.detail}
        </p>
      ))}

      <h2>{a.experienceHeading}</h2>
      {a.jobs.map((job) => (
        <p key={job.title}>
          <strong>{job.title}</strong> · {job.company}
          <br />
          <span className="text-zinc-600 dark:text-zinc-400 text-sm">{job.period}</span>
          <br />
          {job.description}
        </p>
      ))}

      <h2>{a.toolsHeading}</h2>
      {a.tools.map((group) => (
        <p key={group.label}>
          <strong>{group.label}</strong>
          <br />
          {group.items}
        </p>
      ))}

      <div className="not-prose mt-8">
        <a
          href={RESUME_PATH}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium border border-zinc-200 dark:border-zinc-700 rounded-lg px-5 py-2.5 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
        >
          {a.resume}
          <span className="text-zinc-400" aria-hidden="true">↗</span>
          <span className="sr-only">{t.common.newTab}</span>
        </a>
      </div>
    </div>
  );
}
