function themeToggle() {
  document.addEventListener("DOMContentLoaded", function (event) {
    var toggleEl = document.querySelector("[data-toggle-theme]");
    (function (theme = localStorage.getItem("theme")) {
      if (localStorage.getItem("theme")) {
        document.documentElement.setAttribute("data-theme", theme);
        if (toggleEl) {
          toggleEl.classList.add(toggleEl.getAttribute('data-act-class'))
        }
      }
    })();
    if (toggleEl) {
      toggleEl.addEventListener("click", function () {
        var themesList = toggleEl.getAttribute('data-toggle-theme');
        if (themesList) {
          var themesArray = themesList.split(",");
          if (document.documentElement.getAttribute('data-theme') == themesArray[0]) {
            if (themesArray.length == 1) {
              document.documentElement.removeAttribute("data-theme");
              localStorage.removeItem("theme");
            }else{
              document.documentElement.setAttribute("data-theme", themesArray[1]);
              localStorage.setItem("theme", themesArray[1]);
            }
          } else {
            document.documentElement.setAttribute("data-theme", themesArray[0]);
            localStorage.setItem("theme", themesArray[0]);
          }
        }
        this.classList.toggle(this.getAttribute('data-act-class'));
      });
    }
  });
}