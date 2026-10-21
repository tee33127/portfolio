// Scrolls to an element and moves keyboard focus there, so keyboard and
// screen reader users land where the page scrolled to. Smooth scrolling is
// skipped when the visitor has asked their OS to reduce motion.
export function scrollToAndFocus(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
  el.focus({ preventScroll: true });
  history.replaceState(null, "", `#${id}`);
}
