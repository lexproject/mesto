function verificationInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}


function togleSubmitButton(formElement, inputList, set) {
  const buttonElement = formElement.querySelector(set.submitButtonSelector);
  if (verificationInput(inputList)) {
    buttonElement.classList.add(set.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(set.inactiveButtonClass);
  }
}

function showError(formElement, inputElement, errorMessage, set) {
  const errorItem = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(set.inputErrorClass);
  errorItem.textContent = errorMessage;
  errorItem.classList.add(set.errorClass);
}

function hideError(formElement, inputElement, set) {
  const errorItem = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(set.inputErrorClass);
  errorItem.classList.remove(set.errorClass);
  errorItem.textContent = '';
}

function checkValidity(formElement, inputElement, set) {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage, set);
  } else {
    hideError(formElement, inputElement, set);
  }
}

function setEvent(formElement, set) {
  const inputList = Array.from(formElement.querySelectorAll(set.inputSelector));
  togleSubmitButton(formElement, inputList, set);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkValidity(formElement, inputElement, set);
      togleSubmitButton(formElement, inputList, set);
    });
  });
}

function enableValidation(set){
  const formList = Array.from(document.querySelectorAll(set.formSelector));
  formList.forEach((formElement) => {
    setEvent(formElement, set);
  });
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled'
});
