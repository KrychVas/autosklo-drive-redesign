import { siteConfig, servicesData } from '../data/siteData.js';
import '../styles/footer.css';

export function renderFooter() {
  // Динамічна генерація списку послуг з siteData.js
  const servicesListHtml = Object.values(servicesData)
    .map((service) => `<li><a href="#service/${service.id}">${service.title}</a></li>`)
    .join('') + `<li><a href="#contacts">Řešení pojistných událostí</a></li>`;

  return `
    <footer class="footer">
      <div class="container">
        <div class="footer__grid">
          
          <!-- Column 1: Company Info & Socials -->
          <div class="footer__col">
            <h3 class="footer__col-title footer__company-title">SÍDLO SPOLEČNOSTI</h3>
            <div class="footer__address">
              <p><strong>${siteConfig.name} s.r.o.</strong></p>
              <p>Mezi vodami 2252/9a</p>
              <p>143 00 Praha 4, Modřany</p>
              <p>IČO: 24578240</p>
              <p style="margin-top: 6px; font-size: 13px; opacity: 0.85;">Spisová značka: C 443559 vedená u MS v Praze</p>
            </div>
            
            <div class="footer__socials">
              <a href="#" class="footer__social-link" aria-label="Facebook">
                <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" class="footer__social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" class="footer__social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" class="footer__social-link" aria-label="Twitter">
                <svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
              <a href="#" class="footer__social-link" aria-label="YouTube">
                <svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>

          <!-- Column 2: Naše služby -->
          <div class="footer__col">
            <h3 class="footer__col-title">Naše služby</h3>
            <ul class="footer__list">
              ${servicesListHtml}
            </ul>
          </div>

          <!-- Column 3: Rychlé Odkazy -->
          <div class="footer__col">
            <h3 class="footer__col-title">Rychlé Odkazy</h3>
            <ul class="footer__list">
              <li><a href="#home">DOMŮ</a></li>
              <li><a href="#services">SLUŽBY</a></li>
              <li><a href="#branches">POBOČKY</a></li>
              <li><a href="#blog">BLOG</a></li>
            </ul>
          </div>

          <!-- Column 4: Ostatní -->
          <div class="footer__col">
            <h3 class="footer__col-title">Ostatní</h3>
            <ul class="footer__list">
              <li><a href="#pravidla-pouzivani">Pravidla používání</a></li>
              <li><a href="#pravidla-pouzivani">Zásady ochrany osobních údajů</a></li>
              <li><a href="#pravidla-pouzivani">Cookies</a></li>
            </ul>
          </div>

        </div>
      </div>

      <!-- Footer Bottom Bar -->
      <div class="footer__bottom">
        <div class="container">
          <p>© ${new Date().getFullYear()} ${siteConfig.name} s.r.o. Všechna práva vyhrazena. &nbsp;|&nbsp; Vytvořil <a href="https://github.com/KrychVas" target="_blank" rel="noopener noreferrer" class="footer__dev-link">Vasyl Krychfalushii</a></p>
        </div>
      </div>
    </footer>

    <!-- Back to Top Floating Button -->
    <button id="backToTop" class="back-to-top" aria-label="Zpět nahoru">
      ↑
    </button>
  `;
}

/**
 * Initializes back-to-top button visibility & scroll logic
 */
export function initFooterEvents() {
  const backToTopBtn = document.getElementById('backToTop');
  if (!backToTopBtn) return;

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('back-to-top--visible');
    } else {
      backToTopBtn.classList.remove('back-to-top--visible');
    }
  };

  window.addEventListener('scroll', toggleVisibility, { passive: true });
  toggleVisibility();

  backToTopBtn.onclick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
}