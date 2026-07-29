import type { Metadata } from "next";
import AboutView from "./AboutView";

export const metadata: Metadata = {
  title: "About — Tee",
  description: "UX Designer and Researcher based in Bangkok, Thailand.",
  alternates: {
    canonical: "/about",
  },
};

export default function About() {
  return <AboutView />;
}
