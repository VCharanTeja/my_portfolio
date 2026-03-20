// ── MARK JS AS ACTIVE (so CSS reveal hides work safely) ──
document.body.classList.add("js-ready");

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