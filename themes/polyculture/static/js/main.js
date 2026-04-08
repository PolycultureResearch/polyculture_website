// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
  var toggle = document.querySelector('.nav__toggle');
  var menu = document.querySelector('.nav__menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function() {
      var isOpen = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }
});
