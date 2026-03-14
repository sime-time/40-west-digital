<script lang="ts">
  type PartnerLogo = {
    id: string;
    src: string;
    alt: string;
  };

  const logos: PartnerLogo[] = [
    {
      id: "butler",
      src: "/uploads/logos/butler-university-logo.webp",
      alt: "Butler University",
    },
    {
      id: "dear-fathers",
      src: "/uploads/logos/dear-fathers-logo.webp",
      alt: "Dear Fathers",
    },
    {
      id: "jack-daniels",
      src: "/uploads/logos/jack-daniels-logo.webp",
      alt: "Jack Daniel's",
    },
    {
      id: "planned-parenthood",
      src: "/uploads/logos/planned-parenthood-logo.webp",
      alt: "Planned Parenthood",
    },
    {
      id: "united-way",
      src: "/uploads/logos/united-way-logo.webp",
      alt: "United Way",
    },
  ];
</script>

<section class="partners-section" aria-label="Partner logos">
  <div class="partners-container">
    <ul class="partners-list" role="list">
      {#each logos as logo}
        <li
          class="partner-item"
          class:partner-item--jack={logo.id === "jack-daniels"}
        >
          <img
            class="partner-logo"
            src={logo.src}
            alt={logo.alt}
            loading="lazy"
            decoding="async"
          >
        </li>
      {/each}
    </ul>
  </div>
</section>

<style>
  .partners-section {
    background-color: var(--surface-container-low);
    padding: var(--space-10) 0;
  }

  .partners-container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 5%;
  }

  .partners-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: var(--space-8);
  }

  .partner-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    min-width: 6rem;
  }

  .partner-logo {
    --logo-scale: 1;
    display: block;
    height: 100%;
    width: auto;
    max-height: 100%;
    max-width: min(42vw, 12rem);
    object-fit: contain;
    filter: grayscale(100%) opacity(0.75);
    transition:
      filter 0.25s ease,
      transform 0.25s ease;
    transform: scale(var(--logo-scale));
  }

  .partner-logo:hover {
    filter: grayscale(0%) opacity(1);
    transform: translateY(-2px) scale(var(--logo-scale));
  }

  .partner-item--jack .partner-logo {
    --logo-scale: 1.45;
  }

  @media (min-width: 768px) {
    .partners-section {
      padding: var(--space-12) 0;
    }

    .partners-list {
      gap: var(--space-10);
    }

    .partner-item {
      height: 3.5rem;
      min-width: 7.5rem;
    }

    .partner-logo {
      max-width: 14rem;
    }
  }
</style>
