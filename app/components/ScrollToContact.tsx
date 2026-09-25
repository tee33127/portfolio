"use client";

export default function ScrollToContact() {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <a
      href="#contact"
      onClick={handleClick}
      className="text-sm font-medium bg-black dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-lg hover:opacity-70 transition-opacity"
    >
      Contact me
    </a>
  );
}
