document.documentElement.classList.add('js-ready');

const menuToggle = document.querySelector('.menu-toggle');
const globalNav = document.querySelector('.global-nav');
const year = document.getElementById('year');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && globalNav) {
  const closeMenu = () => {
    globalNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = globalNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  globalNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) closeMenu();
  });
}

const revealItems = document.querySelectorAll('.reveal');

if (reduceMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });

  revealItems.forEach((item) => observer.observe(item));
}
