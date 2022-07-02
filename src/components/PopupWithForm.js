import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor (popupSelector, {callbackSubmit}) {
    super(popupSelector);
    this._callbackSubmit = callbackSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._buttonSubmit = this._popup.querySelector('.popup__button');
    this.buttonInitialText = this._buttonSubmit.textContent;
  }

  renderLoading(isLoad) {
    if(isLoad){this._buttonSubmit.textContent = 'Сохранение...';}
    else {this._buttonSubmit.textContent = this.buttonInitialText;}
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
    return this._formValues;
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.renderLoading(true);
      this._callbackSubmit(this._getInputValues());
      this.close();
    })
  }
}
