export default class Card {
  constructor(data, cardselector, {handleCardClick}) {
    this._cardSelector = cardselector;
    this._handleCardClick = handleCardClick;
    this._element = this._cardSelector.querySelector('.place-card').cloneNode(true);
    this._likeButton = this._element.querySelector('.place-card__like');
    this._data = data;
  }

  _toggleLike() {
    this._likeButton.classList.toggle('place-card__like_active');
  }

  _removeCardElement() {
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
      this._handleCardClick(this._data);
    });
  }

  createCard() {
    this._setEventListeners();
    const cardImage = this._element.querySelector('.place-card__image');
    cardImage.src = this._data.link;
    cardImage.alt = this._data.name;
    this._element.querySelector('.place-card__title').textContent = this._data.name;
    return this._element;
  }
}
