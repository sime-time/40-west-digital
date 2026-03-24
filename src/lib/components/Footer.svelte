<script lang="ts">
  import Icon from "@iconify/svelte";

  type LogoType = "facebook" | "instagram" | "tiktok" | "youtube" | "twitter";

  type FooterData = {
    copyrightText: string;
    socialLinks: Array<{
      id: number;
      logoType: LogoType;
      profileLink: string;
    }>;
  };

  type GlobalData = {
    title: string;
    description: string;
  };
  let { data, global }: { data: FooterData; global: GlobalData } = $props();

  const mediaIcon: Record<LogoType, string> = {
    facebook: "mdi:facebook",
    instagram: "mdi:instagram",
    tiktok: "ic:baseline-tiktok",
    youtube: "mdi:youtube",
    twitter: "bi:twitter-x",
  };
</script>

<footer id="contact" class="footer-section">
  <div class="footer-container">
    <div class="footer-brand">
      <h2 class="font-display footer-title">{global.title}</h2>
      <p class="font-body footer-copy">{global.description}</p>
      <p class="font-body footer-legal">
        <span>&copy; {data.copyrightText}</span>
      </p>
    </div>

    <div class="footer-socials" aria-label="Social media links">
      {#each data.socialLinks as social}
        <a
          class="social-link"
          href={social.profileLink}
          aria-label={social.logoType}
          target="_blank"
          rel="noreferrer"
        >
          <Icon icon={mediaIcon[social.logoType]} width="30" height="30" />
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
