import FormValidator from './FormValidator.js';
import Card from './Card.js';
import {initialCards, formSet} from './data.js';

//Константы
const profileEdit = document.querySelector('.profile__edit-button');
const buttonAddPlace = document.querySelector('.profile__add-button');
const popupEditOpen = document.querySelector('.popup_edit-profile');
const popupAddOpen = document.querySelector('.popup_add-place');
const popupImageOpen = document.querySelector('.popup_show-image');
const popupButtonsClose = document.querySelectorAll('.popup__close');
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__job');
const profileTitleInput = document.querySelector('.popup__input_profile-title');
const profileInfoInput = document.querySelector('.popup__input_profile-info');
const formProfileSubmit = document.querySelector('.popup__form_edit-profile');
const formAddPlaceSubmit = document.querySelector('.popup__form_add-place');
const placeInteractive = document.querySelector('.places');
const placeTemplate = document.querySelector('#place').content;
const inputPlaceTitle = document.querySelector('.popup__input_title-image');
const inputPlaceLink = document.querySelector('.popup__input_image-place');
const popups = document.querySelectorAll('.popup');
const formAddValidate = new FormValidator(formSet, formAddPlaceSubmit);
const formEditValidate = new FormValidator(formSet, formProfileSubmit);

//Функция закрытия клавишей Escape
function closeEscapeKey(event) {
  const key = event.key;
    if (key === "Escape") {
     closePopup(document.querySelector('.popup_opened'));
    }
  }

//Функция открытия модальных окон
function openPopup (popup) {
  document.addEventListener('keydown', closeEscapeKey);
  popup.classList.add('popup_opened');
}

//Функция закрытия модальных окон
function closePopup(popup) {
  document.removeEventListener('keydown', closeEscapeKey);
  popup.classList.remove('popup_opened');
}

//Функция открытия изображения в модальном окне
function showPopupImage () {
  openPopup (popupImageOpen);
}

// Функция создания карточки
function setCard(item) {
  const card = new Card(item, placeTemplate, showPopupImage);
   return card.createCard();
}

//Функция открытия формы редактирования профайла
function showEditForm () {
  profileTitleInput.value = nameProfile.textContent;
  profileInfoInput.value = jobProfile.textContent;
  openPopup (popupEditOpen);
}

//Функция открытия формы добавления места
function showAddForm () {
  formAddPlaceSubmit.reset();
  openPopup (popupAddOpen);
}

//Функция отправки формы профиля
formProfileSubmit.addEventListener('submit', (evt) => {
  evt.preventDefault();
  nameProfile.textContent = profileTitleInput.value;
  jobProfile.textContent = profileInfoInput.value;
  closePopup(popupEditOpen);
});
//Функция отправки формы добавления места
formAddPlaceSubmit.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formAddCard = {name: inputPlaceTitle.value, link: inputPlaceLink.value};
  placeInteractive.prepend(setCard(formAddCard));
  closePopup(popupAddOpen);
});

//слушатели событий
profileEdit.addEventListener('click', showEditForm);

buttonAddPlace.addEventListener('click', showAddForm);

popupButtonsClose.forEach((elementClose) => {
  elementClose.addEventListener('click', () => {
    closePopup(elementClose.closest('.popup'));
  });
});

popups.forEach((itemClose) => {
  itemClose.addEventListener('click', (evt) => {
    const etarget = evt.target;
    if(etarget.className === itemClose.className) {
    closePopup(itemClose);}
  });
});

formEditValidate.enableValidation();
formAddValidate.enableValidation();

// Функция автоматического заполнения карточками по умолчанию
window.addEventListener("DOMContentLoaded", () => {
  initialCards.forEach((item)=>{
    placeInteractive.prepend(setCard(item));
  });
});





