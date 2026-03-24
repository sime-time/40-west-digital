<script lang="ts">
  import CTA from "$lib/components/CTA.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Mission from "$lib/components/Mission.svelte";
  import Partners from "$lib/components/Partners.svelte";
  import Portfolio from "$lib/components/Portfolio.svelte";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
</script>

<Hero data={data.hero.data} />
<Partners />
<Portfolio />
<Mission />
<CTA />
<Footer />
