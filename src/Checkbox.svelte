<svelte:options tag="theme-checkbox" />

<script>
import { onMount } from "svelte"
import {loadThemeIfExists, removeTheme, setTheme} from "./functions"

export let theme
export let visible

export let checked
const handleCheckbox = (e) => {
  if (checked === false) {
    [...document.querySelectorAll("theme-checkbox")].forEach((el) => {
      el.setAttribute('checked', true)
    })
    setTheme(theme)
    checked = true
  } else {
    [...document.querySelectorAll("theme-checkbox")].forEach((el) => {
      el.setAttribute('checked', false)
    })
    removeTheme()
    checked = false
  }
}

onMount(() => {
  loadThemeIfExists()
  if (localStorage.getItem("theme")) {
    [...document.querySelectorAll("theme-checkbox")].forEach((el) => {
      el.setAttribute('checked', true)
    })
    checked = true
  }else{
    [...document.querySelectorAll("theme-checkbox")].forEach((el) => {
      el.setAttribute('checked', false)
    })
    checked = false
  }
})
</script>

<style>
  .invisible {
    cursor: pointer;
    appearance: none;
    display: block;
    height: 100%;
    width: 100%;
    margin: 0;
  }
</style>
<input type="checkbox" bind:checked={checked} on:click={handleCheckbox} class:invisible={visible != 'true'}>
