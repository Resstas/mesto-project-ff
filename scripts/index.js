const content = document.querySelector('.content');
const cardPlaces = content.querySelector('.places__list');


function createCard(item, {deleteCard}) {
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


initialCards.forEach(function (item) {
  const cardElement = createCard(item, { deleteCard });
  cardPlaces.append(cardElement);
});

function deleteCard(evt) {
  const deleteBtn = evt.target.closest('.card');
  deleteBtn.remove();
};


