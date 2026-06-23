<template>
  <section class="eo-section eo-videos">
    <div class="eo-wrap">
      <div class="eo-videos__head">
        <h2 class="eo-reveal">Видеоматериалы и отзывы</h2>
        <p class="eo-reveal" style="--eo-delay: 80ms">Посмотрите, как мы добываем сапропель, и узнайте о реальных результатах наших клиентов.</p>
      </div>

      <div class="eo-videos__grid">
        <figure v-for="(v, i) in videos" :key="v.src" class="eo-video eo-reveal" :class="{ 'eo-video--wide': v.wide }" :style="`--eo-delay: ${i * 80}ms`">
          <div class="eo-video__frame">
            <iframe :src="v.src" frameborder="0" allow="clipboard-write; autoplay" allowfullscreen></iframe>
          </div>
          <figcaption>{{ v.caption }}</figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup>
const videos = [
  { src: 'https://rutube.ru/play/embed/18fb92be5288fae323328e831229b319', caption: 'Добыча сапропеля из озера Минзелинское', wide: true },
  { src: 'https://rutube.ru/play/embed/220a3281fb20c98b11906841d1a748d5', caption: 'Честный обзор и отзыв на нашу продукцию', wide: false },
  { src: 'https://rutube.ru/play/embed/983788da33f0955ce76abce10628aa9e', caption: 'Отзыв садоводов об урожайности (часть 1)', wide: false },
  { src: 'https://rutube.ru/play/embed/ff20d3b3e4b75684c52d13b023628e48', caption: 'Отзыв садоводов об урожайности (часть 2)', wide: false },
  { src: 'https://rutube.ru/play/embed/fb165d903f4c930273ed299124bf92d6', caption: 'Результат выращенной живности', wide: false }
]
</script>

<style scoped>
.eo-videos__head {
  text-align: center;
  max-width: 720px;
  margin: 0 auto 60px;
  padding: 0 16px;
}
.eo-videos__head h2 {
  color: var(--eo-text);
  font-size: clamp(24px, 4vw, 44px);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 16px;
}
.eo-videos__head p { color: var(--eo-text-muted); font-size: clamp(15px, 2vw, 18px); margin: 0; }
.eo-videos__grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 28px;
}
.eo-video {
  grid-column: span 12;
  margin: 0;
  border-radius: var(--eo-radius-lg);
  overflow: hidden;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid var(--eo-border);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 14px 40px rgba(15, 23, 42, 0.10);
}
@media (min-width: 641px) {
  .eo-video { grid-column: span 6; }
  .eo-video--wide { grid-column: span 12; }
}
@media (min-width: 960px) {
  .eo-video { grid-column: span 4; }
  .eo-video--wide { grid-column: span 8; }
}
.eo-video__frame {
  position: relative;
  aspect-ratio: 16 / 9;
  background: #454545;
  height: 0;
  padding-bottom: 56.25%;
}
@supports (aspect-ratio: 16 / 9) {
  .eo-video__frame { height: auto; padding-bottom: 0; }
}
.eo-video__frame iframe {
  position: absolute;
  inset: 0;
  width: 100%; height: 100%;
  border: 0;
}
.eo-video figcaption {
  padding: 22px 24px;
  color: var(--eo-text);
  font-weight: 700;
  font-size: 17px;
  line-height: 1.35;
}
@media (max-width: 640px) {
  .eo-videos__head { margin-bottom: 32px; padding: 0; }
  .eo-videos__grid { gap: 16px; }
  .eo-video, .eo-video--wide { grid-column: span 12; }
  .eo-video figcaption { padding: 14px 16px; font-size: 14px; }
}
@media (min-width: 641px) and (max-width: 960px) {
  .eo-videos__grid { gap: 20px; }
  .eo-video figcaption { padding: 16px 18px; font-size: 15px; }
}
</style>
