(function () {
  var nav = document.getElementById('eoNav');
  if (!nav || nav.dataset.inited) return;
  nav.dataset.inited = '1';

  var burger = nav.querySelector('.eo-nav__burger');
  var mobile = nav.querySelector('.eo-nav__mobile');

  var syncState = function (open) {
    nav.setAttribute('data-open', open ? 'true' : 'false');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (mobile) mobile.hidden = !open;
    document.body.classList.toggle('eo-nav-lock', open);
  };

  var closeMenu = function () {
    syncState(false);
  };

  var toggleMenu = function () {
    syncState(nav.getAttribute('data-open') !== 'true');
  };

  syncState(nav.getAttribute('data-open') === 'true');

  var onScroll = function () {
    nav.classList.toggle('eo-nav--scrolled', window.scrollY > 20);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  burger.addEventListener('click', toggleMenu);

  mobile && mobile.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      closeMenu();
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.getAttribute('data-open') === 'true') {
      closeMenu();
      burger.focus();
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 960 && nav.getAttribute('data-open') === 'true') {
      closeMenu();
    }
  });
})();
