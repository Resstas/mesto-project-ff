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

export function pathProfile() {
  return fetch('https://nomoreparties.co/v1/wff-cohort-12/users/me', {
    method: 'PATCH',
    headers: {
      authorization: '784587d3-8b32-49e1-953b-1e820da5493a',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: nameInput.value,
      about: jobInput.value
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

export function deleteCardApi(idCard) {
  return fetch(`https://nomoreparties.co/v1/wff-cohort-12/cards/${idCard}`, {
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

export function putLike(idCard) {
  return fetch(`https://nomoreparties.co/v1/wff-cohort-12/cards/likes/${idCard}`, {
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

export function deleteLike(idCard) {
  return fetch(`https://nomoreparties.co/v1/wff-cohort-12/cards/likes/${idCard}`, {
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
}