import { toHTML } from '@portabletext/to-html'
import { client, urlFor } from './client.js'

const SITE_HOST = 'ecoorganica54.ru'
const FALLBACK_IMAGE = '/logo.png'

const CATEGORY_LABELS = {
  agro: 'Агрономия',
  science: 'Наука',
  cases: 'Практика',
  news: 'Новости',
}

const MONTHS = [
  'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
  'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',
]

function categoryLabel(cat) {
  return CATEGORY_LABELS[cat] || cat || ''
}

function formatDate(iso) {
  if (!iso) return ''
  const d = new Date(iso)
  return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`
}

function readTimeLabel(minutes) {
  return `${Math.max(1, Math.round(minutes || 0))} мин`
}

function coverUrl(image, w, h) {
  if (!image?.asset) return FALLBACK_IMAGE
  return urlFor(image).width(w).height(h).fit('crop').auto('format').url()
}

function escapeAttr(value = '') {
  return String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
}

// Render the Portable Text body to an HTML string so the existing article CSS
// (which styles h2/h3/p/ul/blockquote/a) keeps working with v-html.
const portableTextComponents = {
  marks: {
    link: ({ children, value }) => {
      const href = value?.href || '#'
      const external = /^https?:\/\//.test(href) && !href.includes(SITE_HOST)
      const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : ''
      return `<a href="${escapeAttr(href)}"${attrs}>${children}</a>`
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return ''
      const url = urlFor(value).width(1280).auto('format').url()
      return `<figure><img src="${escapeAttr(url)}" alt="${escapeAttr(value.alt || '')}" loading="lazy"></figure>`
    },
  },
}

function bodyToHtml(blocks) {
  return toHTML(blocks || [], { components: portableTextComponents })
}

function normalizeListItem(row) {
  return {
    slug: row.slug,
    cat: row.category,
    catLabel: categoryLabel(row.category),
    date: row.publishedAt ? row.publishedAt.slice(0, 10) : '',
    dateLabel: formatDate(row.publishedAt),
    readTime: readTimeLabel(row.readMinutes),
    title: row.title,
    excerpt: row.excerpt,
    image: coverUrl(row.image, 800, 450),
  }
}

const LIST_PROJECTION = `{
  "slug": slug.current,
  "category": category,
  "publishedAt": publishedAt,
  "title": title,
  "excerpt": excerpt,
  "image": image,
  "readMinutes": round(length(pt::text(body)) / 900)
}`

const LIST_QUERY = `*[_type == "article" && defined(slug.current)] | order(publishedAt desc) ${LIST_PROJECTION}`
const TEASER_QUERY = `*[_type == "article" && defined(slug.current)] | order(publishedAt desc)[0...3] ${LIST_PROJECTION}`
const ARTICLE_QUERY = `*[_type == "article" && slug.current == $slug][0]{
  "slug": slug.current,
  "category": category,
  "publishedAt": publishedAt,
  "title": title,
  "excerpt": excerpt,
  "author": author,
  "lead": lead,
  "image": image,
  "body": body,
  "readMinutes": round(length(pt::text(body)) / 900),
  "related": related[]->{ "slug": slug.current, "category": category, "title": title }
}`
const FALLBACK_RELATED_QUERY = `*[_type == "article" && defined(slug.current) && slug.current != $slug] | order(publishedAt desc)[0...3]{
  "slug": slug.current, "category": category, "title": title
}`

export async function fetchArticles() {
  const rows = await client.fetch(LIST_QUERY)
  return rows.map(normalizeListItem)
}

export async function fetchTeaserArticles() {
  const rows = await client.fetch(TEASER_QUERY)
  return rows.map(normalizeListItem)
}

export async function fetchArticleBySlug(slug) {
  const row = await client.fetch(ARTICLE_QUERY, { slug })
  if (!row) return null

  let related = (row.related || []).filter((r) => r && r.slug)
  if (related.length === 0) {
    related = await client.fetch(FALLBACK_RELATED_QUERY, { slug })
  }

  return {
    slug: row.slug,
    cat: row.category,
    catLabel: categoryLabel(row.category),
    date: row.publishedAt ? row.publishedAt.slice(0, 10) : '',
    dateLabel: formatDate(row.publishedAt),
    readTime: readTimeLabel(row.readMinutes),
    title: row.title,
    excerpt: row.excerpt,
    author: row.author || 'Редакция «Эко Органика»',
    lead: row.lead,
    image: coverUrl(row.image, 1200, 675),
    body: bodyToHtml(row.body),
    related: related.map((r) => ({
      slug: r.slug,
      cat: categoryLabel(r.category),
      title: r.title,
    })),
  }
}
