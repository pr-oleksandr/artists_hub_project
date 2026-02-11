const openMenuBtn = document.querySelector('.js-open-menu');
const closeMenuBtn = document.querySelector('.js-close-menu');
const menu = document.querySelector('.js-menu');
const body = document.body;
const html = document.documentElement;
const mobileLinks = document.querySelectorAll('.mobile-menu__link');

openMenuBtn.addEventListener('click', () => {
  menu.classList.add('is-open');
  body.classList.add('no-scroll');
  html.classList.add('no-scroll');
});

closeMenuBtn.addEventListener('click', () => {
  menu.classList.remove('is-open');
  body.classList.remove('no-scroll');
  html.classList.remove('no-scroll');
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('is-open');
    body.classList.remove('no-scroll');
    html.classList.remove('no-scroll');
  });
});
