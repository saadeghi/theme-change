import {
  storageKey,
  loadTheme,
  setThemeAndSync,
  syncSetThemeElements,
} from "./core.js";
import { normalizeTheme } from "./themeLogic.js";

const chooseThemeBound = new WeakSet();

export function themeSelect() {
  const els = [...document.querySelectorAll("select[data-choose-theme]")];
  if (!els.length) return;

  const keys = [...new Set(els.map((el) => storageKey(el)))];

  keys.forEach((key) => {
    const group = els.filter((el) => storageKey(el) === key);
    const saved = loadTheme(key);
    if (saved) {
      document.documentElement.setAttribute("data-theme", saved);
      group.forEach((select) => {
        const opt = select.querySelector(`[value="${saved}"]`);
        if (opt) {
          select.value = saved;
        }
      });
    }
    syncSetThemeElements(saved, key);

    group.forEach((el) => {
      if (chooseThemeBound.has(el)) return;
      chooseThemeBound.add(el);
      el.addEventListener("change", function () {
        const theme = normalizeTheme(this.value);
        setThemeAndSync(theme, key);
        group.forEach((select) => {
          const v = theme || "";
          const opt = select.querySelector(`[value="${v}"]`);
          if (opt) {
            select.value = v;
          }
        });
      });
    });
  });
}

export function themeChange(attach = true) {
  attach
    ? document.addEventListener("DOMContentLoaded", themeSelect)
    : themeSelect();
}
