<script lang="ts">
  import Icon from "@iconify/svelte";

  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      icon: "mdi:facebook",
    },
    {
      name: "Instagram",
      href: "#",
      icon: "mdi:instagram",
    },
  ];
</script>

<footer id="contact" class="footer-section">
  <div class="footer-container">
    <div class="footer-brand">
      <h2 class="font-display footer-title">40 West Digital</h2>
      <p class="font-body footer-copy">
        Video production with purpose, powered by youth talent.
      </p>
      <p class="font-body footer-legal">
        <Icon icon="mdi:copyright" width="16" height="16" />
        <span>40 West Digital. All rights reserved.</span>
      </p>
    </div>

    <div class="footer-socials" aria-label="Social media links">
      {#each socialLinks as social (social.name)}
        <a
          class="social-link"
          href={social.href}
          aria-label={social.name}
          target="_blank"
          rel="noreferrer"
        >
          <Icon icon={social.icon} width="30" height="30" />
        </a>
      {/each}
    </div>
  </div>
</footer>

<style>
  .footer-section {
    background-color: var(--primary);
    padding: var(--space-16) 0 var(--space-12);
  }

  .footer-container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 5%;
    display: flex;
    flex-direction: column;
    gap: var(--space-8);
    align-items: flex-end;
  }

  .footer-title {
    color: var(--on-primary);
    font-size: clamp(1.35rem, 2.6vw, 1.9rem);
    margin-bottom: var(--space-2);
  }

  .footer-copy {
    color: rgba(255, 255, 255, 0.85);
    font-size: 1rem;
    max-width: 48ch;
  }

  .footer-legal {
    margin-top: var(--space-4);
    color: rgba(255, 255, 255, 0.78);
    font-size: 0.92rem;
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
  }

  .footer-socials {
    display: flex;
    gap: var(--space-4);
    align-self: center;
  }

  .social-link {
    width: 2.9rem;
    height: 2.9rem;
    border-radius: 999px;
    background-color: rgba(255, 255, 255, 0.12);
    color: var(--on-primary);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;
  }

  .social-link:hover {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    .footer-container {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
    }

    .footer-socials {
      align-self: flex-end;
    }
  }
</style>
