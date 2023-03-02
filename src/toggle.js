function themeToggle() {
  var toggleEl = document.querySelector("[data-toggle-theme]");
  var dataKey = toggleEl ? toggleEl.getAttribute('data-key') : null;
  (function (theme = localStorage.getItem(dataKey ? dataKey : "theme")) {
    if (localStorage.getItem(dataKey ? dataKey : "theme")) {
      document.documentElement.setAttribute("data-theme", theme);
      if (toggleEl) {
        [...document.querySelectorAll("[data-toggle-theme]")].forEach((el) => {
          el.classList.add(toggleEl.getAttribute('data-act-class'))
        });
      }
    }
  })();
  if (toggleEl) {
    [...document.querySelectorAll("[data-toggle-theme]")].forEach((el) => {
      el.addEventListener("click", function () {
        var themesList = el.getAttribute('data-toggle-theme');
        if (themesList) {
          var themesArray = themesList.split(",");
          if (document.documentElement.getAttribute('data-theme') == themesArray[0]) {
            if (themesArray.length == 1) {
              document.documentElement.removeAttribute("data-theme");
              localStorage.removeItem(dataKey ? dataKey : "theme");
            }else{
              document.documentElement.setAttribute("data-theme", themesArray[1]);
              localStorage.setItem(dataKey ? dataKey : "theme", themesArray[1]);
            }
          } else {
            document.documentElement.setAttribute("data-theme", themesArray[0]);
            localStorage.setItem(dataKey ? dataKey : "theme", themesArray[0]);
          }
        }
        [...document.querySelectorAll("[data-toggle-theme]")].forEach((el) => {
          el.classList.toggle(this.getAttribute('data-act-class'));
        });
      });
    });
  }
}