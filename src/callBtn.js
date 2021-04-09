function themeChange(attach = true) {
  if (attach === true) {
    document.addEventListener("DOMContentLoaded", function (event) {
      themeBtn()
    })
  }else{
    themeBtn()
  }
}