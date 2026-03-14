<script lang="ts">
  import { type PortfolioVideo, toYouTubeEmbedUrl } from "$lib/utils/video";
  import PortfolioCard from "./PortfolioCard.svelte";
  import VideoModal from "./VideoModal.svelte";

  const videos: PortfolioVideo[] = [
    {
      id: 1,
      thumbnail: "/uploads/thumbnails/butler-reading.webp",
      title: "Butler Blueprint for Learning",
      videoUrl: "https://youtu.be/wTOMVvmCFGI",
    },
    {
      id: 2,
      thumbnail: "/uploads/thumbnails/dads-to-doulas.webp",
      title: "Dear Fathers",
      videoUrl: "https://youtu.be/D1WRuihA6Ig",
    },
    {
      id: 3,
      thumbnail: "/uploads/thumbnails/toy-pit.webp",
      title: "The Toy Pit",
      videoUrl: "https://youtu.be/kWohK4Mmr0Y",
    },
    {
      id: 4,
      thumbnail: "/uploads/thumbnails/lay-clergy.webp",
      title: "Lay Clergy",
      videoUrl: "https://youtu.be/guWihKLaTzo",
    },
    {
      id: 5,
      thumbnail: "/uploads/portfolio/this-is-us.webp",
      title: "This Is Us",
      videoUrl: "https://youtu.be/pUvlxfaRujU",
    },
    {
      id: 6,
      thumbnail: "/uploads/portfolio/womens-fund.webp",
      title: "Women's Fund",
      videoUrl: "https://youtu.be/nPRHkQwVnUA",
    },
  ];

  const INITIAL_VISIBLE_COUNT = 3;

  let showAll = $state(false);
  let gridContainer: HTMLDivElement | null = null;

  const visibleVideos = $derived(
    showAll ? videos : videos.slice(0, INITIAL_VISIBLE_COUNT),
  );

  const canToggleVideos = $derived(videos.length > INITIAL_VISIBLE_COUNT);

  let selectedVideo = $state<PortfolioVideo | null>(null);
  let selectedEmbedUrl = $state<string | null>(null);

  const isModalOpen = $derived(Boolean(selectedVideo && selectedEmbedUrl));

  function handleOpenVideo(video: PortfolioVideo) {
    const embedUrl = toYouTubeEmbedUrl(video.videoUrl);

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
        {#each visibleVideos as video (video.id)}
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
    videoUrl={selectedEmbedUrl}
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
