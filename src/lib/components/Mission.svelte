<section id="mission" class="mission-section">
  <div class="mission-container">
    <div class="mission-content">
      <p class="font-accent eyebrow">About our youth program</p>
      <h2 class="font-display section-title">
        Young creators. Real client work.
      </h2>
      <p class="font-body section-copy">
        We teach teens how to plan, film, and edit videos. They learn from
        caring mentors and work on real projects for local businesses. Every
        project builds job skills, confidence, and a path to paid creative work.
      </p>
      <a
        href="https://www.mlkcenterindy.org/our-programs/youth-programs/40-west-digital"
        class="btn-primary"
      >
        Learn more
      </a>
    </div>

    <div class="mission-visual">
      <img
        class="mission-photo"
        src="/images/photos/group-photo.webp"
        alt="40 West Digital youth program cohort outside the MLK Center"
      >
    </div>
  </div>
</section>

<style>
  .mission-section {
    background-color: var(--surface-container-low);
    padding: var(--space-24) 0;
  }

  .mission-container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 5%;
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-12);
    align-items: center;
  }

  .mission-content {
    max-width: 620px;
  }

  .eyebrow {
    color: var(--primary-container);
    font-size: 1.25rem;
    margin-bottom: var(--space-4);
  }

  .section-title {
    color: var(--on-surface);
    font-size: clamp(2rem, 4vw, 3.75rem);
    margin-bottom: var(--space-6);
  }

  .section-copy {
    color: var(--on-surface);
    font-size: clamp(1.05rem, 2vw, 1.2rem);
    line-height: 1.75;
    margin-bottom: var(--space-8);
    max-width: 58ch;
  }

  .mission-visual {
    justify-self: stretch;
  }

  .mission-photo {
    width: 100%;
    height: auto;
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-glow);
    display: block;
  }

  @media (min-width: 1024px) {
    .mission-container {
      grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
      gap: var(--space-16);
    }

    .mission-visual {
      justify-self: end;
      width: min(560px, 100%);
    }
  }
</style>
