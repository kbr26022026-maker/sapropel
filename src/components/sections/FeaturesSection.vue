<template>
  <section class="eo-section eo-features" id="features">
    <div class="eo-wrap">
      <div class="eo-features__head">
        <h2 class="eo-features__title eo-reveal">Основные преимущества</h2>
        <p class="eo-features__lead eo-reveal" style="--eo-delay: 80ms">
          Сапропель — не просто удобрение, а комплексное решение для восстановления экосистемы почвы и повышения её продуктивности.
        </p>
      </div>

      <div class="eo-features__grid">
        <router-link
          v-for="(f, i) in features"
          :key="f.title"
          :to="f.link"
          class="eo-feature eo-reveal"
          :style="`--eo-delay: ${i * 80}ms`"
        >
          <div class="eo-feature__icon" v-html="f.icon"></div>
          <h3>{{ f.title }}</h3>
          <p>{{ f.desc }}</p>
          <span class="eo-feature__more">
            Читать статью
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    title: 'Повышение плодородия',
    desc: 'Насыщает почву полезными веществами (азот, фосфор, кальций, гумус). Делает её рыхлой, улучшает воздухо- и влагопроницаемость.',
    link: '/articles/guminovye-kisloty',
    icon: `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9.1 3.3 0 4.3-.5 1.1-.6 1.9-1.8 2.5-3.5-2.3-.4-3.7-.2-4.8.5-.3.2-.6.5-.9.8Z"/></svg>`
  },
  {
    title: 'Улучшение структуры',
    desc: 'Восстанавливает истощённые земли, формируя плодородный слой. Помогает удерживать влагу в засушливые периоды.',
    link: '/articles/sapropel-sostav-i-svoistva',
    icon: `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>`
  },
  {
    title: '100% экологичность',
    desc: 'Чистый продукт без химии. В отличие от навоза, не содержит семян сорняков и опасных микроорганизмов.',
    link: '/articles/primenenie-v-ogorode',
    icon: `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>`
  },
  {
    title: 'Длительное действие',
    desc: 'Работает от 3 до 5 лет. Питательные вещества высвобождаются постепенно, а избыток не губителен для растений.',
    link: '/articles/keis-urozhainost-kartofelya',
    icon: `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`
  },
  {
    title: 'Защита от токсинов',
    desc: 'Уменьшает негативные последствия на почвах, загрязнённых тяжёлыми металлами. Ил связывает вредные вещества.',
    link: '/articles/guminovye-kisloty',
    icon: `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.5.5 0 0 1-.96 0L9.24 3.18a.5.5 0 0 0-.96 0l-2.35 8.36A2 2 0 0 1 4 13H2"/></svg>`
  },
  {
    title: 'Целебные свойства',
    desc: 'Содержит природные антибиотики, нейтрализует патогенные бактерии. Обладает широким спектром лечебных свойств, используемых в медицине.',
    link: '/articles/sapropel-sostav-i-svoistva',
    icon: `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></svg>`
  }
]
</script>

<style scoped>
.eo-features__head {
  max-width: 720px;
  margin: 0 auto 60px;
  text-align: center;
}
.eo-features__title {
  color: var(--eo-text);
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 20px;
}
.eo-features__lead {
  color: var(--eo-text-muted);
  font-size: 18px;
  line-height: 1.6;
  margin: 0;
}
.eo-features__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 290px), 1fr));
  gap: 24px;
}
.eo-feature {
  display: block;
  text-decoration: none;
  color: inherit;
  position: relative;
  padding: 32px;
  border-radius: var(--eo-radius-lg);
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid var(--eo-border);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
  transition: background 0.4s, border-color 0.4s, transform 0.4s var(--eo-ease), box-shadow 0.4s;
  overflow: hidden;
}
.eo-feature::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(4, 120, 87, 0) 0%, rgba(16, 185, 129, 0) 100%);
  opacity: 0;
  transition: opacity 0.5s;
  pointer-events: none;
}
.eo-feature:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.85);
  border-color: rgba(0, 66, 37, 0.35);
  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.12);
}
.eo-feature:hover::before {
  opacity: 1;
  background: linear-gradient(135deg, rgba(4, 120, 87, 0.08), rgba(16, 185, 129, 0.05));
}
.eo-feature__icon {
  position: relative;
  width: 72px;
  height: 72px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--eo-badge-ico);
  border-radius: 16px;
  background: var(--eo-badge-bg);
  border: 1px solid var(--eo-badge-ring);
  box-shadow: var(--eo-badge-shadow);
  transition: transform 0.3s, box-shadow 0.3s;
}
:deep(.eo-feature__icon svg) {
  position: relative;
  z-index: 1;
  stroke-width: 1.75;
}
.eo-feature:hover .eo-feature__icon {
  transform: scale(1.08);
  box-shadow: var(--eo-badge-shadow-hover);
}
.eo-feature h3 {
  color: var(--eo-accent-deep);
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 12px;
  position: relative;
  z-index: 1;
  transition: color 0.3s;
}
.eo-feature p {
  color: var(--eo-text-muted);
  line-height: 1.65;
  margin: 0;
  position: relative;
  z-index: 1;
  transition: color 0.3s;
}
.eo-feature:hover p { color: var(--eo-text); }
.eo-feature__more {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 16px;
  font-size: 14px;
  font-weight: 600;
  color: var(--eo-accent-deep);
  opacity: 0;
  transform: translateY(4px);
  transition: opacity 0.3s, transform 0.3s, gap 0.3s;
}
.eo-feature__more svg { transition: transform 0.3s; }
.eo-feature:hover .eo-feature__more { opacity: 1; transform: translateY(0); }
.eo-feature:hover .eo-feature__more svg { transform: translateX(3px); }
.eo-feature:focus-visible {
  outline: 2px solid var(--eo-accent);
  outline-offset: 3px;
}
.eo-feature:focus-visible .eo-feature__more { opacity: 1; transform: translateY(0); }
@media (hover: none) {
  .eo-feature__more { opacity: 1; transform: none; }
}

@media (max-width: 960px) {
  .eo-features__head { margin-bottom: 40px; padding: 0 8px; }
  .eo-features__lead { font-size: 16px; }
}
@media (max-width: 640px) {
  .eo-features__grid { gap: 14px; }
  .eo-feature { padding: 20px; }
  .eo-feature__icon { width: 60px; height: 60px; margin-bottom: 16px; border-radius: 16px; }
  .eo-feature h3 { font-size: 18px; }
}
</style>
