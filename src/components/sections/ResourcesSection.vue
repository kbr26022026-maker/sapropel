<template>
  <section class="eo-section eo-resources" id="resources">
    <div class="eo-wrap">
      <div class="eo-resources__grid">
        <div>
          <header class="eo-resources__head eo-reveal">
            <span class="eo-resources__badge eo-resources__badge--amber">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
            </span>
            <h2>Научные статьи</h2>
          </header>
          <ul class="eo-resources__list">
            <li v-for="(art, i) in visibleArticles" :key="art.href" class="eo-reveal" :style="`--eo-delay: ${i * 80}ms`">
              <a :href="art.href" target="_blank" rel="noopener" class="eo-res-card eo-res-card--article">
                <div>
                  <span class="eo-res-card__source">{{ art.source }}</span>
                  <h3>{{ art.title }}</h3>
                </div>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </li>
          </ul>
          <button v-if="scienceArticles.length > MAX_VISIBLE" type="button" class="eo-resources__more" @click="showAllArticles = !showAllArticles">
            <span>{{ showAllArticles ? 'Свернуть' : `Показать все статьи (${scienceArticles.length})` }}</span>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :class="{ 'eo-resources__more-icon--open': showAllArticles }"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
        </div>

        <div>
          <header class="eo-resources__head eo-reveal">
            <span class="eo-resources__badge eo-resources__badge--blue">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            </span>
            <h2>Документы и сертификаты</h2>
          </header>
          <ul class="eo-resources__list">
            <li v-for="(doc, i) in visibleDocs" :key="doc.file" class="eo-reveal" :style="`--eo-delay: ${i * 80}ms`">
              <a
                href="#"
                class="eo-res-card eo-res-card--doc"
                @click.prevent="openModal(doc)"
              >
                <h3>{{ doc.title }}</h3>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/></svg>
              </a>
            </li>
          </ul>
          <button v-if="documents.length > MAX_VISIBLE" type="button" class="eo-resources__more" @click="showAllDocs = !showAllDocs">
            <span>{{ showAllDocs ? 'Свернуть' : `Показать все документы (${documents.length})` }}</span>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :class="{ 'eo-resources__more-icon--open': showAllDocs }"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Document Preview Modal -->
    <Teleport to="body">
      <div v-if="modalOpen" class="eo-doc-modal eo-doc-modal--open" role="dialog" aria-modal="true" :aria-labelledby="'eoDocModalTitle'" @keydown.esc="closeModal">
        <div class="eo-doc-modal__backdrop" @click="closeModal"></div>
        <div class="eo-doc-modal__dialog" role="document" ref="dialogEl">
          <header class="eo-doc-modal__head">
            <h3 class="eo-doc-modal__title" id="eoDocModalTitle">{{ activeDoc?.title }}</h3>
            <div class="eo-doc-modal__actions">
              <a class="eo-doc-modal__btn eo-doc-modal__btn--open" :href="activeDoc?.file" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                <span>Открыть в новой вкладке</span>
              </a>
              <button class="eo-doc-modal__btn eo-doc-modal__btn--close" type="button" @click="closeModal" aria-label="Закрыть">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>
          </header>
          <div class="eo-doc-modal__body">
            <div v-if="iframeLoading" class="eo-doc-modal__body-loader">Загрузка документа…</div>
            <iframe v-if="!iframeFailed" :src="activeDoc?.file" @load="onIframeLoad" @error="onIframeError"></iframe>
            <div v-if="iframeFailed" class="eo-doc-modal__fallback">
              <p>Предпросмотр этого документа недоступен прямо на сайте (внешний источник блокирует встраивание). Откройте файл в новой вкладке.</p>
              <a class="eo-doc-modal__btn eo-doc-modal__btn--primary" :href="activeDoc?.file" target="_blank" rel="noopener">Открыть документ</a>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'

const MAX_VISIBLE = 4

