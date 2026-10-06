document.addEventListener('DOMContentLoaded', function() {
  var header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  var menuBtn = document.querySelector('.mobile-menu-btn');
  var mobileNav = document.querySelector('.mobile-nav');
  var mobileOverlay = document.querySelector('.mobile-nav-overlay');
  var mobileClose = document.querySelector('.mobile-nav-close');

  function openMobileMenu() {
    if (mobileNav) mobileNav.classList.add('open');
    if (mobileOverlay) mobileOverlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (mobileNav) mobileNav.classList.remove('open');
    if (mobileOverlay) mobileOverlay.style.display = 'none';
    document.body.style.overflow = '';
  }

  if (menuBtn) menuBtn.addEventListener('click', openMobileMenu);
  if (mobileClose) mobileClose.addEventListener('click', closeMobileMenu);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);
});
