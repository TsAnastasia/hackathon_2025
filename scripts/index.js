const commonInitiatives = [
  {linkImage: "", title: "Уборка снега", description: "Уборка снега sdjkgacfjkdsbv bkjsahdvjked basfvjk;  haejscfwkd.as n.ck safhkwejfcasnfksdjf cdsa cfjksdcsn.fckdlsv  cdsfvkjwasdfc sdakbfvjkdaskjvc  уборка снега"},
  {linkImage: "", title: "Уборка снега", description: "Уборка снега уборка снега"},
  {linkImage: "", title: "Уборка снега", description: "Уборка снега уборка снега"},
];

const customInitiatives = [
  {linkImage: "", title: "Уборка", description: "Уборка снега уборка снега"},
  {linkImage: "", title: "снега", description: "Уборка снега уборка снега"}
];

const page = document.querySelector('.page');
const templaleInitiativeCard = page.querySelector('.templeteInitiativeCard').content;
const commonCardsContainer = page.querySelector('.initiativesCommon__list');
const customCardsContainer = page.querySelector('.initiativesCustom__list');

//initiative: title, description, linkImage
const createInitiativeCard = (initiative) => {
  const newCard = templaleInitiativeCard.cloneNode(true);
  const imageContainer = newCard.querySelector('.initiativeCard__image');
  const titleContainer = newCard.querySelector('.initiativeCard__title');
  const descriptionContainer = newCard.querySelector('.initiativeCard__text');
  imageContainer.src = initiative.linkImage;
  titleContainer.textContent = initiative.title;
  descriptionContainer.textContent = initiative.description;
  /*buttonLike.addEventListener('click', (evt) => {
    evt.target.classList.toggle('button-like_active');
  });
  buttonDelete.addEventListener('click', (evt) => {
    evt.target.closest('.card').parentElement.remove();
    renderAdded();
  });
  imageDarkening.addEventListener('click', (evt) => {
    openPopupViewCard(evt.target.closest('.card'));
  });*/
  return newCard;
};

const addCardToBegin = (cardsContainer, card) => {
  cardsContainer.prepend(card);
};

const addInitialCards = (initialCards, container) => {
  initialCards.reverse().forEach((item) => { 
    addCardToBegin(container, createInitiativeCard(item));
  });
};

addInitialCards(commonInitiatives, commonCardsContainer);
addInitialCards(customInitiatives, customCardsContainer);
