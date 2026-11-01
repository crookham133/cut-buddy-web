/* The site chrome every page shares (31 Oct, Ryan): the sticky bar gets a line
   under it once the page has scrolled, and on the home page the wordmark decodes
   on load. Loaded right after the bar, so both elements already exist. Local,
   no libraries, nothing stored. */
(function () {
  "use strict";
  var bar = document.getElementById("topbar");
  if (!bar) return;
  var ticking = false;
  function onScroll() { bar.classList.toggle("is-scrolled", window.scrollY > 4); }
  window.addEventListener("scroll", function () {
    if (ticking) return; ticking = true;
    requestAnimationFrame(function () { ticking = false; onScroll(); });
  }, { passive: true });
  onScroll();
})();

/* The wordmark plays only where the page asked for it before it painted:
   index.html adds .cb-wm-wait in its <head> unless reduced motion is on, so a
   tap on the logo from any page lands on a fresh visit that plays it. */
/* "CUT BUDDY" resolves from 0s and 1s into its letters, once, in about 1.1 s:
   each letter shows a gold digit, then turns white, left to right, as in the
   app's launch animation. The letters stay in place (transparent) under the
   digits, so nothing changes width. Time only runs while the tab is visible. */
(function () {
  var html = document.documentElement, wm = document.getElementById("wordmark");
  if (!html.classList.contains("cb-wm-wait") || !wm) return;
  var spans = [], text = wm.textContent;
  wm.textContent = "";
  text.split("").forEach(function (c) {
    if (c === " ") { wm.appendChild(document.createTextNode(" ")); return; }
    var s = document.createElement("span"); s.textContent = c; s.className = "is-digit";
    s.setAttribute("data-d", Math.random() < 0.5 ? "0" : "1"); wm.appendChild(s); spans.push(s);
  });
  html.classList.remove("cb-wm-wait");
  var START = 0.3, STEP = 0.11, FLIP = 0.07;   // seconds
  var t = 0, last = null, flip = 0;
  function frame(now) {
    if (document.hidden) { last = null; requestAnimationFrame(frame); return; }
    var dt = last === null ? 0 : Math.min(0.05, (now - last) / 1000); last = now;
    t += dt; flip += dt;
    var left = 0;
    spans.forEach(function (s, i) {
      if (t >= START + i * STEP) { if (s.className) s.className = ""; }
      else { left++; if (flip >= FLIP) s.setAttribute("data-d", Math.random() < 0.5 ? "0" : "1"); }
    });
    if (flip >= FLIP) flip = 0;
    if (left) requestAnimationFrame(frame);   // the spans stay: putting plain text back would re-kern it by a pixel
  }
  document.addEventListener("visibilitychange", function () { last = null; });
  requestAnimationFrame(frame);
})();
