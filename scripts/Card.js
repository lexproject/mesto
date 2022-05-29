export default class Card {
  constructor(data, cardselector, callback) {
    this._title = data.name;
    this._image = data.link;
    this._cardSelector = cardselector;
    this._showPopup = callback;
    this._element = this._cardSelector.querySelector('.place-card').cloneNode(true);
    this._likeButton = this._element.querySelector('.place-card__like');
  }

  _showImage () {
    const popupImage = document.querySelector('.popup__image');
    const popupTitle = document.querySelector('.popup__title-image');
    popupTitle.textContent = this._title;
    popupImage.src = this._image;
    popupImage.alt = this._title;
  }

  _toggleLike() {
    this._likeButton.classList.toggle('place-card__like_active');
  }

  _removeCardElement(item) {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', ()=> {
      this._toggleLike();
    });
    this._element.querySelector('.place-card__delete').addEventListener('click', ()=> {
      this._removeCardElement();
    });
    this._element.querySelector('.place-card__image').addEventListener('click', ()=> {
      this._showImage();
      this._showPopup();
    });
  }

  createCard() {
    this._setEventListeners();
    const cardImage = this._element.querySelector('.place-card__image');
    cardImage.src = this._image;
    cardImage.alt = this._title;
    this._element.querySelector('.place-card__title').textContent = this._title;
    return this._element;
  }
}
