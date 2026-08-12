import './styles/main.css';
import { renderHeader, initHeaderEvents } from './components/Header.js';
import { renderHero } from './components/Hero.js';

const app = document.getElementById('app');

// 1. Рендеримо базову структуру (Header + Hero + Контейнери під інші секції)
app.innerHTML = `
  ${renderHeader()}
  <main id="main-content">
    ${renderHero()}
    <div id="process-wrapper" data-component="process"></div>
    <div id="services-wrapper" data-component="services"></div>
    <div id="contacts-wrapper" data-component="contacts"></div>
  </main>
  <div id="footer-wrapper" data-component="footer"></div>
`;

// Ініціалізуємо шапку
initHeaderEvents();

// 2. Логіка Lazy Loading (Динамічне завантаження компонентів при скролі)
const loadedComponents = new Set();

async function loadComponent(name) {
  if (loadedComponents.has(name)) return;
  loadedComponents.add(name);

  if (name === 'process') {
    const { renderProcess } = await import('./components/Process.js');
    document.getElementById('process-wrapper').innerHTML = renderProcess();
  } else if (name === 'services') {
    const { renderServices } = await import('./components/Services.js');
    document.getElementById('services-wrapper').innerHTML = renderServices();
  } else if (name === 'contacts') {
    const { renderContacts } = await import('./components/Contacts.js');
    document.getElementById('contacts-wrapper').innerHTML = renderContacts();
  } else if (name === 'footer') {
    const { renderFooter } = await import('./components/Footer.js');
    document.getElementById('footer-wrapper').innerHTML = renderFooter();
  }
}

// 3. Intersection Observer: стежить за тим, що користувач наближається до секції
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const compName = entry.target.dataset.component;
      loadComponent(compName);
      observer.unobserve(entry.target); // Вимикаємо спостереження після завантаження
    }
  });
}, { rootMargin: '200px 0px' }); // Завантажуємо за 200px до появи на екрані

// Підключаємо спостерігач до всіх контейнерів
document.querySelectorAll('[data-component]').forEach(el => observer.observe(el));