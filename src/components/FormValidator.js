export default class FormValidator {
  constructor (selectorSet, formElement) {
    this._formElement = formElement;
    this._inputSelector = selectorSet.inputSelector;
    this._inputErrorClass = selectorSet.inputErrorClass;
    this._errorClass = selectorSet.errorClass;
    this._submitButtonSelector = selectorSet.submitButtonSelector;
    this._inactiveButtonClass = selectorSet.inactiveButtonClass;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonSubmit = this._formElement.querySelector(this._submitButtonSelector);
  }

  _verificationInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }


  _togleSubmitButton() {
    if (this._verificationInput(this._inputList)) {
      this._buttonSubmit.classList.add(this._inactiveButtonClass);
      this._buttonSubmit.setAttribute("disabled", "disabled");
    }
    else {
      this._buttonSubmit.classList.remove(this._inactiveButtonClass);
      this._buttonSubmit.removeAttribute("disabled");
    }
  }

   _showError(inputElement) {
    const errorItem = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorItem.textContent = inputElement.validationMessage;
    errorItem.classList.add(this._errorClass);
  }

  _hideError(inputElement) {
    const errorItem = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorItem.classList.remove(this._errorClass);
    errorItem.textContent = '';
  }

  resetErrorField(){
    this._inputList.forEach((inputElement) => {
      this._hideError(inputElement)
    });
    this._togleSubmitButton();
  }

  _checkValidity(inputElement) {
    (!inputElement.validity.valid) ? this._showError(inputElement) : this._hideError(inputElement);
  }

  _setEventListener() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', ()=> {
        this._togleSubmitButton();
        this._checkValidity(inputElement);
      });
    });
  }

  enableValidation(){
    this._setEventListener();
    }
}


