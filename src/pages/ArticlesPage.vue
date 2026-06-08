<template>
  <main>
    <section class="eo-section eo-articles" id="articles">
      <div class="eo-wrap">
        <header class="eo-articles__head eo-reveal">
          <span class="eo-articles__eyebrow">Блог</span>
          <h1 class="eo-articles__title">Статьи и новости</h1>
          <p class="eo-articles__lead">
            Материалы о сапропеле, агрономии и применении органических удобрений.
            Обновляется регулярно — следите за публикациями.
          </p>
        </header>

        <nav class="eo-articles__filters eo-reveal" aria-label="Категории статей">
          <button
            v-for="f in filters"
            :key="f.id"
            class="eo-articles__chip"
            :class="{ 'eo-articles__chip--active': activeFilter === f.id }"
            @click="setFilter(f.id)"
          >{{ f.label }}</button>
        </nav>

        <ul class="eo-articles__grid" v-if="filteredArticles.length">
          <li v-for="(art, i) in filteredArticles" :key="art.slug" class="eo-reveal" :style="`--eo-delay: ${(i % 3) * 80}ms`">
            <article class="eo-art-card" :data-cat="art.cat">
              <router-link :to="`/articles/${art.slug}`" class="eo-art-card__link">
                <div class="eo-art-card__cover">
                  <img :src="art.image" :alt="art.title" loading="lazy">
                  <span class="eo-art-card__cat">{{ art.catLabel }}</span>
                </div>
                <div class="eo-art-card__body">
                  <div class="eo-art-card__meta">
                    <time :datetime="art.date">{{ art.dateLabel }}</time>
                    <span class="eo-art-card__dot" aria-hidden="true"></span>
                    <span>{{ art.readTime }}</span>
                  </div>
                  <h2 class="eo-art-card__title">{{ art.title }}</h2>
                  <p class="eo-art-card__excerpt">{{ art.excerpt }}</p>
                  <span class="eo-art-card__more">
                    Читать далее
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </span>
                </div>
              </router-link>
            </article>
          </li>
        </ul>

        <div class="eo-articles__empty" v-else>
          В этой категории пока нет материалов. Загляните позже или выберите «Все».
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { articles } from '@/data/articles.js'
import { useReveal } from '@/composables/useReveal.js'

const route = useRoute()
const router = useRouter()
const { refresh } = useReveal()

const filters = [
  { id: 'all', label: 'Все' },
  { id: 'agro', label: 'Агрономия' },
  { id: 'science', label: 'Наука' },
  { id: 'cases', label: 'Практика' },
  { id: 'news', label: 'Новости' }
]

const activeFilter = ref('all')

onMounted(async () => {
  const cat = route.query.cat
  if (cat && filters.find((f) => f.id === cat)) {
    activeFilter.value = cat
  }
  await nextTick()
  refresh()
})

function setFilter(id) {
  activeFilter.value = id
  router.replace({ query: id === 'all' ? {} : { cat: id } })
  nextTick(() => refresh())
}

const filteredArticles = computed(() => {
  if (activeFilter.value === 'all') return articles
  return articles.filter((a) => a.cat === activeFilter.value)
})
</script>

