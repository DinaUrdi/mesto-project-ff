import { checkResponse } from "./utils";

const config = {
  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-35',
  headers: {
    authorization: 'aa96e32a-ada3-4c29-93c6-560570ea205d',
    'Content-Type': 'application/json',
  },
}

export const initialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  }).then(checkResponse);
};
// Для работы с API создайте файл api.js. Все запросы присвойте переменным и экспортируйте их. В других модулях вы сможете импортировать эти функции и вызывать их. Вот небольшой пример того, как можно обустроить код в файле api.js:

//загрузка информации о пользователе с сервера
export function loadUserData() {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  }).then(checkResponse);
}

//обновление данных пользователя
export function updateUserData({ name, about, avatar }) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about,
      avatar: avatar,
    }),
  }).then(checkResponse);
}

//добавление новой карточки
export function addNewCard({ name, link }) {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  }).then(checkResponse);
}

//удаление карточки
export const deleteCardFetch = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(checkResponse);
};

//лайк карточки
export const addLike = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`,
    {
      method: "PUT",
      headers: config.headers,
    }
  ).then(checkResponse);
};

export const removeLike = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`,
    {
      method: "DELETE",
      headers: config.headers,
    }
  ).then(checkResponse);
};

//обновление аватара
export function updateUserAvatar(avatar) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify(avatar),
  }).then(checkResponse);
}
