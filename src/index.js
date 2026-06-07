import { themeToggle } from "./toggle.js";
import { themeBtn } from "./btn.js";
import { themeSelect } from "./select.js";

export function themeChange(attach = true) {
  function init() {
    // New unified API
    themeBtn();

    // Backward compatibility APIs
    themeToggle();
    themeSelect();
  }
  attach ? document.addEventListener("DOMContentLoaded", init) : init();
}
