(function () {
  "use strict";

  var escape = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  // ---- Menu tabs ----
  var tabs = document.getElementById("menu-tabs");
  var panels = document.getElementById("menu-panels");
  var menu = window.ADMAS_MENU || [];

  function itemHTML(item) {
    var price = item.price ? '<span class="dish__price">$' + item.price + "</span>" : "";
    var options = "";
    if (item.options) {
      options = '<ul class="dish__options">' + item.options.map(function (o) {
        return "<li><span>" + escape(o[0]) + '</span><span class="dish__price">$' + o[1] + "</span></li>";
      }).join("") + "</ul>";
    }
    var veg = item.veg ? '<span class="veg-dot" title="Vegetarian" aria-label="Vegetarian"></span>' : "";
    return '<li class="dish">' +
      '<div class="dish__head"><h4>' + escape(item.name) + veg + '</h4><span class="dish__leader"></span>' + price + "</div>" +
      "<p>" + escape(item.desc) + "</p>" + options + "</li>";
  }

  menu.forEach(function (cat, i) {
    var tab = document.createElement("button");
    tab.type = "button";
    tab.className = "menu__tab";
    tab.id = "tab-" + cat.id;
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-controls", "panel-" + cat.id);
    tab.setAttribute("aria-selected", i === 0 ? "true" : "false");
    tab.tabIndex = i === 0 ? 0 : -1;
    tab.textContent = cat.title;
    tabs.appendChild(tab);

    var panel = document.createElement("div");
    panel.className = "menu__panel";
    panel.id = "panel-" + cat.id;
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("aria-labelledby", tab.id);
    panel.hidden = i !== 0;
    panel.innerHTML =
      (cat.note ? '<p class="menu__note">' + escape(cat.note) + "</p>" : "") +
      '<ul class="dishes">' + cat.items.map(itemHTML).join("") + "</ul>";
    panels.appendChild(panel);
  });

  function select(tab) {
    tabs.querySelectorAll(".menu__tab").forEach(function (t) {
      var on = t === tab;
      t.setAttribute("aria-selected", on ? "true" : "false");
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
    });
  }

  tabs.addEventListener("click", function (e) {
    var t = e.target.closest(".menu__tab");
    if (t) select(t);
  });
  tabs.addEventListener("keydown", function (e) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    var all = Array.prototype.slice.call(tabs.querySelectorAll(".menu__tab"));
    var idx = all.indexOf(document.activeElement);
    var next = all[(idx + (e.key === "ArrowRight" ? 1 : all.length - 1)) % all.length];
    next.focus();
    select(next);
  });

  // ---- Drinks ----
  var drinks = window.ADMAS_DRINKS || {};
  [["beer-list", drinks.beer], ["hot-list", drinks.hot], ["soft-list", drinks.soft]].forEach(function (pair) {
    var el = document.getElementById(pair[0]);
    if (!el || !pair[1]) return;
    el.innerHTML = pair[1].map(function (d) {
      return "<li><span>" + escape(d[0]) + '</span><span class="dish__leader"></span><span class="dish__price">$' + d[1] + "</span></li>";
    }).join("");
  });

  // ---- Nav ----
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav__toggle");
  var onScroll = function () { nav.classList.toggle("nav--solid", window.scrollY > 40); };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("nav--open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  document.querySelectorAll(".nav__links a").forEach(function (a) {
    a.addEventListener("click", function () {
      nav.classList.remove("nav--open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  // ---- Reveal on scroll ----
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  document.getElementById("year").textContent = new Date().getFullYear();
})();
