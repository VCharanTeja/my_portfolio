document.addEventListener("DOMContentLoaded", function () {

  document.body.classList.add("js-ready");

  // ── HAMBURGER — inline style approach (no CSS class conflicts) ──
  var btn = document.getElementById("hamburger");
  var menu = document.getElementById("nav-links");
  var overlay = document.getElementById("nav-overlay");
  var isOpen = false;

  function openMenu() {
    isOpen = true;
    menu.style.cssText = "display:flex !important; flex-direction:column; position:fixed; top:0; right:0; width:72%; max-width:300px; height:100vh; background:rgba(6,10,18,0.98); backdrop-filter:blur(24px); border-left:1px solid rgba(255,255,255,0.08); padding:60px 40px; gap:28px; z-index:150; justify-content:center; align-items:flex-start;";
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";
    var spans = btn.querySelectorAll("span");
    spans[0].style.transform = "translateY(7px) rotate(45deg)";
    spans[1].style.opacity = "0";
    spans[2].style.transform = "translateY(-7px) rotate(-45deg)";
  }

  function closeMenu() {
    isOpen = false;
    menu.style.cssText = "";
    overlay.style.display = "none";
    document.body.style.overflow = "";
    var spans = btn.querySelectorAll("span");
    spans[0].style.transform = "";
    spans[1].style.opacity = "1";
    spans[2].style.transform = "";
  }

  if (btn) {
    btn.addEventListener("click", function () {
      isOpen ? closeMenu() : openMenu();
    });
  }

  if (overlay) {
    overlay.addEventListener("click", closeMenu);
  }

  if (menu) {
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
  }

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