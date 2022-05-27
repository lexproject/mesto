import {showPopupImage} from './index.js';
export default class Card {
  constructor(data, cardselector) {
    this._title = data.name;
    this._image = data.link;
    this._cardSelector = cardselector;
  }

  _placeTemplate() {
    const cardElement = this._cardSelector.querySelector('.place-card').cloneNode(true);
    return cardElement;
  }

  _toggleLike(item) {
    item.classList.toggle('place-card__like_active');
  }

  _removeCardElement(item) {
    item.closest('.place-card').remove();
  }

  _setEventListeners() {
    this._element.querySelector('.place-card__like').addEventListener('click', (evt)=> {
      this._toggleLike(evt.target);
    });
    this._element.querySelector('.place-card__delete').addEventListener('click', (evt)=> {
      this._removeCardElement(evt.target);
    });
    this._element.querySelector('.place-card__image').addEventListener('click', ()=> {
      showPopupImage(this._image, this._title);
    });
  }

  createCard() {
    this._element = this._placeTemplate();
    this._setEventListeners();
    const cardImage = this._element.querySelector('.place-card__image');
    cardImage.src = this._image;
    cardImage.alt = this._title;
    this._element.querySelector('.place-card__title').textContent = this._title;
    return this._element;
  }
}
