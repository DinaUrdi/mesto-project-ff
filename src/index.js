import "../pages/index.css";
import { addCard, deleteCard, initialCards } from "./components/cards.js";
import {
  handleCardSubmit,
  handleFormSubmit,
  openPopup,
  closePopup,
} from "./components/modal.js";
// @todo: Темплейт карточки
const listCard = document.querySelector(".places__list");
// @todo: DOM узлы
// const initialCard = initialCards.forEach(function(item) {
//     item;
// });
// @todo: Функция создания карточки

// @todo: Вывести карточки на страницу
initialCards.forEach((item) => {
  const newCard = addCard(item, deleteCard);
  listCard.append(newCard);
});

//объявление констант
export const popupEdit = document.querySelector(".popup_type_edit");
const popupNew = document.querySelector(".popup_type_new-card");
const popupImage = document.querySelector(".popup_type_image");
const buttonEdit = document.querySelector(".profile__edit-button");
const popupAll = document.querySelectorAll(".popup");
const buttonAdd = document.querySelector(".profile__add-button");
const formElement = document.querySelector('form[name="edit-profile"]');
export const nameInput = document.querySelector(".popup__input_type_name");
export const jobInput = document.querySelector(".popup__input_type_description");
const formImage = document.querySelector('form[name="new-place"]');
export const cardNameInput = document.querySelector(".popup__input_type_card-name");
export const cardUrlInput = document.querySelector(".popup__input_type_url");
const likeButtonAll = document.querySelectorAll(".card__like-button");
const popupImageContent = popupImage.querySelector(".popup__image");
const popupCaption = popupImage.querySelector(".popup__caption");
const imageAll = document.querySelectorAll(".card__image");

//слушатели
buttonEdit.addEventListener("click", function () {
  openPopup(popupEdit);
});
buttonAdd.addEventListener("click", function () {
  openPopup(popupNew);
});
popupAll.forEach((popup) => {
  const buttonPopupClose = popup.querySelector(".popup__close");
  popup.addEventListener("click", function (evt) {
    if (evt.target === buttonPopupClose || evt.target === popup) {
      closePopup(popup);
    }
  });
});
popupAll.forEach((popup) => {
  popup.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      closePopup(popup);
    }
  });
});
formElement.addEventListener("submit", handleFormSubmit);
formImage.addEventListener("submit", handleCardSubmit);

likeButtonAll.forEach((like) => {
  like.addEventListener("click", function (evt) {
    evt.target.classList.toggle("card__like-button_is-active");
  });
});

imageAll.forEach((card) => {
  card.addEventListener("click", () => {
    popupImageContent.src = card.src;
    popupImageContent.alt = card.alt;
    popupCaption.textContent = card.alt;
    openPopup(popupImage);
  });
});
