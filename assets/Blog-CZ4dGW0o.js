import{t as e}from"./index-DYU2Qrhp.js";function t(){return`
    <section class="blog-section fade-in-section" id="blog">
      <div class="container">
        <div class="blog-section__header">
          <span class="section-subtitle">Blog</span>
          <h2 class="section-title">Něco Na Čtení V Oblast Autoskel</h2>
        </div>
        <div class="blog-grid">
          ${e.map(e=>`
    <article class="blog-card" onclick="window.location.hash='#blog/${e.id}'" style="cursor:pointer;">
      <img src="${e.image}" alt="${e.alt}" class="blog-card__image" loading="lazy" />
      <div class="blog-card__body">
        <span class="blog-card__tag">${e.tag}</span>
        <h3 class="blog-card__title">${e.title}</h3>
        <p class="blog-card__excerpt">${e.excerpt}</p>
        <div class="blog-card__meta">
          <span class="blog-card__date">${e.date}</span>
          <span class="blog-card__read">${e.readTime}</span>
        </div>
        <a href="#blog/${e.id}" class="blog-card__link" onclick="event.stopPropagation()">Číst více →</a>
      </div>
    </article>
  `).join(``)}
        </div>
      </div>
    </section>
  `}export{t as renderBlog};