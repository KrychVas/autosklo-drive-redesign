import { siteConfig } from '../data/siteData.js';
import '../styles/header.css';

export function renderHeader() {
  const phoneBadgeSvg = `<span class="top-bar-phone-badge"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.02-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg></span>`;

  return `
    <header class="header">
      <!-- Top orange bar with quick phone -->
      <div class="top-bar-orange">
        <div class="container top-bar-orange__container">
          <span>Infolinka & Objednávky: <a href="tel:${siteConfig.phoneRaw}" class="top-bar-orange__phone">${phoneBadgeSvg} ${siteConfig.phone}</a></span>
          <span>Po–Pá 08:00–17:00</span>
        </div>
      </div>

      <div class="container header__container">
        <!-- Logo - Clicking returns to homepage top -->
        <a href="#home" class="header__logo" id="headerLogo">
          <img src="${import.meta.env.BASE_URL}logo.png" alt="AUTOSKLO DRIVE" />
        </a>

        <!-- Navigation -->
        <nav class="nav" id="mainNav">
          <ul class="nav__list">
            <li><a href="#home" class="nav__link">DOMŮ</a></li>
            <li><a href="#services" class="nav__link">SLUŽBY</a></li>
            <li><a href="#branches" class="nav__link">POBOČKY</a></li>
            <li><a href="#contacts" class="nav__link nav__link--btn">KONTAKTY</a></li>
          </ul>
        </nav>

        <!-- Burger for mobile -->
        <button class="burger-btn" id="burgerBtn" aria-label="Toggle Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  `;
}

export function initHeaderEvents() {
  const burgerBtn = document.getElementById('burgerBtn');
  const nav = document.getElementById('mainNav');
  const logo = document.getElementById('headerLogo');

  if (burgerBtn && nav) {
    burgerBtn.onclick = () => {
      nav.classList.toggle('nav--active');
      burgerBtn.classList.toggle('burger-btn--active');
    };
  }

  // Logo click handler to navigate home & scroll top smoothly
  if (logo) {
    logo.onclick = (e) => {
      if (window.location.hash === '' || window.location.hash === '#home' || window.location.hash === '#') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.location.hash = '#home';
      }
    };
  }

  // SPA smooth scroll handling for nav links
  document.querySelectorAll('.nav__link').forEach((link) => {
    link.onclick = (e) => {
      const href = link.getAttribute('href');

      if (href && href.startsWith('#') && !href.includes('/')) {
        const targetId = href.replace('#', '');

        if (window.location.hash === '' || window.location.hash === '#home' || window.location.hash === '#') {
          e.preventDefault();
          const targetSection =
            document.getElementById(targetId === 'home' ? 'app' : targetId + '-wrapper') ||
            document.getElementById(targetId);
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          window.location.hash = href;
        }
      }

      if (nav && nav.classList.contains('nav--active')) {
        nav.classList.remove('nav--active');
        if (burgerBtn) burgerBtn.classList.remove('burger-btn--active');
      }
    };
  });
}
