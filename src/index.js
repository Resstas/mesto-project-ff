import './pages/index.css';
import {createCard, deleteCard ,likeCard } from './scripts/card.js';
import { openModal, closeModal } from './scripts/modal.js';
import { enableValidation, clearValidation  } from './scripts/validation.js';
import { getInitialCards, getInitialUser, pathProfile, postCard, deleteCardApi, putLike, deleteLike } from './scripts/api.js';

const SELECTORS = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
const content = document.querySelector('.content');
const cardPlaces = content.querySelector('.places__list');
const popupAll = document.querySelectorAll('.popup');
const popupAddBtn = content.querySelector('.profile__add-button');
const popupProfileBtn =  document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_type_edit');
const popupNewCard = document.querySelector('.popup_type_new-card');
const profileTitle = content.querySelector('.profile__title');
const profileJob =  content.querySelector('.profile__description');
const profileImg = content.querySelector('.profile__image');
const formProfile = popupProfile.querySelector('.popup__form');
const nameInput = formProfile.querySelector('.popup__input_type_name');
const jobInput = formProfile.querySelector('.popup__input_type_description');
const formAddCard = popupNewCard.querySelector('.popup__form');
const cardNameInput = popupNewCard.querySelector('.popup__input_type_card-name');
const cardUrlInput = popupNewCard.querySelector('.popup__input_type_url');
const popupImgContainer = document.querySelector('.popup_type_image');
const popupImg = popupImgContainer.querySelector('.popup__image'); 
const popupImgName = popupImgContainer.querySelector('.popup__caption');

function clickImg(evt){
  openModal(popupImgContainer);
  popupImg.src = evt.target.src;
  popupImg.alt = evt.target.alt;
  popupImgName.textContent = evt.target.alt;
};

popupProfileBtn.addEventListener('click', function(){
  openModal(popupProfile);
  clearValidation(popupProfile, SELECTORS); 
  addTextValue();
});

popupAddBtn.addEventListener('click', function(){ 
  openModal(popupNewCard);
  clearValidation(popupNewCard, SELECTORS);
});

popupAll.forEach((popup) => {
  popup.classList.add('popup_is-animated');
  const closeBtn = popup.querySelector('.popup__close')
  closeBtn.addEventListener('click', function(){
    closeModal(popup)
  })
  const popupContent = popup.querySelector('.popup__content')
  popupContent.addEventListener('click', function(evt){
    evt.stopPropagation()
  })

  popup.addEventListener('click', function(){
    closeModal(popup)
  })
})


function handleFormSubmitProfile(evt) {
    evt.preventDefault();                                          
    profileTitle.textContent = nameInput.value
    profileJob.textContent = jobInput.value
    closeModal(popupProfile);
    pathProfile();
}

function addTextValue() {
  nameInput.value = profileTitle.textContent
  jobInput.value = profileJob.textContent
}

formProfile.addEventListener('submit', handleFormSubmitProfile);

formAddCard.addEventListener('submit', function(evt){
  evt.preventDefault();
  
  const name = cardNameInput.value;
  const link = cardUrlInput.value;
  const alt = cardNameInput.value;
  postCard({
    name: name,
    link: link
  })
  likeCounter = 0;
  const cardElement = createCard({name, link, alt, likeCounter, idCardOwner, idOwner, idCard, deleteCard, likeCard, clickImg});
  cardPlaces.prepend(cardElement);
  formAddCard.reset();
  closeModal(popupNewCard);
  
});


//Валидация фррмы

// включение валидации вызовом enableValidation
// все настройки передаются при вызове

enableValidation(SELECTORS);



const idOwner = "f81b012ec4774307e0139d4f";
getInitialCards()
  .then((res) => {
    res.forEach(function (item) {
      console.log(item)
      const name = item.name;
      const link = item.link;
      const alt = item.name;

      const idCardOwner = item.owner._id;
      const idCard = item._id;
      const likeCounter = item.likes.length;
      const cardElement = createCard({name, link, alt, likeCounter, idCardOwner, idOwner, idCard, deleteCard, likeCard, clickImg});
      cardPlaces.append(cardElement);
    });
  })
  .catch((err) => {
    console.log(err);
  });

getInitialUser()
  .then((res) => {
    console.log(res)
    const name = res.name;
    const about = res.about;
    const avatar = res.avatar;
    profileTitle.textContent = name;
    profileJob.textContent = about;
    profileImg.style.backgroundImage = avatar;
  })
  .catch((err) => {
    console.log(err);
  });







