function themeSelect() {
  var selectEl = document.querySelector("select[data-choose-theme]");
  var dataKey = selectEl ? selectEl.getAttribute('data-key') : null;
  (function (theme = localStorage.getItem(dataKey ? dataKey : "theme")) {
    if (localStorage.getItem(dataKey ? dataKey : "theme")) {
      document.documentElement.setAttribute("data-theme", theme);
      var optionToggler = document.querySelector("select[data-choose-theme] [value='" + theme.toString() + "']");
      if (optionToggler) {
        [...document.querySelectorAll("select[data-choose-theme] [value='" + theme.toString() + "']")].forEach((el) => {
          el.selected = true;
        });
      }
    }
  })();
  if (selectEl) {
    [...document.querySelectorAll("select[data-choose-theme]")].forEach((el) => {
      el.addEventListener('change', function () {
        document.documentElement.setAttribute("data-theme", this.value);
        localStorage.setItem(dataKey ? dataKey : "theme", document.documentElement.getAttribute('data-theme'));
        [...document.querySelectorAll("select[data-choose-theme] [value='" + localStorage.getItem(dataKey ? dataKey : "theme") + "']")].forEach((el) => {
          el.selected = true;
        });
      });
    });
  }
}