<script lang="ts">
  import { PUBLIC_STRAPI_URL } from "$env/static/public";
  import type { PortfolioVideo } from "$lib/utils/video";

  let { video, onOpen } = $props<{
    video: PortfolioVideo;
    onOpen: (video: PortfolioVideo) => void;
  }>();
</script>

<button type="button" class="portfolio-card" onclick={() => onOpen(video)}>
  <!-- Background Color applied here for blend mode -->
  <div class="card-image-wrapper">
    <img
      src={`${PUBLIC_STRAPI_URL}${video.thumbnail.url}`}
      alt={video.title}
      class="portfolio-image"
    >
    <div class="blend-overlay"></div>
  </div>

  <div class="play-button-container">
    <div class="play-button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <title>Play video</title>
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
      </svg>
    </div>
  </div>

  <div class="card-content">
    <h3 class="font-body card-title">{video.title}</h3>
  </div>
</button>

<style>
  /* The Card */
  .portfolio-card {
    position: relative;
    width: 100%;
    /* 16:9 Aspect Ratio roughly */
    aspect-ratio: 16 / 9;
    border-radius: var(--radius-xl);
    overflow: hidden;
    background-color: var(--surface-container-low);
    box-shadow: var(--shadow-glow);
    /* No borders allowed */
    border: none;
    cursor: pointer;
    transition:
      transform 0.4s ease,
      box-shadow 0.4s ease;
  }

  .portfolio-card:hover {
    transform: scale(1.02);
    box-shadow: 0 15px 50px rgba(28, 27, 27, 0.1);
  }

  /* Image & Monochrome Effect */
  .card-image-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* The tint color, using RGBA to reduce the intensity of the red so the image shows through better */
    background-color: rgba(
      116,
      0,
      5,
      0.7
    ); /* var(--primary) is #740005, this is 70% opacity */
    transition: background-color 0.4s ease;
  }

  /* Slightly brighten on hover to emphasize interactivity */
  .portfolio-card:hover .card-image-wrapper {
    background-color: rgba(155, 17, 17, 0.6); /* --primary-container #9B1111 */
  }

  .portfolio-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* Standard trick to tint an image: grayscale the image, mix it with background color */
    filter: grayscale(100%) contrast(1.1) brightness(1.2); /* Slightly brighter */
    mix-blend-mode: multiply;
  }

  /* Dark gradient overlay for text legibility */
  .blend-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60%;
    background: linear-gradient(
      to top,
      rgba(28, 27, 27, 0.6) 0% /* Reduced from 0.8 opacity */,
      transparent 100%
    );
    pointer-events: none;
  }

  /* Play Button (Hidden by default, shown on hover) */
  .play-button-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 15;
    pointer-events: none; /* Let clicks pass through to card */
    opacity: 0;
    transform: translateY(10px);
    transition:
      opacity 0.3s ease,
      transform 0.3s ease;
  }

  .portfolio-card:hover .play-button-container {
    opacity: 1;
    transform: translateY(0);
  }

  .play-button {
    width: 80px;
    height: 80px;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--on-primary); /* White icon */
    padding-left: 6px; /* Visual center adjustment for triangle */
  }

  /* Text Content */
  .card-content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: var(--space-6);
    z-index: 10;
    display: flex;
    justify-content: center; /* Center text like screenshot */
    align-items: flex-end;
  }

  .card-title {
    color: var(--on-primary); /* White text */
    font-size: clamp(1rem, 2vw, 1.5rem);
    text-align: center;
    max-width: 80%;
  }
</style>
