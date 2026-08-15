import { servicesData } from '../data/siteData.js';
import '../styles/services.css';

export function renderServiceDetail(id) {
  const service = servicesData[id];

  if (!service) {
    return `
      <div class="container" style="padding: 100px 20px; text-align: center;">
        <h1>Služba nenalezena</h1>
        <p style="margin: 15px 0; color: #666;">Požadovaná stránka služby neexistuje nebo byla přesunuta.</p>
        <a href="#home" class="btn btn--primary" style="display: inline-block; margin-top: 20px;">Zpět na hlavní stranu</a>
      </div>
    `;
  }

  return `
    <article class="service-detail fade-in">
      <div class="service-detail__hero" style="background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${service.image}') center/cover no-repeat; padding: 100px 0 60px; color: white; text-align: center;">
        <div class="container">
          <span class="section-subtitle" style="color: var(--primary-color); font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px;">${service.subtitle}</span>
          <h1 class="section-title" style="color: white; font-size: 38px; margin-top: 10px;">${service.title}</h1>
        </div>
      </div>

      <div class="container" style="padding: 60px 20px;">
        <div style="max-width: 800px; margin: 0 auto; background: white; padding: 40px; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.06);">
          <div class="service-detail__content" style="font-size: 16px; line-height: 1.8; color: #333;">
            ${service.fullText}
          </div>
          
          <div style="margin-top: 40px; display: flex; gap: 20px; flex-wrap: wrap; justify-content: space-between; align-items: center; border-top: 1px solid #eee; padding-top: 25px;">
            <a href="#home" class="btn btn--secondary" style="color: #333; border-color: #ccc;">← ZPĚT NA HLAVNÍ STRANU</a>
            <a href="#contacts" class="btn btn--primary">OBJEDNAT TUTO SLUŽBU</a>
          </div>
        </div>
      </div>
    </article>
  `;
}
