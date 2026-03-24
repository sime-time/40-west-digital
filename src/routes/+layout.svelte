<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
  import "@fontsource-variable/plus-jakarta-sans";
  import "@fontsource-variable/playfair-display";
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";

  let { data, children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon}>
  <title>40 West Digital</title>
</svelte:head>

<Navbar data={data.header.data} />

<main>{@render children()}</main>
