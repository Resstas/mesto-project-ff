export function openModal(popupOpen) {
  popupOpen.classList.add('popup_is-opened');
  document.addEventListener('keydown', closeByEsc)
}

export function closeModal(modal) {
  modal.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closeByEsc)
}

export function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const modalOpened = document.querySelector('.popup_is-opened')
    closeModal(modalOpened);
  }
}
