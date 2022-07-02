export default class FormValidator {
  constructor (set, formElement) {
    this._formElement = formElement;
    this._inputSelector = set.inputSelector;
    this._inputErrorClass = set.inputErrorClass;
    this._errorClass = set.errorClass;
    this._submitButtonSelector = set.submitButtonSelector;
    this._inactiveButtonClass = set.inactiveButtonClass;
    this._inputErrorSelector = set.inputErrorSelector;
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

  _resetErrorField(){
    this._inputList.forEach((inputElement) => {
      this._hideError(inputElement)
    });
  }

  _checkValidity(inputElement) {
    (!inputElement.validity.valid) ? this._showError(inputElement) : this._hideError(inputElement);
  }

  _checkFormValidity() {
    const buttonShowForm = document.querySelector(`.${this._formElement.id}-button`);
    buttonShowForm.addEventListener('click', ()=>{
      this._togleSubmitButton();
      this._resetErrorField();
    });
  }

  _setEventListener() {
    this._checkFormValidity();
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


