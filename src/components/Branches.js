import { branches, siteConfig } from '../data/siteData.js';
import '../styles/branches.css';

export function renderBranches() {
  return `
    <section class="branches fade-in-section" id="branches">
      <div class="container">
        <div class="branches__header">
          <span class="section-subtitle">KDE NÁS NAJDETE</span>
          <h2 class="section-title">Naše Pobočky</h2>
          <p>Jsme na dvou místech. Neváhejte nám zavolat, rádi se postaráme o vaše vozidlo.</p>
        </div>

        <div class="branches__grid">
          ${branches
            .map(
              (b) => `
            <div class="branch-info-card">
              <div>
                <h3 class="branch-info-card__title">${b.name}</h3>
                <div class="branch-info-card__details">
                  <p><strong>Adresa:</strong> ${b.address}</p>
                  <p><strong>Telefon:</strong> <a href="tel:${siteConfig.phoneRaw}" class="branch-info-card__phone">${siteConfig.phone}</a></p>
                  <p><strong>Email pobočky:</strong> ${b.email}</p>
                  <p><strong>Otevírací doba:</strong> ${b.workingHours}</p>
                </div>
              </div>
              <div class="branch-info-card__map">
                <iframe 
                  src="${b.mapEmbedUrl}" 
                  width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy">
                </iframe>
              </div>
            </div>
          `
            )
            .join('')}
        </div>
      </div>
    </section>
  `;
}