const scienceArticles = [
  {
    href: 'https://www.nsktv.ru/news/technology/v_novosibirskoy_oblasti_obnaruzhili_zalezhi_unikalnogo_sapropelya/',
    source: 'NSKTV.RU',
    title: 'Обнаружение залежей уникального сапропеля в Новосибирской области'
  },
  {
    href: 'https://www.igm.nsc.ru/index.php/novost/raznoe/item/1649-scientists-have-studied-sapropels-of-the-novosibirsk-region',
    source: 'Институт геологии им. В. С. Соболева',
    title: 'Учёные исследовали сапропели Новосибирской области'
  },
  {
    href: 'https://cloud.mail.ru/public/Qh5a/Xvje54H3S',
    source: 'Наука в России',
    title: 'Сапропели: богатства со дна озёр'
  },
  {
    href: 'https://cloud.mail.ru/public/ZCBU/SybNKwvBC',
    source: 'Геохимия',
    title: 'Геохимические особенности голоценового разреза сапропеля'
  }
]

const documents = [
  { title: 'Протокол испытаний № 34680-МС-2024 от 11.12.2024', file: '/documents/Протокол испытаний № 34680-МС-2024 от 11.12.2024.pdf' },
  { title: 'Лицензия на пользование недрами', file: '/documents/Лицензия_на_пользование_недрами_№НОВ_80199_от_02_12_16г.pdf' },
  { title: 'Сертификат соответствия от 16.11.2016 г.', file: '/documents/Сертификат соответствия от 16.11.2016 г..pdf' },
  { title: 'Сертификат соответствия от 11.12.2024 г.', file: '/documents/Сертификат соответствия от 11.12.2024 г..pdf' }
]

const showAllArticles = ref(false)
const showAllDocs = ref(false)
const visibleArticles = computed(() => showAllArticles.value ? scienceArticles : scienceArticles.slice(0, MAX_VISIBLE))
const visibleDocs = computed(() => showAllDocs.value ? documents : documents.slice(0, MAX_VISIBLE))

const modalOpen = ref(false)
const activeDoc = ref(null)
const iframeLoading = ref(true)
const iframeFailed = ref(false)
const dialogEl = ref(null)
let iframeTimer = null

function openModal(doc) {
  activeDoc.value = doc
  iframeLoading.value = true
  iframeFailed.value = false
  modalOpen.value = true
  document.body.classList.add('eo-doc-modal-lock')
  clearTimeout(iframeTimer)
  iframeTimer = setTimeout(() => {
    if (iframeLoading.value) iframeFailed.value = true
  }, 6000)
  nextTick(() => {
    const closeBtn = dialogEl.value?.querySelector('.eo-doc-modal__btn--close')
    if (closeBtn) closeBtn.focus()
  })
}

function closeModal() {
  modalOpen.value = false
  activeDoc.value = null
  document.body.classList.remove('eo-doc-modal-lock')
  clearTimeout(iframeTimer)
}

function onIframeLoad() {
  iframeLoading.value = false
  clearTimeout(iframeTimer)
}

function onIframeError() {
  iframeLoading.value = false
  iframeFailed.value = true
  clearTimeout(iframeTimer)
}
</script>

<style scoped>
.eo-resources__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 56px;
}
@media (min-width: 960px) {
  .eo-resources__grid { grid-template-columns: 1fr 1fr; gap: 64px; }
}
.eo-resources__head {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 28px;
}
.eo-resources__head h2 {
  color: var(--eo-text);
  font-size: clamp(24px, 3vw, 32px);
  font-weight: 700;
  margin: 0;
}
.eo-resources__badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 14px;
}
.eo-resources__badge--amber { background: var(--eo-amber-soft); color: var(--eo-amber); }
.eo-resources__badge--blue  { background: var(--eo-blue-soft); color: var(--eo-blue); }
.eo-resources__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.eo-res-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 22px 24px;
  border-radius: var(--eo-radius-md);
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid var(--eo-border);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: var(--eo-text);
  box-shadow: 0 6px 20px rgba(15, 23, 42, 0.05);
  transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
}
.eo-res-card > div, .eo-res-card > h3 { min-width: 0; }
.eo-res-card:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.10);
}
.eo-res-card--article:hover { border-color: rgba(0, 66, 37, 0.55); }
.eo-res-card--article:hover h3 { color: var(--eo-accent-deep); }
.eo-res-card--article:hover svg { color: var(--eo-accent-deep); }
.eo-res-card--doc:hover { border-color: rgba(37, 99, 235, 0.45); }
.eo-res-card--doc:hover h3 { color: var(--eo-blue); }
.eo-res-card--doc:hover svg { color: var(--eo-blue); }
.eo-res-card__source {
  display: block;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--eo-accent-deep);
  margin-bottom: 8px;
}
.eo-res-card h3 {
  color: var(--eo-text);
  font-size: 17px;
  font-weight: 600;
  line-height: 1.4;
  margin: 0;
  overflow-wrap: anywhere;
  transition: color 0.2s;
}
.eo-res-card--doc h3 { color: var(--eo-text); font-weight: 500; font-size: 16px; }
.eo-res-card svg { color: var(--eo-text-dim); flex-shrink: 0; transition: color 0.2s; }
.eo-resources__more {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  padding: 10px 18px;
  border-radius: 999px;
  border: 1px solid var(--eo-border-strong);
  background: rgba(255, 255, 255, 0.6);
  color: var(--eo-accent-deep);
  font-family: var(--eo-font);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s, transform 0.2s;
}
.eo-resources__more:hover { background: rgba(255, 255, 255, 0.95); border-color: rgba(0, 66, 37, 0.45); transform: translateY(-1px); }
.eo-resources__more svg { transition: transform 0.3s; }
.eo-resources__more-icon--open { transform: rotate(180deg); }

