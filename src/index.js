import './pages/index.css';
import {createCard, deleteCard ,likeCard } from './scripts/card.js';
import { openModal, closeModal } from './scripts/modal.js';
import { enableValidation, clearValidation  } from './scripts/validation.js';
import { getInitialCards, getInitialUser, pathProfile, postCard, deleteCardApi, putLike, deleteLike, patchAvatar } from './scripts/api.js';

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
const cardUrlInput = popupNewCard.querySelector('.popup__input_type_url-img');
const popupImgContainer = document.querySelector('.popup_type_image');
const popupImg = popupImgContainer.querySelector('.popup__image'); 
const popupImgName = popupImgContainer.querySelector('.popup__caption');
const popupProfileAvatarBtn = document.querySelector('.profile__image-button');
const popupProfileAvatar = document.querySelector('.popup_type_new-avatar');
const profileUrlInput = popupProfileAvatar.querySelector('.popup__input_type_url-avatar');
const profileIcon = document.querySelector('.profile__image');
const formProfileAvatar = popupProfileAvatar.querySelector('.popup__form');
const textLoadingBtnProfileAvatar = popupProfileAvatar.querySelector('.button__text-loading');
const textBtnProfileAvatar = popupProfileAvatar.querySelector('.button__text');
const textLoadingBtnProfile = popupProfile.querySelector('.button__text-loading');
const textBtnProfile = popupProfile.querySelector('.button__text');
const textLoadingBtnNewCard = popupNewCard.querySelector('.button__text-loading');
const textBtnNewCard = popupNewCard.querySelector('.button__text');

let initialUserId; 
getInitialUser()
  .then((res) => {
    console.log(res);
    const {name, about, avatar, _id} = res;
    initialUserId = _id;
    profileTitle.textContent = name;
    profileJob.textContent = about;
    profileImg.style.backgroundImage = `url(${avatar})`;
  })
  .catch((err) => {
    console.log(err);
  });

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

popupProfileAvatarBtn.addEventListener('click', function(){
  openModal(popupProfileAvatar);
  clearValidation(popupProfileAvatar, SELECTORS);
})

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
    renderLoading(true, textLoadingBtnProfile, textBtnProfile);
    pathProfile({
      name: nameInput.value,
      about: jobInput.value
    })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        renderLoading(false, textLoadingBtnProfile, textBtnProfile);
      });
      closeModal(popupProfile);
}

function addTextValue() {
  nameInput.value = profileTitle.textContent
  jobInput.value = profileJob.textContent
}



formProfile.addEventListener('submit', handleFormSubmitProfile);

formAddCard.addEventListener('submit', async function(evt){
  evt.preventDefault();
  
  const name = cardNameInput.value;
  const link = cardUrlInput.value;
  const alt = cardNameInput.value;
  renderLoading(true, textLoadingBtnNewCard, textBtnNewCard);
  const res = await postCard({
    name: name,
    link: link
  })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      renderLoading(false, textLoadingBtnNewCard, textBtnNewCard);
    });
  const cardId = res._id;
  const cardOwnerId = res.owner._id
  const likes = [];
  const cardElement = createCard({name, link, alt, likes, cardOwnerId, initialUserId, cardId, deleteCard, likeCard, clickImg});
  cardPlaces.prepend(cardElement);
  formAddCard.reset();
  closeModal(popupNewCard);
  
});

function handleFormSubmitProfileAvatar(evt) {
  evt.preventDefault();
  const avatarUrl = profileUrlInput.value;
  profileIcon.style.backgroundImage = `url(${avatarUrl})`;
  formProfileAvatar.reset();
  
  renderLoading(true, textLoadingBtnProfileAvatar, textBtnProfileAvatar);
  patchAvatar({
    avatar: avatarUrl
  })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      renderLoading(false, textLoadingBtnProfileAvatar, textBtnProfileAvatar);
    });
  closeModal(popupProfileAvatar);
}


formProfileAvatar.addEventListener('submit', handleFormSubmitProfileAvatar);

function renderLoading(isLoading, textLoadingBtn, textBtn) {
  if (isLoading) {
    textLoadingBtn.classList.add('button__text-loading_visible');
    textBtn.classList.add('button__text-hidden');
  } else {
    textLoadingBtn.classList.remove('button__text-loading_visible');
    textBtn.classList.remove('button__text-hidden');
  }
}






getInitialCards()
  .then((res) => {
    res.forEach(function (item) {
      const {name, link, owner: {_id:cardOwnerId}, _id:cardId, likes} = item
      const alt = name;
      const cardElement = createCard({name, link, alt, likes, cardOwnerId, initialUserId, cardId, deleteCard, likeCard, clickImg});
      cardPlaces.append(cardElement);
    });
  })
  .catch((err) => {
    console.log(err);
  });

enableValidation(SELECTORS);







