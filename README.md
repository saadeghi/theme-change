# 🎨 CSS Theme Change

- A tiny JS script to handle CSS themes
- Change CSS theme using `button`, `toggle` or a `<select>`
- It saves chosen theme in browser and uses it again when page reloads

[![][build]][build-url] [![][install-size]][install-size-url] [![][js]][js-url]  
[![][npm]][npm-url] [![][dl]][npm-url] [![][commit]][gh-url]

# 🖥 Demo

- See example code on [codepen](https://codepen.io/saadeghi/pen/OJypbNM)
- See Sample site on [Netlify](https://css-theme-changer.netlify.app/)
- See Vue Example on [Vercel](https://vue-3-theme.vercel.app)

[![image](https://user-images.githubusercontent.com/7342023/80218042-e3c67e00-8655-11ea-94e8-925d0dcbfd57.gif)](#)

# 💿 Use

## JS

Use CDN:

```
<script src="https://cdn.jsdelivr.net/npm/theme-change@2.0.2/index.js"></script>
```

<details>
<summary>
  Or use NPM: 
</summary>

Install: `npm i theme-change --save` and use it in your js file:

```js
import { themeChange } from 'theme-change'
themeChange()
```

</details>
<details>
<summary>
  or if it's a React project: 
</summary>

Install: `npm i theme-change --save` and use it in your js file:

```js
import { useEffect } from 'react'
import { themeChange } from 'theme-change'

useEffect(() => {
  themeChange(false)
  // 👆 false parameter is required for react project
}, [])
```

</details>
<details>
<summary>
  or if it's a Vue 3 project: 
</summary>

Install: `npm i theme-change --save` and use it in your js file:

```js
import { onMounted, onUpdated, onUnmounted } from 'vue'
import { themeChange } from 'theme-change'

export default {
  setup() {
    onMounted(() => {
      themeChange(false)
    })
  },
}
```

</details>
<details>
<summary>
  or if it's a Vue 2 project: 
</summary>

Install: `npm i theme-change --save` and use it in your js file:

```js
import { themeChange } from 'theme-change'

export default {
  mounted: function () {
    themeChange(false)
  },
}
```

</details>
<details>
<summary>
  or if it's a Svelte project: 
</summary>

Install: `npm i theme-change --save` and use it in your svelte component that uses one theme-change attributes:

```js
import { onMount } from 'svelte'
import { themeChange } from 'theme-change'

// NOTE: the element that is using one of the theme attributes must be in the DOM on mount
onMount(() => {
  themeChange(false)
  // 👆 false parameter is required for svelte
})
```

</details>

## CSS

Set your themeable style as custom properties in CSS like this:

```css
:root {
  --my-color: #fff;
  /* or any other variables/style */
}
[data-theme='dark'] {
  --my-color: #000;
}
[data-theme='pink'] {
  --my-color: #ffabc8;
}
```

then use your variables on any element

```css
body {
  background-color: var(--my-color);
}
```

## HTML

There are 3 options:

- ### Using buttons to set a theme

  [![btn](https://user-images.githubusercontent.com/7342023/101527827-c0adcc00-39a3-11eb-9e41-24bfa91ea96c.gif)](#)

  Clicking on these buttons, sets the chosen theme and also adds the `ACTIVECLASS` to the chosen button

  ```
  <button data-set-theme="" data-act-class="ACTIVECLASS"></button>
  <button data-set-theme="dark" data-act-class="ACTIVECLASS"></button>
  <button data-set-theme="pink" data-act-class="ACTIVECLASS"></button>
  ```

- ### Toggle between two themes

  [![toggle](https://user-images.githubusercontent.com/7342023/101527821-bf7c9f00-39a3-11eb-822b-7751265a18a5.gif)](#)

  Clicking on this element, toggles between `dark` and `light` theme and also adds the `ACTIVECLASS` to the element

  ```
  <button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS"></button>
  ```

- ### `<select>` menu

  [![select](https://user-images.githubusercontent.com/7342023/101527790-b4297380-39a3-11eb-9173-bc909549d160.gif)](#)

  ```
  <select data-choose-theme>
    <option value="">Default</option>
    <option value="dark">Dark</option>
    <option value="pink">Pink</option>
  </select>
  ```

# Advance use

<details>
<summary>
  Set theme based on OS color-scheme
</summary>

```
@media (prefers-color-scheme: dark){
  :root{
    --my-color: #252b30;
  }
}
```

</details>

<details>
<summary>
  Use with PurgeCSS
</summary>

If you're using [Purge CSS](https://purgecss.com/), you might need to [safe list](https://purgecss.com/safelisting.html#in-the-css-directly) your CSS using the comments below because your secondary themes will be purged

- Safelist `[data-theme]` on postcss config

  ```js
  module.exports = {
    purge: {
      options: {
        safelist: [/data-theme$/],
      },
    },
  }
  ```

- Safelist inside CSS file

  ```css
  /*! purgecss start ignore */

  [data-theme='dark'] {
    --my-color: #252b30;
  }

  /*! purgecss end ignore */
  ```

</details>

---

[install-size]: https://badgen.net/bundlephobia/minzip/theme-change?label=bundle%20size&color=purple
[js]: https://badgen.net/badgesize/normal/https/unpkg.com/theme-change/index.js?label=file%20size&color=purple
[npm]: https://badgen.net/npm/v/theme-change?label=version&color=purple
[dl]: https://badgen.net/npm/dt/theme-change?icon=npm&color=purple
[commit]: https://badgen.net/github/last-commit/saadeghi/theme-change?icon=github&color=purple
[build]: https://badgen.net/github/checks/saadeghi/theme-change?label=build
[build-url]: https://github.com/saadeghi/theme-change/actions
[install-size-url]: https://bundlephobia.com/result?p=theme-change
[js-url]: https://unpkg.com/theme-change@latest/index.js
[npm-url]: https://www.npmjs.com/package/theme-change
[gh-url]: https://github.com/saadeghi/theme-change
