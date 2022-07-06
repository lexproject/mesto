export default class Popup {
  constructor({popupElement}) {
    this._popup = popupElement;
    this._popupButtonClose = this._popup.querySelector('.popup__close');
  }

  _handleEscClose = (event)=>{
    const key = event.key;
    if (key === "Escape") {this.close();}
  }
  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }
  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }
  setEventListeners() {
    this._popup.addEventListener('click', (evt)=> {
      if (evt.target.classList.contains('popup_opened')) {this.close()}});
    this._popupButtonClose.addEventListener('click', ()=> {this.close()});
  }


}
