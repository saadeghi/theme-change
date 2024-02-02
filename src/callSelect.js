function themeChange(attach = true) {
  if (attach === true) {
    document.addEventListener("livewire:navigated", function (event) {
      themeSelect()
    })
  }else{
    themeSelect()
  }
}