/* Modal */
.eo-doc-modal {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: none;
  align-items: center;
  justify-content: center;
  padding: clamp(12px, 2.4vw, 32px);
  font-family: var(--eo-font);
}
.eo-doc-modal--open { display: flex; }
.eo-doc-modal__backdrop {
  position: absolute;
  inset: 0;
  background: rgba(20, 24, 30, 0.72);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  animation: eoDocFade 0.25s var(--eo-ease);
}
.eo-doc-modal__dialog {
  position: relative;
  z-index: 1;
  width: min(1100px, 100%);
  height: min(88vh, 820px);
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: var(--eo-radius-md);
  box-shadow: 0 30px 80px rgba(15, 23, 42, 0.35);
  overflow: hidden;
  animation: eoDocPop 0.3s var(--eo-ease);
}
.eo-doc-modal__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 20px;
  border-bottom: 1px solid var(--eo-border);
  background: #fff;
  flex-shrink: 0;
}
.eo-doc-modal__title {
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  color: var(--eo-text);
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.eo-doc-modal__actions { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
.eo-doc-modal__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 10px;
  border: 1px solid var(--eo-border);
  background: #fff;
  color: var(--eo-text);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s, color 0.2s;
}
.eo-doc-modal__btn:hover { background: var(--eo-bg); border-color: var(--eo-border-strong); color: var(--eo-accent-deep); }
.eo-doc-modal__btn--close { padding: 8px; }
.eo-doc-modal__btn--primary { background: var(--eo-accent); border-color: var(--eo-accent); color: #fff; }
.eo-doc-modal__btn--primary:hover { background: var(--eo-accent-hover); border-color: var(--eo-accent-hover); color: #fff; }
.eo-doc-modal__body {
  position: relative;
  flex: 1 1 auto;
  overflow: auto;
  background: #f1f4f8;
  display: flex;
  align-items: stretch;
  justify-content: center;
}
.eo-doc-modal__body iframe { width: 100%; height: 100%; border: 0; display: block; background: #fff; }
.eo-doc-modal__body-loader {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--eo-text-dim);
  font-size: 14px;
}
.eo-doc-modal__fallback { padding: 24px; text-align: center; background: #fff; width: 100%; }
.eo-doc-modal__fallback p { margin: 0 0 14px; color: var(--eo-text-muted); font-size: 14px; line-height: 1.55; }

@media (max-width: 760px) {
  .eo-resources__grid { gap: 40px; }
  .eo-res-card { align-items: flex-start; gap: 12px; }
}
@media (max-width: 640px) {
  .eo-doc-modal__dialog { width: 100%; height: auto; min-height: min(70vh, 520px); }
  .eo-doc-modal__head { align-items: flex-start; flex-direction: column; padding: 14px 16px; }
  .eo-doc-modal__actions { width: 100%; justify-content: space-between; }
  .eo-doc-modal__title { white-space: normal; }
}
@media (max-width: 560px) {
  .eo-res-card { flex-direction: column; }
  .eo-res-card svg { align-self: flex-start; }
  .eo-doc-modal__btn--open span { display: none; }
  .eo-doc-modal__btn--open { padding: 8px; }
}

@keyframes eoDocFade { from { opacity: 0 } to { opacity: 1 } }
@keyframes eoDocPop { from { opacity: 0; transform: translateY(16px) scale(0.98); } to { opacity: 1; transform: none; } }
</style>
