<template>
  <main>
    <div v-if="article">
      <article class="eo-section eo-article" itemscope itemtype="https://schema.org/BlogPosting">
        <div class="eo-wrap">
          <nav class="eo-article__crumbs eo-reveal" aria-label="Хлебные крошки">
            <router-link to="/" class="eo-article__crumb-link">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              Главная
            </router-link>
            <span class="eo-article__crumb-sep" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </span>
            <router-link to="/articles" class="eo-article__crumb-link">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
              Блог
            </router-link>
            <span class="eo-article__crumb-sep" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </span>
            <span class="eo-article__crumb-current" aria-current="page">{{ article.title }}</span>
          </nav>

          <header class="eo-article__head eo-reveal">
            <span class="eo-article__cat">{{ article.catLabel }}</span>
            <h1 class="eo-article__title" itemprop="headline">{{ article.title }}</h1>
            <div class="eo-article__meta">
              <div class="eo-article__author" itemprop="author">
                <span class="eo-article__avatar" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </span>
                <span itemprop="name">{{ article.author }}</span>
              </div>
              <span class="eo-article__dot" aria-hidden="true"></span>
              <time :datetime="article.date" itemprop="datePublished">{{ article.dateLabel }}</time>
              <span class="eo-article__dot" aria-hidden="true"></span>
              <span>{{ article.readTime }} чтения</span>
            </div>
          </header>

          <figure class="eo-article__cover eo-reveal">
            <img :src="article.image" :alt="article.title" itemprop="image">
          </figure>

          <div class="eo-article__body eo-reveal" itemprop="articleBody">
            <p class="eo-article__lead">{{ article.lead }}</p>
            <div v-html="article.body"></div>
          </div>

          <aside class="eo-article__cta eo-reveal" aria-label="Призыв к действию">
            <h3>Готовы попробовать сапропель на своём участке?</h3>
            <p>Напишите нам — подскажем норму внесения и рассчитаем стоимость доставки.</p>
            <router-link to="/#contact" class="eo-article__cta-btn">Оставить заявку</router-link>
          </aside>

          <section class="eo-article__related eo-reveal" aria-label="Читайте также">
            <h3 class="eo-article__related-title">Читайте также</h3>
            <ul class="eo-article__related-list">
              <li v-for="rel in article.related" :key="rel.slug">
                <router-link :to="`/articles/${rel.slug}`" class="eo-article__related-item">
                  <span class="eo-article__related-cat">{{ rel.cat }}</span>
                  <span class="eo-article__related-headline">{{ rel.title }}</span>
                </router-link>
              </li>
            </ul>
          </section>
        </div>
      </article>
    </div>

    <div v-else-if="!loading" class="eo-section">
      <div class="eo-wrap eo-not-found">
        <h1>Статья не найдена</h1>
        <p>Проверьте адрес или вернитесь к <router-link to="/articles">списку статей</router-link>.</p>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick, watch, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { fetchArticleBySlug } from '@/sanity/articles.js'
import { useReveal } from '@/composables/useReveal.js'
import { setMeta, setJsonLd, removeJsonLd, BASE_URL } from '@/composables/useMeta.js'

const route = useRoute()
const { refresh } = useReveal()

const article = ref(null)
const loading = ref(true)

async function loadArticle() {
  loading.value = true
  try {
    article.value = await fetchArticleBySlug(route.params.slug)
  } catch (e) {
    console.error('Не удалось загрузить статью', e)
    article.value = null
  } finally {
    loading.value = false
  }
  await nextTick()
  refresh()
}

watchEffect(() => {
  if (loading.value) return
  const a = article.value
  if (a) {
    setMeta({
      title: a.title,
      description: a.excerpt,
      image: a.image,
      path: `/articles/${a.slug}`,
      type: 'article'
    })
    setJsonLd('eo-article-ld', {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: a.title,
      description: a.excerpt,
      image: a.image,
      datePublished: a.date,
      dateModified: a.date,
      author: { '@type': 'Organization', name: 'Эко Органика' },
      publisher: {
        '@type': 'Organization',
        name: 'Эко Органика',
        logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo.png` }
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/articles/${a.slug}` }
    })
  } else {
    setMeta({ title: 'Статья не найдена', path: route.fullPath })
    removeJsonLd('eo-article-ld')
  }
})

