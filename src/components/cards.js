import {esc} from "./modal.js";

export const initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    }
];

const cardTemplate = document.querySelector('#card-template').content;
function getCardTemplate() {
  return cardTemplate.querySelector('.card').cloneNode(true);
 };


export function addCard(dataCard, deleteCard, toggleLike, openImagePopup) {
  
  const cardElement = getCardTemplate();
  const cardImage = cardElement.querySelector('.card__image');
  cardImage.src = dataCard.link;
  cardImage.alt = dataCard.name;
  cardElement.querySelector('.card__title').textContent = dataCard.name;
  
  const deleteButton = cardElement.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', function() {deleteCard(deleteButton)
  });

  const likeButton = cardElement.querySelector('.card__like-button');
  likeButton.addEventListener('click', toggleLike);

  cardImage.addEventListener('click', function() {openImagePopup(dataCard)});

  return cardElement;
};
// @todo: Функция удаления карточки
export function deleteCard(deleteButton) {
  const card = deleteButton.closest('.places__item');
  card.remove();
};

export function toggleLike(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
};

