import '../styles/hero.css';

export function renderHero() {
  return `
    <section class="hero" id="hero">
      <div class="hero__overlay"></div>
      <div class="container hero__container">
        <div class="hero__content">
          <div class="hero__badge">
            <span>⚡ Rychlá výměna & oprava autoskel</span>
          </div>
          
          <h1 class="hero__title">
            Opravíme nebo vyměníme sklo na Vašem vozidle
          </h1>
          
          <p class="hero__subtitle">
            Vyřídíme veškerou administrativu s pojišťovnou za Vás. 
            Pobočky v <strong>Praze 4 – Modřany</strong> a <strong>Lety u Dobřichovic</strong>.
          </p>

          <!-- Картки філій для швидкого вибору -->
          <div class="hero__branches">
            <div class="branch-card">
              <span class="branch-card__title">Pobočka Modřany</span>
              <a href="tel:+420777663866" class="branch-card__phone">📞 777 66 38 66</a>
            </div>
            <div class="branch-card">
              <span class="branch-card__title">Pobočka Lety</span>
              <a href="tel:+420777663866" class="branch-card__phone">📞 777 66 38 66</a>
            </div>
          </div>

          <div class="hero__actions">
            <a href="#contacts" class="btn btn--primary">Chci se objednat</a>
            <a href="#process" class="btn btn--secondary">Jak to funguje</a>
          </div>
        </div>
      </div>
    </section>
  `;
}