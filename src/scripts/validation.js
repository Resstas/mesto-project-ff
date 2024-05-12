function showInputError (formElement, inputElement, errorMessage, selectors) {
  const {inputErrorClass, errorClass} = selectors
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};

function hideInputError  (formElement, inputElement, selectors) {
  const {inputErrorClass, errorClass} = selectors
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
}

function checkInputValidity (formElement, inputElement, selectors) {
  if (inputElement.validity.patternMismatch) {
   inputElement.setCustomValidity(inputElement.dataset.errorMessage)
  } else {
   inputElement.setCustomValidity("");
  }

  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, selectors);
  } else {
    hideInputError(formElement, inputElement, selectors);
  }
};

function setEventListeners (formElement, selectors) {
  const {inputSelector,  submitButtonSelector} = selectors 
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);
  toggleButtonState(inputList, buttonElement, selectors);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, selectors);
      toggleButtonState(inputList, buttonElement, selectors);
    })
  })
}

export function enableValidation (selectors) {
  const {formSelector} = selectors
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, selectors);
  });
};

function hasInvalidInput (inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function disableButton(buttonElement, inactiveButtonClass) {
  buttonElement.disabled = true;
  buttonElement.classList.add(inactiveButtonClass)
}

function toggleButtonState (inputList, buttonElement, selectors) {
  const {inactiveButtonClass} = selectors
  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement, inactiveButtonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(inactiveButtonClass)
  }
}

export function clearValidation(formElement, selectors) {
  const {inputSelector, submitButtonSelector, inactiveButtonClass} = selectors
  const inputElementList = Array.from(formElement.querySelectorAll(inputSelector));
  inputElementList.forEach((inputElement) => {
     hideInputError(formElement, inputElement, selectors);
  })
  const buttonElement = formElement.querySelector(submitButtonSelector);
  disableButton(buttonElement, inactiveButtonClass);
 }

