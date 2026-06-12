import {
  storageKey,
  loadTheme,
  setThemeAndSync,
  syncSetThemeElements,
  setActiveAttr,
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
        const isActive =
          parseThemeList(el.getAttribute("data-toggle-theme"))[0] === saved;
        const actClass = el.getAttribute("data-act-class");
        if (actClass) el.classList.toggle(actClass, isActive);
        setActiveAttr(el, isActive);
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
        group.forEach((e) => {
          const isActive =
            parseThemeList(e.getAttribute("data-toggle-theme"))[0] === next;
          const actClass = e.getAttribute("data-act-class");
          if (actClass) e.classList.toggle(actClass, isActive);
          setActiveAttr(e, isActive);
        });
      });
    });
  });
}

export function themeChange(attach = true) {
  attach
    ? document.addEventListener("DOMContentLoaded", themeToggle)
    : themeToggle();
}
