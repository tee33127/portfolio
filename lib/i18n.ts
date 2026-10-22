// All UI text for both languages: header, footer, homepage, About,
// Visual & Motion and the case study page template. Per-project text lives in
// lib/case-studies.ts and lib/visual-work.ts (each item has a `th` block).
//
// When you change UI text, update BOTH languages.

export type Lang = "en" | "th";

const en = {
  lang: "en" as Lang,
  meta: {
    homeTitle: "Teetawat T.: UX Designer & Researcher",
    homeDescription:
      "UX Designer and Researcher based in Bangkok, Thailand. Master's in Human-Computer Interaction from DePaul University.",
    shareDescription: "UX Designer and Researcher based in Bangkok, Thailand.",
    aboutTitle: "About: Tee",
    aboutDescription: "UX Designer and Researcher based in Bangkok, Thailand.",
    visualTitle: "Visual & Motion Work: Tee",
    visualDescription:
      "Video editing and motion graphics work from Tee's time as a Video Editor at Garena Online.",
    titleSuffix: "Tee",
    ogLocale: "en_US",
  },
  common: {
    skipLink: "Skip to main content",
    newTab: "(opens in a new tab)",
    themeToDark: "Switch to dark mode",
    themeToLight: "Switch to light mode",
    languageGroup: "Language",
  },
  nav: {
    work: "UX Work",
    visual: "Visual & Motion",
    visualShort: "Visual",
    about: "About",
    resume: "Resume",
  },
  footer: {
    heading: "Get in touch",
    name: "Name",
    email: "Email",
    message: "Message",
    namePlaceholder: "Your name",
    emailPlaceholder: "your@email.com",
    messagePlaceholder: "What's on your mind?",
    send: "Send message",
    sending: "Sending…",
    thanks: "Thanks for reaching out. I'll get back to you soon.",
    error: "Something went wrong. Please try again or email me directly.",
  },
  home: {
    photoAlt: "Teetawat",
    name: "Teetawat",
    intro:
      "UX designer and researcher with a Master’s in Human-Computer Interaction from DePaul University. I use research, accessibility, and usability testing to make digital products clearer and easier to use.",
    location: "Based in Bangkok, Thailand · Open to UX design and research roles",
    contact: "Contact me",
    moreAbout: "More about me",
    caseStudiesHeading: "UX Case Studies",
    caseStudiesNote: null as string | null,
    visualHeading: "Visual & Motion Work",
    visualLink: "View visual & motion work",
  },
  about: {
    heading: "About",
    photoAlt: "Teetawat",
    intro: [
      "Hi, I’m Tee, a UX designer and researcher based in Bangkok, Thailand. I earned a Master’s in Human-Computer Interaction from DePaul University, where I focused on user research, accessibility, information architecture, and usability testing.",
      "I enjoy turning complex behaviors and research findings into clear product decisions. My background in video editing and visual design taught me how to organize information, communicate ideas, and manage details without losing sight of the larger story. I also designed and built this portfolio myself with Next.js, using Claude Code as my coding partner, and deployed it on Vercel.",
      "I’m currently looking for UX design, product design, or UX research roles where I can help build useful and inclusive digital experiences.",
    ],
    educationHeading: "Background",
    education: [
      { title: "Master's in Human-Computer Interaction", detail: "DePaul University, Chicago · 2025" },
      { title: "Bachelor's Degree in Digital Media", detail: "Assumption University, Bangkok · 2020" },
    ],
    certificationsHeading: "Certifications",
    certifications: [
      { title: "Unlock Skill UX/UI (cohort 51)", detail: "UXUI Studio, Bangkok · Sep 2026" },
    ],
    experienceHeading: "Experience",
    jobs: [
      {
        title: "Video Editor",
        company: "Garena Online, Bangkok",
        period: "Sep 2020 to Mar 2022",
        description: "Video editing, motion graphics, and visual effects for in-house digital channels.",
      },
      {
        title: "Graphic Designer Intern",
        company: "Core & Peak, Bangkok",
        period: "Jun 2019 to Aug 2019",
        description: "Designed marketing materials and translated brand guidelines into digital and print assets.",
      },
    ],
    toolsHeading: "Methods & Tools",
    tools: [
      {
        label: "Research & Testing",
        items:
          "User interviews · Usability testing · Surveys · Competitive analysis · Card sorting · Treejack testing · Affinity diagramming · Accessibility evaluation (WCAG) · ASQ / SUS scoring",
      },
      {
        label: "Design & Prototyping",
        items:
          "Figma · Wireframing · Interactive prototyping · UI design · Information architecture · Maze · Optimal Workshop",
      },
      { label: "Visual & Motion", items: "Adobe Illustrator · Photoshop · Premiere Pro · After Effects" },
      { label: "AI-assisted design", items: "Claude · Claude Code for prototyping · n8n for automation workflows" },
    ],
    resume: "View resume",
  },
  visual: {
    heading: "Visual & Motion Work",
    intro:
      "Before UX, I worked as a Video Editor at Garena Online, producing video edits and motion graphics for in-house digital channels. A selection of that work is below.",
    descriptionByType: {
      video:
        "I edited the supplied footage and graphic assets. I created the sequence, character and text animation, transitions, music, and sound design.",
      image:
        "I created the composition using supplied character artwork. I designed the frames, typography, layout, and visual effects.",
    },
    credit:
      "Garena supplied the original game footage and character artwork. My contribution focused on editing, animation, composition, typography, and visual presentation.",
    play: "Play",
  },
  caseStudy: {
    type: "Type",
    year: "Year",
    role: "Role",
    team: "Team",
    keyOutcome: "Key outcome",
    atAGlance: "At a glance",
    problem: "Problem",
    whatIDid: "What I did",
    result: "Result",
    report: "View full research report",
    next: "Next",
    back: "Work",
    sectionsLabel: "Case study sections",
    ogLabel: "UX CASE STUDY",
    ogByline: "Teetawat T. · UX Designer & Researcher",
  },
  notFound: {
    heading: "Page not found",
    body: "This page doesn't exist or may have moved.",
    link: "Go to the homepage",
  },
};

