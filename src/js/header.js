const openMenuBtn = document.querySelector('.js-open-menu');
const closeMenuBtn = document.querySelector('.js-close-menu')
const menu = document.querySelector('.js-menu')
const body = document.body;
const mobileLinks = document.querySelectorAll('.mobile-menu__link');

openMenuBtn.addEventListener('click', () => {
    menu.classList.add('is-open');
    body.classList.add('no-scroll');
});

closeMenuBtn.addEventListener('click', () => {
    menu.classList.add('closing');       
    body.classList.remove('no-scroll');  

    setTimeout(() => {
        menu.classList.remove('is-open', 'closing'); 
    }, 200); 
});

 
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('is-open');
    body.classList.remove('no-scroll');
  });
});