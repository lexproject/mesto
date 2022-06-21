import Popup from "./Popup.js";
import {popupImage, popupTitle} from "./Data.js"
export default class PopupWithImage extends Popup {
  constructor ({popupSelector}, data) {
    super({popupSelector});
    this._popupImage = popupImage;
    this._popupTitle = popupTitle;
    this._title = data.name;
    this._image = data.link;
  }

  _setPopupImage () {
    this._popupTitle.textContent = this._title;
    this._popupImage.src = this._image;
    this._popupImage.alt = this._title;
  }
  open() {
    super.open();
    this._setPopupImage();
  }
}
