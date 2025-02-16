// @todo: Темплейт карточки
const listCard = document.querySelector('.places__list');
// @todo: DOM узлы
let initialCard = initialCards.forEach(function(item) {
    item;
});
// @todo: Функция создания карточки
function addCard(initialCard, deleteCard) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    
    cardElement.querySelector('.card__image').src = initialCard.link;
    cardElement.querySelector('.card__image').alt = initialCard.name;
    cardElement.querySelector('.card__title').textContent = initialCard.name;
    
    
    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', function() {deleteCard(deleteButton)
    });


    return cardElement;
};
// @todo: Функция удаления карточки
function deleteCard(deleteButton) {
    const card = deleteButton.closest('.places__item');
    card.remove();
};
// @todo: Вывести карточки на страницу
initialCards.forEach((item) => {
    const newCard = addCard(item, deleteCard);
    listCard.append(newCard);
});