export type Dictionary = typeof en;

const th: Dictionary = {
  lang: "th",
  meta: {
    homeTitle: "ธีธวัช ตระกูลสืบชัย (Teetawat T.): UX Designer & Researcher",
    homeDescription:
      "UX designer และ researcher ในกรุงเทพฯ จบปริญญาโท สาขา Human-Computer Interaction จาก DePaul University",
    shareDescription: "UX designer และ researcher ในกรุงเทพฯ",
    aboutTitle: "เกี่ยวกับผม: ธีธวัช",
    aboutDescription: "UX designer และ researcher ในกรุงเทพฯ",
    visualTitle: "งานภาพและโมชัน: ธีธวัช",
    visualDescription: "ผลงานตัดต่อวิดีโอและ motion graphics ช่วงที่ผมเป็น Video Editor ที่ Garena Online",
    titleSuffix: "ธีธวัช",
    ogLocale: "th_TH",
  },
  common: {
    skipLink: "ข้ามไปยังเนื้อหาหลัก",
    newTab: "(เปิดในแท็บใหม่)",
    themeToDark: "เปลี่ยนเป็นโหมดมืด",
    themeToLight: "เปลี่ยนเป็นโหมดสว่าง",
    languageGroup: "ภาษา",
  },
  nav: {
    work: "ผลงาน UX",
    visual: "งานภาพและโมชัน",
    visualShort: "งานภาพ",
    about: "เกี่ยวกับผม",
    resume: "เรซูเม่",
  },
  footer: {
    heading: "ติดต่อผม",
    name: "ชื่อ",
    email: "อีเมล",
    message: "ข้อความ",
    namePlaceholder: "ชื่อของคุณ",
    emailPlaceholder: "your@email.com",
    messagePlaceholder: "อยากคุยเรื่องอะไร บอกผมได้เลยครับ",
    send: "ส่งข้อความ",
    sending: "กำลังส่ง…",
    thanks: "ขอบคุณที่ติดต่อมาครับ แล้วผมจะรีบตอบกลับนะครับ",
    error: "ส่งข้อความไม่สำเร็จ ลองอีกครั้ง หรืออีเมลหาผมโดยตรงได้เลยครับ",
  },
  home: {
    photoAlt: "ธีธวัช",
    name: "ธีธวัช",
    intro:
      "ผมเป็น UX designer และ researcher จบปริญญาโท สาขา Human-Computer Interaction จาก DePaul University ผมใช้ research, accessibility และ usability testing เพื่อทำให้ผลิตภัณฑ์ดิจิทัลเข้าใจง่ายและใช้งานง่ายขึ้น",
    location: "อยู่ที่กรุงเทพฯ · กำลังมองหางานด้าน UX design และ UX research",
    contact: "ติดต่อผม",
    moreAbout: "รู้จักผมเพิ่มเติม",
    caseStudiesHeading: "กรณีศึกษา UX",
    caseStudiesNote: "กรณีศึกษาเขียนเป็นภาษาอังกฤษ",
    visualHeading: "งานภาพและโมชัน",
    visualLink: "ดูงานภาพและโมชันทั้งหมด",
  },
  about: {
    heading: "เกี่ยวกับผม",
    photoAlt: "ธีธวัช",
    intro: [
      "สวัสดีครับ ผมชื่อธี เป็น UX designer และ researcher อยู่ที่กรุงเทพฯ ผมจบปริญญาโท สาขา Human-Computer Interaction จาก DePaul University โดยเน้นด้าน user research, accessibility, information architecture และ usability testing",
      "ผมชอบนำพฤติกรรมผู้ใช้ที่ซับซ้อนและผลจาก research มาสรุปเป็นการตัดสินใจด้านโปรดักต์ที่ชัดเจน ประสบการณ์ด้านตัดต่อวิดีโอและ visual design สอนให้ผมจัดระเบียบข้อมูล สื่อสารไอเดีย และดูแลรายละเอียดได้โดยไม่ลืมภาพรวม พอร์ตโฟลิโอนี้ผมก็ออกแบบและสร้างเองด้วย Next.js โดยมี Claude Code เป็นผู้ช่วยเขียนโค้ด และ deploy บน Vercel",
      "ตอนนี้ผมกำลังมองหางานด้าน UX design, product design หรือ UX research ที่ผมจะได้ช่วยสร้างประสบการณ์ดิจิทัลที่มีประโยชน์และทุกคนเข้าถึงได้",
    ],
    educationHeading: "การศึกษา",
    education: [
      { title: "ปริญญาโท สาขา Human-Computer Interaction", detail: "DePaul University ชิคาโก สหรัฐอเมริกา · 2025" },
      { title: "ปริญญาตรี สาขา Digital Media", detail: "มหาวิทยาลัยอัสสัมชัญ กรุงเทพฯ · 2020" },
    ],
    certificationsHeading: "ประกาศนียบัตร",
    certifications: [{ title: "Unlock Skill UX/UI รุ่น 51", detail: "UXUI Studio กรุงเทพฯ · ก.ย. 2026" }],
    experienceHeading: "ประสบการณ์ทำงาน",
    jobs: [
      {
        title: "Video Editor",
        company: "Garena Online กรุงเทพฯ",
        period: "ก.ย. 2020 - มี.ค. 2022",
        description: "ตัดต่อวิดีโอ ทำ motion graphics และ visual effects ให้ช่องทางดิจิทัลของบริษัท",
      },
      {
        title: "Graphic Designer Intern",
        company: "Core & Peak กรุงเทพฯ",
        period: "มิ.ย. 2019 - ส.ค. 2019",
        description: "ออกแบบสื่อการตลาด และนำ brand guidelines มาปรับใช้กับงานดิจิทัลและงานพิมพ์",
      },
    ],
    toolsHeading: "วิธีการและเครื่องมือ",
    tools: [
      { label: "Research และ Testing", items: en.about.tools[0].items },
      { label: "Design และ Prototyping", items: en.about.tools[1].items },
      { label: "Visual & Motion", items: en.about.tools[2].items },
      {
        label: "ใช้ AI ช่วยออกแบบ",
        items: "Claude · Claude Code สำหรับทำ prototype · n8n สำหรับ automation workflow",
      },
    ],
    resume: "ดูเรซูเม่ (ภาษาอังกฤษ)",
  },
  visual: {
    heading: "งานภาพและโมชัน",
    intro:
      "ก่อนมาทำ UX ผมเป็น Video Editor ที่ Garena Online ทำงานตัดต่อวิดีโอและ motion graphics ให้ช่องทางดิจิทัลของบริษัท ด้านล่างนี้คือผลงานบางส่วนที่ผมคัดมา",
    descriptionByType: {
      video:
        "ผมตัดต่อจากฟุตเทจและกราฟิกที่ได้รับมา โดยทำเองทั้งการเรียงลำดับเรื่อง แอนิเมชันตัวละครและตัวอักษร ทรานซิชัน เพลง และ sound design",
      image:
        "ผมจัดองค์ประกอบภาพจากอาร์ตเวิร์กตัวละครที่ได้รับมา และออกแบบเฟรม typography เลย์เอาต์ และ visual effects เอง",
    },
    credit:
      "ฟุตเทจเกมและอาร์ตเวิร์กตัวละครต้นฉบับเป็นของ Garena ส่วนที่ผมทำคือการตัดต่อ แอนิเมชัน การจัดองค์ประกอบภาพ typography และการนำเสนอด้านภาพ",
    play: "เล่นวิดีโอ",
  },
  caseStudy: {
    type: "ประเภท",
    year: "ปี",
    role: "บทบาท",
    team: "ทีม",
    keyOutcome: "ผลลัพธ์หลัก",
    atAGlance: "สรุปโดยย่อ",
    problem: "ปัญหา",
    whatIDid: "สิ่งที่ผมทำ",
    result: "ผลที่ได้",
    report: "ดูรายงานฉบับเต็ม (ภาษาอังกฤษ)",
    next: "ถัดไป",
    back: "ผลงาน UX",
    sectionsLabel: "หัวข้อในกรณีศึกษา",
    ogLabel: "กรณีศึกษา UX",
    ogByline: "ธีธวัช ตระกูลสืบชัย · UX Designer & Researcher",
  },
  notFound: {
    heading: "ไม่พบหน้านี้",
    body: "หน้านี้ไม่มีอยู่ หรืออาจถูกย้ายไปแล้ว",
    link: "กลับไปหน้าแรก",
  },
};

export const dictionaries: Record<Lang, Dictionary> = { en, th };

// The one place that decides where an internal link goes in each language.
// Use it for every internal href, so Thai pages never link out of /th by
// accident: localePath("th", "/about") is "/th/about", "/" is "/th".
export function localePath(lang: Lang, path: string): string {
  if (lang === "en") return path;
  if (path === "/") return "/th";
  if (path.startsWith("/#")) return `/th${path.slice(1)}`;
  return `/th${path}`;
}

// Same page in the other language. thaiCaseStudies lists the slugs that have
// a Thai version (content/th/<slug>.md). A page with no Thai version yet
// falls back to the Thai homepage.
export function alternatePath(pathname: string, target: Lang, thaiCaseStudies: string[]): string {
  const enPath = pathname === "/th" ? "/" : pathname.startsWith("/th/") ? pathname.slice(3) : pathname;
  if (target === "en") return enPath;
  if (["/", "/about", "/visual-work"].includes(enPath)) return localePath("th", enPath);
  const work = enPath.match(/^\/work\/([^/]+)$/);
  if (work && thaiCaseStudies.includes(work[1])) return localePath("th", enPath);
  return "/th";
}

export const RESUME_PATH = "/Teetawat_Trakulsuebchai_Resume.pdf";
