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
        <article v-for="(f, i) in features" :key="f.title" class="eo-feature eo-reveal" :style="`--eo-delay: ${i * 80}ms`">
          <div class="eo-feature__icon" v-html="f.icon"></div>
          <h3>{{ f.title }}</h3>
          <p>{{ f.desc }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    title: 'Повышение плодородия',
    desc: 'Насыщает почву полезными веществами (азот, фосфор, кальций, гумус). Делает её рыхлой, улучшает воздухо- и влагопроницаемость.',
    icon: `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9.1 3.3 0 4.3-.5 1.1-.6 1.9-1.8 2.5-3.5-2.3-.4-3.7-.2-4.8.5-.3.2-.6.5-.9.8Z"/></svg>`
  },
  {
    title: 'Улучшение структуры',
    desc: 'Восстанавливает истощённые земли, формируя плодородный слой. Помогает удерживать влагу в засушливые периоды.',
    icon: `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>`
  },
  {
    title: '100% экологичность',
    desc: 'Чистый продукт без химии. В отличие от навоза не содержит семян сорняков и опасных микроорганизмов.',
    icon: `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>`
  },
  {
    title: 'Длительное действие',
    desc: 'Работает до 10 лет. Питательные вещества высвобождаются постепенно, а избыток не губителен для растений.',
    icon: `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`
  },
  {
    title: 'Защита от токсинов',
    desc: 'Уменьшает негативные последствия на почвах, загрязнённых тяжёлыми металлами. Ил связывает вредные вещества.',
    icon: `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.5.5 0 0 1-.96 0L9.24 3.18a.5.5 0 0 0-.96 0l-2.35 8.36A2 2 0 0 1 4 13H2"/></svg>`
  },
  {
    title: 'Целебные свойства',
    desc: 'Содержит природные антибиотики, нейтрализует патогенные бактерии. Широкий спектр лечебных свойств для медицины.',
    icon: `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/></svg>`
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
  position: relative;
  padding: 32px;
  border-radius: var(--eo-radius-lg);
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid var(--eo-border);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  box-shadow: 0 10px 30px rgba(69, 69, 69, 0.06);
  transition: background 0.4s, border-color 0.4s, transform 0.4s var(--eo-ease), box-shadow 0.4s;
  overflow: hidden;
}
.eo-feature::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0, 66, 37, 0) 0%, rgba(69, 69, 69, 0) 100%);
  opacity: 0;
  transition: opacity 0.5s;
  pointer-events: none;
}
.eo-feature:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.85);
  border-color: rgba(0, 66, 37, 0.35);
  box-shadow: 0 20px 50px rgba(69, 69, 69, 0.12);
}
.eo-feature:hover::before {
  opacity: 1;
  background: linear-gradient(135deg, rgba(0, 66, 37, 0.10), rgba(69, 69, 69, 0.08));
}
.eo-feature__icon {
  position: relative;
  width: 80px;
  height: 80px;
  margin-bottom: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--eo-accent-deep);
  transition: color 0.4s, transform 0.4s;
}
.eo-feature__icon::before,
.eo-feature__icon::after {
  content: '';
  position: absolute;
  inset: 0;
  will-change: border-radius, transform;
}
.eo-feature__icon::before {
  background: radial-gradient(circle at 50% 50%, rgba(4, 120, 87, 0.55), rgba(4, 120, 87, 0.25) 60%, transparent 80%);
  filter: blur(14px);
  transform: scale(1.15);
  animation: eoBlobA 10s linear infinite;
}
.eo-feature__icon::after {
  background: linear-gradient(40deg, #ffffff, #EAF4FF);
  border: 1px solid rgba(4, 120, 87, 0.30);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 6px 18px rgba(4, 120, 87, 0.18);
  animation: eoBlobB 12s linear infinite;
}
:deep(.eo-feature__icon svg) {
  position: relative;
  z-index: 1;
}
.eo-feature:hover .eo-feature__icon { color: var(--eo-amber); transform: scale(1.1); }
.eo-feature:hover .eo-feature__icon::after { border-color: rgba(0, 66, 37, 0.55); }
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

@keyframes eoBlobA {
  0%, 100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; transform: rotate(0); }
  33%      { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: rotate(120deg); }
  66%      { border-radius: 50% 50% 60% 40% / 40% 60% 50% 60%; transform: rotate(240deg); }
}
@keyframes eoBlobB {
  0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: rotate(360deg); }
  33%      { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; transform: rotate(240deg); }
  66%      { border-radius: 50% 50% 60% 40% / 40% 60% 50% 60%; transform: rotate(120deg); }
}

@media (max-width: 960px) {
  .eo-features__head { margin-bottom: 40px; padding: 0 8px; }
  .eo-features__lead { font-size: 16px; }
}
@media (max-width: 640px) {
  .eo-features__grid { gap: 14px; }
  .eo-feature { padding: 20px; }
  .eo-feature__icon { width: 64px; height: 64px; margin-bottom: 18px; }
  .eo-feature h3 { font-size: 18px; }
}
</style>
