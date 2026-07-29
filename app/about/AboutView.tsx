"use client";
import Image from "next/image";

export default function AboutView() {
  return (
    <div className="prose">
      <h1>About</h1>

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

      <p>Hi, I’m Tee, a UX designer and researcher based in Bangkok, Thailand. I earned a Master’s in Human-Computer Interaction from DePaul University, where I focused on user research, accessibility, information architecture, and usability testing.</p>
      <p>I enjoy turning complex behaviors and research findings into clear product decisions. My background in video editing and visual design taught me how to organize information, communicate ideas, and manage details without losing sight of the larger story.</p>
      <p>I’m currently looking for UX design, product design, or UX research roles where I can help build useful and inclusive digital experiences.</p>

      <hr />

      <h2>Background</h2>

      <p>
        <strong>Master&apos;s in Human-Computer Interaction</strong>
        <br />
        DePaul University, Chicago · 2025
      </p>

      <p>
        <strong>Bachelor&apos;s Degree in Digital Media</strong>
        <br />
        Assumption University, Bangkok · 2020
      </p>

      <h2>Experience</h2>

      <p>
        <strong>Video Editor</strong> · Garena Online, Bangkok
        <br />
        <span className="text-zinc-500 text-sm">Sep 2020 – Mar 2022</span>
        <br />
        Video editing, motion graphics, and visual effects for in-house digital channels.
      </p>

      <p>
        <strong>Graphic Design Intern</strong> · Core & Peak, Bangkok
        <br />
        <span className="text-zinc-500 text-sm">Jun 2019 – Aug 2019</span>
        <br />
        Designed marketing materials and translated brand guidelines into digital and print assets.
      </p>

      <h2>Methods & Tools</h2>

      <p>
        <strong>Research & Testing</strong>
        <br />
        User interviews · Usability testing · Surveys · Competitive analysis · Card sorting · Treejack testing · Affinity diagramming · Accessibility evaluation (WCAG) · ASQ / SUS scoring
      </p>

      <p>
        <strong>Design & Prototyping</strong>
        <br />
        Figma · Wireframing · Interactive prototyping · UI design · Information architecture · Maze · Optimal Workshop
      </p>

      <p>
        <strong>Visual & Motion</strong>
        <br />
        Adobe Illustrator · Photoshop · Premiere Pro · After Effects
      </p>

      <div className="not-prose mt-8">
        <a
          href="/Updated_Resume_Teetawat.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium border border-zinc-200 dark:border-zinc-700 rounded-lg px-5 py-2.5 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
        >
          View resume
          <span className="text-zinc-400">↗</span>
        </a>
      </div>
    </div>
  );
}
