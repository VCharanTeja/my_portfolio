document.addEventListener("DOMContentLoaded", function () {

  // ── MARK JS AS ACTIVE ──
  document.body.classList.add("js-ready");

  // ── NAV SHRINK ON SCROLL ──
  var navbar = document.getElementById("navbar");
  window.addEventListener("scroll", function () {
    if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 60);
  });

  // ── SCROLL REVEAL ──
  var revealEls = document.querySelectorAll(".reveal, .reveal-children");
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(function (el) { obs.observe(el); });

});