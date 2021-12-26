<svelte:options tag="theme-switch" />

<script>
import { onMount } from "svelte"
import {loadThemeIfExists, switchBetweenArrayItems} from "./functions"

let themesArray = []
export let theme

const toggleTheme = (theme) => {
  themesArray = theme.split(",")
  switchBetweenArrayItems(themesArray)
}

onMount(() => {
  themesArray = theme.split(",")
  loadThemeIfExists()
})
</script>


<span on:click={toggleTheme(theme)}>
  {#each themesArray as themeName}
    {#if themeName == localStorage.getItem("theme")}
      {@html `<slot name="${themeName}" />`}
    {/if}
  {/each}
  {#if (localStorage.getItem("theme") == undefined) || themesArray.indexOf(localStorage.getItem("theme")) == -1 }
    <slot />
  {/if}
</span>