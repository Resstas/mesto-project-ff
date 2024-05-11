const config = {
  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-12',
  headers: {
    authorization: '784587d3-8b32-49e1-953b-1e820da5493a',
    'Content-Type': 'application/json'
  }
}

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
} 

export function getInitialUser() {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'GET',
    headers: config.headers
  })
    .then(res => {
      return checkResponse(res)
    });
}

export function patchProfile(newPatch) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: newPatch.name,
      about: newPatch.about
    })
  })
    .then(res => {
      return checkResponse(res);
    });
}

export function getInitialCards() {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'GET',
    headers: config.headers
  })
    .then(res => {
      return checkResponse(res) 
    });
}

export function postCard(newPost) {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: newPost.name,
      link: newPost.link
    })
  })
    .then(res => {
      return checkResponse(res);
    });
}

export function deleteCardApi(cardId) {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then(res => {
      return checkResponse(res);
    });
}

export function putLike(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers
  })
    .then(res => {
      return checkResponse(res);
    });
};

export function deleteLike(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then(res => {
      return checkResponse(res);
    });
};

export function patchAvatar(newPatch) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: newPatch.avatar
    })
  })
    .then(res => {
      return checkResponse(res);
    });

}