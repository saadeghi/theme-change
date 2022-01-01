<svelte:options tag="theme-button" />

<script>
import { onMount } from "svelte"
import {loadThemeIfExists, setTheme} from "./functions"

export let theme

onMount(() => {
  loadThemeIfExists()
})
</script>

<style>
:host {
  display: inline-flex;
}
</style>

<span on:click={setTheme(theme)}>
  <slot />
</span>