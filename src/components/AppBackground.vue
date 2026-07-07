<template>
  <div class="eo-bg" aria-hidden="true">
    <div class="eo-bg__base"></div>
    <div class="eo-bg__orb eo-bg__orb--1"></div>
    <div class="eo-bg__orb eo-bg__orb--2"></div>
    <div class="eo-bg__orb eo-bg__orb--3"></div>
    <div class="eo-bg__orb eo-bg__orb--4"></div>
    <div class="eo-bg__field"></div>
    <div class="eo-bg__grain"></div>
  </div>
</template>

<style scoped>
.eo-bg {
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  background: var(--eo-bg, #faf8f2);
  pointer-events: none;
}

/*
 * Тёплая «органическая» подложка: кремово-песочная база с мягкой
 * зелёно-бежевой mesh-сеткой. Сверху больше зелёного («крона»),
 * снизу теплее, землистее («почва / сапропель»). Чистый CSS — без
 * фото, поэтому безупречно грузится и читается на любом устройстве.
 */
.eo-bg__base {
  position: absolute;
  inset: 0;
  background:
    /* верх-лево — зелёное свечение «кроны» */
    radial-gradient(1000px 760px at 6% -4%, rgba(4, 120, 87, 0.11), transparent 55%),
    /* верх-право — тёплый песочный свет */
    radial-gradient(880px 680px at 96% 6%, rgba(192, 167, 112, 0.16), transparent 55%),
    /* центр — едва заметная изумрудная дымка */
    radial-gradient(1100px 880px at 52% 42%, rgba(16, 185, 129, 0.05), transparent 60%),
    /* низ-лево — землистый бежевый */
    radial-gradient(820px 700px at 4% 98%, rgba(201, 174, 118, 0.15), transparent 55%),
    /* низ-право — глубокий зелёный */
    radial-gradient(920px 720px at 98% 102%, rgba(4, 120, 87, 0.10), transparent 55%),
    /* тёплая кремовая база, слегка теплее книзу */
    linear-gradient(180deg, #faf9f4 0%, #f6f2e9 55%, #f2ede1 100%);
}

/* Мягкие цветовые «облака» для глубины и фактуры */
.eo-bg__orb {
  position: absolute;
  border-radius: 50%;
  mix-blend-mode: multiply;
  filter: blur(120px);
  will-change: transform;
}
.eo-bg__orb--1 {
  top: -4%; left: 2%;
  width: 32vw; height: 32vw;
  background: rgba(4, 120, 87, 0.14);
  opacity: 0.5;
}
.eo-bg__orb--2 {
  top: 24%; right: -2%;
  width: 28vw; height: 28vw;
  background: rgba(196, 170, 112, 0.20);
  opacity: 0.55;
}
.eo-bg__orb--3 {
  bottom: 2%; left: 8%;
  width: 34vw; height: 34vw;
  background: rgba(16, 185, 129, 0.12);
  opacity: 0.45;
}
.eo-bg__orb--4 {
  bottom: -6%; right: 6%;
  width: 30vw; height: 30vw;
  background: rgba(176, 148, 96, 0.18);
  opacity: 0.5;
}

/*
 * Тематическое «поле»: очень тонкий органический мотив из колосьев и трав,
 * который держится за фисташковым тоном на ПРОТЯЖЕНИИ ВСЕГО скролла (слой
 * фиксированный, поэтому единый фон остаётся всё время — и на десктопе, и на
 * мобильном). Чистый SVG, крайне низкая непрозрачность — «за тоном что-то
 * есть», но текст поверх фрост-стекла остаётся полностью читаемым.
 */
.eo-bg__field {
  position: absolute;
  inset: 0;
  opacity: 0.07;
  mix-blend-mode: multiply;
  pointer-events: none;
  background-repeat: repeat;
  background-size: 260px 260px;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='260' height='260' viewBox='0 0 260 260'><g fill='none' stroke='%23047857' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'><path d='M58 252 C56 210 61 185 58 150 M58 150 l0 -9 M120 252 C130 205 114 178 128 150 M202 234 C200 200 205 175 202 142 M202 142 l0 -9 M30 190 C35 160 27 145 34 118 M162 128 C158 100 166 86 159 62 M232 130 C236 108 229 96 234 76 M92 128 C97 102 88 88 95 66'/><path d='M58 168 l-7 -5 M58 168 l7 -5 M58 160 l-7 -5 M58 160 l7 -5 M58 152 l-6 -5 M58 152 l6 -5 M202 160 l-7 -5 M202 160 l7 -5 M202 152 l-7 -5 M202 152 l7 -5 M202 144 l-6 -5 M202 144 l6 -5'/></g></svg>");
}

/* Тонкое «бумажное» зерно — даёт ту самую фактуру вместо плоской белизны */
.eo-bg__grain {
  position: absolute;
  inset: 0;
  opacity: 0.04;
  mix-blend-mode: multiply;
  pointer-events: none;
  background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.62' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
}

/* Лёгкое «дыхание» подложки — только на десктопе, и только без reduce-motion */
@media (min-width: 961px) and (prefers-reduced-motion: no-preference) {
  .eo-bg__orb--1 { animation: eo-drift-a 26s ease-in-out infinite; }
  .eo-bg__orb--2 { animation: eo-drift-b 32s ease-in-out infinite; }
  .eo-bg__orb--3 { animation: eo-drift-b 30s ease-in-out infinite; }
  .eo-bg__orb--4 { animation: eo-drift-a 34s ease-in-out infinite; }
}
@keyframes eo-drift-a {
  0%, 100% { transform: translate3d(0, 0, 0); }
  50%      { transform: translate3d(2.5%, 3%, 0); }
}
@keyframes eo-drift-b {
  0%, 100% { transform: translate3d(0, 0, 0); }
  50%      { transform: translate3d(-3%, -2.5%, 0); }
}

/* Мобильные: меньше блюр, мягче пятна, статично — ради скорости и читаемости */
@media (max-width: 640px) {
  .eo-bg__orb { filter: blur(70px); }
  .eo-bg__orb--1, .eo-bg__orb--2,
  .eo-bg__orb--3, .eo-bg__orb--4 { width: 56vw; height: 56vw; opacity: 0.42; }
  .eo-bg__field { opacity: 0.05; background-size: 220px 220px; }
}
</style>
