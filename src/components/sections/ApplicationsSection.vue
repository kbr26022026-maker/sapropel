<template>
  <section class="eo-section eo-apps" id="applications">
    <div class="eo-wrap">
      <div class="eo-apps__head">
        <h2 class="eo-reveal">Где и для чего применяется сапропель</h2>
        <p class="eo-reveal" style="--eo-delay: 80ms">Универсальность сапропеля делает его незаменимым ресурсом во множестве отраслей — от агрономии до медицины.</p>
      </div>

      <div class="eo-apps__grid">
        <article v-for="(app, i) in apps" :key="app.title" class="eo-app eo-reveal" :style="`--eo-delay: ${i * 80}ms`">
          <div class="eo-app__icon">
            <span class="eo-app__icon-core" v-html="app.icon"></span>
          </div>
          <h3>{{ app.title }}</h3>
          <p>{{ app.desc }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const apps = [
  {
    title: 'Сельское хозяйство',
    desc: 'Удобрение для полей, садов, теплиц и огородов. Подходит для органического земледелия.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20"/><path d="M16 18h-5"/><path d="M18 5a1 1 0 0 0-1 1v5.573"/><path d="M3 4h8.129a1 1 0 0 1 .99.863L13 11.246"/><path d="M4 11V4"/><path d="M7 15h.01"/><path d="M8 10.1V4"/><circle cx="18" cy="18" r="2"/><circle cx="7" cy="15" r="5"/></svg>`
  },
  {
    title: 'Животноводство',
    desc: 'Добавляется в корма, улучшая здоровье и продуктивность, обеспечивает прирост веса.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2h8"/><path d="M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.788a4 4 0 0 0-.672-2.22l-.656-.984A4 4 0 0 1 15 4.788V2"/><path d="M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0"/></svg>`
  },
  {
    title: 'Озеленение городов',
    desc: 'Улучшение качества почвы в парках, скверах и придорожных зонах.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"/><path d="M7 16v6"/><path d="M13 19v3"/><path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"/></svg>`
  },
  {
    title: 'Строительные материалы',
    desc: 'Добавляется в состав при изготовлении профессиональных строительных материалов.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"/><path d="m18 15 4-4"/><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"/></svg>`
  },
  {
    title: 'Косметическая продукция',
    desc: 'Используется при изготовлении косметических кремов, масок для лица и БАДов.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="8" width="16" height="13" rx="3"/><path d="M6 8V6.5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2V8"/><path d="M9 4.5h6"/><path d="M9 14h6"/></svg>`
  },
  {
    title: 'Медицина',
    desc: 'Комплексная терапия ЖКТ, опорно-двигательного аппарата, нервной системы.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/></svg>`
  },
  {
    title: 'Нефтедобыча',
    desc: 'Переработка в углеводородные продукты, добавка к тяжёлым нефтям для улучшения свойств.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16h.01"/><path d="M16 16h.01"/><path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/><path d="M8 16h.01"/></svg>`
  },
  {
    title: 'Хранение овощей',
    desc: 'Природный консервант, идеальное средство для хранения овощей на длительный срок.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>`
  }
]
</script>

<style scoped>
.eo-apps__head {
  text-align: center;
  max-width: 720px;
  margin: 0 auto 60px;
  padding: 0 16px;
}
.eo-apps__head h2 {
  color: var(--eo-text);
  font-size: clamp(24px, 4vw, 48px);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 20px;
}
.eo-apps__head p { color: var(--eo-text-muted); font-size: clamp(15px, 2vw, 18px); line-height: 1.6; margin: 0; }
.eo-apps__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
  gap: 20px;
}
.eo-app {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 32px;
  border-radius: var(--eo-radius-lg);
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid var(--eo-border);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
  overflow: hidden;
  transition: background 0.4s, border-color 0.4s, transform 0.4s var(--eo-ease), box-shadow 0.4s;
}
.eo-app:hover {
  background: rgba(255, 255, 255, 0.85);
  border-color: rgba(0, 66, 37, 0.4);
  transform: translateY(-5px);
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.12);
}
.eo-app__icon {
  position: relative;
  width: 72px; height: 72px;
  margin-bottom: 24px;
}
.eo-app__icon-core {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--eo-badge-bg);
  border: 1px solid var(--eo-badge-ring);
  border-radius: 16px;
  box-shadow: var(--eo-badge-shadow);
  transition: box-shadow 0.3s, transform 0.3s;
  will-change: transform;
  overflow: hidden;
}
.eo-app:hover .eo-app__icon-core {
  box-shadow: var(--eo-badge-shadow-hover);
  transform: scale(1.06);
}
:deep(.eo-app__icon-core > svg) {
  width: 28px; height: 28px;
  color: var(--eo-badge-ico);
  stroke-width: 2;
  flex: 0 0 auto;
  transition: transform 0.3s;
}
.eo-app:hover :deep(.eo-app__icon-core > svg) { transform: scale(1.08); }
.eo-app h3 {
  position: relative;
  z-index: 1;
  color: var(--eo-accent-deep);
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 10px;
  min-height: 2.5em;
  display: flex;
  align-items: flex-start;
  transition: color 0.3s;
}
.eo-app p {
  position: relative;
  z-index: 1;
  color: var(--eo-text-muted);
  font-size: 14px;
  line-height: 1.65;
  margin: 0;
  transition: color 0.3s;
}
.eo-app:hover p { color: var(--eo-text); }

@media (max-width: 640px) {
  .eo-apps__head { margin-bottom: 32px; padding: 0; }
  .eo-apps__grid { grid-template-columns: 1fr; gap: 14px; }
  .eo-app { padding: 20px; }
  .eo-app__icon { width: 60px; height: 60px; margin-bottom: 16px; }
  .eo-app h3 { font-size: 17px; }
}
@media (min-width: 641px) and (max-width: 960px) {
  .eo-apps__grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
  .eo-app { padding: 24px; }
}
</style>
