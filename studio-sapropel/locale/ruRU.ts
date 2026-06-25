import {defineLocale, defineLocaleResourceBundle} from 'sanity'

// Русская локализация интерфейса Studio (namespace `structure` — панели и
// действия над документом: публикация, создание, удаление и т.д.).
// Непереведённые строки автоматически показываются на английском (исходный язык).
const structureResources = defineLocaleResourceBundle({
  locale: 'ru-RU',
  namespace: 'structure',
  resources: {
    'action.publish.draft.label': 'Опубликовать',
    'action.publish.label': 'Опубликовать',
    'action.publish.published.label': 'Опубликовано',
    'action.publish.running.label': 'Публикация…',
    'action.publish.no-changes.tooltip': 'Нет неопубликованных изменений',
    'action.publish.disabled.not-ready': 'Операция не готова',
    'action.publish.validation-in-progress.label': 'Проверка документа…',
    'action.publish.validation-issues.tooltip':
      'Есть ошибки заполнения — их нужно исправить перед публикацией',
    'action.publish.validation-issues-toast.title': 'Ошибки заполнения',
    'action.publish.validation-issues-toast.description':
      'Исправьте ошибки заполнения перед публикацией',

    'action.unpublish.label': 'Снять с публикации',
    'action.unpublish.disabled.not-published': 'Документ не опубликован',

    'action.delete.label': 'Удалить',
    'action.delete.running.label': 'Удаление…',

    'action.duplicate.label': 'Дублировать',
    'action.duplicate.running.label': 'Дублирование…',

    'action.discard-changes.label': 'Отменить изменения',
    'action.discard-changes.confirm-dialog.header.text': 'Отменить изменения?',
    'action.discard-changes.confirm-dialog.confirm-discard-changes':
      'Точно отменить все изменения с момента последней публикации?',
    'action.discard-changes.confirm-dialog.confirm-discard-changes-draft':
      'Точно отменить все изменения и удалить черновик?',
    'action.discard-changes.disabled.no-change': 'В документе нет неопубликованных изменений',
    'action.discard-changes.disabled.not-published': 'Документ не опубликован',

    'pane-header.create-menu.label': 'Создать',
    'pane-header.create-new-button.tooltip': 'Создать новый документ',
    'pane-header.back-button.text': 'Назад',
    'pane-header.context-menu-button.tooltip': 'Показать меню',

    'panes.document-list-pane.no-documents-of-type.text': 'Документов этого типа пока нет',
    'panes.document-list-pane.no-documents.text': 'Ничего не найдено',

    'panes.document-operation-results.operation-success_publish':
      '<Strong>{{title}}</Strong> опубликован',
    'panes.document-operation-results.operation-success_delete': 'Документ успешно удалён',
    'panes.document-operation-results.operation-success_duplicate':
      'Документ успешно продублирован',
    'panes.document-operation-results.operation-success_unpublish':
      '<Strong>{{title}}</Strong> снят с публикации. Создан черновик из последней опубликованной версии.',

    'document-view.form-view.loading': 'Загрузка документа…',
    'document-view.form-view.form-title-fallback': 'Без названия',

    'changes.tab.review-changes': 'Изменения',
    'changes.tab.history': 'История',

    'pane-item.draft-status.has-draft.tooltip': 'Изменено <RelativeTime/>',
    'pane-item.published-status.has-published.tooltip': 'Опубликовано <RelativeTime/>',
    'status-bar.publish-status-button.last-published-time.tooltip':
      'Последняя публикация <RelativeTime/>',
  },
})

export const ruRULocale = defineLocale({
  id: 'ru-RU',
  title: 'Русский',
  weekInfo: {firstDay: 1, minimalDays: 4, weekend: [6, 7]},
  bundles: [structureResources],
})
