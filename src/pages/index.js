import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import {formSet, profileEdit, buttonAddPlace, popupEditOpen,popupAddOpen,
   popupImageOpen, nameProfile, jobProfile, formProfileSubmit,
  formAddPlaceSubmit, placeInteractive, placeTemplate, popupDeletePlace,
  popupAvatarUpdate, avatarEditButton, formAvatarSubmit, avatarIcon} from '../components/Data.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';
import {api} from '../components/Api.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';


const formAddValidate = new FormValidator(formSet, formAddPlaceSubmit);
const formEditValidate = new FormValidator(formSet, formProfileSubmit);
const formAvatarValidate = new FormValidator(formSet, formAvatarSubmit);
const userInfo = new UserInfo ({name: nameProfile, about: jobProfile})
const popupImageAdd = new PopupWithImage ({ popupSelector: popupImageOpen });
const renderCard = new Section (placeInteractive);
///Создание карточек////////////////////////
const createCard = (item) => {
  const card = new Card(item, placeTemplate, {
     handleCardClick: (item, element) => {
       if (element.classList.contains('place-card__image')) {Promise.resolve(popupImageAdd.open(item));}
       else if (element.classList.contains('place-card__delete')) {
        placeConfirmDelete.open(item);
      }
       else if (element.classList.contains('place-card__like_active')) {
          api.putLike(item._id)
          .then(res =>{
            if (res.ok) {return res.json();}
            return Promise.reject(console.log(`Ошибка: ${res.status}`));
          })
          .then((result) => {
            element.nextElementSibling.textContent = result.likes.length;
          }).catch((err) => {
            console.log(`Ошибка: ${err}`);
          });
        }
        else if (!element.classList.contains('place-card__like_active')) {
          api.pullOffLike(item._id)
          .then(res =>{
            if (res.ok) {return res.json();}
            return Promise.reject(console.log(`Ошибка: ${res.status}`));
          })
          .then((result) => {
            element.nextElementSibling.textContent = result.likes.length;
          }).catch((err) => {
            console.log(`Ошибка: ${err}`);
          });
        }
      }
    });
  const cardElement = card.createCard();
  return cardElement
}
//////////Форма подтверждения удаления карточки///////////
const placeConfirmDelete = new PopupWithConfirmation({ popupSelector: popupDeletePlace}, {
  callbackConfirm: (item)=> {
    api.deleteCard(item._id)
    .then(res =>{
      if (res.ok) {return res.json();}
      return Promise.reject(console.log(`Ошибка: ${res.status}`));
    })
    .then((result) => {
      const cardDeleted = document.getElementById(`${item._id}`);
      cardDeleted.remove();
      placeConfirmDelete.close();
    }).catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
  }
});
//////////Первичное добавление данных пользователя//////////
api.getUserMe()
.then(res =>{
  if (res.ok) {return res.json();}
  return Promise.reject(console.log(`Ошибка: ${res.status}`));
})
.then((result) => {
  nameProfile.textContent = result.name;
  jobProfile.textContent = result.about;
  avatarIcon.src = result.avatar
}).catch((err) => {
  console.log(`Ошибка: ${err}`);
});

//Форма добавления данных пользователя
const profileFormSubmit = new PopupWithForm ({popupSelector: popupEditOpen}, {callbackSubmit: (data) => {
  api.setUserMe(data).then(res => {if(res.ok) {return res.json();}
  return Promise.reject(console.log(`Ошибка: ${res.status}`));})
  .then((post) => {userInfo.setUserInfo(post);}).catch((err) => {
    console.log(`Ошибка: ${err}`);
  }).finally(() => {
    profileFormSubmit.renderLoading(false);
  });
}});
//Форма Добавление и отрисовки карточки
const placeFormSubmit = new PopupWithForm ( {popupSelector: popupAddOpen}, {callbackSubmit: (item) => {
  api.setNewCard(item).then(res => {if(res.ok) {return res.json();}
  return Promise.reject(console.log(`Ошибка: ${res.status}`));})
  .then((post) => {
    const cardElement = createCard(post);
    renderCard.addItem(cardElement);
  }).catch((err) => {
    console.log(`Ошибка: ${err}`);
  }).finally(() => {
    placeFormSubmit.renderLoading(false);
  });
}});
//Форма обновления аватара
const avatarFormSubmit = new PopupWithForm ({popupSelector: popupAvatarUpdate}, {callbackSubmit: (avatar) => {
  api.updateAvatar(avatar.link).then(res => {if(res.ok) {return res.json();}
  return Promise.reject(console.log(`Ошибка: ${res.status}`));})
  .then((newAvatar) => {avatarIcon.src = newAvatar.avatar;}).catch((err) => {
    console.log(`Ошибка: ${err}`);
  }).finally(() => {
    placeFormSubmit.renderLoading(false);
  });
}});
//слушатели событий
profileEdit.addEventListener('click', ()=>{userInfo.getUserInfo();profileFormSubmit.open();});
buttonAddPlace.addEventListener('click', ()=> placeFormSubmit.open());
avatarEditButton.addEventListener('click', ()=> avatarFormSubmit.open());
formEditValidate.enableValidation();
formAddValidate.enableValidation();
formAvatarValidate.enableValidation();
placeFormSubmit.setEventListeners();
profileFormSubmit.setEventListeners();
popupImageAdd.setEventListeners();
placeConfirmDelete.setEventListeners();
avatarFormSubmit.setEventListeners();
//Заполнение карточками по умолчанию
window.addEventListener("DOMContentLoaded", () => {
  api.getInitialCards()
  .then(res =>{
    if (res.ok) {return res.json();}
    return Promise.reject(console.log(`Ошибка: ${res.status}`));
  })
  .then((result) => {
    result.forEach(item => {
      const cardElement = createCard(item);
      renderCard.addItem(cardElement);
    });
  }).catch((err) => {
    console.log(`Ошибка: ${err}`);
  });
});


