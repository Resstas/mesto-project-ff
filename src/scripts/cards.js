export const initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    }
];

export function createCard(item, {deleteCard}) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");

  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardElement.querySelector('.card__title').textContent = item.name;

  const deleteIcon = cardElement.querySelector('.card__delete-button');
  deleteIcon.addEventListener('click', deleteCard);

  return cardElement
};

export function deleteCard(evt) {
  const deleteBtn = evt.target.closest('.card');
  deleteBtn.remove();
};