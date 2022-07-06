import Popup from "./Popup.js";
import loadImage from "../images/loading_icon.svg";
export default class PopupWithImage extends Popup {
  constructor ({popupElement}) {
    super({popupElement});
    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupTitle = this._popup.querySelector('.popup__title-image');
  }

  open({name, link}) {
    this._popupTitle.textContent = name;
    this._popupImage.src = link;
    this._popupImage.alt = name;
    super.open();
  }

  close() {
    super.close();
    this._popupTitle.textContent = 'Загрузка';
    this._popupImage.src = loadImage;
    this._popupImage.alt = 'Подождите идёт загрузка';
  }
}
