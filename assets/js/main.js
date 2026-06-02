/* Oat Gold — vanilla JS: nav, scroll header, reveal-on-scroll, FAQ, form */
(function () {
  "use strict";

  /* Mobile nav toggle */
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links && nav) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      nav.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* Header shadow on scroll */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () { header.classList.toggle("scrolled", window.scrollY > 8); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* Reveal on scroll */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* FAQ accordion */
  document.querySelectorAll(".faq-q").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", expanded ? "false" : "true");
      var ans = btn.parentElement.querySelector(".faq-a");
      ans.style.maxHeight = expanded ? "0" : ans.scrollHeight + "px";
    });
  });

  /* Quote / contact form — client-side validation + mailto fallback.
     NOTE: GitHub Pages is static and cannot process forms server-side.
     This wires a graceful confirmation + opens the visitor's email client.
     Replace ACTION below with a Formspree/Basin endpoint for inbox delivery. */
  document.querySelectorAll("form[data-quote-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var data = new FormData(form);
      var lines = [];
      data.forEach(function (v, k) { if (v) lines.push(k + ": " + v); });
      var subject = encodeURIComponent("Oat Gold quote request — " + (data.get("company") || "New inquiry"));
      var body = encodeURIComponent(lines.join("\n"));
      var success = form.querySelector(".form-success");
      if (success) { success.classList.add("show"); success.scrollIntoView({ behavior: "smooth", block: "center" }); }
      form.reset();
      window.location.href = "mailto:sales@oatgold.com?subject=" + subject + "&body=" + body;
    });
  });

  /* Footer year */
  var yr = document.getElementById("year");
  if (yr) { yr.textContent = new Date().getFullYear(); }
})();
