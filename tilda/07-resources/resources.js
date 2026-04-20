(function () {
  'use strict';

  function initDocPreview() {
    var modal = document.getElementById('eoDocModal');
    if (!modal || modal.dataset.eoInit === '1') return;
    modal.dataset.eoInit = '1';
    // Переносим модалку в <body>, чтобы она не была внутри stacking context секции
    if (modal.parentElement !== document.body) {
      document.body.appendChild(modal);
    }

    var body = modal.querySelector('#eoDocModalBody');
    var title = modal.querySelector('#eoDocModalTitle');
    var openBtn = modal.querySelector('.eo-doc-modal__btn--open');
    var fallback = modal.querySelector('#eoDocModalFallback');
    var fallbackLink = fallback.querySelector('a');
    var lastFocused = null;

    function close() {
      modal.classList.remove('eo-doc-modal--open');
      modal.setAttribute('aria-hidden', 'true');
      body.innerHTML = '';
      fallback.hidden = true;
      document.body.classList.remove('eo-doc-modal-lock');
      if (lastFocused && typeof lastFocused.focus === 'function') {
        try { lastFocused.focus(); } catch (e) {}
      }
    }

    function open(data) {
      lastFocused = document.activeElement;
      title.textContent = data.title || 'Документ';
      openBtn.href = data.externalUrl || data.src || '#';
      fallbackLink.href = data.externalUrl || data.src || '#';

      body.innerHTML = '<div class="eo-doc-modal__body-loader">Загрузка…</div>';
      fallback.hidden = true;

      if (!data.src) {
        body.innerHTML = '';
        fallback.hidden = false;
      } else if (data.type === 'image') {
        var img = new Image();
        img.alt = data.title || '';
        img.onload = function () { body.innerHTML = ''; body.appendChild(img); };
        img.onerror = function () { body.innerHTML = ''; fallback.hidden = false; };
        img.src = data.src;
      } else {
        var iframe = document.createElement('iframe');
        iframe.src = data.src;
        iframe.setAttribute('title', data.title || 'Документ');
        iframe.setAttribute('loading', 'lazy');
        // Если iframe не загрузится из-за X-Frame-Options, показываем fallback
        var failTimer = setTimeout(function () {
          // Heuristic: если через 6 сек iframe пустой — показать fallback
          try {
            var doc = iframe.contentDocument;
            if (!doc || !doc.body || doc.body.childNodes.length === 0) {
              fallback.hidden = false;
            }
          } catch (e) {
            // cross-origin — iframe всё равно может работать, ничего не делаем
          }
        }, 6000);
        iframe.addEventListener('load', function () { clearTimeout(failTimer); });
        body.innerHTML = '';
        body.appendChild(iframe);
      }

      modal.classList.add('eo-doc-modal--open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('eo-doc-modal-lock');
    }

    // Клики по карточкам документов
    document.addEventListener('click', function (e) {
      var card = e.target.closest('.eo-res-card--doc');
      if (!card) return;
      // Если нет data-preview — поведение по умолчанию (открыть в новой вкладке)
      var previewSrc = card.getAttribute('data-preview');
      var href = card.getAttribute('href');
      var type = (card.getAttribute('data-preview-type') || 'pdf').toLowerCase();
      var titleEl = card.querySelector('h3');
      var titleText = titleEl ? titleEl.textContent.trim() : 'Документ';

      // Если явно задан data-preview (даже пустой флаг-атрибут с href как источник)
      if (previewSrc !== null) {
        e.preventDefault();
        open({
          src: previewSrc || href,
          externalUrl: href,
          title: titleText,
          type: type
        });
      }
    });

    // Закрытие
    modal.addEventListener('click', function (e) {
      if (e.target.closest('[data-eo-doc-close]')) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('eo-doc-modal--open')) close();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDocPreview);
  } else {
    initDocPreview();
  }
  // На случай, если секция вставляется после загрузки (как в preview.html)
  window.eoInitDocPreview = initDocPreview;
})();
