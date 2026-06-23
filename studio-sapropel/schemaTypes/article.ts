import {defineType, defineField, defineArrayMember} from 'sanity'

// Транслитерация кириллицы в латиницу для красивых URL-адресов (slug).
const translitMap: Record<string, string> = {
  а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'e', ж: 'zh', з: 'z',
  и: 'i', й: 'y', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r',
  с: 's', т: 't', у: 'u', ф: 'f', х: 'h', ц: 'ts', ч: 'ch', ш: 'sh',
  щ: 'sch', ъ: '', ы: 'y', ь: '', э: 'e', ю: 'yu', я: 'ya',
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .split('')
    .map((char) => (char in translitMap ? translitMap[char] : char))
    .join('')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 96)
}

export const CATEGORIES = [
  {title: 'Агрономия', value: 'agro'},
  {title: 'Наука', value: 'science'},
  {title: 'Практика', value: 'cases'},
  {title: 'Новости', value: 'news'},
]

export const article = defineType({
  name: 'article',
  title: 'Статья',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      validation: (rule) => rule.required().min(8).max(140),
    }),
    defineField({
      name: 'slug',
      title: 'Адрес страницы (slug)',
      description: 'Часть ссылки после /articles/. Нажмите «Generate», чтобы создать автоматически из заголовка.',
      type: 'slug',
      options: {source: 'title', maxLength: 96, slugify},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Категория',
      type: 'string',
      options: {list: CATEGORIES, layout: 'radio'},
      initialValue: 'agro',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Дата публикации',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Обложка',
      description: 'Главное изображение статьи. Рекомендуемое соотношение 16:9.',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Описание изображения (alt)',
          type: 'string',
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Краткое описание',
      description: 'Короткий анонс для карточки в списке и для поисковиков (1–2 предложения).',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required().min(40).max(280),
    }),
    defineField({
      name: 'author',
      title: 'Автор',
      type: 'string',
      initialValue: 'Редакция «Эко Органика»',
    }),
    defineField({
      name: 'lead',
      title: 'Вводный абзац (лид)',
      description: 'Выделенный вступительный текст в начале статьи.',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required().min(40),
    }),
    defineField({
      name: 'body',
      title: 'Текст статьи',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            {title: 'Обычный', value: 'normal'},
            {title: 'Заголовок 2', value: 'h2'},
            {title: 'Заголовок 3', value: 'h3'},
            {title: 'Цитата', value: 'blockquote'},
          ],
          lists: [
            {title: 'Маркированный список', value: 'bullet'},
            {title: 'Нумерованный список', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: 'Жирный', value: 'strong'},
              {title: 'Курсив', value: 'em'},
            ],
            annotations: [
              defineArrayMember({
                name: 'link',
                title: 'Ссылка',
                type: 'object',
                fields: [
                  defineField({
                    name: 'href',
                    title: 'URL',
                    type: 'url',
                    validation: (rule) =>
                      rule.uri({allowRelative: true, scheme: ['http', 'https', 'mailto', 'tel']}),
                  }),
                ],
              }),
            ],
          },
        }),
        defineArrayMember({
          type: 'image',
          title: 'Изображение в тексте',
          options: {hotspot: true},
          fields: [
            defineField({name: 'alt', title: 'Описание (alt)', type: 'string'}),
          ],
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'related',
      title: 'Похожие статьи',
      description: 'До 3 статей в блоке «Читайте также». Если не выбрать — подставятся свежие автоматически.',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'article'}]})],
      validation: (rule) => rule.max(3),
    }),
  ],
  orderings: [
    {
      title: 'Дата публикации (новые сверху)',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
  ],
  preview: {
    select: {title: 'title', category: 'category', media: 'image', date: 'publishedAt'},
    prepare({title, category, media, date}) {
      const cat = CATEGORIES.find((c) => c.value === category)?.title ?? category
      const when = date ? new Date(date).toLocaleDateString('ru-RU') : ''
      return {title, subtitle: [cat, when].filter(Boolean).join(' · '), media}
    },
  },
})
