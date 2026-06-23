import { watchEffect } from 'vue'

const SITE_NAME = 'Эко Органика'
const BASE_URL = 'https://ecoorganica54.ru'
const DEFAULT_TITLE = 'Эко Органика — Природная сила для вашего урожая'
const DEFAULT_DESC =
  'Сапропель — натуральное органическое удобрение из озера Минзелинское. Повышает урожайность до 120%. ООО «Эко Органика», Новосибирск.'
const DEFAULT_IMAGE = `${BASE_URL}/logo.png`

function absolute(url) {
  if (!url) return DEFAULT_IMAGE
  return /^https?:\/\//.test(url) ? url : `${BASE_URL}${url.startsWith('/') ? '' : '/'}${url}`
}

function upsertMeta(attr, key, content) {
  if (typeof document === 'undefined') return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertCanonical(href) {
  if (typeof document === 'undefined') return
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Set document title, description, Open Graph / Twitter tags and canonical URL.
 */
export function setMeta({ title, description, image, path, type = 'website' } = {}) {
  const fullTitle = title ? `${title} — ${SITE_NAME}` : DEFAULT_TITLE
  const desc = description || DEFAULT_DESC
  const url = `${BASE_URL}${path || (typeof location !== 'undefined' ? location.pathname : '/')}`
  const img = absolute(image)

  if (typeof document !== 'undefined') document.title = fullTitle

  upsertMeta('name', 'description', desc)

  upsertMeta('property', 'og:type', type)
  upsertMeta('property', 'og:title', fullTitle)
  upsertMeta('property', 'og:description', desc)
  upsertMeta('property', 'og:url', url)
  upsertMeta('property', 'og:image', img)

  upsertMeta('name', 'twitter:card', 'summary_large_image')
  upsertMeta('name', 'twitter:title', fullTitle)
  upsertMeta('name', 'twitter:description', desc)
  upsertMeta('name', 'twitter:image', img)

  upsertCanonical(url)
}

/** Insert or replace a JSON-LD <script> block by id. */
export function setJsonLd(id, data) {
  if (typeof document === 'undefined') return
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

export function removeJsonLd(id) {
  if (typeof document === 'undefined') return
  document.getElementById(id)?.remove()
}

/** Reactive helper: re-applies meta whenever the getter's deps change. */
export function useMeta(getter) {
  watchEffect(() => setMeta(getter()))
}

export { BASE_URL, SITE_NAME }
