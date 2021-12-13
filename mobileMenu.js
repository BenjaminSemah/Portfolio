let hamburgerMenu = document.querySelector('.hamburger-menu');
let closeBtn = document.querySelector('.closeBtn');
let mobileMenu = document.querySelector('.mobile-menu');
let mobileMenuItem = document.querySelectorAll('.mobile-menu-item');

hamburgerMenu.addEventListener('click', showMobileMenu);
closeBtn.addEventListener('click', removeMobileMenu);
mobileMenu.addEventListener('click', removeMobileMenu);

function showMobileMenu() {
    mobileMenu.setAttribute('style', 'display:block');
}

function removeMobileMenu() {
    mobileMenu.setAttribute('style', 'display:none');
}
