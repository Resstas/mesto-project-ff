import './pages/index.css';
import {createCard, deleteCard ,likeCard } from './scripts/card.js';
import { openModal, closeModal, handleCloseModalByOverlay } from './scripts/modal.js';
import { enableValidation, clearValidation  } from './scripts/validation.js';
import { getInitialCards, getInitialUser, patchProfile, postCard, deleteCardApi, putLike, deleteLike, patchAvatar } from './scripts/api.js';

const validationConfig = {
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
const profileIcon = content.querySelector('.profile__image');
const formProfile = popupProfile.querySelector('.popup__form');
const nameInput = formProfile.querySelector('.popup__input_type_name');
const jobInput = formProfile.querySelector('.popup__input_type_description');
const formAddCard = popupNewCard.querySelector('.popup__form');
const cardNameInput = popupNewCard.querySelector('.popup__input_type_card-name');
const cardUrlInput = popupNewCard.querySelector('.popup__input_type_url-img');
const popupImgContainer = document.querySelector('.popup_type_image');
const popupImg = popupImgContainer.querySelector('.popup__image'); 
const popupImgName = popupImgContainer.querySelector('.popup__caption');
const popupProfileAvatarBtn = document.querySelector('.profile__image-button');
const popupProfileAvatar = document.querySelector('.popup_type_new-avatar');
const profileUrlInput = popupProfileAvatar.querySelector('.popup__input_type_url-avatar');
const formProfileAvatar = popupProfileAvatar.querySelector('.popup__form');
const textBtnProfileAvatar = popupProfileAvatar.querySelector('.button__text');
const textBtnProfile = popupProfile.querySelector('.button__text');
const textBtnNewCard = popupNewCard.querySelector('.button__text');

let initialUserId;
Promise.all([getInitialUser(), getInitialCards()])
  .then(([userData, cardsData]) => {
    console.log(userData);
    const {name, about, avatar, _id} = userData;
    initialUserId = _id;
    profileTitle.textContent = name;
    profileJob.textContent = about;
    profileIcon.style.backgroundImage = `url(${avatar})`;
    console.log(cardsData)
    cardsData.forEach(function (item) {
      const {name, link, owner: {_id:cardOwnerId}, _id:cardId, likes} = item
      const alt = name;
      const cardElement = createCard({name, link, alt, likes, cardOwnerId, initialUserId, cardId, deleteCard, likeCard, onImageClick});
      cardPlaces.append(cardElement);
    });
  })
  .catch((err)=> {
    console.log(err);
  })

function onImageClick(evt){
  openModal(popupImgContainer);
  popupImg.src = evt.target.src;
  popupImg.alt = evt.target.alt;
  popupImgName.textContent = evt.target.alt;
};

popupProfileBtn.addEventListener('click', function(){
  openModal(popupProfile);
  clearValidation(formProfile, validationConfig); 
  fillProfileFormInputs();
});

popupProfileAvatarBtn.addEventListener('click', function(){
  openModal(popupProfileAvatar);
  formProfileAvatar.reset();
  clearValidation(formProfileAvatar, validationConfig);
})

popupAddBtn.addEventListener('click', function(){ 
  openModal(popupNewCard);
});

popupAll.forEach((popup) => {
  const closeBtn = popup.querySelector('.popup__close')
  closeBtn.addEventListener('click', function(){
    closeModal(popup)
  })

  popup.addEventListener('click', function(evt){
    handleCloseModalByOverlay(evt, popup)
  })
})

function handleFormSubmitProfile(evt) {
    evt.preventDefault();                                          
    
    renderLoading(true, textBtnProfile);
    patchProfile({
      name: nameInput.value,
      about: jobInput.value
    })
      .then(() => {
        profileTitle.textContent = nameInput.value
        profileJob.textContent = jobInput.value
        closeModal(popupProfile);
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        renderLoading(false, textBtnProfile);
      });
      
}

function fillProfileFormInputs() {
  nameInput.value = profileTitle.textContent
  jobInput.value = profileJob.textContent
}

formProfile.addEventListener('submit', handleFormSubmitProfile);

formAddCard.addEventListener('submit', async function(evt){
  evt.preventDefault();
  
  const name = cardNameInput.value;
  const link = cardUrlInput.value;
  const alt = cardNameInput.value;
  renderLoading(true, textBtnNewCard);
  try {
    const res = await postCard({
      name: name,
      link: link
    })
    const cardId = res._id;
    const cardOwnerId = res.owner._id
    const likes = [];
    const cardElement = createCard({name, link, alt, likes, cardOwnerId, initialUserId, cardId, deleteCard, likeCard, onImageClick});
    cardPlaces.prepend(cardElement);
    clearValidation(formAddCard, validationConfig);
    formAddCard.reset();
    closeModal(popupNewCard);
  } catch(err) {
    console.log(err)
  } finally {
    renderLoading(false, textBtnNewCard);
  };
});

function handleFormSubmitProfileAvatar(evt) {
  evt.preventDefault();
  const avatarUrl = profileUrlInput.value;
  
  
  renderLoading(true, textBtnProfileAvatar);
  patchAvatar({
    avatar: avatarUrl
  })
    .then(() => {
      profileIcon.style.backgroundImage = `url(${avatarUrl})`;
      formProfileAvatar.reset();
      closeModal(popupProfileAvatar);
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      renderLoading(false, textBtnProfileAvatar);
    });
  
}

formProfileAvatar.addEventListener('submit', handleFormSubmitProfileAvatar);

function renderLoading(isLoading, textBtn) {
  if (isLoading) {
    textBtn.textContent = "Сохранение...";
  } else {
    textBtn.textContent = "Сохранить";
  }
}

enableValidation(validationConfig);










