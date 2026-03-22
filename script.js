document.addEventListener("DOMContentLoaded", function () {

  // ── MARK JS AS ACTIVE ──
  document.body.classList.add("js-ready");

  // ── HAMBURGER MENU ──
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  const navOverlay = document.getElementById("nav-overlay");

  if (hamburger && navLinks && navOverlay) {
    function openMenu() {
      hamburger.classList.add("open");
      navLinks.classList.add("open");
      navOverlay.classList.add("open");
      document.body.style.overflow = "hidden";
    }

    function closeMenu() {
      hamburger.classList.remove("open");
      navLinks.classList.remove("open");
      navOverlay.classList.remove("open");
      document.body.style.overflow = "";
    }

    hamburger.addEventListener("click", function () {
      if (navLinks.classList.contains("open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    navOverlay.addEventListener("click", closeMenu);

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
  }

  // ── NAV SHRINK ON SCROLL ──
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", function () {
    if (navbar) {
      navbar.classList.toggle("scrolled", window.scrollY > 60);
    }
  });

  // ── SCROLL REVEAL ──
  const revealEls = document.querySelectorAll(".reveal, .reveal-children");
  const obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(function (el) {
    obs.observe(el);
  });

});