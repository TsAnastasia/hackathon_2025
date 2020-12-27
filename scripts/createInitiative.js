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
  buttonPreview.classList.remove('form__previewButton_open');
  previewContainer.classList.add('form__preview_hidden');
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

//TO DO: получение цитаты с сервера, передавать цитату в функцию
const transformTextToQuote = (text) =>{
  const initialQoute = 'щипцами брюки разлохмачу,\n гребёнкой волосы взъерошу.\nэффектно ожидать удачу\n до самой смерти я не брошу!';
  let qoute = initialQoute;
  const resalt = document.createElement('div');
  const templateQuteContainer = document.createElement('p');
  templateQuteContainer.classList.add('quote');
  const simvolContainer = document.createElement('span');
  simvolContainer.classList.add('quote__bold');
  let qouteContainer = templateQuteContainer.cloneNode(true);
  text.toLowerCase().split('').forEach((simvol) => {
    simvol === ' ' ? simvolContainer.textContent = '_' : simvolContainer.textContent = simvol;
    let index = qoute.indexOf(simvol);
    if (index >= 0) {
      qouteContainer.append(qoute.slice(0, index), simvolContainer.cloneNode(true));
      qoute = qoute.slice(index + 1, qoute.length);
    }else{
      qouteContainer.append(qoute, '\n');
      resalt.append(qouteContainer);
      qoute = initialQoute;
      index = qoute.indexOf(simvol);
      qouteContainer = templateQuteContainer.cloneNode(true);
      qouteContainer.append(qoute.slice(0, index), simvolContainer.cloneNode(true));
      qoute = qoute.slice(index + 1, qoute.length);
    }
  })
  qouteContainer.append(qoute, '\n');
  resalt.append(qouteContainer);
  return resalt;
};

const submitFormAddInitiative = () => {
  changeSection(successSection);
};

navLinkCategoryContainer.addEventListener('click', backtoCategory);

buttonPreview.addEventListener('click', () =>{
  togglePreview();
});

//TO DO: submit to server
formContainer.addEventListener('submit', (evt) => {
  evt.preventDefault();
  submitFormAddInitiative();
});

addCategoryCards(categories, categoriesContainer);