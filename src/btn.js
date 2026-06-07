function themeBtn() {
  var btnEl = document.querySelector("[data-set-theme='']");
  var dataKey = btnEl ? btnEl.getAttribute("data-key") : null;
  (function (theme = localStorage.getItem(dataKey ? dataKey : "theme")) {
    if (theme != undefined && theme != "") {
      if (
        localStorage.getItem(dataKey ? dataKey : "theme") &&
        localStorage.getItem(dataKey ? dataKey : "theme") != ""
      ) {
        document.documentElement.setAttribute("data-theme", theme);
        var btnEl = document.querySelector(
          "[data-set-theme='" + theme.toString() + "']",
        );
        if (btnEl) {
          [...document.querySelectorAll("[data-set-theme]")].forEach((el) => {
            el.classList.remove(el.getAttribute("data-act-class"));
          });
          if (btnEl.getAttribute("data-act-class")) {
            btnEl.classList.add(btnEl.getAttribute("data-act-class"));
          }
        }
      } else {
        var btnEl = document.querySelector("[data-set-theme='']");
        if (btnEl.getAttribute("data-act-class")) {
          btnEl.classList.add(btnEl.getAttribute("data-act-class"));
        }
      }
    }
  })();
  [...document.querySelectorAll("[data-set-theme]")].forEach((el) => {
    el.addEventListener("click", function () {
      var selectedTheme = this.getAttribute("data-set-theme");
      if (selectedTheme === "") {
        document.documentElement.removeAttribute("data-theme");
        localStorage.removeItem(dataKey ? dataKey : "theme");
      } else {
        document.documentElement.setAttribute("data-theme", selectedTheme);
        localStorage.setItem(dataKey ? dataKey : "theme", selectedTheme);
      }
      [...document.querySelectorAll("[data-set-theme]")].forEach((el) => {
        el.classList.remove(el.getAttribute("data-act-class"));
      });
      if (el.getAttribute("data-act-class")) {
        el.classList.add(el.getAttribute("data-act-class"));
      }
    });
  });
}
