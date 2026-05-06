<template>
  <div class="eo-bg" aria-hidden="true">
    <div class="eo-bg__base"></div>
    <div class="eo-bg__orb eo-bg__orb--1"></div>
    <div class="eo-bg__orb eo-bg__orb--2"></div>
    <div class="eo-bg__orb eo-bg__orb--3"></div>
    <div class="eo-bg__orb eo-bg__orb--4"></div>
    <div class="eo-bg__orb eo-bg__orb--5"></div>
    <div class="eo-bg__noise"></div>
  </div>
</template>

<style scoped>
.eo-bg {
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  background: var(--eo-bg, #FFFFFF);
  pointer-events: none;
}
.eo-bg__base {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(900px 700px at 12% 8%,  rgba(4, 120, 87, 0.10), transparent 65%),
    radial-gradient(800px 600px at 88% 22%, rgba(16, 185, 129, 0.08), transparent 65%),
    radial-gradient(900px 700px at 50% 50%, rgba(4, 120, 87, 0.06), transparent 65%),
    radial-gradient(800px 600px at 10% 78%, rgba(16, 185, 129, 0.07), transparent 65%),
    radial-gradient(950px 750px at 90% 92%, rgba(4, 120, 87, 0.09), transparent 65%),
    linear-gradient(180deg, #FFFFFF 0%, #FAFDFB 100%);
}
.eo-bg__orb {
  position: absolute;
  border-radius: 50%;
  mix-blend-mode: multiply;
  filter: blur(110px);
  will-change: transform;
  opacity: 0.55;
}
.eo-bg__orb--1 {
  top: 6%; left: 8%;
  width: 32vw; height: 32vw;
  background: rgba(4, 120, 87, 0.22);
  animation: eoOrb1 22s linear infinite;
}
.eo-bg__orb--2 {
  top: 18%; right: 6%;
  width: 28vw; height: 28vw;
  background: rgba(16, 185, 129, 0.18);
  animation: eoOrb2 26s linear infinite;
}
.eo-bg__orb--3 {
  top: 44%; left: 46%;
  width: 26vw; height: 26vw;
  background: rgba(4, 120, 87, 0.16);
  filter: blur(90px);
  animation: eoOrb3 18s linear infinite;
}
.eo-bg__orb--4 {
  bottom: 22%; left: 4%;
  width: 30vw; height: 30vw;
  background: rgba(16, 185, 129, 0.16);
  animation: eoOrb2 30s linear infinite reverse;
}
.eo-bg__orb--5 {
  bottom: 4%; right: 10%;
  width: 34vw; height: 34vw;
  background: rgba(4, 120, 87, 0.20);
  animation: eoOrb1 28s linear infinite reverse;
}
.eo-bg__noise {
  position: absolute;
  inset: 0;
  opacity: 0.035;
  mix-blend-mode: multiply;
  pointer-events: none;
  background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
}

@keyframes eoOrb1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25%      { transform: translate(100px, -100px) scale(1.2); }
  50%      { transform: translate(-100px, 100px) scale(0.8); }
  75%      { transform: translate(50px, 50px) scale(1.1); }
}
@keyframes eoOrb2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25%      { transform: translate(-150px, 150px) scale(0.8); }
  50%      { transform: translate(100px, -50px) scale(1.2); }
  75%      { transform: translate(-50px, 80px) scale(0.95); }
}
@keyframes eoOrb3 {
  0%, 100% { transform: translate(0, 0); }
  50%      { transform: translate(50px, 50px); }
}

@media (max-width: 640px) {
  .eo-bg__orb { filter: blur(72px); opacity: 0.4; }
  .eo-bg__orb--1, .eo-bg__orb--2, .eo-bg__orb--3,
  .eo-bg__orb--4, .eo-bg__orb--5 { width: 42vw; height: 42vw; }
}
</style>
