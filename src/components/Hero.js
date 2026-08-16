import { siteConfig } from '../data/siteData.js';
import '../styles/hero.css';

export function renderHero() {
  const phoneIconSvg = `<span class="phone-icon-circle"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.02-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg></span>`;

  return `
    <section class="hero" id="hero">
      <div class="container hero__container">
        <div class="hero__content">

          <div class="hero__badge">
            <span>${siteConfig.slogan.replace('⚡ ', '')}</span>
          </div>

          <h1 class="hero__title">
            ${siteConfig.heroTitle}
          </h1>

          <p class="hero__subtitle">
            ${siteConfig.heroSubtitle}
            Pobočky v <strong>Praze 4 – Modřany</strong> a <strong>Lety u Dobřichovic</strong>.
          </p>

          <!-- Jeden kontaktní telefon pro obě pobočky -->
          <a href="tel:${siteConfig.phoneRaw}" class="hero__phone-btn">
            ${phoneIconSvg}
            <span>${siteConfig.phone}</span>
          </a>

          <div class="hero__actions">
            <a href="#contacts" class="btn btn--dark">Chci se objednat</a>
            <a href="#process" class="btn btn--dark">Jak to funguje</a>
          </div>

        </div>
      </div>
    </section>
  `;
}