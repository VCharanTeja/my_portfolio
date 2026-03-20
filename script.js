// ── TYPING EFFECT ──
const roles = ["Data Analyst", "SQL Developer", "Power BI Developer", "Python Enthusiast"];
let roleIdx = 0, charIdx = 0, deleting = false;

function type() {
  const el = document.getElementById("typing");
  if (!el) return;
  const role = roles[roleIdx];
  el.textContent = deleting ? role.slice(0, charIdx--) : role.slice(0, charIdx++);
  let speed = deleting ? 35 : 70;
  if (!deleting && charIdx > role.length) { speed = 1800; deleting = true; }
  else if (deleting && charIdx < 0) { deleting = false; roleIdx = (roleIdx + 1) % roles.length; speed = 300; }
  setTimeout(type, speed);
}
setTimeout(type, 600);

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