onMounted(loadArticle)

onUnmounted(() => removeJsonLd('eo-article-ld'))

watch(() => route.params.slug, async () => {
  window.scrollTo({ top: 0 })
  await loadArticle()
})
</script>

<style scoped>
.eo-article { padding-top: clamp(24px, 6vw, 72px); }
.eo-article__crumbs {
  font-size: 13px;
  margin-bottom: 28px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
}
.eo-article__crumb-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid var(--eo-border);
  color: var(--eo-text-muted);
  font-weight: 600;
  font-size: 13px;
  text-decoration: none;
  transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.15s;
  backdrop-filter: blur(8px);
  min-height: 32px;
}
.eo-article__crumb-link:hover {
  background: var(--eo-accent-soft);
  color: var(--eo-accent-deep);
  border-color: rgba(16, 185, 129, 0.35);
  transform: translateY(-1px);
}
.eo-article__crumb-sep {
  display: inline-flex;
  align-items: center;
  color: var(--eo-text-dim);
  padding: 0 2px;
}
.eo-article__crumb-current {
  padding: 6px 12px;
  color: var(--eo-text-dim);
  font-size: 13px;
  max-width: 260px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.eo-article__head { max-width: 820px; margin: 0 auto 36px; }
.eo-article__cat {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--eo-accent-deep);
  background: var(--eo-accent-soft);
  padding: 6px 12px;
  border-radius: 999px;
  margin-bottom: 20px;
}
.eo-article__title {
  font-size: clamp(30px, 4.5vw, 48px);
  font-weight: 800;
  line-height: 1.12;
  letter-spacing: -0.02em;
  color: var(--eo-text);
  margin: 0 0 24px;
}
.eo-article__meta { display: flex; align-items: center; flex-wrap: wrap; gap: 12px; font-size: 14px; color: var(--eo-text-muted); }
.eo-article__author { display: inline-flex; align-items: center; gap: 10px; font-weight: 600; color: var(--eo-text); }
.eo-article__avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px; height: 36px;
  border-radius: 50%;
  background: var(--eo-accent-soft);
  color: var(--eo-accent-deep);
}
.eo-article__dot { width: 3px; height: 3px; border-radius: 50%; background: var(--eo-text-dim); display: inline-block; }
.eo-article__cover { margin: 0 auto clamp(32px, 5vw, 56px); max-width: 960px; border-radius: var(--eo-radius-lg); overflow: hidden; box-shadow: var(--eo-shadow); }
.eo-article__cover img { width: 100%; height: auto; aspect-ratio: 16 / 9; object-fit: cover; }
.eo-article__body { max-width: 720px; margin: 0 auto; font-size: 18px; line-height: 1.72; color: var(--eo-text); }
.eo-article__lead { font-size: 21px; line-height: 1.6; color: var(--eo-text-muted); font-weight: 500; margin: 0 0 32px; }
:deep(.eo-article__body h2) { font-size: clamp(24px, 3vw, 30px); font-weight: 700; line-height: 1.25; letter-spacing: -0.01em; color: var(--eo-text); margin: 48px 0 16px; }
:deep(.eo-article__body h3) { font-size: clamp(20px, 2.4vw, 24px); font-weight: 700; line-height: 1.3; color: var(--eo-text); margin: 36px 0 14px; }
:deep(.eo-article__body p) { margin: 0 0 20px; }
:deep(.eo-article__body ul), :deep(.eo-article__body ol) { margin: 0 0 24px; padding-left: 24px; }
:deep(.eo-article__body li) { margin: 0 0 10px; }
:deep(.eo-article__body a) { color: var(--eo-accent-deep); text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 3px; transition: color 0.2s; }
:deep(.eo-article__body a:hover) { color: var(--eo-accent-hover); }
:deep(.eo-article__body strong) { font-weight: 700; }
:deep(.eo-article__body em) { font-style: italic; }
:deep(.eo-article__body blockquote) {
  margin: 20px 0; padding: 16px 28px;
  border-left: 4px solid var(--eo-accent);
  background: var(--eo-accent-soft);
  border-radius: var(--eo-radius-sm);
  font-size: 19px; line-height: 1.6;
  color: var(--eo-text); font-style: italic;
}
.eo-article__cta {
  max-width: 720px;
  margin: clamp(40px, 6vw, 64px) auto;
  padding: clamp(28px, 4vw, 40px);
  background: linear-gradient(135deg, var(--eo-accent-soft), rgba(255, 255, 255, 0.8));
  border: 1px solid rgba(16, 185, 129, 0.22);
  border-radius: var(--eo-radius-lg);
  text-align: center;
}
.eo-article__cta h3 { font-size: clamp(20px, 2.6vw, 26px); font-weight: 700; margin: 0 0 10px; color: var(--eo-text); }
.eo-article__cta p { font-size: 16px; color: var(--eo-text-muted); margin: 0 0 20px; }
.eo-article__cta-btn {
  display: inline-flex;
  align-items: center;
  padding: 14px 28px;
  background: var(--eo-accent);
  color: var(--eo-white);
  border-radius: 999px;
  font-weight: 600;
  font-size: 15px;
  box-shadow: var(--eo-shadow-accent);
  transition: background 0.2s, transform 0.2s;
}
.eo-article__cta-btn:hover { background: var(--eo-accent-hover); transform: translateY(-2px); }
.eo-article__related { max-width: 960px; margin: clamp(40px, 6vw, 72px) auto 0; padding-top: clamp(32px, 5vw, 48px); border-top: 1px solid var(--eo-border); }
.eo-article__related-title { font-size: clamp(22px, 2.8vw, 28px); font-weight: 700; margin: 0 0 24px; color: var(--eo-text); }
.eo-article__related-list { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: 1fr; gap: 16px; }
@media (min-width: 641px) and (max-width: 960px) { .eo-article__related-list { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 961px) { .eo-article__related-list { grid-template-columns: repeat(3, 1fr); } }
.eo-article__related-item {
  display: block; padding: 20px;
  background: rgba(255, 255, 255, 0.65);
  border: 1px solid var(--eo-border);
  border-radius: var(--eo-radius-md);
  backdrop-filter: blur(10px);
  transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
  height: 100%; min-height: 44px;
  color: inherit;
}
.eo-article__related-item:hover { transform: translateY(-3px); border-color: rgba(0, 66, 37, 0.35); box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08); }
.eo-article__related-cat { display: block; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--eo-accent-deep); margin-bottom: 10px; }
.eo-article__related-headline { display: block; font-size: 16px; font-weight: 600; line-height: 1.4; color: var(--eo-text); }
.eo-not-found { padding: 80px 0; text-align: center; }
.eo-not-found h1 { font-size: clamp(28px, 4vw, 48px); font-weight: 700; margin: 0 0 16px; color: var(--eo-text); }
.eo-not-found p { color: var(--eo-text-muted); font-size: 18px; }
.eo-not-found a { color: var(--eo-accent-deep); text-decoration: underline; }

@media (max-width: 640px) {
  .eo-article { padding-top: 24px; }
  .eo-article__crumbs { margin-bottom: 18px; gap: 3px; }
  .eo-article__crumb-link { padding: 5px 10px; font-size: 12px; }
  .eo-article__crumb-current { max-width: 140px; font-size: 12px; padding: 5px 8px; }
  .eo-article__head { margin-bottom: 24px; }
  .eo-article__cat { font-size: 11px; padding: 5px 10px; margin-bottom: 14px; }
  .eo-article__title { font-size: clamp(24px, 7vw, 32px); margin-bottom: 16px; }
  .eo-article__meta { font-size: 13px; gap: 8px; }
  .eo-article__cover { margin-bottom: 24px; border-radius: var(--eo-radius-md); }
  .eo-article__body { font-size: 16px; line-height: 1.7; }
  .eo-article__lead { font-size: 17px; margin-bottom: 24px; }
  .eo-article__cta { padding: 24px 18px; border-radius: var(--eo-radius-md); }
  .eo-article__cta-btn { width: 100%; justify-content: center; min-height: 48px; font-size: 15px; }
  .eo-article__related { padding-top: 24px; }
  .eo-article__related-item { padding: 16px; }
}
</style>
