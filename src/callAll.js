function themeChange(attach = true) {
  if (attach === true) {
    document.addEventListener("livewire:navigated", toggleAll)
			
    document.addEventListener("DOMContentLoaded", toggleAll)
    
    function toggleAll (event) {
        themeToggle();
        themeSelect();
        themeBtn()
    }
  }else{
    themeToggle()
    themeSelect()
    themeBtn()
  }
}
