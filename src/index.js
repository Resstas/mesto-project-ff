import './pages/index.css';
import {initialCards} from './scripts/cards.js';

// import addIcon from './images/add-icon.svg';
// import avatarImg from './images/avatar.jpg';
// import card_1 from './images/card_1.jpg';
// import card_2 from './images/card_2.jpg';
// import card_3 from './images/card_3.jpg';
// import closeIcon from './images/close.svg';
// import deleteIcon from './images/delete-icon.svg';
// import editIcon from './images/edit-icon.svg';
// import likeActiveIcon from './images/like-active.svg';
// import likeInactiveIcon from './images/like-inactive.svg';
// import logo from './images/logo.svg';

// const whoIsTheGoat = [
//   {name: 'addIcon', link: addIcon},
//   {name: 'avatarImg', link: avatarImg},
//   {name: 'card_1', link: card_1},
//   {name: 'card_2', link: card_2},
//   {name: 'card_3', link: card_3},
//   {name: 'closeIcon', link: closeIcon},
//   {name: 'deleteIcon', link: deleteIcon},
//   {name: 'editIcon', link: editIcon},
//   {name: 'likeActiveIcon', link:likeActiveIcon},
//   {name: 'likeInactiveIcon', link: likeInactiveIcon},
//   {name: 'logo', link: logo}
// ];

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


