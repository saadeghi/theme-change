# 🎨 CSS Theme Changer
Change CSS theme with toggle, buttons or select using CSS Variables ([CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)) and [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).  
It saves the chosen theme in brower localStorage and loads it again when page loads.  
You only need to define your theme in CSS  
  
See in action 👉 https://codepen.io/saadeghi/pen/OJypbNM

## 👨‍💻 How to use ##  
  
1️⃣ Copy JS from [theme-changer.js](/theme-changer.js)  
  
2️⃣ Set your themeable style as custom properties in CSS like this:  
```
:root {
  --color-default: #fff;
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
body {
  background-color: var(--color-default);
}
```

  
  
3️⃣ Use one of these elements to change the theme 👇👇  
  ### ✅ Toggle ###  
  Clicking on this button, toggles between the default theme and `dark` theme  
  ```
  <button data-toggle-theme="dark"></button>
  ```

  ### ✅ Buttons ###  
  Clicking on these buttons, sets the chosen theme and also sets the `ACTIVECLASS` for the chosen button  

  ```
  <button data-act-class="ACTIVECLASS" data-set-theme="">Default</button>
  <button data-act-class="ACTIVECLASS" data-set-theme="dark">Dark</button>
  <button data-act-class="ACTIVECLASS" data-set-theme="black">Black</button>
  ```

  ### ✅ Select ###  
  simply choose the theme  

  ```
  <select data-choose-theme>
    <option value="">Default</option>
    <option value="dark">Dark</option>
    <option value="black">Black</option>
  </select>
  ```
