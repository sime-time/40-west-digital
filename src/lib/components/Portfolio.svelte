<script lang="ts">
  import img1 from "$lib/assets/our-portfolio/butler-reading.png";
  import img2 from "$lib/assets/our-portfolio/dads-to-doulas.png";
  import img3 from "$lib/assets/our-portfolio/toy-pit.png";
  import { type PortfolioVideo, toYouTubeEmbedUrl } from "$lib/utils/video";
  import PortfolioCard from "./PortfolioCard.svelte";
  import VideoModal from "./VideoModal.svelte";

  const videos: PortfolioVideo[] = [
    {
      id: 1,
      thumbnail: img1,
      title: "Butler Blueprint for Learning",
      videoUrl: "https://youtu.be/wTOMVvmCFGI",
    },
    {
      id: 2,
      thumbnail: img2,
      title: "Dear Fathers",
      videoUrl: "https://youtu.be/D1WRuihA6Ig",
    },
    {
      id: 3,
      thumbnail: img3,
      title: "The Toy Pit",
      videoUrl: "https://youtu.be/kWohK4Mmr0Y",
    },
  ];

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

    <div class="grid-container">
      <div class="grid-track">
        {#each videos as video (video.id)}
          <PortfolioCard {video} onOpen={handleOpenVideo} />
        {/each}
      </div>
    </div>
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
