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
        <span class="eo-footer__shops-label">Мы на маркетплейсах</span>
        <div class="eo-footer__shops">
          <a
            href="https://www.ozon.ru/seller/eko-organika54/?__rr=2&abt_att=1&from=share&origin_referer=ecoorganica54.ru"
            class="eo-footer__shop"
            style="--brand:#005BFF;--brand-glow:rgba(0,91,255,.4)"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Открыть магазин Эко Органика на Ozon"
          >
            <span class="eo-footer__shop-tile">
              <img src="/ozon-icon.png" alt="" width="44" height="44" loading="lazy" />
            </span>
            <span class="eo-footer__shop-text">
              <span class="eo-footer__shop-name">Ozon</span>
              <span class="eo-footer__shop-sub">Открыть магазин</span>
            </span>
            <svg class="eo-footer__shop-arrow" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
          </a>
          <a
            href="https://www.wildberries.ru/seller/250132883"
            class="eo-footer__shop"
            style="--brand:#CB11AB;--brand-glow:rgba(203,17,171,.4)"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Открыть магазин Эко Органика на Wildberries"
          >
            <span class="eo-footer__shop-tile">
              <img src="/wildberries-icon.png" alt="" width="44" height="44" loading="lazy" />
            </span>
            <span class="eo-footer__shop-text">
              <span class="eo-footer__shop-name">Wildberries</span>
              <span class="eo-footer__shop-sub">Открыть магазин</span>
            </span>
            <svg class="eo-footer__shop-arrow" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
          </a>
        </div>
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
  gap: 14px;
}
.eo-footer__shops-label {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--eo-text-dim);
}
.eo-footer__shops {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 10px;
}
.eo-footer__shop {
  --brand: #005bff;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 9px 16px 9px 9px;
  border: 1px solid var(--eo-border);
  border-radius: 16px;
  background: var(--eo-surface-2);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  text-decoration: none;
  transition: transform 0.28s var(--eo-ease), border-color 0.28s var(--eo-ease),
    box-shadow 0.28s var(--eo-ease), background 0.28s var(--eo-ease);
}
.eo-footer__shop:hover {
  transform: translateY(-2px);
  border-color: var(--brand);
  background: var(--eo-white);
  box-shadow: 0 12px 28px -10px var(--brand-glow);
}
.eo-footer__shop-tile {
  flex: none;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 14px -4px var(--brand-glow);
  transition: transform 0.28s var(--eo-ease);
}
.eo-footer__shop:hover .eo-footer__shop-tile {
  transform: scale(1.06);
}
.eo-footer__shop-tile img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.eo-footer__shop-text {
  display: flex;
  flex-direction: column;
  gap: 1px;
  margin-right: auto;
  text-align: left;
}
.eo-footer__shop-name {
  font-size: 15px;
  font-weight: 700;
  color: var(--eo-text);
  letter-spacing: -0.01em;
}
.eo-footer__shop-sub {
  font-size: 12px;
  color: var(--eo-text-dim);
}
.eo-footer__shop-arrow {
  flex: none;
  color: var(--eo-text-dim);
  opacity: 0.5;
  transition: transform 0.28s var(--eo-ease), opacity 0.28s var(--eo-ease),
    color 0.28s var(--eo-ease);
}
.eo-footer__shop:hover .eo-footer__shop-arrow {
  color: var(--brand);
  opacity: 1;
  transform: translate(2px, -2px);
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
  .eo-footer__shops {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
}
@media (max-width: 640px) {
  .eo-footer { padding: 32px 0 28px; }
  .eo-footer__inner { padding-inline: 16px; gap: 20px; }
  .eo-footer__shops { align-self: center; }
  .eo-footer__copy { font-size: 14px; }
}
</style>
