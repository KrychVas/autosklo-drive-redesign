import './styles/main.css';
import { renderHeader, initHeaderEvents } from './components/Header.js';

const app = document.getElementById('app');

// Рендеримо шапку в #app
app.innerHTML = `
  ${renderHeader()}
  <main id="main-content">
    <div class="container" style="padding: 60px 0; text-align: center;">
      <h1>Головний контент буде тут!</h1>
    </div>
  </main>
`;

// Ініціалізуємо події (кліки)
initHeaderEvents();