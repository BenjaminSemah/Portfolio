const hamburgerMenu = document.querySelector('.hamburger-menu');
const closeBtn = document.querySelector('.closeBtn-two');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuItem = document.querySelectorAll('.mobile-menu-item a');

function showMobileMenu() {
  mobileMenu.setAttribute('style', 'display:block');
}

function removeMobileMenu() {
  mobileMenu.setAttribute('style', 'display:none');
}

hamburgerMenu.addEventListener('click', showMobileMenu);
closeBtn.addEventListener('click', removeMobileMenu);

mobileMenuItem.forEach((item) => {
  item.addEventListener('click', removeMobileMenu);
});
