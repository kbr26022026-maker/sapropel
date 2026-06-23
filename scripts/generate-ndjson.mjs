import { writeFileSync } from 'node:fs'
import { articles } from './legacy-articles.mjs'
import { htmlToPortableText } from './html-to-portable-text.mjs'

function refKey() {
  return Math.random().toString(36).slice(2, 12)
}

// NOTE: ids must NOT contain a dot — Sanity treats `prefix.id` as a draft/version
// and hides it from normal (published) queries. The slug is a safe, deterministic id.
const docs = articles.map((a) => ({
  _id: a.slug,
  _type: 'article',
  title: a.title,
  slug: { _type: 'slug', current: a.slug },
  category: a.cat,
  publishedAt: new Date(`${a.date}T09:00:00.000Z`).toISOString(),
  excerpt: a.excerpt,
  author: a.author,
  lead: a.lead,
  // The Sanity import tool downloads this URL and creates a real image asset.
  image: { _type: 'image', _sanityAsset: `image@${a.image}` },
  body: htmlToPortableText(a.body),
  related: (a.related || []).map((r) => ({
    _type: 'reference',
    _key: refKey(),
    _ref: r.slug,
  })),
}))

const ndjson = docs.map((d) => JSON.stringify(d)).join('\n') + '\n'
const outPath = new URL('./articles.ndjson', import.meta.url)
writeFileSync(outPath, ndjson)
console.log(`Wrote ${docs.length} documents to ${outPath.pathname}`)
