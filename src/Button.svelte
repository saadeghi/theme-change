<svelte:options tag="theme-button" />

<script>
import { onMount } from "svelte"
import {loadThemeIfExists, setTheme} from "./functions"

export let theme

onMount(() => {
  loadThemeIfExists()
})
</script>


<span on:click={setTheme(theme)}>
  <slot />
</span>