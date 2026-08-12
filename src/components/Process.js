import '../styles/process.css';

export function renderProcess() {
  return `
    <section class="process fade-in-section" id="process">
      <div class="container">
        <div class="process__header">
          <span class="section-subtitle">PROCES</span>
          <h2 class="section-title">Takhle To U Nás Chodí</h2>
        </div>

        <div class="process__grid">
          <div class="process-card">
            <div class="process-card__icon">📞</div>
            <h3 class="process-card__title">Zavolejte</h3>
            <p class="process-card__text">
              Zavolejte nám – najdeme to nejlepší řešení pro vás a domluvíme si termín opravy.
            </p>
          </div>

          <div class="process-card">
            <div class="process-card__icon">🚗</div>
            <h3 class="process-card__title">Přivezte</h3>
            <p class="process-card__text">
              Přivezte nám své vozidlo na domluvený termín montáže a vezměte si s sebou technický průkaz.
            </p>
          </div>

          <div class="process-card">
            <div class="process-card__icon">📋</div>
            <h3 class="process-card__title">Pojišťovna</h3>
            <p class="process-card__text">
              Pokud máte sjednáno připojištění skel – komunikace a veškerou administrativu s pojišťovnou vyřídíme za vás.
            </p>
          </div>

          <div class="process-card">
            <div class="process-card__icon">🏅</div>
            <h3 class="process-card__title">Odjezd</h3>
            <p class="process-card__text">
              Odpoledne odjíždíte s novým čelním sklem a dobrým pocitem, že jste si zvolili nás.
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
}