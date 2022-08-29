const navBtn = document.querySelector('.navigation__button--mobile');

const mobileNav = document.querySelector('.mobile__nav');

navBtn.addEventListener('click', function () {
    mobileNav.classList.toggle('mobile__nav--active');
    navBtn.classList.toggle('navigation__button--close');
})