function themeBtn() {
  document.addEventListener("DOMContentLoaded", function (event) {
    (function (theme = localStorage.getItem("theme")) {
      if (localStorage.getItem("theme")) {
        document.documentElement.setAttribute("data-theme", theme);
        var b = document.querySelector("[data-set-theme='" + theme.toString() + "']")
        if (b) {
          [...document.querySelectorAll("[data-set-theme]")].forEach((el) => {
            el.classList.remove(el.getAttribute('data-act-class'));
          });
          b.classList.add(b.getAttribute('data-act-class'))
        }
      } else {
        var b = document.querySelector("[data-set-theme='']")
        if (b) {
          b.classList.add(b.getAttribute('data-act-class'))
        }
      }
    })();
    [...document.querySelectorAll("[data-set-theme]")].forEach((el) => {
      el.addEventListener("click", function () {
        document.documentElement.setAttribute("data-theme", this.getAttribute('data-set-theme'));
        localStorage.setItem("theme", document.documentElement.getAttribute('data-theme'));
        [...document.querySelectorAll("[data-set-theme]")].forEach((el) => {
          el.classList.remove(el.getAttribute('data-act-class'));
        });
        el.classList.add(el.getAttribute('data-act-class'));
      });
    });
  });
}