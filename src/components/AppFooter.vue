<template>
  <footer class="eo-footer">
    <div class="eo-wrap eo-footer__inner">
      <router-link to="/" class="eo-footer__brand">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19.2 2.96c1.4 9.93-6.5 17.64-8.2 17.04Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></svg>
        <span>ЭКО ОРГАНИКА</span>
      </router-link>
      <div class="eo-footer__copy">
        <p>ВАШ НАДЁЖНЫЙ ПОСТАВЩИК САПРОПЕЛЯ</p>
        <p>© {{ year }} ЭКО ОРГАНИКА. Все права защищены.</p>
        <router-link to="/privacy-policy" class="eo-footer__link">Политика конфиденциальности</router-link>
      </div>
      <div class="eo-footer__actions">
        <a
          href="https://www.ozon.ru/seller/eko-organika54/?__rr=2&abt_att=1&from=share&origin_referer=ecoorganica54.ru"
          class="eo-footer__ozon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Открыть магазин Эко Органика на Ozon"
        >
          <img src="/Badge_ozon.png" alt="Покупайте на OZON" class="eo-footer__ozon-badge" />
          <span class="eo-footer__ozon-sub">Официальный магазин Эко Органика</span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.eo-footer {
  position: relative;
  z-index: 2;
  padding: 48px 0;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-top: 1px solid var(--eo-border);
  color: var(--eo-text-muted);
  font-family: var(--eo-font);
}
.eo-footer__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  text-align: center;
}
@media (min-width: 641px) {
  .eo-footer__inner {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
  }
}
.eo-footer__brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--eo-accent-hover);
  text-decoration: none;
  min-height: 44px;
}
.eo-footer__brand span {
  color: var(--eo-text);
  font-weight: 700;
  font-size: 18px;
  letter-spacing: -0.01em;
}
.eo-footer__copy { font-size: 14px; line-height: 1.5; }
.eo-footer__copy p { margin: 0; }
.eo-footer__copy p + p { margin-top: 4px; }
.eo-footer__copy .eo-footer__link {
  display: inline-flex;
  align-items: center;
  margin-top: 8px;
  min-height: 44px;
}
.eo-footer__actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}
.eo-footer__ozon {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
  text-decoration: none;
}
.eo-footer__ozon-badge {
  display: block;
  width: 188px;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.16);
  transition: transform 0.25s var(--eo-ease), box-shadow 0.25s var(--eo-ease);
}
.eo-footer__ozon:hover .eo-footer__ozon-badge {
  transform: translateY(-3px) scale(1.025);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.22);
}
.eo-footer__ozon-sub {
  font-size: 12px;
  color: var(--eo-text-muted);
  font-family: var(--eo-font);
  letter-spacing: 0.01em;
}
.eo-footer__link {
  font-size: 14px;
  color: var(--eo-text-muted);
  text-decoration: none;
  transition: color 0.2s;
}
.eo-footer__link:hover { color: var(--eo-accent-hover); }
@media (min-width: 641px) {
  .eo-footer__actions { align-items: flex-end; }
}
@media (max-width: 640px) {
  .eo-footer { padding: 32px 0 28px; }
  .eo-footer__inner { padding-inline: 16px; gap: 20px; }
  .eo-footer__ozon { align-items: center; }
  .eo-footer__ozon-badge { width: 160px; }
  .eo-footer__copy { font-size: 14px; }
}
</style>
