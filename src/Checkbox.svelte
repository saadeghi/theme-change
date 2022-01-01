<svelte:options tag="theme-checkbox" />

<script>
import { onMount } from "svelte"
import { get_current_component } from "svelte/internal"
import {loadThemeIfExists, toggleBetweenTwoItems} from "./functions"

const thisComponent = get_current_component()

export let checked
export let visible
export let theme
let themesArray = []


const handleCheckbox = (e) => {
  themesArray = theme.split(",")
  toggleBetweenTwoItems(themesArray, checked)
  if (checked === false) {
    thisComponent.setAttribute('checked', true)
    checked = true
  } else {
    thisComponent.setAttribute('checked', false)
    checked = false
  }
}

onMount(() => {
  themesArray = theme.split(",")
  loadThemeIfExists()

  if (localStorage.getItem("theme") == null) {
    thisComponent.setAttribute('checked', false)
    checked = false
  }
  else if (themesArray.length == 1 && localStorage.getItem("theme") == themesArray[0]) {
    thisComponent.setAttribute('checked', true)
    checked = true
  }
  else if (themesArray.length == 2 && localStorage.getItem("theme") == themesArray[0]) {
    thisComponent.setAttribute('checked', false)
    checked = false
  }
  else if (themesArray.length == 2 && localStorage.getItem("theme") == themesArray[1]) {
    thisComponent.setAttribute('checked', true)
    checked = true
  }

})
</script>

<style>
:host {
  display: inline-flex;
}
.invisible {
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  display: block;
  height: 100%;
  width: 100%;
  margin: 0;
}
</style>
<input type="checkbox" bind:checked={checked} on:click={handleCheckbox} class:invisible={visible != 'true'}>
<slot />
