import { deleteCardApi, putLike, deleteLike } from "./api.js";
import { openModal, closeModal } from "./modal.js";
export function createCard({name, link, alt, likes, cardOwnerId, initialUserId, cardId, deleteCard,likeCard, onImageClick}) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  cardImage.src = link;
  cardImage.alt = alt;
  cardElement.querySelector('.card__title').textContent = name;
  const likeCount = likes.length
  
  cardElement.querySelector('.card__like-number').textContent = likeCount;
  const isActive = likes.some(function (item) {
    return item._id === initialUserId
  })
  
  const deleteIcon = cardElement.querySelector('.card__delete-button');

  if (cardOwnerId != initialUserId) {
    deleteIcon.remove();
  } else {
    deleteIcon.addEventListener('click', function(evt){
      deleteCard(evt, cardId)
    })
  }

  const likeBtn = cardElement.querySelector('.card__like-button');
  const likesCounter = cardElement.querySelector('.card__like-number');
  if (isActive) {
    likeBtn.classList.add('card__like-button_is-active');
  }

  likeBtn.addEventListener('click',function(evt) {
    likeCard(evt, cardId, likesCounter)
  })
    
  cardImage.addEventListener('click', onImageClick);

  return cardElement
};


export function deleteCard(evt, cardId) {
  const card = evt.target.closest('.card');
  deleteCardApi(cardId)
    .then((res) => {
      card.remove();
    })
    .catch((err) => {
      console.log(err);
    }); 
};

export async function likeCard(evt, cardId, likesCounter) {
  const likeBtn = evt.target;
  try {
    if (likeBtn.classList.contains('card__like-button_is-active')) {
      const res = await deleteLike(cardId)
      likeBtn.classList.remove('card__like-button_is-active');
      const likeCount = res.likes.length;
      likesCounter.textContent = likeCount;
    } else {
      const res = await putLike(cardId);
      const likeCount = res.likes.length;
      likeBtn.classList.add('card__like-button_is-active');
      likesCounter.textContent = likeCount;
    }
  } catch(err) {
    console.log(err);
  }
  
}

