function themeChange(attach = true) {
  if (attach === true) {
    document.addEventListener("DOMContentLoaded", function (event) {
      themeToggle()
      themeSelect()
      themeBtn()
    })
  }else{
    themeToggle()
    themeSelect()
    themeBtn()
  }
}