import {
  storageKey,
  loadTheme,
  setThemeAndSync,
  syncSetThemeElements,
} from "./core.js";
import { parseThemeList, nextThemeFromList } from "./themeLogic.js";

const toggleThemeBound = new WeakSet();

export function themeToggle() {
  const els = [...document.querySelectorAll("[data-toggle-theme]")];
  if (!els.length) return;

  const keys = [...new Set(els.map((el) => storageKey(el)))];

  keys.forEach((key) => {
    const group = els.filter((el) => storageKey(el) === key);
    const saved = loadTheme(key);
    if (saved) {
      document.documentElement.setAttribute("data-theme", saved);
      group.forEach((el) => {
        const actClass = el.getAttribute("data-act-class");
        if (actClass) el.classList.add(actClass);
      });
    }
    syncSetThemeElements(saved, key);

    group.forEach((el) => {
      if (toggleThemeBound.has(el)) return;
      toggleThemeBound.add(el);
      el.addEventListener("click", function () {
        const themes = parseThemeList(this.getAttribute("data-toggle-theme"));
        const current = document.documentElement.getAttribute("data-theme");
        const next = nextThemeFromList(themes, current);

        setThemeAndSync(next, key);
        const actClass = this.getAttribute("data-act-class");
        if (actClass) group.forEach((e) => e.classList.toggle(actClass));
      });
    });
  });
}

export function themeChange(attach = true) {
  attach
    ? document.addEventListener("DOMContentLoaded", themeToggle)
    : themeToggle();
}
