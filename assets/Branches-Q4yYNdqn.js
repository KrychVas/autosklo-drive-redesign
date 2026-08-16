import{a as e,n as t}from"./index-DYU2Qrhp.js";function n(){return`
    <section class="branches fade-in-section" id="branches">
      <div class="container">
        <div class="branches__header">
          <span class="section-subtitle">KDE NÁS NAJDETE</span>
          <h2 class="section-title">Naše Pobočky</h2>
          <p>Jsme na dvou místech. Neváhejte nám zavolat, rádi se postaráme o vaše vozidlo.</p>
        </div>

        <div class="branches__grid">
          ${t.map(t=>`
            <div class="branch-info-card">
              <div>
                <h3 class="branch-info-card__title">${t.name}</h3>
                <div class="branch-info-card__details">
                  <p><strong>Adresa:</strong> ${t.address}</p>
                  <p><strong>Telefon:</strong> <a href="tel:${e.phoneRaw}" class="branch-info-card__phone">${e.phone}</a></p>
                  <p><strong>Email pobočky:</strong> ${t.email}</p>
                  <p><strong>Otevírací doba:</strong> ${t.workingHours}</p>
                </div>
              </div>
              <div class="branch-info-card__map">
                <iframe 
                  src="${t.mapEmbedUrl}" 
                  width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy">
                </iframe>
              </div>
            </div>
          `).join(``)}
        </div>
      </div>
    </section>
  `}export{n as renderBranches};