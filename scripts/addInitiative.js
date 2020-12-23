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
const sectionHiddenClass = 'section_hidden';
const categoriesSection = page.querySelector('.categories');
const inputDataSection = page.querySelector('.inputData');
const successSection = page.querySelector('.success');
const categoriesContainer = page.querySelector('.categories__list');
const navLinkInitiativeContainer = page.querySelector('.nav__item_type_initiative');
const navLinkCategoryContainer = page.querySelector('.nav__item_type_category');
const formContainer = page.querySelector('.form');
const buttonPreview = page.querySelector(".form__previewButton");
const formElementCategory = formContainer.elements.category;
const commentContainer = page.querySelector(".form__item_type_textarea");
const previewContainer = page.querySelector('.form__preview');

const createCategoryCard = (category) => {
  const newCard = templeteCategoryCard.cloneNode(true);
  const imageContainer = newCard.querySelector('.categoryCard__image');
  const titleContainer = newCard.querySelector('.categoryCard__title');
  const cardContainer = newCard.querySelector('.categoryCard');
  imageContainer.src = category.icon;
  imageContainer.alt = category.name;
  titleContainer.textContent = category.name;
  cardContainer.addEventListener('click', () => {
    chooseCategory(category);
  });
  return newCard;
};

const chooseCategory = (category) => {
  openForm(formContainer);
  formElementCategory.value = category.name;
  navLinkInitiativeContainer.classList.remove('nav__item_disable');
  changeSection(inputDataSection);
};

const changeSection = (newSection) =>{
  sections.forEach((section) => {
    section.classList.add(sectionHiddenClass);
  });
  newSection.classList.remove(sectionHiddenClass);
};

const addCategoryCards = (categories, container) => {
  categories.reverse().forEach((item) => { 
    container.prepend( createCategoryCard(item) );
  });
};

const backtoCategory = () => {
  navLinkInitiativeContainer.classList.add('nav__item_disable');
  changeSection(categoriesSection);
};

const togglePreview = () => {
  if (buttonPreview.classList.contains('form__previewButton_open')) {
    previewContainer.textContent = '';
  }else{
    previewContainer.append(transformTextToQuote(commentContainer.value));
  };
  buttonPreview.classList.toggle('form__previewButton_open');
  previewContainer.classList.toggle('form__preview_hidden');
}

//TO DO: использовать одну цитату, несколько раз, а не каждого символа - своя цитата
const transformTextToQuote = (text) =>{
  const qoute = 'Cъешь ещё этих мягких французских булок, да выпей чаю';
  const resalt = document.createElement('div');
  const templateQuteContainer = document.createElement('p');
  templateQuteContainer.classList.add('quote');
  const simvolContainer = document.createElement('span');
  simvolContainer.classList.add('quote__bold');
  text.toLowerCase().split('').forEach((simvol) =>{
    const qouteContainer = templateQuteContainer.cloneNode(true);
    if (simvol === ' '){
      simvolContainer.textContent = '_';
      qouteContainer.append(simvolContainer.cloneNode(true));
    }else{
      simvolContainer.textContent = simvol;
      const index = qoute.indexOf(simvol);
      qouteContainer.append(qoute.slice(0, index));
      qouteContainer.append(simvolContainer.cloneNode(true));
      qouteContainer.append(qoute.slice(index + 1, qoute.length));
      qouteContainer.append('\n');
    };
    resalt.append(qouteContainer);
  })
  return resalt;
};

const submitFormAddInitiative = () => {

  changeSection(successSection);
};

navLinkCategoryContainer.addEventListener('click', backtoCategory);

buttonPreview.addEventListener('click', () =>{
  togglePreview();
});

// formContainer.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   submitFormAddInitiative();
// });

addCategoryCards(categories, categoriesContainer);