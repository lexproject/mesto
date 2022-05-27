export default class FormValidator {
  constructor (set, formElement) {
    this._formElement = formElement;
    this._inputSelector = set.inputSelector;
    this._inputErrorClass = set.inputErrorClass;
    this._errorClass = set.errorClass;
    this._submitButtonSelector = set.submitButtonSelector;
    this._inactiveButtonClass = set.inactiveButtonClass;
    this._buttonProfileEdit = set.buttonProfileEdit;
    this._buttonAddPlace = set.buttonAddPlace;
    this._inputErrorSelector = set.inputErrorSelector;
  }


  _verificationInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }


  _togleSubmitButton(inputList, buttonElement) {
    if (this._verificationInput(inputList)) {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.setAttribute("disabled", "disabled");
    }
    else {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.removeAttribute("disabled");
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

  _resetErrorField(inputList){
    inputList.forEach((inputElement) => {
      this._hideError(inputElement)
    });
  }

  _checkValidity(inputElement) {
    (!inputElement.validity.valid) ? this._showError(inputElement) : this._hideError(inputElement);
  }

  _checkFormValidity(inputList, buttonElement) {
    const buttonShowForm = document.querySelector(`.${this._formElement.id}-button`);
    buttonShowForm.addEventListener('click', ()=>{
      this._togleSubmitButton(inputList, buttonElement);
      this._resetErrorField(inputList);
    });
  }

  _setEventListener(inputList, buttonElement) {
    this._checkFormValidity(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', ()=> {
        this._togleSubmitButton(inputList, buttonElement);
        this._checkValidity(inputElement);
      });
    });
  }

  enableValidation(){
    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    this._setEventListener(inputList, buttonElement);
    }
}