<style scoped>
.eo-articles {
  padding-top: clamp(96px, 12vw, 128px);
  padding-bottom: clamp(32px, 4vw, 56px);
}
.eo-articles__head {
  max-width: 760px;
  margin-bottom: clamp(32px, 5vw, 48px);
}
.eo-articles__eyebrow {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--eo-accent-deep);
  background: var(--eo-accent-soft);
  padding: 6px 12px;
  border-radius: 999px;
  margin-bottom: 18px;
}
.eo-articles__title {
  font-size: clamp(32px, 5vw, 52px);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.02em;
  margin: 0 0 18px;
  color: var(--eo-text);
}
.eo-articles__lead {
  font-size: clamp(16px, 1.6vw, 19px);
  line-height: 1.6;
  color: var(--eo-text-muted);
  margin: 0;
}
.eo-articles__filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: clamp(28px, 4vw, 40px);
}
.eo-articles__chip {
  display: inline-flex;
  align-items: center;
  padding: 10px 18px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid var(--eo-border);
  font-size: 14px;
  font-weight: 600;
  color: var(--eo-text-muted);
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
  backdrop-filter: blur(10px);
  font-family: var(--eo-font);
}
.eo-articles__chip:hover { background: rgba(255, 255, 255, 0.9); color: var(--eo-text); border-color: var(--eo-border-strong); }
.eo-articles__chip--active,
.eo-articles__chip--active:hover { background: var(--eo-accent); color: var(--eo-white); border-color: var(--eo-accent); }
.eo-articles__grid {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
}
@media (min-width: 680px) { .eo-articles__grid { grid-template-columns: repeat(2, 1fr); gap: 28px; } }
@media (min-width: 1024px) { .eo-articles__grid { grid-template-columns: repeat(3, 1fr); gap: 32px; } }
.eo-art-card {
  height: 100%;
  background: rgba(255, 255, 255, 0.65);
  border: 1px solid var(--eo-border);
  border-radius: var(--eo-radius-lg);
  overflow: hidden;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.05);
  transition: transform 0.25s var(--eo-ease), box-shadow 0.25s var(--eo-ease), border-color 0.25s;
}
.eo-art-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(15, 23, 42, 0.10); border-color: rgba(0, 66, 37, 0.35); }
.eo-art-card__link { display: flex; flex-direction: column; height: 100%; color: inherit; }
.eo-art-card__cover { position: relative; aspect-ratio: 16 / 9; overflow: hidden; background: var(--eo-accent-soft); }
.eo-art-card__cover img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s var(--eo-ease); }
.eo-art-card:hover .eo-art-card__cover img { transform: scale(1.04); }
.eo-art-card__cat {
  position: absolute;
  top: 14px; left: 14px;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.92);
  color: var(--eo-accent-deep);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  backdrop-filter: blur(6px);
}
.eo-art-card__body { padding: 22px 24px 26px; display: flex; flex-direction: column; gap: 12px; flex: 1; }
.eo-art-card__meta { display: flex; align-items: center; gap: 10px; font-size: 13px; color: var(--eo-text-dim); }
.eo-art-card__dot { width: 3px; height: 3px; border-radius: 50%; background: var(--eo-text-dim); }
.eo-art-card__title { font-size: 19px; font-weight: 700; line-height: 1.35; color: var(--eo-text); margin: 0; transition: color 0.2s; }
.eo-art-card:hover .eo-art-card__title { color: var(--eo-accent-deep); }
.eo-art-card__excerpt {
  font-size: 15px; line-height: 1.55; color: var(--eo-text-muted); margin: 0;
  display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
}
.eo-art-card__more { display: inline-flex; align-items: center; gap: 8px; margin-top: auto; padding-top: 8px; color: var(--eo-accent-deep); font-size: 14px; font-weight: 600; }
.eo-art-card__more svg { transition: transform 0.2s var(--eo-ease); }
.eo-art-card:hover .eo-art-card__more svg { transform: translateX(4px); }
.eo-articles__empty {
  text-align: center;
  padding: 48px 24px;
  color: var(--eo-text-muted);
  font-size: 16px;
  background: rgba(255, 255, 255, 0.5);
  border: 1px dashed var(--eo-border);
  border-radius: var(--eo-radius-lg);
  margin-top: 24px;
}
@media (max-width: 640px) {
  .eo-articles__filters { gap: 8px; }
  .eo-articles__chip { padding: 9px 14px; font-size: 13px; }
  .eo-articles__grid { gap: 16px; }
  .eo-art-card__body { padding: 18px 18px 20px; }
  .eo-art-card__title { font-size: 17px; }
}
</style>
