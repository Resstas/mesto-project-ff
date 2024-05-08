export function getInitialUser() {
  return fetch('https://nomoreparties.co/v1/wff-cohort-12/users/me', {
    method: 'GET',
    headers: {
      authorization: '784587d3-8b32-49e1-953b-1e820da5493a'
    }
  })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
}

export function pathProfile(newPatch) {
  return fetch('https://nomoreparties.co/v1/wff-cohort-12/users/me', {
    method: 'PATCH',
    headers: {
      authorization: '784587d3-8b32-49e1-953b-1e820da5493a',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: newPatch.name,
      about: newPatch.about
    })
  })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
}

export function getInitialCards() {
  return fetch('https://nomoreparties.co/v1/wff-cohort-12/cards', {
    method: 'GET',
    headers: {
      authorization: '784587d3-8b32-49e1-953b-1e820da5493a'
    }
  })
    .then(res => {
      if (res.ok) {
        console.log(res)
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
}

export function postCard(newPost) {
  return fetch('https://nomoreparties.co/v1/wff-cohort-12/cards', {
    method: 'POST',
    headers: {
      authorization: '784587d3-8b32-49e1-953b-1e820da5493a',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: newPost.name,
      link: newPost.link
    })
  })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
}

export function deleteCardApi(cardId) {
  return fetch(`https://nomoreparties.co/v1/wff-cohort-12/cards/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: '784587d3-8b32-49e1-953b-1e820da5493a',
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
}

export function putLike(cardId) {
  return fetch(`https://nomoreparties.co/v1/wff-cohort-12/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: {
      authorization: '784587d3-8b32-49e1-953b-1e820da5493a'
    }
  })
    .then(res => {
      if (res.ok) {
        console.log(res)
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
};

export function deleteLike(cardId) {
  return fetch(`https://nomoreparties.co/v1/wff-cohort-12/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: '784587d3-8b32-49e1-953b-1e820da5493a'
    }
  })
    .then(res => {
      if (res.ok) {
        console.log(res)
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
};

export function patchAvatar(newPatch) {
  return fetch('https://nomoreparties.co/v1/wff-cohort-12/users/me/avatar', {
    method: 'PATCH',
    headers: {
      authorization: '784587d3-8b32-49e1-953b-1e820da5493a',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      avatar: newPatch.avatar
    })
  })
    .then(res => {
      if (res.ok) {
        console.log(res)
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });

}