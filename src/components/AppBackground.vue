<template>
  <div class="eo-bg" aria-hidden="true">
    <div class="eo-bg__base"></div>
    <div class="eo-bg__orb eo-bg__orb--1"></div>
    <div class="eo-bg__orb eo-bg__orb--2"></div>
    <div class="eo-bg__orb eo-bg__orb--3"></div>
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
    radial-gradient(1100px 820px at 14% 4%,  rgba(4, 120, 87, 0.07), transparent 60%),
    radial-gradient(1000px 760px at 92% 96%, rgba(16, 185, 129, 0.06), transparent 60%),
    linear-gradient(180deg, #FFFFFF 0%, #F7FBF9 100%);
}
.eo-bg__orb {
  position: absolute;
  border-radius: 50%;
  mix-blend-mode: multiply;
  filter: blur(120px);
  opacity: 0.42;
}
.eo-bg__orb--1 {
  top: 2%; left: 6%;
  width: 30vw; height: 30vw;
  background: rgba(4, 120, 87, 0.16);
}
.eo-bg__orb--2 {
  top: 28%; right: 4%;
  width: 26vw; height: 26vw;
  background: rgba(16, 185, 129, 0.13);
}
.eo-bg__orb--3 {
  bottom: 4%; left: 12%;
  width: 32vw; height: 32vw;
  background: rgba(4, 120, 87, 0.14);
}
.eo-bg__noise {
  position: absolute;
  inset: 0;
  opacity: 0.025;
  mix-blend-mode: multiply;
  pointer-events: none;
  background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
}

@media (max-width: 640px) {
  .eo-bg__orb { filter: blur(80px); opacity: 0.32; }
  .eo-bg__orb--1, .eo-bg__orb--2, .eo-bg__orb--3 { width: 46vw; height: 46vw; }
}
</style>
