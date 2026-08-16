import { renderHeader, initHeaderEvents } from './components/Header.js';
import { renderHero } from './components/Hero.js';
import { renderServiceDetail } from './components/ServiceDetail.js';
import { renderTerms } from './components/Terms.js';
import { renderBlogPost } from './components/BlogPost.js';
import { renderFooter, initFooterEvents } from './components/Footer.js';

const app = document.getElementById('app');
const loadedComponents = new Set();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const compName = entry.target.dataset.component;
        if (compName) {
          loadComponent(compName, entry.target);
          observer.unobserve(entry.target);
        }
      }
    });
  },
  { rootMargin: '250px 0px' }
);

function initLazyLoading() {
  document
    .querySelectorAll('[data-component]')
    .forEach((el) => observer.observe(el));
}

async function loadComponent(name, element) {
  if (loadedComponents.has(name)) return;
  loadedComponents.add(name);

  try {
    if (name === 'process') {
      const { renderProcess } = await import('./components/Process.js');
      element.innerHTML = renderProcess();
    } else if (name === 'services') {
      const { renderServices } = await import('./components/Services.js');
      element.innerHTML = renderServices();
    } else if (name === 'branches') {
      const { renderBranches } = await import('./components/Branches.js');
      element.innerHTML = renderBranches();
    } else if (name === 'contacts') {
      const { renderContacts, initContactsEvents } = await import('./components/Contacts.js');
      element.innerHTML = renderContacts();
      initContactsEvents();
    } else if (name === 'blog') {
      const { renderBlog } = await import('./components/Blog.js');
      element.innerHTML = renderBlog();
    }
  } catch (err) {
    console.error(`Error loading component ${name}:`, err);
  }
}

export function renderHomePage() {
  loadedComponents.clear();
  app.innerHTML = `
    ${renderHeader()}
    <main id="main-content">
      ${renderHero()}
      <div id="process-wrapper" data-component="process"></div>
      <div id="services-wrapper" data-component="services"></div>
      <div id="branches-wrapper" data-component="branches"></div>
      <div id="contacts-wrapper" data-component="contacts"></div>
      <div id="blog-wrapper" data-component="blog"></div>
    </main>
    <div id="footer-wrapper">${renderFooter()}</div>
  `;
  initHeaderEvents();
  initFooterEvents();
  initLazyLoading();
}

export function renderDetailPage(serviceId) {
  app.innerHTML = `
    ${renderHeader()}
    <main id="main-content">
      ${renderServiceDetail(serviceId)}
      <div id="contacts-wrapper" data-component="contacts"></div>
      <div id="blog-wrapper" data-component="blog"></div>
    </main>
    <div id="footer-wrapper">${renderFooter()}</div>
  `;
  initHeaderEvents();
  initFooterEvents();
  initLazyLoading();
  window.scrollTo(0, 0);
}

export function renderBlogPostPage(postId) {
  app.innerHTML = `
    ${renderHeader()}
    <main id="main-content">
      ${renderBlogPost(postId)}
      <div id="contacts-wrapper" data-component="contacts"></div>
    </main>
    <div id="footer-wrapper">${renderFooter()}</div>
  `;
  initHeaderEvents();
  initFooterEvents();
  initLazyLoading();
  window.scrollTo(0, 0);
}

export function renderTermsPage() {
  app.innerHTML = `
    ${renderHeader()}
    <main id="main-content">
      ${renderTerms()}
    </main>
    <div id="footer-wrapper">${renderFooter()}</div>
  `;
  initHeaderEvents();
  initFooterEvents();
  window.scrollTo(0, 0);
}

export async function handleRoute() {
  const hash = window.location.hash || '#home';

  if (hash.startsWith('#service/')) {
    const serviceId = hash.split('/')[1];
    renderDetailPage(serviceId);
  } else if (hash.startsWith('#blog/')) {
    const postId = hash.split('/')[1];
    renderBlogPostPage(postId);
  } else if (hash === '#pravidla-pouzivani' || hash === '#terms') {
    renderTermsPage();
  } else {
    const isHomePageRendered = document.getElementById('process-wrapper') !== null;
    if (!isHomePageRendered) {
      renderHomePage();
    }

    const targetId = hash.replace('#', '');
    if (targetId && targetId !== 'home') {
      setTimeout(() => {
        const targetSection =
          document.getElementById(targetId + '-wrapper') ||
          document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }
}