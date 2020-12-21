//TO DO: data from server
const categories = [
  {name: "Двор", icon: "./images/category/yard.svg"},
  {name: "Дом", icon: "./images/category/home.svg"},
  {name: "Дорога", icon: "./images/category/road.svg"},
  {name: "Инфраструктура", icon: "./images/category/infrastructure.svg"},
  {name: "Транспорт", icon: "./images/category/transport.svg"},
  {name: "Строительство", icon: "./images/category/bulding.svg"},
  {name: "Торговля и реклама", icon: "./images/category/marketing.svg"},
  {name: "Госучереждения и общественные организации", icon: "./images/category/institution.svg"},
  {name: "Поликлиники", icon: "./images/category/hospital.svg"},
  {name: "Эко", icon: "./images/category/eco.svg"}
];

const templeteCategoryCard = page.querySelector('.templeteCategoryCard').content;
const sections = [...page.querySelectorAll('.section')];
const categoriesSection = page.querySelector('.categories');
const addInitiativeSection = page.querySelector('.addInitiative');
const previeSection = page.querySelector('.previe');
const successSection = page.querySelector('.success');
const categoriesContainer = page.querySelector('.categories__list');
const navLinkInitiativeContainer = page.querySelector('.nav__item_type_initiative');
const navLinkCategoryContainer = page.querySelector('.nav__item_type_category');
const formContainer = document.forms.addInitiative;
const buttonPrevie = page.querySelector('.addInitiative__buttonPrevie');
const buttonBack = page.querySelector(".previe__buttonBack");

//category: title, description
const createCategoryCard = (category) => {
  const newCard = templeteCategoryCard.cloneNode(true);
  const imageContainer = newCard.querySelector('.categoryCard__image');
  const titleContainer = newCard.querySelector('.categoryCard__title');
  imageContainer.src = category.icon;
  imageContainer.alt = category.name;
  titleContainer.textContent = category.name;
  newCard.addEventListener('click', () => {
    chooseCategory(category);
  });
  return newCard;
};

const changeSection = (newSection) =>{
  sections.forEach((section) => {
    section.classList.add('section_hidden');
  });
  newSection.classList.remove('section_hidden');
};

const chooseCategory = (category) => {
  changeSection(addInitiativeSection);
  navLinkInitiativeContainer.classList.remove('nav__item_disable');
};

const addCategoryCards = (categories, container) => {
  categories.reverse().forEach((item) => { 
    container.prepend( createCategoryCard(item) );
  });
};

const backtoCategory = () => {
  changeSection(categoriesSection);
  navLinkInitiativeContainer.classList.add('nav__item_disable');
};

const submitFormAddInitiative = () => {

  changeSection(successSection);
};

const showPrevie = () => {
  
  changeSection(previeSection);
}


navLinkCategoryContainer.addEventListener('click', () => {
  backtoCategory();
});

// formContainer.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   submitFormAddInitiative();
// });

// buttonPrevie.addEventListener('click', () =>{
//   showPrevie();
// });

// buttonBack.addEventListener('click', () =>{
//   changeSection(addInitiativeSection);
// });

addCategoryCards(categories, categoriesContainer);