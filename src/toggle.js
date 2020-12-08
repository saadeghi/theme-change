function themeToggle() {
  document.addEventListener("DOMContentLoaded", function (event) {
    (function (theme = localStorage.getItem("theme")) {
      if (localStorage.getItem("theme")) {
        document.documentElement.setAttribute("data-theme", theme);
        var b = document.querySelector("[data-toggle-theme='" + theme.toString() + "']")
        if (b) {
          b.classList.add(b.getAttribute('data-act-class'))
        }
      }
    })();
    if (document.querySelector("[data-toggle-theme]")) {
      document.querySelector("[data-toggle-theme]").addEventListener("click", function () {
        if (document.documentElement.getAttribute('data-theme') == this.getAttribute('data-toggle-theme')) {
          document.documentElement.removeAttribute("data-theme");
          localStorage.removeItem("theme");
        } else {
          document.documentElement.setAttribute("data-theme", this.getAttribute('data-toggle-theme'));
          localStorage.setItem("theme", document.documentElement.getAttribute('data-theme'));
        }
        this.classList.toggle(this.getAttribute('data-act-class'));
      });
    }
  });
}