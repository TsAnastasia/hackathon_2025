//TO DO: data from server
const categories = [
  {linkImage: "", title: "Дом"},
  {linkImage: "", title: "Улица"},
  {linkImage: "", title: "Фонарь"},
];

const templaleInitiativeCard = page.querySelector('.templeteCategoryCard').content;
const sections = [...page.querySelectorAll('.section')];
const categoriesSection = page.querySelector('.categories');
const addInitiativeSection = page.querySelector('.addInitiative');
const successSection = page.querySelector('.success');
const categoriesContainer = page.querySelector('.categories__list');
const navLinkInitiativeContainer = page.querySelector('.nav__item_type_initiative');
const navLinkCategoryContainer = page.querySelector('.nav__item_type_category');
const formContainer = document.forms.addInitiative;

//category: title, description
const createCategoryCard = (category) => {
  const newCard = templaleInitiativeCard.cloneNode(true);
  const imageContainer = newCard.querySelector('.categoryCard__image');
  const titleContainer = newCard.querySelector('.categoryCard__title');
  const container = newCard.querySelector('.categoryCard');
  imageContainer.src = category.linkImage;
  titleContainer.textContent = category.title;
  container.addEventListener('click', () => {
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

navLinkCategoryContainer.addEventListener('click', () => {
  backtoCategory();
});

formContainer.addEventListener('submit', (evt) => {
  evt.preventDefault();
  submitFormAddInitiative();
});

addCategoryCards(categories, categoriesContainer);