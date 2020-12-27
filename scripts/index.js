const templateCategoryItemContainer = page.querySelector('.templateCategoryItem').content;
const categoryListContainer = page.querySelector('.categoryList');

const createCategoryItem = (category) => {
  const categoryItemContainer = templateCategoryItemContainer.cloneNode(true);
  const categoryButton = categoryItemContainer.querySelector('.categoryList__name');
  categoryButton.textContent = category.name;
  categoryButton.addEventListener('click', () => {
    toggleCategory(categoryButton);
  });
  return categoryItemContainer;
}

const toggleCategory = (category) => {
  category.classList.toggle('categoryList__name_active');
  //TO DO: update initiatives list
}

categories.forEach((category) => {
  categoryListContainer.append(createCategoryItem(category));
});

addInitiativeCards(commonInitiatives, commonCardsContainer);
addInitiativeCards(customInitiatives, customCardsContainer);