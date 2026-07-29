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
  thumbnail: string
  doc: string
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
    thumbnail: "/images/kidsconnect/thumbnail.webp",
    doc: "/docs/kidsconnect.pdf",
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
    thumbnail: "/images/etsy/thumbnail-edit.webp",
    doc: "/docs/etsy.pdf",
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
    thumbnail: "/images/amazon-accessibility/thumbnail-1-edit.webp",
    doc: "/docs/amazon-accessibility.pdf",
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
      "Studied how people search for lost items at home — and found that the real design problem is emotional, not functional.",
    thumbnail: "/images/lost-item/thumbnail.webp",
    doc: "/docs/lost-item.pdf",
  },
]
