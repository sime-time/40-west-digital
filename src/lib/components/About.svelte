<section id="about" class="about-section">
  <div class="about-container">
    <div class="about-content">
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
        Learn More
      </a>
    </div>

    <div
      class="about-visual"
      role="img"
      aria-label="Student cohort group photo placeholder"
    >
      <div class="placeholder-photo">
        <span class="placeholder-label">Student Cohort Group Photo</span>
      </div>
    </div>
  </div>
</section>

<style>
  .about-section {
    background-color: var(--surface-container-low);
    padding: var(--space-24) 0;
  }

  .about-container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 5%;
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-12);
    align-items: center;
  }

  .about-content {
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

  .about-visual {
    justify-self: stretch;
  }

  .placeholder-photo {
    width: 100%;
    min-height: 420px;
    border-radius: var(--radius-xl);
    background:
      linear-gradient(140deg, rgba(155, 17, 17, 0.2), rgba(116, 0, 5, 0.08)),
      var(--surface);
    box-shadow: var(--shadow-glow);
    display: grid;
    place-items: center;
    padding: var(--space-8);
  }

  .placeholder-label {
    color: rgba(28, 27, 27, 0.72);
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
    letter-spacing: 0.02em;
  }

  @media (min-width: 1024px) {
    .about-container {
      grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
      gap: var(--space-16);
    }

    .about-visual {
      justify-self: end;
      width: min(560px, 100%);
    }

    .placeholder-photo {
      min-height: 520px;
    }
  }
</style>
