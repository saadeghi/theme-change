export const setTheme = (theme) => {
  localStorage.setItem("theme", theme)
  document.documentElement.setAttribute("data-theme", theme)
}

export const removeTheme = () => {
  localStorage.removeItem("theme")
  document.documentElement.removeAttribute("data-theme")
}

export const loadThemeIfExists = () => {
  if (localStorage.getItem("theme")) {
    setTheme(localStorage.getItem("theme"))
  }
}

export const toggleBetweenTwoItems = (themesArray, checked) => {
  if (themesArray.length == 1 && checked === false) {
    setTheme(themesArray[0])
  }
  else if(themesArray.length == 1 && checked === true) {
    removeTheme()
  }
  else if(themesArray.length == 2 && checked === false) {
    setTheme(themesArray[1])
  }
  else if(themesArray.length == 2 && checked === true) {
    setTheme(themesArray[0])
  }
}

export const switchBetweenArrayItems = (themesArray) => {
  if (themesArray && themesArray.length >= 1) {

    let activeThemeIndex = themesArray.indexOf(localStorage.getItem("theme"))
    if (activeThemeIndex != -1) {
      removeTheme()
      
      if (themesArray.length >= activeThemeIndex + 2) {
        setTheme(themesArray[activeThemeIndex + 1])
      }else if( themesArray.length >= 2){
        setTheme(themesArray[0])
      }

    }else{
      setTheme(themesArray[0])
    }

  }
}
