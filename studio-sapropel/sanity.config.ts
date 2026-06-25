import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {ruRULocale} from './locale/ruRU'

export default defineConfig({
  name: 'default',
  title: 'Эко Органика',

  projectId: '86beff8b',
  dataset: 'production',

  // Русский язык интерфейса по умолчанию (непереведённые строки — на английском).
  i18n: {
    locales: [ruRULocale],
  },

  plugins: [
    structureTool({
      title: 'Контент',
      structure: (S) =>
        S.list()
          .title('Контент')
          .items([S.documentTypeListItem('article').title('Статьи')]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
