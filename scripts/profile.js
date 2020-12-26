const avatarContainer = page.querySelector('.profile__avatar');
const namePersonContainer = page.querySelector('.profile__name');
const typePersonContainer = page.querySelector('.profile__person');
const countInitiativeContainer = page.querySelector('.profile__menuCount_type_initiative');

avatarContainer.style.backgroundImage = `url("${person.avatarLink}")`;
namePersonContainer.textContent = person.name;
typePersonContainer.textContent = person.type;
countInitiativeContainer.textContent = person.countInitiative;