
export function createCard(name,link,alt, deleteCard, likeCard, clickImg) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  cardImage.src = link;
  cardImage.alt = alt;
  cardElement.querySelector('.card__title').textContent = name;

  const deleteIcon = cardElement.querySelector('.card__delete-button');
  deleteIcon.addEventListener('click', deleteCard);
  const likeBtn = cardElement.querySelector('.card__like-button');
  likeBtn.addEventListener('click', likeCard);
  cardImage.addEventListener('click', clickImg);

  return cardElement
};


export function deleteCard(evt) {
  const card = evt.target.closest('.card');
  card.remove();
};

export function likeCard(evt) {
  if (evt.target.classList.contains('card__like-button')) {
    evt.target.classList.toggle('card__like-button_is-active');
  } 
}

