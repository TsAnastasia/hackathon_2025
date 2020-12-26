//TO DO: data from server
const person = {
  name: "Валисий",
  countAlert: 1,
  countInitiative: 245,
}

const page = document.querySelector('.page');
const header = document.querySelector('.header');
const buttonMenu = header.querySelector('.header__button_type_menu');
const menuContainer = header.querySelector('.header__menu');
const countAlert = header.querySelector('.menu__count_type_alert');
const countInitiatives = header.querySelector('.menu__count_type_initiatives')
const menuVisibleClass = 'header__menu_visible';

const openMenu = () => {
  countAlert.textContent = person.countAlert;
  countInitiatives.textContent = person.countInitiative;
  menuContainer.classList.add(menuVisibleClass);
  page.addEventListener('click', (evt) => {
    if (!evt.target.closest('.header__menu')) {
      closeMenu();
    };
  });
};

const closeMenu = () => {
  menuContainer.classList.remove(menuVisibleClass);
};

buttonMenu.addEventListener('click', (evt) => {
  evt.stopPropagation();
  if (menuContainer.classList.contains(menuVisibleClass)) {
    closeMenu();
  }else{
    openMenu();
  };
});