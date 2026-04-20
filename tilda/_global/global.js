/* === Эко Органика: глобальный скрипт. Вставить перед </body> в <script>...</script> === */
(function () {
  if (window.__eoRevealInit) return;
  window.__eoRevealInit = true;

  var run = function () {
    var items = document.querySelectorAll('.eo-reveal:not(.eo-in)');
    if (!items.length) return;

    if (!('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('eo-in'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('eo-in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    items.forEach(function (el) { io.observe(el); });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }

  // Повторный запуск при динамической вставке Tilda-блоков
  new MutationObserver(run).observe(document.body, { childList: true, subtree: true });
})();
