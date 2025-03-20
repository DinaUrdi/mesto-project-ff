import {
  jobInput,
  nameInput,
  popupEdit,
  cardNameInput,
  cardUrlInput,
} from "..";

//форма профиля
export function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  const jobValue = jobInput.value;
  const nameValue = nameInput.value;
  // Получите значение полей jobInput и nameInput из свойства value
  // Выберите элементы, куда должны быть вставлены значения полей
  const name = document.querySelector(".profile__title");
  const job = document.querySelector(".profile__description");
  job.textContent = jobValue;
  name.textContent = nameValue;
  // Вставьте новые значения с помощью textContent
  closePopup(popupEdit);
}

//форма картинки
export function handleCardSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  const cardUrlValue = cardUrlInput.value;
  const cardNameValue = cardNameInput.value;
  const cardName = document.querySelector(".profile__title");
  const cardUrl = document.querySelector(".card__title");
  const dataCard = {
    name: cardNameValue,
    link: cardUrlValue,
  };
  const newCard = addCard(dataCard, deleteCard);
  listCard.prepend(newCard);
  cardNameInput.value = "";
  cardUrlInput.value = "";
  cardUrl.src = cardUrlValue;
  cardName.textContent = cardNameValue;
  closePopup(popupNew);
}

export function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      closePopup(popup);
    }
  });
}

export function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
}
