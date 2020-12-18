const page = document.querySelector('.page');
const header = document.querySelector('.header');
const buttonMenu = header.querySelector('.header__button_type_menu');
const menuContainer = header.querySelector('.header__nav');

const settingHeader = {
  navHiddenSelector: 'header__nav_hidden',
}

const toggleHeaderMenu = () => {
  menuContainer.classList.toggle(settingHeader.navHiddenSelector);
};

buttonMenu.addEventListener('click', toggleHeaderMenu);