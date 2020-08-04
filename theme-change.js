function themeToggle() {
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
}


function themeBtn() {
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
}

function themeSelect() {
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
}

export { themeToggle, themeBtn, themeSelect };
