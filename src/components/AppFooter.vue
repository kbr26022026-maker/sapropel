<template>
  <footer class="eo-footer">
    <div class="eo-wrap eo-footer__inner">
      <router-link to="/" class="eo-footer__brand">
        <img class="eo-footer__logo" src="/logo-leaf.svg" alt="ЭКО ОРГАНИКА" width="34" height="34" />
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
          class="eo-footer__shop eo-footer__shop--ozon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Открыть магазин Эко Органика на Ozon"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          <span>Ozon</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="eo-footer__shop-arrow"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
        </a>
        <a
          href="https://www.wildberries.ru/seller/250132883"
          class="eo-footer__shop eo-footer__shop--wb"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Открыть магазин Эко Органика на Wildberries"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          <span>Wildberries</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="eo-footer__shop-arrow"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
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
.eo-footer__logo {
  display: block;
  height: 34px;
  width: auto;
  object-fit: contain;
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
  gap: 10px;
}
.eo-footer__shops-label {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--eo-text-dim);
}
.eo-footer__shops {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}
.eo-footer__shop {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 7px 14px;
  border: 1px solid transparent;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 0.01em;
  transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s;
}
.eo-footer__shop--ozon {
  border-color: rgba(0, 91, 255, 0.28);
  color: #005BFF;
}
.eo-footer__shop--ozon:hover {
  background: rgba(0, 91, 255, 0.07);
  border-color: rgba(0, 91, 255, 0.5);
  transform: translateY(-1px);
}
.eo-footer__shop--wb {
  border-color: rgba(203, 17, 171, 0.28);
  color: #CB11AB;
}
.eo-footer__shop--wb:hover {
  background: rgba(203, 17, 171, 0.07);
  border-color: rgba(203, 17, 171, 0.5);
  transform: translateY(-1px);
}
.eo-footer__shop-arrow {
  opacity: 0.6;
  transition: opacity 0.2s, transform 0.2s;
}
.eo-footer__shop:hover .eo-footer__shop-arrow {
  opacity: 1;
  transform: translate(1px, -1px);
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
  .eo-footer__shops { align-self: center; }
  .eo-footer__copy { font-size: 14px; }
}
</style>
