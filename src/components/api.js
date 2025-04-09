export const initialCards = () => {
  return fetch("https://mesto.nomoreparties.co/v1/wff-cohort-35/cards", {
    headers: {
      authorization: "aa96e32a-ada3-4c29-93c6-560570ea205d",
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};
// Для работы с API создайте файл api.js. Все запросы присвойте переменным и экспортируйте их. В других модулях вы сможете импортировать эти функции и вызывать их. Вот небольшой пример того, как можно обустроить код в файле api.js:

//загрузка информации о пользователе с сервера
export function loadUserData() {
  return fetch("https://nomoreparties.co/v1/wff-cohort-35/users/me", {
    headers: {
      authorization: "aa96e32a-ada3-4c29-93c6-560570ea205d",
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

//обновление данных пользователя
export function updateUserData({ name, about, avatar }) {
  return fetch("https://nomoreparties.co/v1/wff-cohort-35/users/me", {
    method: "PATCH",
    headers: {
      authorization: "aa96e32a-ada3-4c29-93c6-560570ea205d",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      about: about,
      avatar: avatar,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

//добавление новой карточки
export function addNewCard({ name, link }) {
  return fetch("https://nomoreparties.co/v1/wff-cohort-35/cards", {
    method: "POST",
    headers: {
      authorization: "aa96e32a-ada3-4c29-93c6-560570ea205d",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

//удаление карточки
export const deleteCardFetch = (cardId) => {
  return fetch(`https://nomoreparties.co/v1/wff-cohort-35/cards/${cardId}`, {
    method: "DELETE",
    headers: {
      authorization: "aa96e32a-ada3-4c29-93c6-560570ea205d",
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

//лайк карточки
export const addLike = (cardId) => {
  return fetch(
    `https://nomoreparties.co/v1/wff-cohort-35/cards/likes/${cardId}`,
    {
      method: "PUT",
      headers: {
        authorization: "aa96e32a-ada3-4c29-93c6-560570ea205d",
        "Content-Type": "application/json",
      },
    }
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

export const removeLike = (cardId) => {
  return fetch(
    `https://nomoreparties.co/v1/wff-cohort-35/cards/likes/${cardId}`,
    {
      method: "DELETE",
      headers: {
        authorization: "aa96e32a-ada3-4c29-93c6-560570ea205d",
        "Content-Type": "application/json",
      },
    }
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

//обновление аватара
export function updateUserAvatar(avatar) {
  return fetch("https://nomoreparties.co/v1/wff-cohort-35/users/me/avatar", {
    method: "PATCH",
    headers: {
      authorization: "aa96e32a-ada3-4c29-93c6-560570ea205d",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(avatar),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}
