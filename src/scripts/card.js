import { deleteCardApi, putLike, deleteLike } from "./api.js";
export function createCard(name, link, alt, likeCounter, idCardOwner, idOwner, idCard, deleteCard,likeCard, clickImg) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  cardImage.src = link;
  cardImage.alt = alt;
  cardElement.querySelector('.card__title').textContent = name;
  cardElement.querySelector('.card__like-number').textContent = likeCounter;

  const deleteIcon = cardElement.querySelector('.card__delete-button');
  if (idCardOwner != idOwner) {
    deleteIcon.remove();
  } else {
    deleteIcon.addEventListener('click', function(evt){
      deleteCard(evt, idCard);
    });
  }
  const likeBtn = cardElement.querySelector('.card__like-button');
  
  likeBtn.addEventListener('click',function(evt) {
    likeCard(evt, idCard)
  })
    
  cardImage.addEventListener('click', clickImg);

  return cardElement
};


export function deleteCard(evt, idCard) {
  const card = evt.target.closest('.card');
  deleteCardApi(idCard);
  card.remove();
};

export function likeCard(evt, idCard) {
  if (evt.target.classList.contains('card__like-button_is-active')) {
    evt.target.classList.remove('card__like-button_is-active');
    deleteLike(idCard)
  } else {
    evt.target.classList.add('card__like-button_is-active');
    putLike(idCard);
  }
}

