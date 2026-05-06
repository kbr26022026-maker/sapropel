<template>
  <header class="eo-nav" :class="{ 'eo-nav--scrolled': scrolled }" :data-open="menuOpen ? 'true' : 'false'" id="eoNav">
    <div class="eo-nav__inner eo-wrap">
      <router-link to="/" class="eo-nav__brand" @click="closeMenu">
        <span class="eo-nav__logo">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19.2 2.96c1.4 9.93-6.5 17.64-8.2 17.04Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></svg>
        </span>
        <span class="eo-nav__title">ЭКО ОРГАНИКА</span>
      </router-link>

      <nav class="eo-nav__links" aria-label="Главное меню">
        <a href="/#about" @click="handleNavLink">О продукте</a>
        <a href="/#features" @click="handleNavLink">Преимущества</a>
        <a href="/#applications" @click="handleNavLink">Применение</a>
        <router-link to="/articles">Блог</router-link>
        <a href="/#resources" @click="handleNavLink">Статьи и документы</a>
        <a href="/#contact" @click="handleNavLink">Контакты</a>
        <a href="/#contact" class="eo-nav__cta" @click="handleNavLink">Заказать</a>
      </nav>

      <button
        type="button"
        class="eo-nav__burger"
        aria-label="Меню"
        :aria-expanded="menuOpen.toString()"
        aria-controls="eoNavMobile"
        @click="toggleMenu"
      >
        <svg v-if="!menuOpen" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>
        <svg v-else viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/></svg>
      </button>
    </div>

    <div class="eo-nav__mobile" id="eoNavMobile" v-show="menuOpen">
      <a href="/#about" @click="handleNavLink">О продукте</a>
      <a href="/#features" @click="handleNavLink">Преимущества</a>
      <a href="/#applications" @click="handleNavLink">Применение</a>
      <router-link to="/articles" @click="closeMenu">Блог</router-link>
      <a href="/#resources" @click="handleNavLink">Статьи и документы</a>
      <a href="/#contact" @click="handleNavLink">Контакты</a>
      <a href="/#contact" class="eo-nav__cta-mobile" @click="handleNavLink">Заказать</a>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const scrolled = ref(false)
const menuOpen = ref(false)
const router = useRouter()

function onScroll() {
  scrolled.value = window.scrollY > 20
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
  document.body.classList.toggle('eo-nav-lock', menuOpen.value)
}

function closeMenu() {
  menuOpen.value = false
  document.body.classList.remove('eo-nav-lock')
}

function handleNavLink(e) {
  const href = e.currentTarget.getAttribute('href')
  closeMenu()
  if (href && href.startsWith('/#')) {
    const id = href.slice(2)
    if (router.currentRoute.value.path !== '/') {
      router.push('/').then(() => {
        setTimeout(() => {
          const el = document.getElementById(id)
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 150)
      })
      e.preventDefault()
    } else {
      e.preventDefault()
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}

function onKeydown(e) {
  if (e.key === 'Escape' && menuOpen.value) closeMenu()
}

function onResize() {
  if (window.innerWidth > 960) closeMenu()
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
  window.addEventListener('resize', onResize)
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
  window.removeEventListener('resize', onResize)
  document.body.classList.remove('eo-nav-lock')
})
</script>

<style scoped>
.eo-nav {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 100;
  font-family: var(--eo-font);
  padding: 20px 0;
  transition: background 0.3s, backdrop-filter 0.3s, padding 0.3s, border-color 0.3s;
  border-bottom: 1px solid transparent;
}
.eo-nav a { text-decoration: none; }
.eo-nav.eo-nav--scrolled {
  padding: 12px 0;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom-color: var(--eo-border);
  box-shadow: 0 6px 20px rgba(69, 69, 69, 0.08);
}
.eo-nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}
.eo-nav__brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--eo-text);
  font-weight: 700;
  min-height: 44px;
}
.eo-nav__logo {
  background: var(--eo-accent-hover);
  color: #fff;
  padding: 8px;
  border-radius: 12px;
  display: inline-flex;
  transition: background 0.2s;
}
.eo-nav__brand:hover .eo-nav__logo { background: var(--eo-accent); }
.eo-nav__title { font-size: 18px; letter-spacing: -0.01em; }

.eo-nav__links {
  display: flex;
  align-items: center;
  gap: 28px;
}
.eo-nav__links a {
  color: var(--eo-text);
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s;
}
.eo-nav__links a:hover { color: var(--eo-accent); }
.eo-nav__cta {
  background: var(--eo-accent-hover);
  color: #fff !important;
  padding: 10px 20px;
  border-radius: 999px;
  box-shadow: 0 6px 18px rgba(0, 66, 37, 0.25);
  transition: transform 0.2s, background 0.2s, box-shadow 0.2s;
}
.eo-nav__cta:hover {
  background: var(--eo-accent) !important;
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(0, 66, 37, 0.4);
  color: #fff !important;
}

.eo-nav__burger {
  display: none;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid var(--eo-border);
  color: var(--eo-text);
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  backdrop-filter: blur(8px);
  min-width: 44px;
  min-height: 44px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.eo-nav__mobile {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px 16px 16px;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-top: 1px solid var(--eo-border);
  max-height: calc(100vh - 84px - env(safe-area-inset-bottom, 0px));
  overflow: auto;
}
.eo-nav__mobile a {
  color: var(--eo-text);
  padding: 12px 12px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  transition: background 0.2s, color 0.2s;
  min-height: 44px;
  display: flex;
  align-items: center;
}
.eo-nav__mobile a:hover { color: var(--eo-accent-hover); background: rgba(69, 69, 69, 0.04); }
.eo-nav__cta-mobile {
  background: var(--eo-accent-hover);
  color: #fff !important;
  margin-top: 8px;
  justify-content: center;
  border-radius: 999px;
  box-shadow: 0 6px 18px rgba(0, 66, 37, 0.25);
}

@media (max-width: 960px) {
  .eo-nav__links { display: none; }
  .eo-nav__burger { display: inline-flex; }
}

@media (max-width: 640px) {
  .eo-nav { padding: 12px 0; }
  .eo-nav__inner { gap: 12px; }
  .eo-nav__title { font-size: 15px; }
  .eo-nav__brand { min-width: 0; }
  .eo-nav__mobile a { font-size: 15px; }
}
</style>
