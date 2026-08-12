import '../styles/header.css';

export function renderHeader() {
  return `
    <header class="header">
      <!-- Помаранчева смуга всередині sticky-шапки -->
      <div class="top-bar-orange"></div>

      <div class="container header__container">
        <!-- Логотип -->
        <a href="#" class="header__logo">
          <img src="/logo.png" alt="AUTOSKLO DRIVE" />
        </a>

        <!-- Навігація -->
        <nav class="nav">
          <ul class="nav__list">
            <li><a href="#services" class="nav__link">VÝMĚNA ČELNÍHO SKLA</a></li>
            <li><a href="#services" class="nav__link">DALŠÍ SLUŽBY</a></li>
            <li><a href="#about" class="nav__link">O NÁS</a></li>
            <li><a href="#contacts" class="nav__link nav__link--btn">KONTAKTY</a></li>
          </ul>
        </nav>

        <!-- Бургер для мобілок -->
        <button class="burger-btn" id="burgerBtn" aria-label="Toggle Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  `;
}

export function initHeaderEvents() {
  const burgerBtn = document.getElementById('burgerBtn');
  const nav = document.querySelector('.nav');

  if (burgerBtn && nav) {
    burgerBtn.addEventListener('click', () => {
      nav.classList.toggle('nav--active');
      burgerBtn.classList.toggle('burger-btn--active');
    });
  }

  // SPA плавний скрол
  document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').replace('#', '');
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }

      if (nav && nav.classList.contains('nav--active')) {
        nav.classList.remove('nav--active');
        burgerBtn.classList.remove('burger-btn--active');
      }
    });
  });
}