import Popup from "./Popup.js";
export default class PopupWithConfirmation extends Popup {
  constructor (popupSelector, {callbackConfirm}) {
    super(popupSelector);
    this._callbackConfirm = callbackConfirm;
    this._confirmButton = this._popup.querySelector('.popup__button');
  }

  open(item) {
    super.open();
    this.cardData = item;
  }

  setEventListeners() {
    super.setEventListeners();
    this._confirmButton.addEventListener('click', ()=>{
      this._callbackConfirm(this.cardData);
    });
  }

}

