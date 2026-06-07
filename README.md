# 🎨 CSS Theme Change

Tiny helper for CSS themes.

- One HTML attribute `data-set-theme` to set theme theme.
- Works with button, select, and checkbox
- Persists theme in localStorage
- Syncs all matching `data-set-theme` controls

[![][build]][build-url] [![][npm]][npm-url] [![][dl]][npm-url] 

## Demo

- CodePen: https://codepen.io/saadeghi/pen/OJypbNM?editors=1000

[![image](https://user-images.githubusercontent.com/7342023/80218042-e3c67e00-8655-11ea-94e8-925d0dcbfd57.gif)](#)

## Quick start

### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/theme-change@latest/index.js"></script>
```

### NPM

```bash
npm i theme-change@latest
```

```js
import { themeChange } from "theme-change";

themeChange();
```

Use `themeChange(false)` when controls are mounted after initial page load.

## Framework snippets

<details>
<summary>React</summary>

```js
import { useEffect } from "react";
import { themeChange } from "theme-change";

useEffect(() => {
  themeChange(false);
}, []);
```

</details>

<details>
<summary>Vue</summary>

```js
import { onMounted } from "vue";
import { themeChange } from "theme-change";

export default {
  setup() {
    onMounted(() => {
      themeChange(false);
    });
  },
};
```

</details>

<details>
<summary>Svelte</summary>

```js
import { onMount } from "svelte";
import { themeChange } from "theme-change";

onMount(() => {
  themeChange(false);
});
```

</details>

<details>
<summary>Astro</summary>

```astro
---
import { themeChange } from "theme-change";
---

<script>
  themeChange(false);
</script>
```

</details>

## CSS setup

Use [daisyUI](https://daisyui.com/) themes, or define your own theme tokens:

```css
:root {
  --my-color: #fff;
}
[data-theme="dark"] {
  --my-color: #000;
}
[data-theme="pink"] {
  --my-color: #ffabc8;
}
body {
  background-color: var(--my-color);
}
```

## HTML patterns

| Pattern | Preview | Minimal code |
| --- | --- | --- |
| Button set | <img src="https://user-images.githubusercontent.com/7342023/101527827-c0adcc00-39a3-11eb-9e41-24bfa91ea96c.gif" width="220" alt="button theme" /> | `<button data-set-theme="dark">Dark</button>` |
| Button rotate | <img src="https://user-images.githubusercontent.com/7342023/101527827-c0adcc00-39a3-11eb-9e41-24bfa91ea96c.gif" width="220" alt="button rotate" /> | `<button data-set-theme="dark,light,pink">Rotate</button>` |
| Select | <img src="https://user-images.githubusercontent.com/7342023/101527790-b4297380-39a3-11eb-9173-bc909549d160.gif" width="220" alt="select theme" /> | `<select data-set-theme><option value="">Default</option><option value="dark">Dark</option></select>` |
| Checkbox | <img src="https://user-images.githubusercontent.com/7342023/101527821-bf7c9f00-39a3-11eb-822b-7751265a18a5.gif" width="220" alt="checkbox theme" /> | `<input type="checkbox" value="dark" data-set-theme />` |

Notes:

- For checkbox: checked sets theme, unchecked clears theme.
- For rotate button: each click moves to the next item and loops.
- Controls with the same `data-key` stay in sync.

## Optional attributes

### `data-act-class`

```html
<button data-set-theme="" data-act-class="ACTIVE"></button>
<button data-set-theme="dark" data-act-class="ACTIVE"></button>
<button data-set-theme="pink" data-act-class="ACTIVE"></button>
```

### `data-key`

```html
<select data-set-theme data-key="admin-panel"></select>
<button data-set-theme="dark" data-key="front-page"></button>
<input type="checkbox" value="pink" data-set-theme data-key="premium-user-theme" />
```

## Backward compatibility

Legacy v2 attributes still work:

- `data-toggle-theme`
- `data-choose-theme`

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
