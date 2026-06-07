import {
  keyFromAttr,
  normalizeTheme,
  themeFromSetValue,
  isSetElementActive,
} from "./themeLogic.js";

export const DEFAULT_KEY = keyFromAttr("");

export function storageKey(el) {
  return keyFromAttr(el && el.getAttribute("data-key"));
}

export function applyTheme(theme, key) {
  if (theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(key, theme);
  } else {
    document.documentElement.removeAttribute("data-theme");
    localStorage.removeItem(key);
  }
}

export function loadTheme(key) {
  return localStorage.getItem(key) || null;
}

function keyMatches(el, key) {
  return storageKey(el) === key;
}

function getSetThemeElements(key) {
  return [...document.querySelectorAll("[data-set-theme]")].filter((el) =>
    keyMatches(el, key),
  );
}

const setThemeBound = new WeakSet();

function bindOnce(el, registry, eventName, handler) {
  if (registry.has(el)) return;
  registry.add(el);
  el.addEventListener(eventName, handler);
}

function setActiveClass(el, active) {
  const actClass = el.getAttribute("data-act-class");
  if (!actClass) return;
  if (active) {
    el.classList.add(actClass);
  } else {
    el.classList.remove(actClass);
  }
}

export function syncSetThemeElements(theme, key) {
  const els = getSetThemeElements(key);

  els.forEach((el) => {
    if (el instanceof HTMLSelectElement) {
      const value = theme || "";
      const option = el.querySelector(`[value="${value}"]`);
      if (option) {
        el.value = value;
      }
      return;
    }

    if (el instanceof HTMLInputElement && el.type === "checkbox") {
      el.checked = !!theme && el.value === theme;
      return;
    }

    const value = el.getAttribute("data-set-theme") || "";
    const active = isSetElementActive(value, theme);
    setActiveClass(el, active);
  });
}

export function setThemeAndSync(theme, key) {
  applyTheme(theme, key);
  syncSetThemeElements(theme, key);
}

function initSetThemeGroup(key) {
  const els = getSetThemeElements(key);
  if (!els.length) return;

  const saved = loadTheme(key);
  if (saved) {
    document.documentElement.setAttribute("data-theme", saved);
  }
  syncSetThemeElements(saved, key);

  els.forEach((el) => {
    if (el instanceof HTMLSelectElement) {
      bindOnce(el, setThemeBound, "change", function () {
        setThemeAndSync(normalizeTheme(this.value), key);
      });
      return;
    }

    if (el instanceof HTMLInputElement && el.type === "checkbox") {
      bindOnce(el, setThemeBound, "change", function () {
        const value = normalizeTheme(this.value);
        setThemeAndSync(this.checked ? value : null, key);
      });
      return;
    }

    bindOnce(el, setThemeBound, "click", function () {
      const raw = this.getAttribute("data-set-theme") || "";
      const current = document.documentElement.getAttribute("data-theme");
      setThemeAndSync(themeFromSetValue(raw, current), key);
    });
  });
}

export function initDataSetTheme() {
  const els = [...document.querySelectorAll("[data-set-theme]")];
  if (!els.length) return;

  const keys = [...new Set(els.map((el) => storageKey(el)))];
  keys.forEach((key) => initSetThemeGroup(key));
}
