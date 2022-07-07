
//Массив с предустановленными карточками
export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// Объект настроек для класса валидатора форм
export const selectorSet = {
  popupImageSelector: '.popup__image',
  popupTitleSelector: '.popup__title-image',
  inputSelector: '.popup__input',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_type_disabled'
}

//Константы
export const profileEdit = document.querySelector('.profile__edit-button');
export const buttonAddPlace = document.querySelector('.profile__add-button');
export const profileTitleInput = document.querySelector('.popup__input_profile-title');
export const profileInfoInput = document.querySelector('.popup__input_profile-info');
export const formProfileSubmit = document.querySelector('.popup__form_edit-profile');
export const formAddPlaceSubmit = document.querySelector('.popup__form_add-place');
export const avatarEditButton = document.querySelector('.profile__avatar-button');
export const formAvatarSubmit = document.querySelector('.popup__form_edit-avatar');
export const avatarIcon = document.querySelector('.profile__avatar');
export const profileSelectors = {
  name: '.profile__title',
  about: '.profile__job',
  avatar: '.profile__avatar'
}
