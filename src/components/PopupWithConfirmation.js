import Popup from "./Popup.js";
export default class PopupWithConfirmation extends Popup {
  constructor (popupElement) {
    super(popupElement);
    this._buttonSubmit = this._popup.querySelector('.popup__form');
  }

  open(deleteCardCallback) {
    super.open();
    this._deleteCardCallback = deleteCardCallback;
  }

  setEventListeners() {
    super.setEventListeners();
    this._buttonSubmit.addEventListener('submit', (evt)=>{
      evt.preventDefault();
      this._deleteCardCallback();
    });
  }

}

