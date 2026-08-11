import './styles/main.css';
import { renderHeader, initHeaderEvents } from './components/Header.js';
import { renderHero } from './components/Hero.js';

const app = document.getElementById('app');

// Рендеримо шапку та Hero-секцію в #app
app.innerHTML = `
  ${renderHeader()}
  <main id="main-content">
    ${renderHero()}
  </main>
`;

// Ініціалізуємо події (кліки)
initHeaderEvents();
