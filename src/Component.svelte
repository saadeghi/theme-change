<svelte:options tag="theme-toggle" />

<script>
import { onMount } from "svelte";
import { each } from "svelte/internal";

let activeTheme = -1
let themesArray = []

export let theme

const setTheme = (theme) => {
  activeTheme = theme
  localStorage.setItem("theme", theme)
  document.documentElement.setAttribute("data-theme", theme)
}
const removeTheme = () => {
  activeTheme = -1
  localStorage.removeItem("theme")
  document.documentElement.removeAttribute("data-theme")
}
const toggle = () => {

  themesArray = theme.split(",")
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

onMount(() => {
  themesArray = theme.split(",")
  if (localStorage.getItem("theme")) {
    setTheme(localStorage.getItem("theme"))
  }
})
</script>

<span on:click={toggle}>
  {#each themesArray as themeName, i}
    {#if themeName == activeTheme}
      {@html `<slot name="${themeName}" />`}
    {/if}
  {/each}
  {#if (activeTheme == -1) || themesArray.indexOf(localStorage.getItem("theme")) == -1 }
    <slot />
  {/if}
</span>