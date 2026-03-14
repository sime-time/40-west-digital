<script lang="ts">
  // Using some inline variables or state if needed, but CSS handles visuals mostly
</script>

<section class="hero-section">
  <div class="hero-container">
    <!-- Left Column: Content -->
    <div class="hero-content">
      <h1 class="hero-title">
        <span class="font-display title-main"
          >Professional Video Production</span
        >
        <br>
        <span class="font-accent title-accent">with Real Impact.</span>
      </h1>

      <div class="hero-actions">
        <a href="#contact" class="btn-primary">Start your project</a>
      </div>
    </div>

    <!-- Right Column: Visuals (Film Strip Placeholders) -->
    <div class="hero-visuals">
      <div class="film-strip">
        <div class="film-card placeholder-1"></div>
        <div class="film-card placeholder-2"></div>
        <div class="film-card placeholder-3"></div>
      </div>
    </div>
  </div>
</section>

<style>
  .hero-section {
    padding-top: 120px; /* Ensure it clears the fixed navbar */
    padding-bottom: var(--space-16);
    min-height: 100vh;
    display: flex;
    align-items: center;
    overflow: hidden; /* Prevent horizontal scroll from film strip bleed */
    background-color: var(--surface);
  }

  .hero-container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 5%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-16);
    align-items: center;
  }

  @media (min-width: 1024px) {
    .hero-container {
      grid-template-columns: 1fr 1fr;
      gap: var(--space-8);
    }
  }

  /* Content */
  .hero-content {
    max-width: 600px;
  }

  .hero-title {
    margin-bottom: var(--space-10);
    line-height: 1; /* Tighter line height to reduce gap */
  }

  .title-main {
    font-size: clamp(3rem, 5vw, 5.5rem);
    color: var(--on-surface);
    display: inline-block; /* Changed from block */
    margin-bottom: 0; /* Removed margin */
  }

  .title-accent {
    font-size: clamp(3rem, 5vw, 5.5rem);
    color: var(--primary);
    display: inline-block; /* Changed from block */
    padding-left: 0; /* Removed padding */
  }

  /* Buttons */
  .hero-actions {
    display: flex;
    gap: var(--space-6);
    align-items: center;
  }

  /* Visuals - Film Strip */
  .hero-visuals {
    position: relative;
    height: 600px;
    width: 100%;
  }

  .film-strip {
    display: flex;
    gap: var(--space-6);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    /* Bleed off the right edge */
    right: -20%;
    width: 120%;
  }

  .film-card {
    flex: 0 0 300px;
    height: 480px; /* Uniform height */
    border-radius: var(--radius-xl);
    background-color: var(--surface-container-low);
    box-shadow: var(--shadow-glow);
    transition: transform 0.4s ease;
  }

  /* Asymmetrical staggering & coloring */
  .film-card.placeholder-1 {
    transform: translateY(var(--space-8));
    background-color: #e2d9d5; /* Subtle tonal variation */
  }

  .film-card.placeholder-2 {
    transform: translateY(calc(var(--space-8) * -1));
    background-color: #d5c9c4;
  }

  .film-card.placeholder-3 {
    transform: translateY(
      var(--space-8)
    ); /* Replaced from var(--space-16) to match placeholder-1 roughly, or keep staggered */
    background-color: #c8b9b3;
  }

  .film-card:hover {
    transform: translateY(-10px) scale(1.02) !important; /* Force override for hover */
  }

  @media (max-width: 1023px) {
    .hero-visuals {
      height: 400px;
      margin-top: var(--space-8);
    }
    .film-strip {
      right: -5%;
      width: 110%;
    }
    .film-card {
      flex: 0 0 240px;
      height: 380px; /* Uniform height for mobile */
    }
  }
</style>
