<template>
  <section class="eo-section eo-about" id="about">
    <div class="eo-wrap">
      <div class="eo-about__intro">
        <div class="eo-about__text eo-reveal">
          <h2>Сапропель: природное удобрение для богатого урожая</h2>
          <p>Сапропель — уникальное природное ископаемое, которое образуется на дне пресных водоёмов тысячелетиями. Он содержит множество питательных веществ, макро- и микроэлементов, необходимых для гармоничного роста и развития растений.</p>
          <p>Мы предлагаем продукт, который не только повышает урожайность, но и <strong>инвестирует в будущее вашей земли</strong>. Наш сапропель проходит строгий контроль качества, сохраняя все первозданные свойства природы. Это выбор тех, кто заботится об экологии и устойчивом земледелии.</p>
        </div>

        <div class="eo-about__gallery eo-reveal" style="--eo-delay: 120ms">
          <img src="https://static.tildacdn.com/tild3162-3133-4230-a131-626430356635/photo_54270033328803.jpg" alt="Сапропель 1">
          <img src="https://static.tildacdn.com/tild3632-6630-4438-b263-613736343836/photo_54270033328803.jpg" alt="Сапропель 2" class="eo-about__img--offset">
          <img src="https://static.tildacdn.com/tild6534-6666-4566-a633-626139303866/photo_54270033328803.jpg" alt="Сапропель 3" class="eo-about__img--offset-up">
          <img src="https://static.tildacdn.com/tild6262-3633-4165-b663-376430373130/41937_original.jpg" alt="Сапропель 4">
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
            <p>Добыча сапропеля ООО «Эко Органика» производится на озере Минзелинское, расположенном в левобережной части реки Обь, в девственной тайге Колыванского района. Озеро формировалось около 10 000 лет.</p>
            <p>Дно озера представлено мощными отложениями сапропеля до 10 метров. Запасы составляют около 8 159 тыс. тонн. Вода и ил озера обладают доказанными целебными и ранозаживляющими свойствами.</p>
            <p><strong>Состав:</strong> органического вещества — до 60.3%, кальция — до 25.88%, калия — до 1.2%, фосфора — около 0.56%. Содержит 16 аминокислот, протеин, клетчатку, витамины (B1, B2, B5, B12, A, E), антиоксиданты и гуминовые вещества.</p>
          </div>
          <div class="eo-about__lake-img">
            <img src="https://static.tildacdn.com/tild6437-3934-4065-b739-353837333034/2025-01-29_22-33-00.png" alt="Карта озера Минзелинское">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

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
