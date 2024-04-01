export function openModal(popupOpen) {
  popupOpen.classList.add('popup_is-opened');
}

export function closeModal(modal) {
  modal.classList.remove('popup_is-opened');
}