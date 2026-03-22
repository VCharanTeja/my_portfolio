// ── MARK JS AS ACTIVE ──
document.body.classList.add("js-ready");

// ── HAMBURGER MENU ──
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const navOverlay = document.getElementById("nav-overlay");

function toggleMenu() {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
  navOverlay.classList.toggle("open");
  document.body.style.overflow = navLinks.classList.contains("open") ? "hidden" : "";
}

hamburger.addEventListener("click", toggleMenu);
navOverlay.addEventListener("click", toggleMenu);

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
    navOverlay.classList.remove("open");
    document.body.style.overflow = "";
  });
});

// ── NAV SHRINK ON SCROLL ──
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 60);
});

// ── SCROLL REVEAL ──
const revealEls = document.querySelectorAll(".reveal, .reveal-children");
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => obs.observe(el));