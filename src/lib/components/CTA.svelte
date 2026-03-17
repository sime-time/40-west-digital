<section class="cta-section" id="contact">
  <div class="cta-container">
    <div class="cta-panel">
      <p class="font-accent cta-kicker">Ready when you are</p>
      <h2 class="font-display cta-title">Need a video for your business?</h2>
      <p class="font-body cta-support">
        Tell us about your project. We review each request and invite qualified
        teams to book a meeting.
      </p>
      <a href="/request" class="btn-primary">Start your request</a>
      <p class="font-body cta-microcopy">Takes about 2-3 minutes.</p>
    </div>
  </div>
</section>

<style>
  .cta-section {
    position: relative;
    padding: var(--space-24) 0;
    background: linear-gradient(
      180deg,
      var(--surface-container-low) 0%,
      var(--primary) 100%
    );
    overflow: hidden;
  }

  .cta-container {
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 5%;
  }

  .cta-panel {
    border-radius: var(--radius-xl);
    background-color: var(--surface-container-low);
    padding: var(--space-12) var(--space-8);
    text-align: center;
  }

  .cta-kicker {
    color: var(--primary-container);
    font-size: 1.2rem;
    margin-bottom: var(--space-4);
  }

  .cta-title {
    color: var(--on-surface);
    font-size: clamp(2rem, 5vw, 3.9rem);
    margin-bottom: var(--space-6);
    line-height: 1.05;
  }

  .cta-support {
    color: var(--on-surface);
    font-size: clamp(1.02rem, 1.9vw, 1.2rem);
    max-width: 58ch;
    margin: 0 auto var(--space-8);
    line-height: 1.7;
  }

  .cta-microcopy {
    margin-top: var(--space-4);
    color: rgba(28, 27, 27, 0.74);
    font-size: 0.95rem;
  }

  @media (max-width: 767px) {
    .cta-panel {
      padding: var(--space-10) var(--space-4);
    }
  }
</style>
