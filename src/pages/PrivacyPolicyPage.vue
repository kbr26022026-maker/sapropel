<template>
  <main class="eo-section">
    <div class="eo-wrap privacy">
      <nav class="privacy__crumbs eo-reveal">
        <router-link to="/">Главная</router-link>
        <span>/</span>
        <span>Политика конфиденциальности</span>
      </nav>
      <h1 class="privacy__title eo-reveal">Политика конфиденциальности</h1>
      <div class="privacy__body eo-reveal" style="--eo-delay: 80ms">
        <p>Настоящая Политика конфиденциальности определяет порядок обработки и защиты информации о физических лицах, пользующихся услугами ООО «Эко Органика».</p>

        <h2>1. Общие положения</h2>
        <p>Использование сервисов сайта означает безоговорочное согласие пользователя с настоящей Политикой и указанными в ней условиями обработки его персональной информации.</p>

        <h2>2. Персональная информация пользователей</h2>
        <p>ООО «Эко Органика» собирает следующую информацию:</p>
        <ul>
          <li>Имя и контактные данные (телефон, email), указанные в форме обратной связи.</li>
          <li>Технические данные: IP-адрес, cookie, данные браузера и операционной системы.</li>
        </ul>

        <h2>3. Цели обработки персональных данных</h2>
        <p>Полученные данные используются для:</p>
        <ul>
          <li>Обработки заявок и обратной связи с пользователями.</li>
          <li>Улучшения сервисов и качества обслуживания.</li>
          <li>Соблюдения требований законодательства Российской Федерации.</li>
        </ul>

        <h2>4. Передача персональной информации третьим лицам</h2>
        <p>ООО «Эко Органика» не передаёт персональную информацию пользователей третьим лицам, за исключением случаев, предусмотренных законодательством РФ.</p>

        <h2>5. Защита информации</h2>
        <p>Для защиты персональных данных применяются организационные и технические меры безопасности, соответствующие требованиям Федерального закона № 152-ФЗ «О персональных данных».</p>

        <h2>6. Контакты</h2>
        <p>По вопросам, связанным с обработкой персональных данных, обращайтесь:</p>
        <ul>
          <li>Email: <a href="mailto:ecoorganica54@mail.ru">ecoorganica54@mail.ru</a></li>
          <li>Телефон: <a href="tel:+79132077878">+7 (913) 207-78-78</a></li>
        </ul>

        <p class="privacy__updated">Последнее обновление: январь 2025 г.</p>
      </div>
    </div>
  </main>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'
import { useReveal } from '@/composables/useReveal.js'

const { refresh } = useReveal()
onMounted(async () => { await nextTick(); refresh() })
</script>

<style scoped>
.privacy {
  max-width: min(800px, calc(100% - 2rem));
  padding-top: clamp(48px, 8vw, 96px);
  padding-bottom: clamp(48px, 8vw, 96px);
}
.privacy__crumbs {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--eo-text-dim);
  margin-bottom: 32px;
}
.privacy__crumbs a { color: var(--eo-text-muted); transition: color 0.2s; }
.privacy__crumbs a:hover { color: var(--eo-accent-deep); }
.privacy__title {
  font-size: clamp(28px, 4vw, 44px);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--eo-text);
  margin: 0 0 40px;
  line-height: 1.1;
}
.privacy__body { font-size: 17px; line-height: 1.72; color: var(--eo-text); }
.privacy__body h2 { font-size: clamp(20px, 2.6vw, 26px); font-weight: 700; margin: 40px 0 14px; color: var(--eo-text); }
.privacy__body p { margin: 0 0 18px; color: var(--eo-text-muted); }
.privacy__body ul { margin: 0 0 20px; padding-left: 24px; color: var(--eo-text-muted); }
.privacy__body li { margin: 0 0 8px; }
.privacy__body a { color: var(--eo-accent-deep); text-decoration: underline; transition: color 0.2s; }
.privacy__body a:hover { color: var(--eo-accent-hover); }
.privacy__updated { font-size: 14px; color: var(--eo-text-dim); margin-top: 40px; }
</style>
