function themeChange(attach = true) {
  if (attach === true) {
    document.addEventListener("DOMContentLoaded", function (event) {
      themeSelect()
    })
  }else{
    themeSelect()
  }
}