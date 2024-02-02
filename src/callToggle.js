function themeChange(attach = true) {
  if (attach === true) {
    document.addEventListener("livewire:navigated", function (event) {
      themeToggle()
    })
    document.addEventListener("DOMContentLoaded", function (event) {
      themeToggle()
    })
  }else{
    themeToggle()
  }
}
