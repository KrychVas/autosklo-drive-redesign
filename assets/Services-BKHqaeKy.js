import{i as e}from"./index-h1CVYyAB.js";function t(){return`
    <section class="services fade-in-section" id="services">
      <div class="container">
        <div class="services__header">
          <span class="section-subtitle">SLUŽBY</span>
          <h2 class="section-title">Co Pro Vás Můžeme Udělat</h2>
        </div>

        <div class="services__grid">
          ${Object.values(e).map(e=>`
      <a href="#service/${e.id}" class="service-card">
        <h3>${e.title}</h3>
        <p>${e.description}</p>
        <span class="service-card__more">Více informací →</span>
      </a>
    `).join(``)}
        </div>
      </div>
    </section>
  `}export{t as renderServices};