import type { Lang } from "./i18n"

// Text fields shown in Thai on the Thai site (cards, case study header, share image)
type TranslatedFields = Pick<
  CaseStudy,
  "subtitle" | "outcome" | "type" | "role" | "team" | "description" | "problem" | "myContribution" | "result"
>

export type CaseStudy = {
  slug: string
  title: string
  subtitle: string
  outcome: string
  type: string
  year: string
  role: string
  team: string
  description: string
  // "At a glance" block on the case study page
  problem: string
  myContribution: string
  result: string
  thumbnail: string
  doc?: string
  th: TranslatedFields
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "kidsconnect",
    title: "KidsConnect",
    subtitle: "Family task management app",
    outcome: "Improved key usability scores by up to 2.2 points",
    type: "Capstone · Mobile Design",
    year: "2025",
    role: "UX Researcher & Design Contributor",
    team: "3 members",
    description:
      "Designed a chore management app that builds responsibility in children without relying on financial incentives.",
    problem:
      "Most chore apps pay kids for chores, which teaches them to expect money for basic responsibilities.",
    myContribution:
      "I owned the usability research (protocol, recruiting, two rounds of testing in Maze) and designed the lo-fi prototype in Figma.",
    result:
      "ASQ scores rose on 4 tasks in Round 2, by up to 2.2 points. Task assignment dropped, and I flagged it as the top fix.",
    thumbnail: "/images/kidsconnect/thumbnail.webp",
    doc: "/docs/kidsconnect.pdf",
    th: {
      subtitle: "แอปจัดการงานบ้านสำหรับครอบครัว",
      outcome: "เพิ่มคะแนน usability ของงานหลักได้สูงสุด 2.2 คะแนน",
      type: "โปรเจกต์ Capstone · Mobile Design",
      role: "UX Researcher และ Design Contributor",
      team: "3 คน",
      description: "ออกแบบแอปจัดการงานบ้านที่ช่วยสร้างความรับผิดชอบให้เด็ก โดยไม่ต้องใช้เงินเป็นแรงจูงใจ",
      problem: "แอปงานบ้านส่วนใหญ่ให้เงินเด็กเมื่อทำงานบ้าน ซึ่งสอนให้เด็กคาดหวังเงินจากความรับผิดชอบพื้นฐาน",
      myContribution:
        "ผมดูแลงาน usability research ทั้งหมด (protocol, การหาผู้เข้าร่วม และ usability testing สองรอบใน Maze) และออกแบบ lo-fi prototype ใน Figma",
      result:
        "คะแนน ASQ ในรอบที่ 2 เพิ่มขึ้นใน 4 task สูงสุด 2.2 คะแนน ส่วน task การมอบหมายงานได้คะแนนลดลง ผมจึงจัดให้เป็นจุดที่ต้องแก้เป็นอันดับแรก",
    },
  },
  {
    slug: "pinly",
    title: "Pinly",
    subtitle: "Personal place-decision assistant",
    outcome:
      "Turned a 25-response survey and 8-app competitive teardown into a 98-link, 32-screen prototype",
    type: "UX/UI Design · Mobile App",
    year: "2026",
    role: "UX Researcher & Product Designer",
    team: "Solo project",
    description:
      "Designed a mobile app that turns saved social posts into decisions you can actually act on, grounded in survey research and a full competitive teardown.",
    problem:
      "Saving places from TikTok and Instagram is easy, but finding one again and checking whether it fits right now is not.",
    myContribution:
      "I ran the desk research, a 25-response survey and a competitor teardown, then built the information architecture and a hi-fi prototype in Figma.",
    result:
      "A 32-frame, 98-link prototype built around \"Good right now\". Next step: usability testing with 5 to 8 people who save places they mean to revisit.",
    thumbnail: "/images/pinly/pinly-thumbnail.webp",
    th: {
      subtitle: "ผู้ช่วยตัดสินใจเลือกสถานที่",
      outcome:
        "นำผลแบบสอบถามจากผู้ตอบ 25 คน และการวิเคราะห์คู่แข่ง 8 แอป มาสร้างเป็น prototype 32 หน้าจอ 98 ลิงก์",
      type: "UX/UI Design · แอปมือถือ",
      role: "UX Researcher และ Product Designer",
      team: "โปรเจกต์เดี่ยว",
      description:
        "ออกแบบแอปมือถือที่เปลี่ยนโพสต์ที่เซฟไว้จากโซเชียลให้กลายเป็นการตัดสินใจที่ลงมือทำได้จริง โดยอิงจาก survey research และการวิเคราะห์คู่แข่งอย่างละเอียด",
      problem:
        "การเซฟสถานที่จาก TikTok และ Instagram นั้นง่าย แต่การหากลับมาเจออีกครั้ง และเช็กว่าที่นั้นเหมาะกับตอนนี้ไหม กลับไม่ง่ายเลย",
      myContribution:
        "ผมทำ desk research แบบสอบถามที่มีผู้ตอบ 25 คน และการวิเคราะห์คู่แข่ง จากนั้นวาง information architecture และสร้าง hi-fi prototype ใน Figma",
      result:
        "ได้ prototype 32 เฟรม 98 ลิงก์ ที่สร้างขึ้นรอบฟีเจอร์ \"Good right now\" ขั้นต่อไปคือทำ usability testing กับคน 5 ถึง 8 คนที่ชอบเซฟสถานที่ไว้เพื่อกลับไปทีหลัง",
    },
  },
  {
    slug: "etsy",
    title: "Etsy Mobile",
    subtitle: "Information architecture redesign",
    outcome: "Improved task success from 67% to 94%",
    type: "IA Design · Navigation",
    year: "2024",
    role: "UX/IA Designer",
    team: "2 members",
    description:
      "Redesigned Etsy's mobile navigation structure using card sorting and treejack testing, improving task success from 67% to 94%.",
    problem:
      "Etsy's mobile navigation assumes you already know where things live, which overwhelms first-time visitors.",
    myContribution:
      "I designed and ran the card sorts and first-click tests, then built the sitemap and every Figma screen from lo-fi to hi-fi.",
    result:
      "Directness also rose from 65% to 78% after I regrouped the categories into broader ones, so people found things faster, not just more often.",
    thumbnail: "/images/etsy/thumbnail-edit.webp",
    doc: "/docs/etsy.pdf",
    th: {
      subtitle: "ออกแบบ information architecture ใหม่",
      outcome: "เพิ่มอัตราการทำ task สำเร็จจาก 67% เป็น 94%",
      type: "IA Design · Navigation",
      role: "UX/IA Designer",
      team: "2 คน",
      description:
        "ออกแบบโครงสร้าง navigation บนมือถือของ Etsy ใหม่ด้วย card sorting และ treejack testing ทำให้อัตราการทำ task สำเร็จเพิ่มจาก 67% เป็น 94%",
      problem:
        "เมนู navigation บนมือถือของ Etsy ออกแบบโดยคิดว่าผู้ใช้รู้อยู่แล้วว่าอะไรอยู่ตรงไหน ทำให้คนที่เข้ามาครั้งแรกรู้สึกสับสน",
      myContribution:
        "ผมออกแบบและดำเนินการ card sort และ first-click test จากนั้นทำ sitemap และทุกหน้าจอใน Figma ตั้งแต่ lo-fi จนถึง hi-fi",
      result:
        "ค่า directness ก็เพิ่มจาก 65% เป็น 78% หลังจากผมจัดหมวดหมู่ใหม่ให้เป็นกลุ่มที่กว้างขึ้น คนจึงหาของเจอเร็วขึ้น ไม่ใช่แค่เจอบ่อยขึ้น",
    },
  },
  {
    slug: "amazon-accessibility",
    title: "Amazon Accessibility",
    subtitle: "Screen reader usability research",
    outcome: "Identified five recurring accessibility barriers",
    type: "Research Study · HCI",
    year: "2024",
    role: "UX Researcher & Session Facilitator",
    team: "3 members",
    description:
      "Led usability sessions with blind users to identify where Amazon's e-commerce experience breaks down for screen reader users.",
    problem:
      "Ads, pop-ups and live updates turn Amazon into a wall of noise for blind shoppers using screen readers.",
    myContribution:
      "I facilitated a usability session with a blind participant, ran the ASQ analysis and built the affinity diagram, and co-designed the three task scenarios.",
    result:
      "Five recurring barriers and five recommendations. The biggest finding: screen reader skill shaped the experience as much as the site did.",
    thumbnail: "/images/amazon-accessibility/amazon-accessibility-thumbnail.webp",
    doc: "/docs/amazon-accessibility.pdf",
    th: {
      subtitle: "Usability research สำหรับผู้ใช้ screen reader",
      outcome: "พบอุปสรรคด้าน accessibility ที่เกิดซ้ำ 5 ข้อ",
      type: "งานวิจัย · HCI",
      role: "UX Researcher และ Session Facilitator",
      team: "3 คน",
      description:
        "นำ usability session กับผู้ใช้ที่ตาบอด เพื่อหาว่าประสบการณ์ e-commerce ของ Amazon ติดขัดตรงไหนสำหรับผู้ใช้ screen reader",
      problem:
        "โฆษณา ป๊อปอัป และข้อมูลที่อัปเดตแบบ live ทำให้การใช้ Amazon เต็มไปด้วยเสียงรบกวนสำหรับผู้ใช้ตาบอดที่ใช้ screen reader",
      myContribution:
        "ผมดำเนิน usability session กับผู้เข้าร่วมที่ตาบอด วิเคราะห์คะแนน ASQ ทำ affinity diagram และร่วมออกแบบ task scenario ทั้ง 3 แบบ",
      result:
        "พบอุปสรรคที่เกิดซ้ำ 5 ข้อ พร้อมข้อเสนอแนะ 5 ข้อ สิ่งที่สำคัญที่สุดที่พบคือ ความชำนาญในการใช้ screen reader ส่งผลต่อประสบการณ์พอ ๆ กับตัวเว็บไซต์เอง",
    },
  },
  {
    slug: "lost-item",
    title: "Lost Item Finder",
    subtitle: "User research for a tracking service",
    outcome: "Reframed tracking as both a location and emotional problem",
    type: "Research Study · Service Design",
    year: "2024",
    role: "UX Researcher",
    team: "4 members",
    description:
      "Studied how people search for lost items at home, and found that the real design problem is emotional, not functional.",
    problem:
      "Losing things at home is stressful, but tracking products treat it purely as a location problem.",
    myContribution:
      "I ran two in-home observation sessions and two interviews, contributed to both affinity diagrams, and built the personas.",
    result:
      "Reframed the problem as emotional as well as practical, which led to requirements for a calm, private, affordable tracker.",
    thumbnail: "/images/lost-item/thumbnail.webp",
    doc: "/docs/lost-item.pdf",
    th: {
      subtitle: "User research สำหรับบริการช่วยหาของหาย",
      outcome: "มองปัญหาของหายใหม่ ว่าไม่ใช่แค่เรื่องตำแหน่ง แต่เป็นเรื่องความรู้สึกด้วย",
      type: "งานวิจัย · Service Design",
      role: "UX Researcher",
      team: "4 คน",
      description:
        "ศึกษาว่าคนหาของหายในบ้านกันอย่างไร และพบว่าปัญหาที่แท้จริงในการออกแบบคือเรื่องความรู้สึก ไม่ใช่เรื่องการใช้งาน",
      problem: "ของหายในบ้านทำให้เครียด แต่ผลิตภัณฑ์ติดตามของมองว่าเป็นแค่ปัญหาเรื่องตำแหน่ง",
      myContribution:
        "ผมทำ observation ในบ้านของผู้เข้าร่วม 2 ครั้งและสัมภาษณ์ 2 ครั้ง ร่วมทำ affinity diagram ทั้งสองชุด และสร้าง persona",
      result:
        "มองปัญหาใหม่ว่าเป็นทั้งเรื่องความรู้สึกและเรื่องการใช้งานจริง จนได้ requirement สำหรับอุปกรณ์ติดตามที่ใช้แล้วสบายใจ เป็นส่วนตัว และราคาไม่แพง",
    },
  },
]

// The case study's text in the given language (Thai fields replace English).
export function localizedStudy(study: CaseStudy, lang: Lang): CaseStudy {
  return lang === "th" ? { ...study, ...study.th } : study
}
