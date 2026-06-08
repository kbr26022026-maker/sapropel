<template>
  <section class="eo-section eo-about" id="about">
    <div class="eo-wrap">
      <div class="eo-about__intro">
        <div class="eo-about__text eo-reveal">
          <h2>Сапропель: природное удобрение для богатого урожая</h2>
          <p>Сапропель — уникальное природное ископаемое, которое образуется на дне пресных водоёмов тысячелетиями. Он содержит множество питательных веществ, макро- и микроэлементов, необходимых для гармоничного роста и развития растений.</p>
          <p>Мы предлагаем продукт, который не только повышает урожайность, но и <strong>инвестирует в будущее Вашей земли</strong>. Наш сапропель проходит строгий контроль качества, сохраняя все первозданные свойства природы. Это выбор тех, кто заботится об экологии и устойчивом земледелии.</p>
        </div>

        <div class="eo-about__gallery eo-reveal" style="--eo-delay: 120ms">
          <button
            v-for="(img, i) in gallery"
            :key="img.src"
            type="button"
            class="eo-about__img-btn"
            :class="img.cls"
            @click="openLightbox(i)"
            :aria-label="`Увеличить изображение: ${img.alt}`"
          >
            <img :src="img.src" :alt="img.alt" loading="lazy" decoding="async">
            <span class="eo-about__zoom" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
            </span>
          </button>
        </div>
      </div>

      <div class="eo-about__lake eo-reveal">
        <div class="eo-about__lake-decor" aria-hidden="true"></div>
        <div class="eo-about__lake-grid">
          <div class="eo-about__lake-text">
            <div class="eo-about__region">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 7-8 13-8 13s-8-6-8-13a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Новосибирская область</span>
            </div>
            <h3>Самое крупное месторождение в озере Минзелинское</h3>
            <p>Добыча сапропеля бренда «Эко Органика» осуществляется на озере <a class="eo-about__wiki" href="https://ru.wikipedia.org/wiki/Минзелинское_(озеро)" target="_blank" rel="noopener noreferrer">Минзелинское</a>, расположенном в левобережной части реки Обь, в девственной тайге Колыванского района. Озеро формировалось более 6000 лет.</p>
            <p>Дно озера представлено мощными отложениями сапропеля толщиной до 10 метров. Запасы составляют около 8 159 тыс. тонн. Вода и ил озера обладают целебными и ранозаживляющими свойствами.</p>
            <p><strong>Состав:</strong> органического вещества — до 60.3%, кальция — до 25.88%, калия — до 1.2%, фосфора — около 0.56%. Содержит 16 аминокислот, протеин, клетчатку, витамины (А, В1, В2, В6, В12, С, Е), антиоксиданты и гуминовые вещества. Уровень pH находится в диапазоне 6,8–7,1.</p>
            <p>Помимо макроэлементов, сапропель отличается богатым содержанием микроэлементов, необходимых для развития растений: бор, марганец, железо, медь, цинк, бром, молибден, йод и др.</p>
          </div>
          <button
            type="button"
            class="eo-about__lake-img eo-about__img-btn"
            @click="openLightbox(gallery.length)"
            aria-label="Увеличить карту озера Минзелинское"
          >
            <img src="https://static.tildacdn.com/tild6437-3934-4065-b739-353837333034/2025-01-29_22-33-00.png" alt="Карта озера Минзелинское — месторождение сапропеля" loading="lazy" decoding="async">
            <span class="eo-about__zoom" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
            </span>
          </button>
        </div>
      </div>
    </div>

    <!-- Image lightbox -->
    <Teleport to="body">
      <Transition name="eo-lb">
        <div
          v-if="lightboxOpen"
          class="eo-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Просмотр изображения"
          @click.self="closeLightbox"
          @keydown.esc="closeLightbox"
          @keydown.left="prevImage"
          @keydown.right="nextImage"
          ref="lightboxEl"
          tabindex="-1"
        >
          <button class="eo-lightbox__close" type="button" @click="closeLightbox" aria-label="Закрыть">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          <button v-if="allImages.length > 1" class="eo-lightbox__nav eo-lightbox__nav--prev" type="button" @click="prevImage" aria-label="Предыдущее изображение">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <figure class="eo-lightbox__figure" @click.stop>
            <img :src="allImages[lightboxIndex]?.src" :alt="allImages[lightboxIndex]?.alt">
            <figcaption>{{ allImages[lightboxIndex]?.alt }}<span v-if="allImages.length > 1" class="eo-lightbox__count">{{ lightboxIndex + 1 }} / {{ allImages.length }}</span></figcaption>
          </figure>
          <button v-if="allImages.length > 1" class="eo-lightbox__nav eo-lightbox__nav--next" type="button" @click="nextImage" aria-label="Следующее изображение">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, computed, nextTick, onUnmounted } from 'vue'

