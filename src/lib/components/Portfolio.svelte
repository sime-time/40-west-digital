<script lang="ts">
  import { type PortfolioVideo, toYouTubeEmbedUrl } from "$lib/utils/video";
  import PortfolioCard from "./PortfolioCard.svelte";
  import VideoModal from "./VideoModal.svelte";

  let { data } = $props();

  let videos = $derived<PortfolioVideo[]>(data.portfolioVideo ?? []);

  let initialVisibleCount = $state(3);

  // initial amount of portfolio videos depends on screen size
  // tablets = 4, all other screen sizes = 3
  $effect(() => {
    if (typeof window === "undefined") return;
    const mediumQuery = window.matchMedia(
      "(min-width: 768px) and (max-width: 1023px)",
    );
    const updateVisibleCount = () => {
      initialVisibleCount = mediumQuery.matches ? 4 : 3;
    };
    updateVisibleCount();
    mediumQuery.addEventListener("change", updateVisibleCount);
    return () => {
      mediumQuery.removeEventListener("change", updateVisibleCount);
    };
  });

  let showAll = $state(false);
  let gridContainer: HTMLDivElement | null = null;

  const visibleVideos = $derived(
    showAll
      ? data.portfolioVideo
      : data.portfolioVideo.slice(0, initialVisibleCount),
  );

  const canToggleVideos = $derived(
    data.portfolioVideo.length > initialVisibleCount,
  );

  let selectedVideo = $state<PortfolioVideo | null>(null);
  let selectedEmbedUrl = $state<string | null>(null);

  const isModalOpen = $derived(Boolean(selectedVideo && selectedEmbedUrl));

  function handleOpenVideo(video: PortfolioVideo) {
    const embedUrl = toYouTubeEmbedUrl(video.youtubeLink);

    if (!embedUrl) {
      return;
    }

    selectedVideo = video;
    selectedEmbedUrl = embedUrl;
  }

  function handleCloseVideo() {
    selectedVideo = null;
    selectedEmbedUrl = null;
  }

  function toggleVisibleVideos() {
    const wasExpanded = showAll;
    showAll = !showAll;

    if (!wasExpanded) {
      return;
    }

    if (typeof window === "undefined") {
      return;
    }

    requestAnimationFrame(() => {
      gridContainer?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  $effect(() => {
    if (typeof document === "undefined") {
      return;
    }

    if (!isModalOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  });
</script>

<section id="portfolio" class="portfolio-section">
  <div class="portfolio-container">
    <div class="portfolio-header">
      <h2 class="font-display section-title">
        What your videos can look like:
      </h2>
    </div>

    <div class="grid-container" bind:this={gridContainer}>
      <div class="grid-track">
        {#each visibleVideos as video}
          <PortfolioCard {video} onOpen={handleOpenVideo} />
        {/each}
      </div>
    </div>

    {#if canToggleVideos}
      <div class="toggle-wrap">
        <button
          type="button"
          class="toggle-button font-medium"
          onclick={toggleVisibleVideos}
        >
          {showAll ? "Show less" : "Show more"}
        </button>
      </div>
    {/if}
  </div>

  <VideoModal
    isOpen={isModalOpen}
    title={selectedVideo?.title ?? ""}
    youtubeLink={selectedEmbedUrl}
    onClose={handleCloseVideo}
  />
</section>

<style>
  .portfolio-section {
    padding: var(--space-24) 0;
    background-color: var(--surface);
    overflow: hidden; /* Prevent horizontal scroll on body */
  }

  .portfolio-container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 5%;
  }

  .portfolio-header {
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

  .toggle-wrap {
    margin-top: var(--space-10);
    display: flex;
    justify-content: center;
  }

  .toggle-button {
    color: var(--primary-container);
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 0.3rem;
    font-size: 1.05rem;
    transition: transform 0.2s ease;
  }

  .toggle-button:hover {
    transform: scale(1.02);
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
