import{a as e,n as t}from"./index-DYU2Qrhp.js";function n(e){return typeof e==`string`?e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`).trim():``}function r(e){let t=e.replace(/[\s-]/g,``);return/^(\+?420)?\d{9}$/.test(t)}function i(e,t=`success`){let n=document.querySelector(`.toast-container`);n||(n=document.createElement(`div`),n.className=`toast-container`,document.body.appendChild(n));let r=document.createElement(`div`);r.className=`toast toast--${t}`;let i=t===`success`?`✅`:`⚠️`,a=document.createElement(`span`);a.textContent=i;let o=document.createElement(`span`);o.textContent=e,r.appendChild(a),r.appendChild(o),n.appendChild(r),setTimeout(()=>{r.style.opacity=`0`,r.style.transition=`opacity 0.3s ease`,setTimeout(()=>r.remove(),300)},4500)}function a(){let r=t.map(e=>`<option value="${e.id}" data-email="${e.email}">${n(e.name)} (${n(e.email)})</option>`).join(``);return`
    <section class="contacts fade-in-section" id="contacts">
      <div class="container">
        <div class="contacts__header">
          <span class="section-subtitle">KONTAKT & REZERVACE</span>
          <h2 class="section-title">Napište Nám Nebo Se Objednejte</h2>
          <p>Vyberte si preferred pobočku. Vaše žádost bude doručena přímo na její e-mail.</p>
        </div>

        <div class="contacts__grid">
          <!-- Levý sloupec - Kontakty -->
          <div class="contacts__info-card">
            <h3 class="contacts__info-title">Volejte Nám</h3>
            
            <a href="tel:${e.phoneRaw}" class="contacts__phone-link-card">
              <div class="contacts__phone-icon-circle">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.02-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              </div>
              <div class="contacts__phone-text-wrapper">
                <div class="contacts__phone-label">Jediná Infolinka Pro Obě Pobočky</div>
                <div class="contacts__phone-number-text">${e.phone}</div>
              </div>
            </a>

            <h3 class="contacts__info-title" style="margin-top: 30px;">Naše Pobočky</h3>
            <div class="contacts__branches-list">
              ${t.map(e=>`
                <div class="contacts__branch-item">
                  <div class="contacts__branch-name">${n(e.name)}</div>
                  <div class="contacts__branch-detail">
                    <p><span class="branch-detail-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg></span> <span>${n(e.address)}</span></p>
                    <p><span class="branch-detail-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg></span> <strong>${n(e.email)}</strong></p>
                    <p><span class="branch-detail-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg></span> <span>${n(e.workingHours)}</span></p>
                  </div>
                </div>
              `).join(``)}
            </div>
          </div>

          <!-- Pravý sloupec - Formulář -->
          <div class="contacts__form-card">
            <h3 class="contacts__form-title">Online Objednávka Servisu</h3>
            <p class="contacts__form-desc">Vyplňte formulář a my se vám ozveme zpět do 30 minut.</p>

            <form id="bookingForm" novalidate>
              <!-- Honeypot field - Protection against spam bots -->
              <input type="text" name="b_website" class="hp-field" tabindex="-1" autocomplete="off" aria-hidden="true" />

              <div class="form-group">
                <label for="branchSelect">Výběr pobočky <span class="required">*</span></label>
                <select id="branchSelect" name="branch" class="form-control" required>
                  ${r}
                </select>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="userName">Jméno a příjmení <span class="required">*</span></label>
                  <input type="text" id="userName" name="name" class="form-control" placeholder="Jan Novák" required />
                </div>
                <div class="form-group">
                  <label for="userPhone">Telefon (+420) <span class="required">*</span></label>
                  <input type="tel" id="userPhone" name="phone" class="form-control" placeholder="+420 777 123 456" required />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="carModel">Značka a model auta <span class="required">*</span></label>
                  <input type="text" id="carModel" name="car" class="form-control" placeholder="Např. Škoda Octavia III" required />
                </div>
                <div class="form-group">
                  <label for="serviceType">Požadovaná služba <span class="required">*</span></label>
                  <select id="serviceType" name="service" class="form-control" required>
                    <option value="Výměna čelního skla">Výměna čelního skla</option>
                    <option value="Oprava prasklin">Oprava prasklin</option>
                    <option value="Jiné / Dotaz">Jiné / Dotaz</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label for="userMessage">Poznámka / Popis poškození</label>
                <textarea id="userMessage" name="message" class="form-control" placeholder="Upřesněte typ poškození, senzorů nebo vybrané pojišťovny..."></textarea>
              </div>

              <button type="submit" class="btn-submit" id="submitBtn">
                <span>Odeslat Rezervaci</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `}function o(){let e=document.getElementById(`bookingForm`);e&&e.addEventListener(`submit`,async a=>{a.preventDefault();let o=document.getElementById(`submitBtn`),s=new FormData(e);if(s.get(`b_website`)){i(`Děkujeme! Vaše zpráva byla přijata.`,`success`),e.reset();return}let c=n(s.get(`branch`)),l=n(s.get(`name`)),u=n(s.get(`phone`)),d=n(s.get(`car`)),f=n(s.get(`service`)),p=n(s.get(`message`)),m=t.find(e=>e.id===c)||t[0],h=m.email;if(!l||l.length<2){i(`Prosím vyplňte platné jméno a příjmení.`,`error`),document.getElementById(`userName`)?.focus();return}if(!u||!r(u)){i(`Zadejte platné české telefonní číslo (např. +420 777 123 456).`,`error`),document.getElementById(`userPhone`)?.focus();return}if(!d||d.length<2){i(`Zadejte značku a model vašeho vozidla.`,`error`),document.getElementById(`carModel`)?.focus();return}o&&(o.disabled=!0,o.innerHTML=`<span>Odesílám... ⏳</span>`);let g=!1;try{await new Promise(e=>setTimeout(e,800)),console.log(`Form submission simulation (Set EmailJS keys in .env for production dispatch):`,{targetEmail:h,branch:m.name,name:l,phone:u,car:d,service:f,message:p}),g=!0,g?(i(`Děkujeme! Žádost pro ${m.name} byla úspěšně odeslána. Brzy vás kontaktujeme.`,`success`),e.reset()):i(`Nepodařilo se odeslat formulář. Zkuste to prosím znovu nebo nám zavolejte.`,`error`)}catch(e){console.error(`Email submit error:`,e),i(`Došlo k chybě při odesílání. Zkontrolujte připojení k internetu.`,`error`)}finally{o&&(o.disabled=!1,o.innerHTML=`<span>Odeslat Rezervaci</span>`)}})}export{o as initContactsEvents,a as renderContacts};