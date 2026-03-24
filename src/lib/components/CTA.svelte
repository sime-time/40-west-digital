<script lang="ts">
  let { data } = $props();
</script>

<section class="cta-section" id="contact">
  <div class="cta-container">
    <div class="cta-panel">
      <p class="font-accent cta-kicker">{data.subheading}</p>
      <h2 class="font-display cta-title">{data.heading}</h2>
      <p class="font-body cta-support">{data.description}</p>
      <a
        href={data.buttonLink.href}
        class={data.buttonLink.isButton ? "btn-primary" : "nav-link font-medium"}
        >{data.buttonLink.label}</a
      >
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

  @media (max-width: 767px) {
    .cta-panel {
      padding: var(--space-10) var(--space-4);
    }
  }
</style>
