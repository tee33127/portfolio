"use client";

export default function ScrollToContact() {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const target = document.getElementById("contact");
    if (!target) return;

    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + window.scrollY;
    const distance = end - start;
    const duration = 900;
    let startTime: number | null = null;

    function easeInOut(t: number) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function step(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, start + distance * easeInOut(progress));
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
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
