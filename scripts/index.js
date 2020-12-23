//TO DO: data from server
const commonInitiatives = [
  {linkImage: "", title: "Уборка снега миспас арсорп ьсппь ", description: "Уборка снега sdjkgacfjkdsbv bkjsahdvjked basfvjk;  haejscfwkd.as n.ck safhkwejfcasnfksdjf cdsa cfjksdcsn.fckdlsv  cdsfvkjwasdfc sdakbfvjkdaskjvc  уборка снега"},
  {linkImage: "", title: "Уборка снега", description: "Уборка снега уборка снега"},
  {linkImage: "", title: "Уборка снега", description: "Уборка снега уборка снега"},
  {linkImage: "", title: "Уборка снега", description: "Уборка снега уборка снега"},
];

//TO DO: data from server
const customInitiatives = [
  {linkImage: "", title: "Уборка снега", description: "Уборка снега уборка снега"},
  {linkImage: "", title: "Уборка снега", description: "Уборка снега уборка снега"},
];

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
  return newCard;
};

const addInitiativeCards = (cards, container) => {
  cards.reverse().forEach((item) => { 
    container.prepend( createInitiativeCard(item) );
  });
};

addInitiativeCards(commonInitiatives, commonCardsContainer);
addInitiativeCards(customInitiatives, customCardsContainer);
