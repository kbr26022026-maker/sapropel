<template>
  <section class="eo-section eo-contact" id="contact">
    <div class="eo-contact__bg" aria-hidden="true">
      <img src="/cta-bg.webp" alt="">
    </div>

    <div class="eo-wrap eo-contact__inner">
      <div class="eo-contact__info eo-reveal">
        <h2>Свяжитесь с нами</h2>
        <p class="eo-contact__lead">Оставьте заявку, и мы свяжемся с вами для обсуждения деталей сотрудничества и поставок сапропеля.</p>

        <div class="eo-contact__row">
          <span class="eo-contact__icon">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </span>
          <div>
            <span class="eo-contact__label">Телефон</span>
            <a href="tel:+79132077878" class="eo-contact__value">+7 (913) 207-78-78</a>
          </div>
        </div>

        <div class="eo-contact__row">
          <span class="eo-contact__icon">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </span>
          <div>
            <span class="eo-contact__label">Email</span>
            <a href="mailto:ecoorganica54@mail.ru" class="eo-contact__value">ecoorganica54@mail.ru</a>
          </div>
        </div>

        <div class="eo-contact__row">
          <span class="eo-contact__icon">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 7-8 13-8 13s-8-6-8-13a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          </span>
          <div>
            <span class="eo-contact__label">Офис</span>
            <p class="eo-contact__address">630008, Россия, Новосибирская обл., г. Новосибирск, ул. Лескова, 15</p>
          </div>
        </div>
      </div>

      <form class="eo-contact__form eo-reveal" style="--eo-delay: 120ms" @submit.prevent="submitForm" novalidate>
        <h3>Оставить заявку</h3>

        <label class="eo-field">
          <span>Ваше имя</span>
          <input type="text" v-model="form.name" placeholder="Иван Иванов" required>
        </label>

        <label class="eo-field">
          <span>Телефон</span>
          <input type="tel" v-model="form.phone" placeholder="+7 (___) ___-__-__" inputmode="tel" autocomplete="tel" required>
        </label>

        <label class="eo-field">
          <span>Email</span>
          <input type="email" v-model="form.email" placeholder="example@mail.ru">
        </label>

        <button type="submit" class="eo-btn eo-btn--primary eo-btn--block" :disabled="submitting">
          <span>{{ submitting ? 'Отправляем…' : 'Отправить заявку' }}</span>
          <svg v-if="!submitting" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
        </button>

        <p class="eo-contact__policy">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.</p>
        <p v-if="success" class="eo-contact__success">Спасибо! Мы свяжемся с вами в ближайшее время.</p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = reactive({ name: '', phone: '', email: '' })
const submitting = ref(false)
const success = ref(false)

async function submitForm() {
  submitting.value = true
  await new Promise((r) => setTimeout(r, 400))
  submitting.value = false
  success.value = true
  form.name = ''
  form.phone = ''
  form.email = ''
  setTimeout(() => { success.value = false }, 6000)
}
</script>

<style scoped>
.eo-contact {
  position: relative;
  overflow: hidden;
  color: var(--eo-text);
}
.eo-contact__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: 0.12;
  mix-blend-mode: multiply;
}
.eo-contact__bg img { width: 100%; height: 100%; object-fit: cover; }
.eo-contact__inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr;
  gap: 64px;
  align-items: center;
}
@media (min-width: 960px) {
  .eo-contact__inner { grid-template-columns: 1fr 1fr; gap: 80px; }
}
.eo-contact__info h2 {
  color: var(--eo-text);
  font-size: clamp(32px, 4.5vw, 52px);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 20px;
}
.eo-contact__lead { color: var(--eo-text-muted); font-size: 20px; line-height: 1.55; margin: 0 0 40px; }
.eo-contact__row { display: flex; align-items: flex-start; gap: 16px; margin-bottom: 28px; }
.eo-contact__icon {
  flex-shrink: 0;
  width: 56px; height: 56px;
  border-radius: 18px;
  background: var(--eo-accent-soft);
  color: var(--eo-accent-deep);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.eo-contact__label { display: block; font-size: 13px; color: var(--eo-text-dim); margin-bottom: 4px; }
.eo-contact__value {
  display: inline-block;
  color: var(--eo-text);
  font-size: 22px;
  font-weight: 600;
  max-width: 100%;
  overflow-wrap: anywhere;
  transition: color 0.2s;
}
.eo-contact__value:hover { color: var(--eo-accent-hover); }
.eo-contact__address { color: var(--eo-text-muted); font-size: 17px; line-height: 1.5; margin: 0; overflow-wrap: anywhere; }
.eo-contact__form {
  padding: clamp(24px, 4vw, 40px);
  border-radius: var(--eo-radius-lg);
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border: 1px solid var(--eo-border);
  box-shadow: 0 30px 80px rgba(69, 69, 69, 0.12);
}
.eo-contact__form h3 { color: var(--eo-text); font-size: 24px; font-weight: 700; margin: 0 0 28px; }
.eo-field { display: block; margin-bottom: 20px; }
.eo-field > span { display: block; font-size: 14px; font-weight: 500; color: var(--eo-text); margin-bottom: 8px; }
.eo-field input {
  width: 100%;
  padding: 14px 18px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid var(--eo-border-strong);
  color: var(--eo-text);
  font-size: 16px;
  font-family: var(--eo-font);
  transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
}
.eo-field input::placeholder { color: var(--eo-text-dim); }
.eo-field input:focus {
  outline: none;
  border-color: transparent;
  box-shadow: 0 0 0 2px var(--eo-accent);
  background: #ffffff;
}
.eo-contact__policy { color: var(--eo-text-dim); font-size: 12px; text-align: center; margin: 16px 0 0; }
.eo-contact__success {
  margin: 20px 0 0;
  padding: 14px 18px;
  border-radius: 12px;
  background: rgba(0, 66, 37, 0.12);
  border: 1px solid rgba(0, 66, 37, 0.4);
  color: var(--eo-accent-deep);
  text-align: center;
  font-size: 14px;
}
button:disabled { opacity: 0.7; cursor: not-allowed; transform: none !important; }
@media (max-width: 960px) {
  .eo-contact__inner { gap: 40px; }
  .eo-contact__lead { font-size: 18px; margin-bottom: 28px; }
}
@media (max-width: 640px) {
  .eo-contact__row { gap: 12px; margin-bottom: 20px; }
  .eo-contact__icon { width: 48px; height: 48px; border-radius: 16px; }
  .eo-contact__value { font-size: 18px; }
  .eo-contact__address { font-size: 15px; }
  .eo-contact__form { padding: 20px 16px; }
}
</style>
