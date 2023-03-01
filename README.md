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

```html
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
  or if it's a Vue 3 project (using composition API): 
</summary>

Install: `npm i theme-change --save` and use it in your js file:

```js
import { onMounted } from 'vue'
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
  or if it's a Vue 2 project (using options API): 
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
<details>
<summary>
  or if it's a SolidJS project: 
</summary>

Install: `npm i theme-change --save` and use it in your js/jsx/tsx file:

```js
import { onMount } from 'solid-js'
import { themeChange } from 'theme-change'
onMount(async () => {
  themeChange();
})
```


</details>
<details>
<summary>
  or if it's a Astro project: 
</summary>

Install: `npm i theme-change --save` and use it in your .astro file(s):

Astro is a bit tricky because of how is rendering html page as a MPA (Multiple Pages Application)
Astro projects are therefore subject to [FART](https://css-tricks.com/flash-of-inaccurate-color-theme-fart/) problem. To prevent this we will use the [is:inline](https://docs.astro.build/en/reference/directives-reference/#isinline) astro directive.

If you want to apply themes on a single [astro page](https://docs.astro.build/en/core-concepts/astro-pages/) (remember Astro is an MPA framework) :

`src/pages/mypage.astro`

```js
---
---

<html lang="en">
  <head>
  <script is:inline>
      // ☝️ This script prevent the FART effect.
      if (localStorage.getItem("theme") === null) {
        document.documentElement.setAttribute("data-theme", "light");
      } else
      document.documentElement.setAttribute("data-theme",localStorage.getItem("theme"));
      // "theme" LocalStorage value is set by the package to remember user preference.
      // The value is checked and applyed before rendering anything.
  </script>
  <script>
      import { themeChange } from "theme-change";
      themeChange();
       // 👆 you could import the CDN directly instead of these two lines
    </script>
    <title>My crazy credit page</title>
  </head>
  <body>
    <h1>Welcome to my credit page!</h1>
  </body>
</html>
```

If you want to apply themes to all your [astro pages](https://docs.astro.build/en/core-concepts/astro-pages/), you need to execute both scripts in a Astro [layout](https://docs.astro.build/en/core-concepts/layouts/#sample-layout), it would need to wrap all your astro pages like so:

`src/layouts/MyCrazyLayout.astro`

```html
---
---

<html lang="en">
  <head>
    <script is:inline>
      // ☝️ This script prevent the FART effect.
      if (localStorage.getItem("theme") === null) {
        document.documentElement.setAttribute("data-theme", "light");
      } else
        document.documentElement.setAttribute(
          "data-theme",
          localStorage.getItem("theme")
        );
      // "theme" LocalStorage value is set by the package to remember user preference.
      // The value is checked and applyed before rendering anything.
    </script>
    <script>
      import { themeChange } from 'theme-change';
      themeChange();
      // 👆 you could import the CDN directly instead of these two lines
    </script>
    <meta charset="utf-8" />
    <title>My Cool Astro Layout Wraping All My Pages</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <nav>
      <a href="#">Home</a>
      <a href="#">Posts</a>
      <a href="#">Contact</a>
    </nav>
    <article>
      <slot />
      <!-- your content from src/pages/index.astro is injected here -->
    </article>
  </body>
</html>
```

`src/pages/index.astro`

```js
---
import MyCrazyLayout from '../layouts/MyCrazyLayout.astro';
---
<MySiteLayout>
  <p>My page content, wrapped in a layout!</p>
</MySiteLayout>
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

```css
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

<details>
<summary>
  Using custom localStorage key
</summary>

If you want to use a custom localStorage key, you can add it to the `data-key` attribute like this:

```html
<select data-choose-theme data-key="admin-panel">

<button data-key="front-page" data-set-theme="">

<span data-key="premium-user-theme" data-toggle-theme="dark">
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
