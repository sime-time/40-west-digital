<script lang="ts">
  let { isOpen, title, youtubeLink, onClose } = $props<{
    isOpen: boolean;
    title: string;
    youtubeLink: string | null;
    onClose: () => void;
  }>();

  function handleWindowKeydown(event: KeyboardEvent) {
    if (!isOpen) {
      return;
    }

    if (event.key === "Escape") {
      onClose();
    }
  }
</script>

<svelte:window onkeydown={handleWindowKeydown} />

{#if isOpen && youtubeLink}
  <div class="modal-overlay" role="presentation">
    <button
      type="button"
      class="modal-backdrop"
      aria-label="Close video modal"
      onclick={onClose}
    ></button>

    <div
      class="modal-dialog"
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      tabindex="-1"
    >
      <h3 id="video-modal-title" class="modal-title">{title}</h3>

      <button
        type="button"
        class="modal-close"
        aria-label="Close video modal"
        onclick={onClose}
      >
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          aria-hidden="true"
          focusable="false"
        >
          <line x1="6" y1="6" x2="18" y2="18"></line>
          <line x1="18" y1="6" x2="6" y2="18"></line>
        </svg>
      </button>

      <div class="video-frame">
        <iframe
          src={youtubeLink}
          title="YouTube video player"
          loading="lazy"
          allow="
            accelerometer;
            autoplay;
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture;
            web-share;
          "
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
{/if}

<style>
  .modal-overlay {
    position: fixed;
    inset: 0;
    z-index: 120;
    display: grid;
    place-items: center;
    padding: var(--space-6);
  }

  .modal-backdrop {
    position: absolute;
    inset: 0;
    background-color: rgba(28, 27, 27, 0.82);
  }

  .modal-dialog {
    position: relative;
    z-index: 1;
    width: min(1100px, 100%);
    border-radius: var(--radius-xl);
    background-color: rgba(28, 27, 27, 0.3);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    padding: var(--space-8);
  }

  .modal-title {
    color: var(--on-primary);
    font-size: clamp(1.1rem, 2vw, 1.35rem);
    margin-bottom: var(--space-4);
    max-width: calc(100% - 56px);
  }

  .modal-close {
    position: absolute;
    top: var(--space-4);
    right: var(--space-4);
    width: 2rem;
    height: 2rem;
    border-radius: 999px;
    background-color: rgba(252, 249, 248, 0.16);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;
  }

  .modal-close svg {
    stroke: var(--on-primary);
    stroke-width: 2.2;
    stroke-linecap: round;
  }

  .modal-close:hover {
    transform: scale(1.04);
  }

  .video-frame {
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: var(--radius-lg);
    overflow: hidden;
    background-color: #000;
  }

  .video-frame iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }

  @media (max-width: 767px) {
    .modal-dialog {
      padding: var(--space-4);
    }

    .modal-title {
      margin-bottom: var(--space-3);
      max-width: calc(100% - 48px);
    }
  }
</style>
