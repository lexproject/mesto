export default class Card {
  constructor(data, cardselector, {handleCardClick}) {
    this._cardSelector = cardselector;
    this._handleCardClick = handleCardClick;
    this._element = this._cardSelector.querySelector('.place-card').cloneNode(true);
    this._likeButton = this._element.querySelector('.place-card__like');
    this._cardImage = this._element.querySelector('.place-card__image');
    this._countLike = this._element.querySelector('.place-card__like-count');
    this._deleteCardButton = this._element.querySelector('.place-card__delete');
    this._data = data;
  }

  _setId() {
    this._element.id = this._data._id;
  }

  _removeDeleteButton(){
    if(this._data.owner._id !== 'a871bc59e180b66e3f1b095f'){
      this._deleteCardButton.remove();
    }
  }

  _toggleLike() {
    this._likeButton.classList.toggle('place-card__like_active');
  }

  _setCountLike() {
    this._countLike.textContent = this._data.likes.length;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', (e)=> {
      this._toggleLike();
      this._handleCardClick(this._data, e.target);
    });
    this._deleteCardButton.addEventListener('click', (e)=> {
      this._handleCardClick(this._data, e.target);
    });
    this._cardImage.addEventListener('click', (e)=> {
      this._handleCardClick(this._data, e.target);
    });
  }

  createCard() {
    this._setId();
    this._removeDeleteButton();
    this._setCountLike();
    this._setEventListeners();
    const cardImage = this._element.querySelector('.place-card__image');
    cardImage.src = this._data.link;
    cardImage.alt = this._data.name;
    this._element.querySelector('.place-card__title').textContent = this._data.name;
    return this._element;
  }
}
