import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor ({popupSelector}) {
    super({popupSelector});
    this._popup = popupSelector;
    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupTitle = this._popup.querySelector('.popup__title-image');
  }

  open({name, link}) {
    super.open();
    this._popupTitle.textContent = name;
    this._popupImage.src = link;
    this._popupImage.alt = name;
  }
}
