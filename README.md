# 🎨 CSS Theme Changer  

Only 2KB minified (400 bytes GZipped)

Change CSS theme with toggle, buttons or select using CSS Variables ([CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)) and [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).  
It saves the chosen theme in brower localStorage and loads it again when page loads.  
You only need to define your theme in CSS  
  
See in action 👉 https://codepen.io/saadeghi/pen/OJypbNM

![image](https://user-images.githubusercontent.com/7342023/80218042-e3c67e00-8655-11ea-94e8-925d0dcbfd57.gif)


## 👨‍💻 How to use ##  
  
1️⃣ Copy JS from [theme-changer.js](/theme-changer.js)  
  
2️⃣ Set your themeable style as custom properties in CSS like this:  
```
:root {
  --color-default: #fff;
  /* or any other variables */
}
[data-theme='dark'] {
  --color-default: #252b30;
}
[data-theme='black'] {
  --color-default: #000000;
}
[data-theme='🌸'] {
  --color-default: #ffabc8;
}
[data-theme='🐬'] {
  --color-default: #7ec6ff;
}
[data-theme='🐤'] {
  --color-default: #ffd65a;
}
/* and use your variables on any element */
body {
  background-color: var(--color-default);
}
```

  
  
3️⃣ Use one of these data attributes to change the theme 👇👇  
  ### ✅ Toggle ###  
  Using `data-toggle-theme`  
  Clicking on this button, toggles between the default theme and `dark` theme  
  ```
  <button data-toggle-theme="dark"></button>
  ```

  ### ✅ Buttons ###  
  Using `data-set-theme`  
  Clicking on these buttons, sets the chosen theme and also sets the `ACTIVECLASS` for the chosen button  

  ```
  <button data-act-class="ACTIVECLASS" data-set-theme="">Default</button>
  <button data-act-class="ACTIVECLASS" data-set-theme="dark">Dark</button>
  <button data-act-class="ACTIVECLASS" data-set-theme="black">Black</button>
  ```

  ### ✅ Select ###  
  Using `data-choose-theme`  
  Simply choose the theme  

  ```
  <select data-choose-theme>
    <option value="">Default</option>
    <option value="dark">Dark</option>
    <option value="black">Black</option>
  </select>
  ```
