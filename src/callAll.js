function themeChange(attach = true) {
  if (attach === true) {
    document.addEventListener("livewire:navigated", function (event) {
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
