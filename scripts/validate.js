function verificationInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}
 function resetErrorField(formElement, inputList, set){
  inputList.some((inputElement) => {
    if(inputElement.classList.contains(set.inputErrorClass)) {
    inputElement.classList.remove(set.inputErrorClass);}
  });
  const spanList = Array.from(formElement.querySelectorAll(set.inputErrorSelector));
  spanList.some((spanElement) => {
    if(spanElement.textContent !== ''){spanElement.textContent = ''}
  });
 }

function togleSubmitButton(inputList, buttonElement, set) {
  if (verificationInput(inputList)) {
    buttonElement.classList.add(set.inactiveButtonClass);
    buttonElement.setAttribute("disabled", "disabled");
  }
  else {
    buttonElement.classList.remove(set.inactiveButtonClass);
    buttonElement.removeAttribute("disabled");
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

function checkFormValidity(formElement, inputList, buttonElement, set) {
  document.querySelector(set.buttonAddPlace).addEventListener('click', ()=>{
    togleSubmitButton(inputList, buttonElement, set);
    resetErrorField(formElement, inputList, set);
  });
  document.querySelector(set.buttonProfileEdit).addEventListener('click', ()=>{
    togleSubmitButton(inputList, buttonElement, set);
    resetErrorField(formElement, inputList, set)
  });
}

function setEventListener(formElement, set) {
  const inputList = Array.from(formElement.querySelectorAll(set.inputSelector));
  const buttonElement = formElement.querySelector(set.submitButtonSelector);
  checkFormValidity(formElement, inputList, buttonElement, set);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      togleSubmitButton(inputList, buttonElement, set);
      checkValidity(formElement, inputElement, set);
    });
  });
}

function enableValidation(set){
  const formList = Array.from(document.querySelectorAll(set.formSelector));
  formList.forEach((formElement) => {
    setEventListener(formElement, set);
  });
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  buttonProfileEdit: '.profile__edit-button',
  buttonAddPlace: '.profile__add-button',
  inputErrorSelector: '.popup__input-error'
});
