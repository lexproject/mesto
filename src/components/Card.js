export default class Card {
  constructor(data, templateElement, cullbackSet) {
    this._templateElement = templateElement;
    this._handleCardClickImage = cullbackSet.handleCardClickImage;
    this._handleCardClickDelete = cullbackSet.handleCardClickDelete;
    this._handleCardClickLikeOn = cullbackSet.handleCardClickLikeOn;
    this._handleCardClickLikeOff = cullbackSet.handleCardClickLikeOff;
    this._element = this._templateElement.querySelector('.place-card').cloneNode(true);
    this._likeButton = this._element.querySelector('.place-card__like');
    this._cardImage = this._element.querySelector('.place-card__image');
    this._countLike = this._element.querySelector('.place-card__like-count');
    this._deleteCardButton = this._element.querySelector('.place-card__delete');
    this._userId = document.querySelector('.profile__title').id;
    this._likeSelector = 'place-card__like_active';
    this._data = data;
  }

  _setId() {
    this._element.id = this._data._id;
  }

  _removeDeleteButton(){
    if(this._data.owner._id !== this._userId){
      this._deleteCardButton.remove();
    }
  }

  _removeCardElement() {
    this._element.remove();
    this._element = null;
  }

  _toggleLike() {
    this._likeButton.classList.toggle(this._likeSelector);
  }

  setCountLike(count) {
    this._countLike.textContent = count.likes.length;
    this._toggleLike();
  }

  _setInitialCountLike() {
    this._countLike.textContent = this._data.likes.length;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', (e)=> {
      e.target.classList.contains(this._likeSelector)? this._handleCardClickLikeOff() :
      this._handleCardClickLikeOn();
    });
    this._deleteCardButton.addEventListener('click', ()=> {
      this._handleCardClickDelete();
    });
    this._cardImage.addEventListener('click', ()=> {
      this._handleCardClickImage();
    });
  }

  createCard() {
    this._setId();
    this._removeDeleteButton();
    this._setInitialCountLike();
    this._setEventListeners();
    this._cardImage.src = this._data.link;
    this._cardImage.alt = this._data.name;
    this._element.querySelector('.place-card__title').textContent = this._data.name;
    return this._element;
  }
}
