<script lang="ts">
  import logo from "$lib/assets/40westdigital.png";

  let isMobileMenuOpen = $state(false);

  function toggleMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }
</script>

<header class="navbar">
  <div class="nav-container">
    <a href="/" class="logo-link">
      <img src={logo} alt="40 West Digital Logo" class="logo-img">
    </a>

    <!-- Desktop Nav -->
    <nav class="desktop-nav">
      <a href="#portfolio" class="nav-link font-medium">Portfolio</a>
      <a href="#mission" class="nav-link font-medium">Mission</a>
      <a href="#contact" class="nav-link font-medium">Contact</a>
    </nav>

    <!-- Mobile Menu Toggle -->
    <button
      type="button"
      class="mobile-menu-btn"
      onclick={toggleMenu}
      aria-label="Toggle menu"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <title>Menu</title>
        {#if isMobileMenuOpen}
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        {:else}
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        {/if}
      </svg>
    </button>
  </div>

  <!-- Mobile Nav Dropdown -->
  {#if isMobileMenuOpen}
    <nav class="mobile-nav">
      <a href="#portfolio" class="mobile-link font-medium" onclick={toggleMenu}
        >Portfolio</a
      >
      <a href="#mission" class="mobile-link font-medium" onclick={toggleMenu}
        >Mission</a
      >
      <a href="#contact" class="mobile-link font-medium" onclick={toggleMenu}
        >Contact</a
      >
    </nav>
  {/if}
</header>

<style>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    /* Glassmorphism Effect */
    background-color: rgba(252, 249, 248, 0.85); /* var(--surface) equivalent */
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }

  .nav-container {
    max-width: 1440px;
    margin: 0 auto;
    padding: var(--space-4) 5%; /* Reduced padding on mobile */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo-link {
    display: flex;
    align-items: center;
  }

  .logo-img {
    height: 56px; /* Smaller on mobile to prevent taking up too much vertical space */
    width: auto;
    object-fit: contain;
  }

  .desktop-nav {
    display: none;
    gap: var(--space-8);
    align-items: center;
  }

  .mobile-menu-btn {
    color: var(--on-surface);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-2);
  }

  @media (min-width: 1024px) {
    .nav-container {
      padding: var(--space-6) 5%; /* Restore padding on desktop */
    }

    .logo-img {
      height: 72px; /* Large logo on desktop */
    }

    .desktop-nav {
      display: flex;
    }

    .mobile-menu-btn {
      display: none;
    }
  }

  .nav-link {
    font-size: 1rem;
    color: var(--on-surface);
    transition:
      color 0.2s ease,
      transform 0.2s ease;
  }

  .nav-link:hover {
    color: var(--primary-container);
    transform: scale(1.02);
  }

  .mobile-nav {
    background-color: var(
      --surface-container-low
    ); /* Tonal shift instead of border */
    padding: var(--space-4) 5% var(--space-8);
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
  }

  .mobile-link {
    font-size: 1.25rem;
    color: var(--on-surface);
  }
</style>
