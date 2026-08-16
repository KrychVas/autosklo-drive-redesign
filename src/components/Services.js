import { servicesData } from '../data/siteData.js';
import '../styles/services.css';
export function renderServices() {
  const serviceCards = Object.values(servicesData)
    .map(
      (service) => `
      <a href="#service/${service.id}" class="service-card">
        <h3>${service.title}</h3>
        <p>${service.description}</p>
        <span class="service-card__more">Více informací →</span>
      </a>
    `
    )
    .join('');

  return `
    <section class="services fade-in-section" id="services">
      <div class="container">
        <div class="services__header">
          <span class="section-subtitle">SLUŽBY</span>
          <h2 class="section-title">Co Pro Vás Můžeme Udělat</h2>
        </div>

        <div class="services__grid">
          ${serviceCards}
        </div>
      </div>
    </section>
  `;
}
