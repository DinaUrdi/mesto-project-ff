import "../pages/index.css";
import { addCard, deleteCard, initialCards, toggleLike } from "./components/cards.js";
import {
  openPopup,
  closePopup,
  closeByOverlay,
  closeByEsc
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
  const newCard = addCard(item, deleteCard, toggleLike, openImagePopup);
  listCard.append(newCard);
});

//объявление констант
const popupEdit = document.querySelector(".popup_type_edit");
const popupNew = document.querySelector(".popup_type_new-card");
const popupImage = document.querySelector(".popup_type_image");
const buttonOpenFormEditProfile = document.querySelector(".profile__edit-button");
const popupAll = document.querySelectorAll(".popup");
const buttonOpenFormAddCard = document.querySelector(".profile__add-button");
const formEditProfile = document.querySelector('form[name="edit-profile"]');
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");
const formAddCard = document.querySelector('form[name="new-place"]');
const cardNameInput = document.querySelector(".popup__input_type_card-name");
const cardUrlInput = document.querySelector(".popup__input_type_url");
const popupImageContent = popupImage.querySelector(".popup__image");
const popupCaption = popupImage.querySelector(".popup__caption");
const name = document.querySelector(".profile__title");
const job = document.querySelector(".profile__description");
const cardName = document.querySelector(".profile__title");
const cardUrl = document.querySelector(".card__title");
//слушатели
buttonOpenFormEditProfile.addEventListener("click", function () {
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
  openPopup(popupEdit);
});
buttonOpenFormAddCard.addEventListener("click", function () {
  openPopup(popupNew);
});
popupAll.forEach((popup) => {
  popup.addEventListener("click", closeByOverlay)
});
popupAll.forEach((popup) => {
  popup.addEventListener("keydown", closeByEsc)
});
formEditProfile.addEventListener("submit", submitEditProfileForm);
formAddCard.addEventListener("submit", handleCardSubmit);



function openImagePopup(card) {
    popupImageContent.src = card.link;
    popupImageContent.alt = card.name;
    popupCaption.textContent = card.name;
    openPopup(popupImage);
};

function submitEditProfileForm(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    const jobValue = jobInput.value;
    const nameValue = nameInput.value;
    job.textContent = jobValue;
    name.textContent = nameValue;

    

    closePopup(popupEdit);
  };

function handleCardSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  const cardUrlValue = cardUrlInput.value;
  const cardNameValue = cardNameInput.value;
  
  const dataCard = {
    name: cardNameValue,
    link: cardUrlValue,
  };
  const newCard = addCard(dataCard, deleteCard);
  listCard.prepend(newCard);
  formAddCard.reset();
  cardName.textContent = cardNameValue;
  closePopup(popupNew);
};
