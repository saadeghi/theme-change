import { initDataSetTheme } from "./core.js";

export function themeBtn() {
  initDataSetTheme();
}

export function themeChange(attach = true) {
  attach ? document.addEventListener("DOMContentLoaded", themeBtn) : themeBtn();
}
