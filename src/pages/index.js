import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import {initialCards, formSet, profileEdit, buttonAddPlace, popupEditOpen,popupAddOpen,
   popupImageOpen, nameProfile, jobProfile, formProfileSubmit,
  formAddPlaceSubmit, placeInteractive, placeTemplate} from '../components/Data.js';
import Section from '../components/Section.js';
//import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';

const formAddValidate = new FormValidator(formSet, formAddPlaceSubmit);
const formEditValidate = new FormValidator(formSet, formProfileSubmit);
const userInfo = new UserInfo ({name: nameProfile, job: jobProfile})
const popupImageAdd = new PopupWithImage ({ popupSelector: popupImageOpen });
const renderCard = new Section ({data: initialCards, renderer: (item) => {
  renderCard.addItem(createCard(item));}
}, placeInteractive);
const createCard = (item) => {
  const card = new Card(item, placeTemplate, {
     handleCardClick: (item) => {
       popupImageAdd.open(item);
     }
   });
   const cardElement = card.createCard();
return cardElement
}

//Форма добавления данных пользователя
const profileFormSubmit = new PopupWithForm ({popupSelector: popupEditOpen}, {callbackSubmit: (data) => {
  userInfo.setUserInfo(data);
}});
//Форма Добавление и отрисовки карточки
const placeFormSubmit = new PopupWithForm ( {popupSelector: popupAddOpen}, {callbackSubmit: (item) => {
  const cardElement = createCard(item);
  renderCard.addItem(cardElement);
}}, placeInteractive);
//слушатели событий
profileEdit.addEventListener('click', ()=>{userInfo.getUserInfo();profileFormSubmit.open();});
buttonAddPlace.addEventListener('click', ()=> placeFormSubmit.open());
formEditValidate.enableValidation();
formAddValidate.enableValidation();
placeFormSubmit.setEventListeners();
profileFormSubmit.setEventListeners();
popupImageAdd.setEventListeners();
//Заполнение карточками по умолчанию
window.addEventListener("DOMContentLoaded", () => {
  renderCard.renderItems();
});

