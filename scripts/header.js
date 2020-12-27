//TO DO: data from server
const person = {
  name: 'Валисий',
  type: "гражданин",
  avatarLink: './images/avatars/avatars-000002.jpg',
  countAlert: 1,
  countInitiative: 245,
}

const page = document.querySelector('.page');
const header = document.querySelector('.header');
const buttonMenu = header.querySelector('.header__button_type_menu');
const menu = page.querySelector('.page__menu');
const countAlert = menu.querySelector('.menu__count_type_alert');
const countInitiatives = menu.querySelector('.menu__count_type_initiatives')
const menuVisibleClass = 'page__menu_visible';

const openMenu = () => {
  countAlert.textContent = person.countAlert;
  countInitiatives.textContent = person.countInitiative;
  pageContent.classList.add('page__content_darking');
  menu.classList.add(menuVisibleClass);
  page.addEventListener('click', closeMenu);
};

const closeMenu = (evt) => {
  console.log('hi');
  if (!evt.target.closest('.menu')){
    pageContent.classList.remove('page__content_darking');
    menu.classList.remove(menuVisibleClass);
    page.removeEventListener('click', closeMenu);
  };
};

buttonMenu.addEventListener('click', (evt) => {
  evt.stopPropagation();
  openMenu();
});