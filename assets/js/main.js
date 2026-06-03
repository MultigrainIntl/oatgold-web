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

  /* Quote / contact form — AJAX to Formspree, inline success banner */
  document.querySelectorAll("form[data-quote-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var btn = form.querySelector('[type="submit"]');
      var card = form.closest(".form-card");
      var success = card && card.querySelector(".form-success");
      if (btn) { btn.disabled = true; btn.textContent = "Sending…"; }
      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
      .then(function (res) {
        if (res.ok) {
          if (success) { success.classList.add("show"); success.scrollIntoView({ behavior: "smooth", block: "center" }); }
          form.reset();
          if (btn) { btn.disabled = false; btn.textContent = "Send quote request"; }
        } else {
          return res.json().then(function (data) {
            var msg = (data.errors || []).map(function (err) { return err.message; }).join(", ") || "Something went wrong — please email sales@oatgold.com.";
            alert(msg);
            if (btn) { btn.disabled = false; btn.textContent = "Send quote request"; }
          });
        }
      })
      .catch(function () {
        alert("Could not send your request. Please email us at sales@oatgold.com.");
        if (btn) { btn.disabled = false; btn.textContent = "Send quote request"; }
      });
    });
  });

  /* Footer year */
  var yr = document.getElementById("year");
  if (yr) { yr.textContent = new Date().getFullYear(); }
})();
