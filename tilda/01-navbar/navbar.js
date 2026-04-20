(function () {
  var nav = document.getElementById('eoNav');
  if (!nav || nav.dataset.inited) return;
  nav.dataset.inited = '1';

  var burger = nav.querySelector('.eo-nav__burger');
  var mobile = nav.querySelector('.eo-nav__mobile');

  var onScroll = function () {
    nav.classList.toggle('eo-nav--scrolled', window.scrollY > 20);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  burger.addEventListener('click', function () {
    var open = nav.getAttribute('data-open') === 'true';
    nav.setAttribute('data-open', open ? 'false' : 'true');
    burger.setAttribute('aria-expanded', open ? 'false' : 'true');
    if (mobile) mobile.hidden = open;
  });

  mobile && mobile.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.setAttribute('data-open', 'false');
      burger.setAttribute('aria-expanded', 'false');
      mobile.hidden = true;
    });
  });
})();
