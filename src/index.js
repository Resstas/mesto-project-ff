import './pages/index.css';
import {initialCards,createCard,deleteCard,likeCard } from './scripts/cards.js';
import { openModal, closeModal } from './scripts/modal.js';

const content = document.querySelector('.content');
const cardPlaces = content.querySelector('.places__list');
const popupAll = document.querySelectorAll('.popup');
const popupAddBtn = content.querySelector('.profile__add-button');
const popupProfileBtn =  document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_type_edit');
const popupNewCard = document.querySelector('.popup_type_new-card');
const profileTitle = content.querySelector('.profile__title')
const profileJob =  content.querySelector('.profile__description')
const formProfile = popupProfile.querySelector('.popup__form');

const nameInput = formProfile.querySelector('.popup__input_type_name');
const jobInput = formProfile.querySelector('.popup__input_type_description');
const formAddCard = popupNewCard.querySelector('.popup__form');
const cardNameInput = popupNewCard.querySelector('.popup__input_type_card-name');
const cardUrlInput = popupNewCard.querySelector('.popup__input_type_url');

initialCards.forEach(function (item) {
  const name = item.name;
  const link = item.link;
  const alt = item.name;
  const cardElement = createCard(name,link, alt,deleteCard,likeCard, clickImg);
  cardPlaces.append(cardElement);
});

function clickImg(evt){
  const popupImgContainer = document.querySelector('.popup_type_image');
  const popupImg = popupImgContainer.querySelector('.popup__image'); 
  const popupImgName = popupImgContainer.querySelector('.popup__caption');
  openModal(popupImgContainer);
  popupImg.src = evt.target.src;
  popupImg.alt = evt.target.alt;
  popupImgName.textContent = evt.target.alt;
};

//открытие модального окна


popupProfileBtn.addEventListener('click', function(){
  openModal(popupProfile);
  textValue();
});

popupAddBtn.addEventListener('click', function(){ 
  openModal(popupNewCard);
});




//закрытие модального окна

popupAll.forEach((popup) => {
  popup.classList.add('popup_is-animated');
  const closeBtn = popup.querySelector('.popup__close')
  closeBtn.addEventListener('click', function(){
    closeModal(popup)
  })
  document.addEventListener('keydown', function(evt){
    if (evt.key === 'Escape') {
      closeModal(popup)
    } 
  })
  const popupContent = popup.querySelector('.popup__content')
  popupContent.addEventListener('click', function(evt){
    evt.stopPropagation()
  })

  popup.addEventListener('click', function(){
    closeModal(popup)
  })
  
})






// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
    evt.preventDefault();                                          
    profileTitle.textContent = nameInput.value
    profileJob.textContent = jobInput.value
    closeModal(popupProfile);
}

function textValue() {
  nameInput.value = profileTitle.textContent
  jobInput.value = profileJob.textContent
}

formProfile.addEventListener('submit', handleFormSubmit);

formAddCard.addEventListener('submit', function(evt){
  evt.preventDefault();
  
  const name = cardNameInput.value;
  const link = cardUrlInput.value;
  const alt = cardNameInput.value;

  const cardElement = createCard(name, link, alt, deleteCard,likeCard,clickImg);
  cardPlaces.prepend(cardElement);
  formAddCard.reset();
  closeModal(popupNewCard);
});








