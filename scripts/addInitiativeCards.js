const templaleInitiativeCard = page.querySelector('.templeteInitiativeCard').content;
const commonCardsContainer = page.querySelector('.initiativesCommon__list');
const customCardsContainer = page.querySelector('.initiativesCustom__list');

const createInitiativeCard = (initiative) => {
  const newCard = templaleInitiativeCard.cloneNode(true);
  newCard.querySelector('.initiativeCard__image').src = initiative.imageLink;
  newCard.querySelector('.initiativeCard__title').textContent = initiative.title;
  newCard.querySelector('.initiativeCard__qoute').textContent = initiative.qoute;
  newCard.querySelector('.initiativeCard__type').classList.add(`initiativeCard__type_value_${initiative.type}`);
  newCard.querySelector('.initiativeCard__date').textContent = initiative.date;
  return newCard;
};

const addInitiativeCards = (cards, container) => {
  cards.reverse().forEach((item) => { 
    container.prepend( createInitiativeCard(item) );
  });
};
