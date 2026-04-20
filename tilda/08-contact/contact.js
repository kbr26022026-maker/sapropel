/*
  Визуальная заготовка формы. Для реальной отправки подключите
  штатную форму Tilda (T830/T840) и скопируйте только визуальную часть,
  либо замените fetch ниже на свой endpoint/Webhook.
*/
(function () {
  var form = document.getElementById('eoContactForm');
  if (!form || form.dataset.inited) return;
  form.dataset.inited = '1';

  var success = form.querySelector('.eo-contact__success');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var btn = form.querySelector('button[type="submit"]');
    if (btn) btn.disabled = true;

    // TODO: подменить на реальный endpoint
    // var data = new FormData(form);
    // fetch('/your-endpoint', { method: 'POST', body: data })

    setTimeout(function () {
      form.reset();
      if (success) success.hidden = false;
      if (btn) btn.disabled = false;
    }, 400);
  });
})();
