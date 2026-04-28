"use client";
import Image from "next/image";
import { useLanguage } from "@/app/components/LanguageProvider";
import { i18n } from "@/lib/i18n";

export default function AboutView() {
  const { lang } = useLanguage();
  const t = i18n.about;

  return (
    <div className="prose">
      <h2>{t.heading[lang]}</h2>

      <div className="not-prose mb-8">
        <div className="w-3/4 aspect-[4/5] rounded-xl overflow-hidden">
          <Image
            src="/images/about-image.JPG"
            alt="Teetawat"
            width={800}
            height={360}
            className="w-full h-full object-cover grayscale"
            style={{ objectPosition: "center 35%" }}
          />
        </div>
      </div>

      <p>Hello, my name is Tee, and I am a UX designer, someone who likes making complex things into simple things. I am interested in why things are made the way they are in our daily lives. This interest in understanding people has been my reason to dive into user research, accessibility, and intuitive designs of products.</p>
      <p>For me, being able to discover things, ask questions, find answers, and build solutions from scratch is as fun as getting positive feedback from users. I like working in areas where my tasks help make something useful and enjoyable for other people and accessible.</p>
      <p>When I am not designing, I love photography, exploring, and finding the beauty in little things around us. These interests also inspire me in design work, especially when I think about human-centered experiences.</p>

      <hr />

      <h2>{t.backgroundHeading[lang]}</h2>

      <p>
        <strong>{t.edu1degree[lang]}</strong> — GPA 3.83
        <br />
        {t.edu1school[lang]}
      </p>

      <p>
        <strong>{t.edu2degree[lang]}</strong> — GPA 3.20
        <br />
        {t.edu2school[lang]}
      </p>

      <h2>{t.experienceHeading[lang]}</h2>

      <p>
        <strong>{t.job1title[lang]}</strong> · {t.job1company[lang]}
        <br />
        <span className="text-zinc-500 text-sm">{t.job1period[lang]}</span>
        <br />
        {t.job1desc[lang]}
      </p>

      <p>
        <strong>{t.job2title[lang]}</strong> · {t.job2company[lang]}
        <br />
        <span className="text-zinc-500 text-sm">{t.job2period[lang]}</span>
        <br />
        {t.job2desc[lang]}
      </p>

      <h2>{t.toolsHeading[lang]}</h2>

      <p>
        <strong>{t.toolsResearchLabel[lang]}</strong>
        <br />
        {t.toolsResearch[lang]}
      </p>

      <p>
        <strong>{t.toolsDesignLabel[lang]}</strong>
        <br />
        {t.toolsDesign[lang]}
      </p>

      <p>
        <strong>{t.toolsVisualLabel[lang]}</strong>
        <br />
        {t.toolsVisual[lang]}
      </p>

      <div className="not-prose mt-8">
        <a
          href="/Teetawat_Resume_2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium border border-zinc-200 dark:border-zinc-700 rounded-lg px-5 py-2.5 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
        >
          {t.resumeBtn[lang]}
          <span className="text-zinc-400">↗</span>
        </a>
      </div>
    </div>
  );
}
