import { deleteCardApi, putLike, deleteLike } from "./api.js";
import { openModal, closeModal } from "./modal.js";
export function createCard({name, link, alt, likes, cardOwnerId, initialUserId, cardId, deleteCard,likeCard, clickImg}) {
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
  const confirmDeleteCard = document.querySelector('.popup_delete_card');
  const yesBtn = confirmDeleteCard.querySelector('.popup__button');

  if (cardOwnerId != initialUserId) {
    deleteIcon.remove();
  } else {
    deleteIcon.addEventListener('click', function(evt){
      openModal(confirmDeleteCard);
      yesBtn.addEventListener('click', function() {
        deleteCard(evt, cardId);
        closeModal(confirmDeleteCard);
      })
    });
  }

  const likeBtn = cardElement.querySelector('.card__like-button');

  if (isActive) {
    likeBtn.classList.add('card__like-button_is-active');
  }
  
  likeBtn.addEventListener('click',function(evt) {
    likeCard(evt, cardId)
  })
    
  cardImage.addEventListener('click', clickImg);

  return cardElement
};


export function deleteCard(evt, cardId) {
  const card = evt.target.closest('.card');
  deleteCardApi(cardId);
  card.remove();
};

export async function likeCard(evt, cardId) {
  const likeBtn = evt.target;
  const likeCounter = likeBtn.parentNode.querySelector('.card__like-number');
  console.log(likeCounter)
  if (likeBtn.classList.contains('card__like-button_is-active')) {
    likeBtn.classList.remove('card__like-button_is-active');
    const res = await deleteLike(cardId)
    const likeCount = res.likes.length;
    likeCounter.textContent = likeCount;
  } else {
    const res = await putLike(cardId);
    const likeCount = res.likes.length;
    likeBtn.classList.add('card__like-button_is-active');
    likeCounter.textContent = likeCount;
    console.log(res)    
  }
}

