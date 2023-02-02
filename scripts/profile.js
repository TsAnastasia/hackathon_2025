page.querySelector('.profile__avatar').style.backgroundImage = `url("${person.avatarLink}")`;
page.querySelector('.profile__name').textContent = person.name;
page.querySelector('.profile__person').textContent = person.type;
page.querySelector('.profile__menuCount_type_initiative').textContent = person.countInitiative;
page.querySelector('.profile__menuCount_type_alert').textContent = person.countAlert;