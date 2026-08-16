import{r as e}from"./index-DYU2Qrhp.js";function t(){return`
    <section class="process fade-in-section" id="process">
      <div class="container">
        <div class="process__header">
          <span class="section-subtitle">JAK TO FUNGUJE</span>
          <h2 class="section-title">Takhle To U Nás Chodí</h2>
        </div>

        <div class="process__grid">
          ${e.map(e=>`
            <div class="process-card">
              <div class="process-card__icon">${e.icon}</div>
              <h3 class="process-card__title">${e.title}</h3>
              <p class="process-card__text">${e.text}</p>
            </div>
          `).join(``)}
        </div>
      </div>
    </section>
  `}export{t as renderProcess};