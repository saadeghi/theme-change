<svelte:options tag="theme-select" />

<script>
import { onMount } from "svelte"
import {loadThemeIfExists, setTheme} from "./functions"

export let themes = '{"cmyk": "CMYK", "dark": "Dark", "cupcake": "Cupcake", "synthwave": "Synthwave"}'
export let visible
let selected

onMount(() => {
  loadThemeIfExists()
  selected = localStorage.getItem('theme')

  if (visible != 'true') {
    var head = document.head || document.getElementsByTagName('head')[0]
    var style = document.createElement('style')
    var css = 'theme-select::part(select){color: currentColor;}'
    style.appendChild(document.createTextNode(css))
    head.appendChild(style)
  }

})
</script>

<style>
:host {
  display: inline-flex;
  /* position: relative; */
}
/* select{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
} */
.invisible {
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  border: none;
  background: none;
  outline: none;
  margin: 0;
}
</style>

<select part="select" class:invisible={visible != 'true'} bind:value={selected} on:change={setTheme(selected)}>
  {#each Object.entries(JSON.parse(themes)) as item, i}
    <option value="{item[0]}">{item[1]}</option>
  {/each}
</select>
