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
  },
]
