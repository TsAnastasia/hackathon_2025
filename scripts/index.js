//TO DO: data from server
const commonInitiatives = [
  {linkImage: "", title: "Уборка снега миспас арсорп ьсппь ", description: "Уборка снега sdjkgacfjkdsbv bkjsahdvjked basfvjk;  haejscfwkd.as n.ck safhkwejfcasnfksdjf cdsa cfjksdcsn.fckdlsv  cdsfvkjwasdfc sdakbfvjkdaskjvc  уборка снега", id: "2020-12-18-000001", categoryId: "000-001", customerId: "001-000-020"},
  {linkImage: "", title: "Уборка снега", description: "Уборка снега уборка снега", id: "2020-12-18-000002", categoryId: "000-002", customerId: "002-002-020"},
  {linkImage: "", title: "Уборка снега", description: "Уборка снега уборка снега", id: "2020-12-19-000003", categoryId: "000-001", customerId: "001-000-032"},
  {linkImage: "", title: "Уборка снега", description: "Уборка снега уборка снега", id: "2020-12-19-000004", categoryId: "000-001", customerId: "002-002-020"},
];

//TO DO: data from server, customerId: "002-002-020"
const customInitiatives = [
  {linkImage: "", title: "Уборка снега", description: "Уборка снега уборка снега", id: "2020-12-18-000002", categoryId: "000-002"},
  {linkImage: "", title: "Уборка снега", description: "Уборка снега уборка снега", id: "2020-12-19-000004", categoryId: "000-001"},
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

const addInitiativeCards = (cards, container) => {
  cards.reverse().forEach((item) => { 
    container.prepend( createInitiativeCard(item) );
  });
};

addInitiativeCards(commonInitiatives, commonCardsContainer);
addInitiativeCards(customInitiatives, customCardsContainer);