const gallery = [
  { src: 'https://static.tildacdn.com/tild3162-3133-4230-a131-626430356635/photo_54270033328803.jpg', alt: 'Добыча сапропеля на месторождении', cls: '' },
  { src: 'https://static.tildacdn.com/tild3632-6630-4438-b263-613736343836/photo_54270033328803.jpg', alt: 'Разработка донных отложений сапропеля', cls: 'eo-about__img--offset' },
  { src: 'https://static.tildacdn.com/tild6534-6666-4566-a633-626139303866/photo_54270033328803.jpg', alt: 'Специализированная техника на озере Минзелинское', cls: 'eo-about__img--offset-up' },
  { src: 'https://static.tildacdn.com/tild6262-3633-4165-b663-376430373130/41937_original.jpg', alt: 'Озеро Минзелинское — природный источник сапропеля', cls: '' }
]

const lakeMap = { src: 'https://static.tildacdn.com/tild6437-3934-4065-b739-353837333034/2025-01-29_22-33-00.png', alt: 'Карта озера Минзелинское — месторождение сапропеля' }
const allImages = computed(() => [...gallery, lakeMap])

const lightboxOpen = ref(false)
const lightboxIndex = ref(0)
const lightboxEl = ref(null)

function openLightbox(i) {
  lightboxIndex.value = i
  lightboxOpen.value = true
  document.body.classList.add('eo-doc-modal-lock')
  nextTick(() => lightboxEl.value?.focus())
}
function closeLightbox() {
  lightboxOpen.value = false
  document.body.classList.remove('eo-doc-modal-lock')
}
function prevImage() {
  lightboxIndex.value = (lightboxIndex.value - 1 + allImages.value.length) % allImages.value.length
}
function nextImage() {
  lightboxIndex.value = (lightboxIndex.value + 1) % allImages.value.length
}

onUnmounted(() => document.body.classList.remove('eo-doc-modal-lock'))
</script>

<style scoped>
.eo-about__intro {
  display: grid;
  grid-template-columns: 1fr;
  gap: 64px;
  align-items: center;
  margin-bottom: 120px;
}
@media (min-width: 960px) {
  .eo-about__intro { grid-template-columns: 1fr 1fr; gap: 80px; }
}
.eo-about__text h2 {
  color: var(--eo-text);
  font-size: clamp(28px, 3.6vw, 40px);
  font-weight: 700;
  line-height: 1.15;
  margin: 0 0 24px;
}
.eo-about__text p { color: var(--eo-text-muted); font-size: 18px; line-height: 1.7; margin: 0 0 20px; }
.eo-about__text strong { color: var(--eo-text); }
.eo-about__gallery {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.eo-about__gallery img {
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: var(--eo-radius-lg);
  box-shadow: 0 20px 50px rgba(69, 69, 69, 0.12);
}
.eo-about__img--offset { margin-top: 32px; }
.eo-about__img--offset-up { margin-top: -32px; }

/* Clickable gallery images */
.eo-about__img-btn {
  display: block;
  position: relative;
  width: 100%;
  padding: 0;
  border: 0;
  background: none;
  cursor: zoom-in;
  border-radius: var(--eo-radius-lg);
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(69, 69, 69, 0.12);
}
.eo-about__img-btn img { display: block; transition: transform 0.45s var(--eo-ease); }
.eo-about__img-btn:hover img,
.eo-about__img-btn:focus-visible img { transform: scale(1.06); }
.eo-about__img-btn:focus-visible { outline: 2px solid var(--eo-accent); outline-offset: 3px; }
.eo-about__zoom {
  position: absolute;
  top: 12px; right: 12px;
  width: 38px; height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.92);
  color: var(--eo-accent-deep);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.18);
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.25s, transform 0.25s;
  pointer-events: none;
}
.eo-about__img-btn:hover .eo-about__zoom,
.eo-about__img-btn:focus-visible .eo-about__zoom { opacity: 1; transform: scale(1); }
@media (hover: none) {
  .eo-about__zoom { opacity: 1; transform: scale(1); }
}
/* Map keeps its own framed look */
.eo-about__lake-img.eo-about__img-btn { overflow: visible; border-radius: 0; box-shadow: none; }
.eo-about__lake-img.eo-about__img-btn:hover img,
.eo-about__lake-img.eo-about__img-btn:focus-visible img { transform: none; }

