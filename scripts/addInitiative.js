//TO DO: data from server
const categories = [
  {linkImage: "", title: "Дом", id: "000-001"},
  {linkImage: "", title: "Улица", id: "000-002"},
  {linkImage: "", title: "Фонарь", id: "000-003"},
];

const page = document.querySelector('.page');
const templaleInitiativeCard = page.querySelector('.templeteCategoryCard').content;
const sections = [...page.querySelectorAll('.section')];
const categoriesSection = page.querySelector('.categories');
const addInitiativeSection = page.querySelector('.addInitiative');
const successSection = page.querySelector('.success');
const categoriesContainer = page.querySelector('.categories__list');
const navLinkInitiativeContainer = page.querySelector('.nav__link_type_initiative');
const navLinkCategoryContainer = page.querySelector('.nav__link_type_category');
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
  navLinkInitiativeContainer.classList.remove('nav__link_disable');
};

const addCategoryCards = (categories, container) => {
  categories.reverse().forEach((item) => { 
    container.prepend( createCategoryCard(item) );
  });
};

const backtoCategory = () => {
  changeSection(categoriesSection);
  navLinkInitiativeContainer.classList.add('nav__link_disable');
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