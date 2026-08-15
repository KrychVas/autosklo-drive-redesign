import { siteConfig, branches } from '../data/siteData.js';
import '../styles/contacts.css';

/**
 * Sanitizes input string to prevent XSS attacks.
 */
export function sanitizeInput(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .trim();
}

/**
 * Validates Czech phone number format.
 */
export function validatePhone(phone) {
  const cleaned = phone.replace(/[\s-]/g, '');
  const czechPhoneRegex = /^(\+?420)?\d{9}$/;
  return czechPhoneRegex.test(cleaned);
}

/**
 * Displays UI Toast notifications
 */
export function showToast(message, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;

  const icon = type === 'success' ? '✅' : '⚠️';

  const iconSpan = document.createElement('span');
  iconSpan.textContent = icon;

  const textSpan = document.createElement('span');
  textSpan.textContent = message;

  toast.appendChild(iconSpan);
  toast.appendChild(textSpan);

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}

export function renderContacts() {
  const branchOptions = branches
    .map(
      (b) =>
        `<option value="${b.id}" data-email="${b.email}">${sanitizeInput(b.name)} (${sanitizeInput(b.email)})</option>`,
    )
    .join('');

  const locationIconSvg = `<span class="branch-detail-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg></span>`;
  const emailIconSvg = `<span class="branch-detail-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg></span>`;
  const clockIconSvg = `<span class="branch-detail-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg></span>`;

  return `
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
            
            <div class="contacts__main-phone">
              <div class="contacts__phone-icon">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.02-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              </div>
              <div>
                <div class="contacts__phone-label">Jediná Infolinka Pro Obě Pobočky</div>
                <a href="tel:${siteConfig.phoneRaw}" class="contacts__phone-number">${siteConfig.phone}</a>
              </div>
            </div>

            <h3 class="contacts__info-title" style="margin-top: 30px;">Naše Pobočky</h3>
            <div class="contacts__branches-list">
              ${branches
                .map(
                  (b) => `
                <div class="contacts__branch-item">
                  <div class="contacts__branch-name">${sanitizeInput(b.name)}</div>
                  <div class="contacts__branch-detail">
                    <p>${locationIconSvg} <span>${sanitizeInput(b.address)}</span></p>
                    <p>${emailIconSvg} <strong>${sanitizeInput(b.email)}</strong></p>
                    <p>${clockIconSvg} <span>${sanitizeInput(b.workingHours)}</span></p>
                  </div>
                </div>
              `,
                )
                .join('')}
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
                  ${branchOptions}
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
  `;
}

/**
 * Initializes form submission listener & security handlers
 */
export function initContactsEvents() {
  const form = document.getElementById('bookingForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = document.getElementById('submitBtn');
    const formData = new FormData(form);

    // 1. Honeypot check
    const honeypot = formData.get('b_website');
    if (honeypot) {
      // Spam bot detected! Fake success silently without sending email.
      showToast('Děkujeme! Vaše zpráva byla přijata.', 'success');
      form.reset();
      return;
    }

    // 2. Extract & sanitize fields
    const branchId = sanitizeInput(formData.get('branch'));
    const name = sanitizeInput(formData.get('name'));
    const phone = sanitizeInput(formData.get('phone'));
    const car = sanitizeInput(formData.get('car'));
    const service = sanitizeInput(formData.get('service'));
    const message = sanitizeInput(formData.get('message'));

    // Find target branch info
    const selectedBranch =
      branches.find((b) => b.id === branchId) || branches[0];
    const targetEmail = selectedBranch.email;

    // 3. Validation
    if (!name || name.length < 2) {
      showToast('Prosím vyplňte platné jméno a příjmení.', 'error');
      document.getElementById('userName')?.focus();
      return;
    }

    if (!phone || !validatePhone(phone)) {
      showToast(
        'Zadejte platné české telefonní číslo (např. +420 777 123 456).',
        'error',
      );
      document.getElementById('userPhone')?.focus();
      return;
    }

    if (!car || car.length < 2) {
      showToast('Zadejte značku a model vašeho vozidla.', 'error');
      document.getElementById('carModel')?.focus();
      return;
    }

    // Disable button & show spinner state
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Odesílám... ⏳</span>';
    }

    // 4. Email Dispatch Handler (EmailJS / Formspree)
    const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    let success = false;

    try {
      if (
        emailJsServiceId &&
        emailJsTemplateId &&
        emailJsPublicKey &&
        emailJsPublicKey !== 'your_public_key_here'
      ) {
        // Send via EmailJS API
        const payload = {
          service_id: emailJsServiceId,
          template_id: emailJsTemplateId,
          user_id: emailJsPublicKey,
          template_params: {
            to_email: targetEmail,
            branch_name: selectedBranch.name,
            user_name: name,
            user_phone: phone,
            car_model: car,
            service_type: service,
            message: message || 'Bez poznámky',
            subject: `Nová rezervace - ${selectedBranch.name}`,
          },
        };

        const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (res.ok) success = true;
      } else if (formspreeEndpoint) {
        // Send via Formspree API
        const res = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            branch: selectedBranch.name,
            target_email: targetEmail,
            name,
            phone,
            car,
            service,
            message,
          }),
        });

        if (res.ok) success = true;
      } else {
        // Mock fallback for development testing when API keys are not configured yet
        await new Promise((res) => setTimeout(res, 800));
        console.log(
          'Form submission simulation (Set EmailJS keys in .env for production dispatch):',
          {
            targetEmail,
            branch: selectedBranch.name,
            name,
            phone,
            car,
            service,
            message,
          },
        );
        success = true;
      }

      if (success) {
        showToast(
          `Děkujeme! Žádost pro ${selectedBranch.name} byla úspěšně odeslána. Brzy vás kontaktujeme.`,
          'success',
        );
        form.reset();
      } else {
        showToast(
          'Nepodařilo se odeslat formulář. Zkuste to prosím znovu nebo nám zavolejte.',
          'error',
        );
      }
    } catch (err) {
      console.error('Email submit error:', err);
      showToast(
        'Došlo k chybě při odesílání. Zkontrolujte připojení k internetu.',
        'error',
      );
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Odeslat Rezervaci</span>';
      }
    }
  });
}
