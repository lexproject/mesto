
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
export const formSet = {
  popupImageSelector: '.popup__image',
  popupTitleSelector: '.popup__title-image',
  inputSelector: '.popup__input',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  buttonProfileEdit: '.profile__edit-button',
  buttonAddPlace: '.profile__add-button',
  inputErrorSelector: '.popup__input-error'
}

//Константы
export const profileEdit = document.querySelector('.profile__edit-button');
export const buttonAddPlace = document.querySelector('.profile__add-button');
export const popupEditOpen = document.querySelector('.popup_edit-profile');
export const popupAddOpen = document.querySelector('.popup_add-place');
export const popupImageOpen = document.querySelector('.popup_show-image');
export const nameProfile = document.querySelector('.profile__title');
export const jobProfile = document.querySelector('.profile__job');
export const profileTitleInput = document.querySelector('.popup__input_profile-title');
export const profileInfoInput = document.querySelector('.popup__input_profile-info');
export const formProfileSubmit = document.querySelector('.popup__form_edit-profile');
export const formAddPlaceSubmit = document.querySelector('.popup__form_add-place');
export const placeInteractive = document.querySelector('.places');
export const placeTemplate = document.querySelector('#place').content;
export const popupImage = document.querySelector('.popup__image');
export const popupTitle = document.querySelector('.popup__title-image');
