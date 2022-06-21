import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import {initialCards, formSet, profileEdit, buttonAddPlace, popupEditOpen,popupAddOpen,
   popupImageOpen, nameProfile, jobProfile, formProfileSubmit,
  formAddPlaceSubmit, placeInteractive, placeTemplate} from '../components/Data.js';
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';

const formAddValidate = new FormValidator(formSet, formAddPlaceSubmit);
const formEditValidate = new FormValidator(formSet, formProfileSubmit);
const popupProfileEdit = new Popup ({ popupSelector: popupEditOpen });
const popupPlaceAdd = new Popup ({ popupSelector: popupAddOpen });
const userInfo = new UserInfo ({name: nameProfile, job: jobProfile})
const popupImage = new Popup ({ popupSelector: popupImageOpen });
////////////////////////////////////////////////////////////

//Форма добавления данных пользователя
const profileFormSubmit = new PopupWithForm ({popupSelector: popupEditOpen}, {callbackSubmit: (data) => {
  userInfo.setUserInfo(data);
}});
//Форма Добавление и отрисовки карточки
const placeFormSubmit = new PopupWithForm ( {popupSelector: popupAddOpen}, {callbackSubmit: (data) => {
  const imageAddForm = new Section ({data: [data], renderer: (item) => {
    const card = new Card(item, placeTemplate, {handleCardClick: (item)=>{
      const popupImageAdd = new PopupWithImage ({ popupSelector: popupImageOpen }, item);
      popupImageAdd.open();
    }});
    const cardElement = card.createCard();
    imageAddForm.addItem(cardElement);
  }}, placeInteractive);
  imageAddForm.renderItems();
} });
/////////////////////////////////////////////////////////////
//слушатели событий
profileEdit.addEventListener('click', ()=>{userInfo.getUserInfo();popupProfileEdit.open();});
buttonAddPlace.addEventListener('click', ()=> popupPlaceAdd.open());
formEditValidate.enableValidation();
formAddValidate.enableValidation();
placeFormSubmit.setEventListeners();
profileFormSubmit.setEventListeners();
popupImage.setEventListeners();
// Функция автоматического заполнения карточками по умолчанию
window.addEventListener("DOMContentLoaded", () => {
  const elementAddInContainer = new Section ({data: initialCards, renderer: (item) => {
    const card = new Card(item, placeTemplate, {handleCardClick: (item)=>{
      const popupImageInitial = new PopupWithImage ({ popupSelector: popupImageOpen }, item);
      popupImageInitial.open();
    }});
    const cardElement = card.createCard();
    elementAddInContainer.addItem(cardElement);
  }}, placeInteractive);
  elementAddInContainer.renderItems();
});
