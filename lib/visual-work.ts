export type VisualWork = {
  slug: string
  title: string
  role: string
  category: string
  type: "video" | "image"
  src: string
  poster: string
  width: number
  height: number
}

export const visualWork: VisualWork[] = [
  {
    slug: "moonlight-blade-perspective",
    title: "Moonlight Blade — Perspective Video",
    role: "Motion Designer & Video Editor",
    category: "Moonlight Blade Mobile",
    type: "video",
    src: "/media/visual-work/perspective.mp4",
    poster: "/media/visual-work/perspective-poster.webp",
    width: 960,
    height: 1200,
  },
  {
    slug: "rov-skin-promo",
    title: "RoV — Promotional Graphic",
    role: "Graphic Designer",
    category: "RoV: Realm of Valor",
    type: "image",
    src: "/media/visual-work/rov-promo.webp",
    poster: "/media/visual-work/rov-promo.webp",
    width: 1080,
    height: 1080,
  },
  {
    slug: "moonlight-blade-garena-world",
    title: "Moonlight Blade — Garena World",
    role: "Motion Designer & Video Editor",
    category: "Moonlight Blade Mobile",
    type: "video",
    src: "/media/visual-work/garena-world.mp4",
    poster: "/media/visual-work/garena-world-poster.webp",
    width: 1920,
    height: 1080,
  },
  {
    slug: "fairy-tail-gajeel",
    title: "Fairy Tail — Gajeel Video",
    role: "Motion Designer & Video Editor",
    category: "Fairy Tail: Forces Unite!",
    type: "video",
    src: "/media/visual-work/gajeel.mp4",
    poster: "/media/visual-work/gajeel-poster.webp",
    width: 960,
    height: 1200,
  },
  {
    slug: "rov-5th-anniversary",
    title: "RoV — 5-Year Campaign",
    role: "Graphic Designer",
    category: "RoV: Realm of Valor",
    type: "image",
    src: "/media/visual-work/rov-anniversary.webp",
    poster: "/media/visual-work/rov-anniversary.webp",
    width: 1400,
    height: 1400,
  },
]
