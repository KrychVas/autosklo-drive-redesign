import { blogPosts } from '../data/siteData.js';
import '../styles/blog.css';

export function renderBlog() {
  const cards = blogPosts.map((post) => `
    <article class="blog-card" onclick="window.location.hash='#blog/${post.id}'" style="cursor:pointer;">
      <img src="${post.image}" alt="${post.alt}" class="blog-card__image" loading="lazy" />
      <div class="blog-card__body">
        <span class="blog-card__tag">${post.tag}</span>
        <h3 class="blog-card__title">${post.title}</h3>
        <p class="blog-card__excerpt">${post.excerpt}</p>
        <div class="blog-card__meta">
          <span class="blog-card__date">${post.date}</span>
          <span class="blog-card__read">${post.readTime}</span>
        </div>
        <a href="#blog/${post.id}" class="blog-card__link" onclick="event.stopPropagation()">Číst více →</a>
      </div>
    </article>
  `).join('');

  return `
    <section class="blog-section fade-in-section" id="blog">
      <div class="container">
        <div class="blog-section__header">
          <span class="section-subtitle">Blog</span>
          <h2 class="section-title">Něco Na Čtení V Oblast Autoskel</h2>
        </div>
        <div class="blog-grid">
          ${cards}
        </div>
      </div>
    </section>
  `;
}
