const content = document.querySelector('.content');
const cardPlaces = content.querySelector('.places__list');

initialCards.forEach(function (addCard) {
  
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  
  cardElement.querySelector('.card__image').src = addCard.link;
  cardElement.querySelector('.card__title').textContent = addCard.name;

  const deleteIcon = cardElement.querySelector('.card__delete-button');
  deleteIcon.addEventListener('click', deleteCard);

  cardPlaces.append(cardElement);
})

function deleteCard(evt) {
  const deleteBtn = evt.target.closest('.card');
  deleteBtn.remove();
}

addCard();
