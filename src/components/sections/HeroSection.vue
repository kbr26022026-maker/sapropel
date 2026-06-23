<template>
  <section class="eo-section eo-hero">
    <div class="eo-hero__bg" aria-hidden="true">
      <img src="https://static.tildacdn.com/tild6132-6638-4332-b234-616264313264/IMG_5356.png" alt="">
      <div class="eo-hero__overlay"></div>
    </div>

    <div class="eo-wrap eo-hero__inner">
      <div class="eo-hero__content eo-reveal">
        <div class="eo-hero__badge">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19.2 2.96c1.4 9.93-6.5 17.64-8.2 17.04Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></svg>
          <span>100% Натуральный продукт</span>
        </div>

        <h1 class="eo-hero__title">
          Природная сила для <br>
          <span class="eo-hero__grad">Вашего урожая</span>
        </h1>

        <p class="eo-hero__lead">
          Сапропель — уникальное органическое удобрение из донных отложений пресноводного озера Минзелинское Новосибирской области, возрастом более 6000 лет.
          Улучшает структуру почвы, даёт прирост урожая от <strong>40% до 120%</strong> и обеспечивает до <strong>60%</strong> прироста массы в животноводстве.
        </p>

        <div class="eo-hero__actions">
          <a href="#contact" class="eo-btn eo-btn--primary" @click.prevent="scrollTo('contact')">
            Купить сапропель
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <a href="#about" class="eo-btn eo-btn--ghost" @click.prevent="scrollTo('about')">Узнать подробнее</a>
        </div>
      </div>

      <div class="eo-hero__stats">
        <div class="eo-hero__stat eo-reveal" style="--eo-delay: 100ms">
          <div class="eo-hero__icon">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9.1 3.3 0 4.3-.5 1.1-.6 1.9-1.8 2.5-3.5-2.3-.4-3.7-.2-4.8.5-.3.2-.6.5-.9.8Z"/></svg>
          </div>
          <h3>Рост урожайности</h3>
          <p>До 120% прироста для зерновых и корнеплодов</p>
        </div>
        <div class="eo-hero__stat eo-reveal" style="--eo-delay: 200ms">
          <div class="eo-hero__icon">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
          </div>
          <h3>Экологичность</h3>
          <p>Без химических добавок и вредных примесей</p>
        </div>
        <div class="eo-hero__stat eo-reveal" style="--eo-delay: 300ms">
          <div class="eo-hero__icon">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19.2 2.96c1.4 9.93-6.5 17.64-8.2 17.04Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></svg>
          </div>
          <h3>Длительное действие</h3>
          <p>Питает почву и растения от 3 до 5 лет</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style scoped>
.eo-hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 120px;
  padding-bottom: 80px;
}
.eo-hero__bg {
  position: absolute;
  inset: 80px 24px 14px;
  z-index: 0;
  border-radius: 28px;
  overflow: hidden;
}
.eo-hero__bg img {
  width: 100%; height: 100%;
  object-fit: cover;
}
.eo-hero__overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to bottom, rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0.42) 50%, rgba(246, 248, 251, 0.85)),
    radial-gradient(ellipse at 50% 40%, rgba(255, 255, 255, 0.25), transparent 60%);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
}
.eo-hero__inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.eo-hero__content {
  max-width: 880px;
  width: 100%;
  position: relative;
  padding: clamp(32px, 5vw, 56px) clamp(24px, 4vw, 48px);
  border-radius: var(--eo-radius-xl);
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid var(--eo-border);
  backdrop-filter: blur(18px) saturate(1.1);
  -webkit-backdrop-filter: blur(18px) saturate(1.1);
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.10);
}
.eo-hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.65);
  border: 1px solid var(--eo-border);
  color: var(--eo-accent-deep);
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  backdrop-filter: blur(10px);
  margin-bottom: 32px;
  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.05);
}
.eo-hero__title {
  color: var(--eo-text);
  font-size: clamp(32px, 6vw, 72px);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.02em;
  margin: 0 0 24px;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.6);
}
.eo-hero__grad {
  background: linear-gradient(120deg, #004225 0%, #047857 45%, #059669 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: none;
}
.eo-hero__lead {
  color: #454545;
  font-size: clamp(15px, 1.6vw, 20px);
  line-height: 1.6;
  max-width: 780px;
  margin: 0 auto 40px;
  font-weight: 500;
}
.eo-hero__lead strong { color: var(--eo-accent-deep); font-weight: 700; }
.eo-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}
.eo-hero__stats {
  width: 100%;
  max-width: 1100px;
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}
.eo-hero__stat {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid var(--eo-border);
  border-radius: var(--eo-radius-md);
  padding: 28px;
  text-align: left;
  transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
}
.eo-hero__stat:hover {
  background: rgba(255, 255, 255, 0.85);
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.1);
}
.eo-hero__icon {
  width: 48px; height: 48px;
  border-radius: 14px;
  background: var(--eo-accent-soft);
  color: var(--eo-accent-deep);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}
.eo-hero__stat h3 { color: var(--eo-text); font-size: 18px; font-weight: 600; margin: 0 0 6px; }
.eo-hero__stat p { color: var(--eo-text-muted); font-size: 14px; margin: 0; line-height: 1.55; }

@media (max-width: 960px) {
  .eo-hero__stats { grid-template-columns: repeat(2, 1fr); gap: 16px; margin-top: 48px; }
  .eo-hero__stat:last-child { grid-column: 1 / -1; max-width: 480px; margin-left: auto; margin-right: auto; width: 100%; }
}
@media (max-width: 640px) {
  .eo-hero { padding-top: 90px; padding-bottom: 40px; min-height: auto; }
  .eo-hero__bg { inset: 70px 12px 8px; border-radius: 18px; }
  .eo-hero__content { padding: 24px 16px; border-radius: var(--eo-radius-lg); }
  .eo-hero__badge { font-size: 11px; padding: 6px 12px; margin-bottom: 20px; letter-spacing: 0.06em; }
  .eo-hero__title { font-size: clamp(28px, 8vw, 40px); margin-bottom: 16px; }
  .eo-hero__lead { font-size: 15px; margin-bottom: 24px; }
  .eo-hero__actions { flex-direction: column; gap: 10px; align-items: stretch; }
  .eo-hero__stats { grid-template-columns: 1fr; gap: 12px; margin-top: 24px; }
  .eo-hero__stat:last-child { grid-column: auto; max-width: none; }
  .eo-hero__stat { padding: 20px; }
}
</style>
