(()=>{"use strict";var e=document.querySelector("#card-template").content;function t(t,n,r,o){var c=e.querySelector(".card").cloneNode(!0),u=c.querySelector(".card__image");u.src=t.link,u.alt=t.name,c.querySelector(".card__title").textContent=t.name;var p=c.querySelector(".card__delete-button");return p.addEventListener("click",(function(){n(p)})),c.querySelector(".card__like-button").addEventListener("click",r),u.addEventListener("click",(function(){o(t)})),c}function n(e){e.closest(".places__item").remove()}function r(e){e.target.classList.toggle("card__like-button_is-active")}function o(e){if(27===e.keyCode){var t=document.querySelector(".popup_is-opened");t&&u(t)}}function c(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",o)}function u(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",o)}function p(e){e.target===e.currentTarget&&u(e.currentTarget)}function a(e){var t=e.currentTarget.querySelector(".popup__close");e.target===t&&u(e.currentTarget)}var d=document.querySelector(".places__list");[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(e){var o=t(e,n,r,b);d.append(o)}));var i=document.querySelector(".popup_type_edit"),l=document.querySelector(".popup_type_new-card"),s=document.querySelector(".popup_type_image"),m=document.querySelector(".profile__edit-button"),_=document.querySelectorAll(".popup"),y=document.querySelector(".profile__add-button"),v=document.querySelector('form[name="edit-profile"]'),f=document.querySelector(".popup__input_type_name"),k=document.querySelector(".popup__input_type_description"),q=document.querySelector('form[name="new-place"]'),S=document.querySelector(".popup__input_type_card-name"),g=document.querySelector(".popup__input_type_url"),E=s.querySelector(".popup__image"),L=s.querySelector(".popup__caption"),h=document.querySelector(".profile__title"),x=document.querySelector(".profile__description");function b(e){E.src=e.link,E.alt=e.name,L.textContent=e.name,c(s)}m.addEventListener("click",(function(){f.value=h.textContent,k.value=x.textContent,c(i)})),y.addEventListener("click",(function(){c(l)})),_.forEach((function(e){e.addEventListener("click",p)})),_.forEach((function(e){e.addEventListener("keydown",o)})),_.forEach((function(e){e.addEventListener("click",a)})),v.addEventListener("submit",(function(e){e.preventDefault();var t=k.value,n=f.value;x.textContent=t,h.textContent=n,u(i)})),q.addEventListener("submit",(function(e){e.preventDefault();var r=g.value,o=t({name:S.value,link:r},n);d.prepend(o),q.reset(),u(l)}))})();