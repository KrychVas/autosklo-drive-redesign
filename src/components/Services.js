import '../styles/services.css';

export function renderServices() {
  return `
    <section class="services fade-in-section" id="services">
      <div class="container">
        <div class="services__header">
          <span class="section-subtitle">SLUŽBY</span>
          <h2 class="section-title">Co Pro Vás Můžeme Udělat</h2>
        </div>

        <div class="services__grid">
          <div class="service-card">
            <h3>Výměna čelního skla</h3>
            <p>Kompletní výměna poškozeného čelního skla pro všechny typy vozidel.</p>
          </div>
          <div class="service-card">
            <h3>Oprava prasklin</h3>
            <p>Rychlá oprava drobných prasklin a pavouků bez nutnosti výměny celého skla.</p>
          </div>
          <div class="service-card">
            <h3>Mobilní servis</h3>
            <p>Přijedeme za vámi a opravíme sklo přímo u vás doma nebo v práci.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}