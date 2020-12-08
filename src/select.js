function themeSelect() {
  document.addEventListener("DOMContentLoaded", function (event) {
    (function (theme = localStorage.getItem("theme")) {
      if (localStorage.getItem("theme")) {
        document.documentElement.setAttribute("data-theme", theme);
        var optionToggler = document.querySelector("select[data-choose-theme] [value='" + theme.toString() + "']");
        if (optionToggler) {
          optionToggler.selected = true;
        }
      }
    })();
    if (document.querySelector('select[data-choose-theme]')) {
      document.querySelector('select[data-choose-theme]').addEventListener('change', function () {
        document.documentElement.setAttribute("data-theme", this.value);
        localStorage.setItem("theme", document.documentElement.getAttribute('data-theme'));
      });
    }
  });
}