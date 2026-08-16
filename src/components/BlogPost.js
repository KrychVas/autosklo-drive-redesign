import { blogPosts } from '../data/siteData.js';
import '../styles/blogpost.css';

export function renderBlogPost(postId) {
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    return `
      <section class="blogpost-section">
        <div class="container">
          <div class="blogpost-not-found">
            <h2>Článek nenalezen</h2>
            <p>Tento článek neexistuje nebo byl odstraněn.</p>
            <a href="#blog" class="blogpost-back-btn">← Zpět na blog</a>
          </div>
        </div>
      </section>
    `;
  }

  const otherPosts = blogPosts.filter((p) => p.id !== postId).slice(0, 2);

  return `
    <section class="blogpost-section">
      <div class="container">

        <!-- Back breadcrumb -->
        <nav class="blogpost-breadcrumb">
          <a href="#home">Domů</a>
          <span>›</span>
          <a href="#blog">Blog</a>
          <span>›</span>
          <span>${post.tag}</span>
        </nav>

        <!-- Hero image -->
        <div class="blogpost-hero">
          <img src="${post.image}" alt="${post.alt}" class="blogpost-hero__img" />
        </div>

        <!-- Article wrapper -->
        <div class="blogpost-layout">
          <article class="blogpost-article">
            <header class="blogpost-header">
              <span class="blogpost-tag">${post.tag}</span>
              <h1 class="blogpost-title">${post.title}</h1>
              <div class="blogpost-meta">
                <span>📅 ${post.date}</span>
                <span>⏱ ${post.readTime}</span>
              </div>
            </header>

            <div class="blogpost-content">
              ${post.content}
            </div>

            <!-- CTA after article -->
            <div class="blogpost-cta">
              <p>Potřebujete opravu nebo výměnu autoskla?</p>
              <a href="#contacts" class="blogpost-cta-btn">Objednat se online</a>
            </div>

            <a href="#blog" class="blogpost-back-link">← Zpět na všechny články</a>
          </article>

          <!-- Sidebar: other posts -->
          <aside class="blogpost-sidebar">
            <h3 class="blogpost-sidebar__title">Další články</h3>
            ${otherPosts.map((p) => `
              <a href="#blog/${p.id}" class="blogpost-sidebar__card">
                <img src="${p.image}" alt="${p.alt}" class="blogpost-sidebar__img" loading="lazy" />
                <div class="blogpost-sidebar__body">
                  <span class="blogpost-sidebar__tag">${p.tag}</span>
                  <p class="blogpost-sidebar__title-text">${p.title}</p>
                  <span class="blogpost-sidebar__read">${p.readTime}</span>
                </div>
              </a>
            `).join('')}
          </aside>
        </div>

      </div>
    </section>
  `;
}