.eo-about__wiki {
  color: var(--eo-accent-deep);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 2px;
  font-weight: 600;
  transition: color 0.2s;
}
.eo-about__wiki:hover { color: var(--eo-accent-hover); }

/* Lightbox */
.eo-lightbox {
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: clamp(16px, 4vw, 48px);
  background: rgba(15, 20, 25, 0.93);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}
.eo-lightbox__figure {
  margin: 0;
  max-width: min(1100px, 100%);
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}
.eo-lightbox__figure img {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: var(--eo-radius-md);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
  background: #fff;
}
.eo-lightbox__figure figcaption {
  color: rgba(255, 255, 255, 0.85);
  font-size: 14px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.eo-lightbox__count { color: rgba(255, 255, 255, 0.55); font-size: 13px; }
.eo-lightbox__close {
  position: absolute;
  top: clamp(12px, 2vw, 24px);
  right: clamp(12px, 2vw, 24px);
  width: 44px; height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 0;
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  cursor: pointer;
  transition: background 0.2s;
}
.eo-lightbox__close:hover { background: rgba(255, 255, 255, 0.25); }
.eo-lightbox__nav {
  flex-shrink: 0;
  width: 48px; height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 0;
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}
.eo-lightbox__nav:hover { background: rgba(255, 255, 255, 0.25); }
.eo-lightbox__nav--prev:hover { transform: translateX(-2px); }
.eo-lightbox__nav--next:hover { transform: translateX(2px); }
.eo-lb-enter-active, .eo-lb-leave-active { transition: opacity 0.25s; }
.eo-lb-enter-from, .eo-lb-leave-to { opacity: 0; }
@media (max-width: 640px) {
  .eo-lightbox__nav { position: absolute; top: 50%; transform: translateY(-50%); width: 40px; height: 40px; }
  .eo-lightbox__nav--prev { left: 8px; }
  .eo-lightbox__nav--next { right: 8px; }
  .eo-lightbox__figure img { max-height: 72vh; }
}
.eo-about__lake {
  position: relative;
  padding: clamp(32px, 5vw, 64px);
  border-radius: var(--eo-radius-xl);
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border: 1px solid var(--eo-border);
  box-shadow: 0 30px 80px rgba(69, 69, 69, 0.10);
  overflow: hidden;
}
.eo-about__lake-decor {
  position: absolute;
  top: 0; right: 0;
  width: 50%; height: 100%;
  background: rgba(0, 66, 37, 0.08);
  transform: skewX(-12deg) translateX(80px);
  pointer-events: none;
}
.eo-about__lake-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: center;
}
@media (min-width: 960px) {
  .eo-about__lake-grid { grid-template-columns: 7fr 5fr; }
}
.eo-about__region {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--eo-accent-deep);
  font-weight: 600;
  margin-bottom: 16px;
}
.eo-about__lake-text h3 {
  color: var(--eo-text);
  font-size: clamp(24px, 3vw, 36px);
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 24px;
}
.eo-about__lake-text p { color: var(--eo-text-muted); line-height: 1.65; margin: 0 0 16px; }
.eo-about__lake-text strong { color: var(--eo-text); }
.eo-about__lake-img img {
  width: 100%;
  border-radius: var(--eo-radius-md);
  border: 4px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 20px 50px rgba(69, 69, 69, 0.15);
}
@media (max-width: 960px) {
  .eo-about__intro { gap: 40px; margin-bottom: 72px; }
  .eo-about__lake { padding: 28px; }
  .eo-about__lake-decor { width: 36%; transform: skewX(-12deg) translateX(48px); }
}
@media (max-width: 640px) {
  .eo-about__intro { gap: 32px; margin-bottom: 56px; }
  .eo-about__text p { font-size: 16px; }
  .eo-about__gallery { grid-template-columns: 1fr; gap: 12px; }
  .eo-about__img--offset, .eo-about__img--offset-up { margin-top: 0; }
  .eo-about__lake { padding: 24px 18px; border-radius: var(--eo-radius-lg); }
  .eo-about__lake-grid { gap: 28px; }
  .eo-about__lake-decor { display: none; }
}
</style>
