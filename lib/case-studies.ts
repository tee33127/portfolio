export type CaseStudy = {
  slug: string
  title: string
  subtitle: string
  subtitle_th: string
  type: string
  year: string
  role: string
  team: string
  description: string
  thumbnail: string
  doc: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "kidsconnect",
    title: "KidsConnect",
    subtitle: "Family task management app",
    subtitle_th: "แอปจัดการงานในครอบครัว",
    type: "Capstone · Mobile Design",
    year: "2025",
    role: "Lead Designer, Researcher",
    team: "3 members",
    description:
      "Designed a chore management app that builds responsibility in children without relying on financial incentives.",
    thumbnail: "/images/kidsconnect/thumbnail.png",
    doc: "/docs/kidsconnect.pdf",
  },
  {
    slug: "amazon-accessibility",
    title: "Amazon Accessibility",
    subtitle: "Screen reader usability research",
    subtitle_th: "การวิจัยการใช้งาน Screen Reader",
    type: "Research Study · HCI",
    year: "2024",
    role: "Session Facilitator, Presenter",
    team: "3 members",
    description:
      "Led usability sessions with blind users to identify where Amazon's e-commerce experience breaks down for screen reader users.",
    thumbnail: "/images/amazon-accessibility/thumbnail-1-edit.png",
    doc: "/docs/amazon-accessibility.pdf",
  },
  {
    slug: "etsy",
    title: "Etsy Mobile",
    subtitle: "Information architecture redesign",
    subtitle_th: "ออกแบบโครงสร้างข้อมูลใหม่",
    type: "IA Design · Navigation",
    year: "2024",
    role: "Lead Designer",
    team: "2 members",
    description:
      "Redesigned Etsy's mobile navigation structure using card sorting and treejack testing, improving task success from 67% to 94%.",
    thumbnail: "/images/etsy/thumbnail-edit.png",
    doc: "/docs/etsy.pdf",
  },
  {
    slug: "lost-item",
    title: "Lost Item Finder",
    subtitle: "User research for a tracking service",
    subtitle_th: "การวิจัยผู้ใช้สำหรับบริการค้นหาสิ่งของ",
    type: "Research Study · Service Design",
    year: "2024",
    role: "Researcher",
    team: "4 members",
    description:
      "Studied how people search for lost items at home — and found that the real design problem is emotional, not functional.",
    thumbnail: "/images/lost-item/thumbnail.png",
    doc: "/docs/lost-item.pdf",
  },
]
