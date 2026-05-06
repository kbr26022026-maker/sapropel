<template>
  <section class="eo-section eo-articles-teaser" id="articles-teaser">
    <div class="eo-wrap">
      <div class="eo-articles-teaser__card eo-reveal">
        <div class="eo-articles-teaser__head">
          <span class="eo-articles-teaser__eyebrow">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
            Блог
          </span>
          <h2 class="eo-articles-teaser__title">Статьи и новости</h2>
          <p class="eo-articles-teaser__lead">
            Материалы о сапропеле, агрономии и практических кейсах. Обновляется регулярно.
          </p>
        </div>

        <div>
          <ul class="eo-articles-teaser__list">
            <li v-for="art in teaserArticles" :key="art.slug">
              <router-link :to="`/articles/${art.slug}`" class="eo-articles-teaser__item">
                <span class="eo-articles-teaser__cat">{{ art.catLabel }}</span>
                <span class="eo-articles-teaser__headline">{{ art.title }}</span>
                <time :datetime="art.date" class="eo-articles-teaser__date">{{ art.dateLabel }}</time>
              </router-link>
            </li>
          </ul>

          <router-link to="/articles" class="eo-articles-teaser__cta">
            <span>Все статьи</span>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { teaserArticles } from '@/data/articles.js'
</script>

<style scoped>
.eo-articles-teaser {
  padding-top: clamp(32px, 4vw, 52px);
  padding-bottom: clamp(32px, 4vw, 52px);
}
.eo-articles-teaser__card {
  position: relative;
  padding: clamp(32px, 5vw, 56px);
  border-radius: var(--eo-radius-lg);
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(255, 255, 255, 0.85));
  border: 1px solid rgba(16, 185, 129, 0.18);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 10px 36px rgba(15, 23, 42, 0.06);
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(28px, 4vw, 48px);
}
@media (min-width: 960px) {
  .eo-articles-teaser__card {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
    align-items: center;
  }
}
.eo-articles-teaser__head { max-width: 420px; }
.eo-articles-teaser__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--eo-accent-deep);
  background: var(--eo-accent-soft);
  padding: 7px 14px;
  border-radius: 999px;
  margin-bottom: 18px;
}
.eo-articles-teaser__title {
  font-size: clamp(28px, 3.8vw, 40px);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0 0 14px;
  color: var(--eo-text);
}
.eo-articles-teaser__lead {
  font-size: clamp(15px, 1.4vw, 17px);
  line-height: 1.6;
  color: var(--eo-text-muted);
  margin: 0 0 24px;
}
.eo-articles-teaser__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.eo-articles-teaser__item {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 14px;
  padding: 16px 20px;
  border-radius: var(--eo-radius-md);
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid var(--eo-border);
  transition: background 0.2s, border-color 0.2s, transform 0.2s;
  color: inherit;
}
.eo-articles-teaser__item:hover {
  background: rgba(255, 255, 255, 0.95);
  border-color: rgba(0, 66, 37, 0.35);
  transform: translateY(-2px);
}
.eo-articles-teaser__cat {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--eo-accent-deep);
  background: var(--eo-accent-soft);
  padding: 4px 10px;
  border-radius: 999px;
  white-space: nowrap;
}
.eo-articles-teaser__headline {
  font-size: 15px;
  font-weight: 600;
  line-height: 1.4;
  color: var(--eo-text);
  transition: color 0.2s;
  min-width: 0;
}
.eo-articles-teaser__item:hover .eo-articles-teaser__headline { color: var(--eo-accent-deep); }
.eo-articles-teaser__date { font-size: 13px; color: var(--eo-text-dim); white-space: nowrap; }
@media (max-width: 640px) {
  .eo-articles-teaser__item { grid-template-columns: 1fr; gap: 8px; }
  .eo-articles-teaser__cat { justify-self: start; }
  .eo-articles-teaser__date { order: 3; }
}
.eo-articles-teaser__cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 28px;
  padding: 14px 28px;
  background: var(--eo-accent);
  color: var(--eo-white);
  border-radius: 999px;
  font-weight: 600;
  font-size: 15px;
  box-shadow: var(--eo-shadow-accent);
  transition: background 0.2s, transform 0.2s;
  align-self: start;
}
.eo-articles-teaser__cta:hover { background: var(--eo-accent-hover); transform: translateY(-2px); }
.eo-articles-teaser__cta svg { transition: transform 0.2s var(--eo-ease); }
.eo-articles-teaser__cta:hover svg { transform: translateX(4px); }
</style>
