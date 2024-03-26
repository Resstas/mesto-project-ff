import './pages/index.css';
import {initialCards} from './scripts/cards.js';
import { createCard } from './scripts/cards.js';
import { deleteCard } from './scripts/cards.js';

const content = document.querySelector('.content');
const cardPlaces = content.querySelector('.places__list');

initialCards.forEach(function (item) {
  const cardElement = createCard(item, { deleteCard });
  cardPlaces.append(cardElement);
});

//открытие модального окна
const popupAll = document.querySelectorAll('.popup');
const popupAddBtn = content.querySelector('.profile__add-button');
const popupProfile =  document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');
const popupNewCard = document.querySelector('.popup_type_new-card');
const imgCard = content.querySelector('.card__image');
const popupImg = document.querySelector('.popup_type_image');

function openModal(popupOpen) {
  popupOpen.classList.add('popup_is-opened');
}

popupProfile.addEventListener('click', function(){
  openModal(popupEdit)
});

popupAddBtn.addEventListener('click', function(){ 
  openModal(popupNewCard);
});

imgCard.addEventListener('click', function(){
  openModal(popupImg);
});

//закрытие модального окна


function closeModal(modal) {
  modal.classList.remove('popup_is-opened');
}

popupAll.forEach((popup) => {
  const closeBtn = popup.querySelector('.popup__close')
  closeBtn.addEventListener('click', function(){
    closeModal(popup)})
})













// 








// Находим форму в DOM
const formElement = document.querySelector('.popup__form');
// Находим поля формы в DOM
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_description');
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
    evt.preventDefault();                                          
    content.querySelector('.profile__title').textContent = nameInput.value
    content.querySelector('.profile__description').textContent = jobInput.value
}

formElement.addEventListener('submit', handleFormSubmit);





