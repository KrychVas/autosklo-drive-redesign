import { processSteps } from '../data/siteData.js';
import '../styles/process.css';

export function renderProcess() {
  return `
    <section class="process fade-in-section" id="process">
      <div class="container">
        <div class="process__header">
          <span class="section-subtitle">JAK TO FUNGUJE</span>
          <h2 class="section-title">Takhle To U Nás Chodí</h2>
        </div>

        <div class="process__grid">
          ${processSteps
            .map(
              (step) => `
            <div class="process-card">
              <div class="process-card__icon">${step.icon}</div>
              <h3 class="process-card__title">${step.title}</h3>
              <p class="process-card__text">${step.text}</p>
            </div>
          `
            )
            .join('')}
        </div>
      </div>
    </section>
  `;
}