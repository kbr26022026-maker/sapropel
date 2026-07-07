<template>
  <section class="eo-section eo-trust" aria-label="Ключевые показатели">
    <div class="eo-wrap">
      <div class="eo-trust__stats" ref="statsEl">
        <div v-for="stat in stats" :key="stat.label" class="eo-trust__stat eo-reveal">
          <div class="eo-trust__icon" v-html="stat.icon"></div>
          <div class="eo-trust__num">
            <span class="eo-trust__val">{{ stat.live }}</span>
            <span class="eo-trust__suffix">{{ stat.suffix }}</span>
          </div>
          <div class="eo-trust__label">{{ stat.label }}</div>
        </div>
      </div>

      <div class="eo-trust__badges eo-reveal">
        <div v-for="badge in badges" :key="badge.text" class="eo-trust__badge">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
          <span>{{ badge }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'

const statsEl = ref(null)

const stats = reactive([
  {
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/><path d="M12 6v6l4 2"/></svg>`,
    target: 6000,
    live: '0',
    suffix: '+ лет',
    label: 'Возраст залежей озера',
    format: (v) => v >= 6000 ? '6 000' : v.toLocaleString('ru')
  },
  {
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9.1 3.3 0 4.3-.5 1.1-.6 1.9-1.8 2.5-3.5-2.3-.4-3.7-.2-4.8.5-.3.2-.6.5-.9.8Z"/></svg>`,
    target: 120,
    live: '0',
    suffix: '%',
    label: 'Максимальный прирост урожая',
    format: (v) => String(v)
  },
  {
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="m19 9-5 5-4-4-3 3"/></svg>`,
    target: 8159,
    live: '0',
    suffix: ' тыс. т',
    label: 'Запасы месторождения',
    format: (v) => v >= 8159 ? '8 159' : v.toLocaleString('ru')
  },
  {
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    target: 5,
    live: '0',
    suffix: ' лет',
    label: 'Длительность действия в почве',
    format: (v) => String(v)
  }
])

const badges = [
  'Лицензия на добычу недр',
  'Сертификат соответствия ГОСТ',
  'Протокол испытаний 2024',
  '100% органическое сырьё'
]

let observer = null
let animStarted = false

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3)
}

function runCounters() {
  if (animStarted) return
  animStarted = true

  const duration = 2200
  const start = performance.now()

  function tick(now) {
    const elapsed = now - start
    const progress = Math.min(elapsed / duration, 1)
    const eased = easeOutCubic(progress)

    stats.forEach(stat => {
      const val = Math.round(eased * stat.target)
      stat.live = stat.format(val)
    })

    if (progress < 1) requestAnimationFrame(tick)
  }

  requestAnimationFrame(tick)
}

onMounted(() => {
  if (!window.IntersectionObserver) {
    stats.forEach(s => { s.live = s.format(s.target) })
    return
  }
  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        runCounters()
        observer.disconnect()
      }
    },
    { threshold: 0.3 }
  )
  if (statsEl.value) observer.observe(statsEl.value)
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<style scoped>
.eo-trust {
  padding-top: clamp(40px, 6vw, 72px);
  padding-bottom: clamp(40px, 6vw, 72px);
}
.eo-trust__stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 28px;
}
.eo-trust__stat {
  position: relative;
  padding: 28px 24px;
  border-radius: var(--eo-radius-lg);
  background: rgba(255, 255, 255, 0.65);
  border: 1px solid var(--eo-border);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);
  text-align: center;
  transition: transform 0.3s var(--eo-ease), box-shadow 0.3s, background 0.3s;
  cursor: default;
}
.eo-trust__stat:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.10);
}
.eo-trust__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: var(--eo-badge-bg);
  border: 1px solid var(--eo-badge-ring);
  color: var(--eo-badge-ico);
  box-shadow: var(--eo-badge-shadow);
  margin: 0 auto 16px;
}
.eo-trust__num {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 2px;
  margin-bottom: 8px;
}
.eo-trust__val {
  font-size: clamp(28px, 3.5vw, 44px);
  font-weight: 800;
  font-family: var(--eo-font);
  color: var(--eo-accent-deep);
  letter-spacing: -0.03em;
  line-height: 1;
  font-variant-numeric: tabular-nums;
}
.eo-trust__suffix {
  font-size: clamp(14px, 1.4vw, 18px);
  font-weight: 600;
  color: var(--eo-accent-hover);
  margin-left: 2px;
}
.eo-trust__label {
  font-size: 13px;
  color: var(--eo-text-muted);
  line-height: 1.45;
  font-weight: 500;
}

.eo-trust__badges {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.eo-trust__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(4, 120, 87, 0.18);
  color: var(--eo-accent-deep);
  font-size: 14px;
  font-weight: 500;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: background 0.2s, border-color 0.2s;
}
.eo-trust__badge:hover {
  background: rgba(255, 255, 255, 0.95);
  border-color: rgba(4, 120, 87, 0.35);
}
.eo-trust__badge svg { color: var(--eo-accent); flex-shrink: 0; }

@media (max-width: 960px) {
  .eo-trust__stats { grid-template-columns: repeat(2, 1fr); gap: 16px; }
}
@media (max-width: 560px) {
  .eo-trust__stats { grid-template-columns: repeat(2, 1fr); gap: 12px; }
  .eo-trust__stat { padding: 20px 16px; }
  .eo-trust__icon { width: 44px; height: 44px; border-radius: 12px; margin-bottom: 12px; }
  .eo-trust__badges { gap: 8px; }
  .eo-trust__badge { font-size: 13px; padding: 8px 14px; }
}
</style>
