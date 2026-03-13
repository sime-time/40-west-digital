<script lang="ts">
  import img1 from "$lib/assets/our-work/butler-reading.png";
  import img2 from "$lib/assets/our-work/dads-to-doulas.png";
  import img3 from "$lib/assets/our-work/toy-pit.png";
  import WorkCard from "./WorkCard.svelte";

  const videos = [
    {
      id: 1,
      image: img1,
      title: "Butler Blueprint for Learning",
    },
    {
      id: 2,
      image: img2,
      title: "Dads To Doulas",
    },
    {
      id: 3,
      image: img3,
      title: "The Toy Pit",
    },
  ];
</script>

<section id="work" class="work-section">
  <div class="work-container">
    <div class="work-header">
      <h2 class="font-display section-title">
        This is what your videos can<br>look like
      </h2>
    </div>

    <div class="grid-container">
      <div class="grid-track">
        {#each videos as video (video.id)}
          <WorkCard {video} />
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .work-section {
    padding: var(--space-24) 0;
    background-color: var(--surface);
    overflow: hidden; /* Prevent horizontal scroll on body */
  }

  .work-container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 5%;
  }

  .work-header {
    text-align: center;
    margin-bottom: var(--space-12);
  }

  .section-title {
    font-size: clamp(2.5rem, 4vw, 4rem);
    color: var(--on-surface);
    line-height: 1.1;
  }

  /* Grid Layout Setup */
  .grid-container {
    width: 100%;
  }

  .grid-track {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  @media (min-width: 768px) {
    .grid-track {
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-8);
    }
  }

  @media (min-width: 1024px) {
    .grid-track {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
