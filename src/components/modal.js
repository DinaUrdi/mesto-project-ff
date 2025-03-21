import { addCard, deleteCard } from "./cards";

const esc = 27;

export function closeByEsc(evt) {
    if (evt.keyCode === esc) {
    const openedPopup = document.querySelector('.popup_is-opened');
    if (openedPopup) {
      closePopup(openedPopup);
    }
}}
export function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", closeByEsc);
}

export function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closeByEsc); 
}

export function closeByOverlay(evt) {
    const buttonPopupClose = evt.currentTarget.querySelector(".popup__close");
    if (evt.target === buttonPopupClose || evt.target === evt.currentTarget) {
      closePopup(evt.currentTarget);
    }}
