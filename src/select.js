function themeSelect() {
  var selectEl = document.querySelector("select[data-choose-theme]");
  var dataKey = selectEl ? selectEl.getAttribute("data-key") : null;
  (function (theme = localStorage.getItem(dataKey ? dataKey : "theme")) {
    if (localStorage.getItem(dataKey ? dataKey : "theme")) {
      document.documentElement.setAttribute("data-theme", theme);
      var optionToggler = document.querySelector(
        "select[data-choose-theme] [value='" + theme.toString() + "']",
      );
      if (optionToggler) {
        [
          ...document.querySelectorAll(
            "select[data-choose-theme] [value='" + theme.toString() + "']",
          ),
        ].forEach((el) => {
          el.selected = true;
        });
      }
    }
  })();
  if (selectEl) {
    [...document.querySelectorAll("select[data-choose-theme]")].forEach(
      (el) => {
        el.addEventListener("change", function () {
          var selectedTheme = this.value;
          if (selectedTheme === "") {
            document.documentElement.removeAttribute("data-theme");
            localStorage.removeItem(dataKey ? dataKey : "theme");
          } else {
            document.documentElement.setAttribute("data-theme", selectedTheme);
            localStorage.setItem(dataKey ? dataKey : "theme", selectedTheme);
          }
          [...document.querySelectorAll("select[data-choose-theme]")].forEach(
            (select) => {
              var selectedOption = select.querySelector(
                "[value='" + selectedTheme + "']",
              );
              if (selectedOption) {
                selectedOption.selected = true;
              }
            },
          );
        });
      },
    );
  }
}
