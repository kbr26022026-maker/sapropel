import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'

// Project values are public (no secrets). They can be overridden via env vars.
export const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || '86beff8b'
export const dataset = import.meta.env.VITE_SANITY_DATASET || 'production'

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: true, // fast, cached reads from the public dataset
})

const builder = createImageUrlBuilder(client)

/** Build a CDN URL for a Sanity image asset (chainable: .width(), .height()...). */
export function urlFor(source) {
  return builder.image(source)
}
