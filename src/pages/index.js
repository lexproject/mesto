import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import {
  selectorSet,
  profileEdit,
  profileTitleInput,
  profileInfoInput,
  buttonAddPlace,
  formProfileSubmit,
  formAddPlaceSubmit,
  avatarEditButton,
  formAvatarSubmit,
  profileSelectors
} from '../utils/data.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';
import {api} from '../components/Api.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';


const placeConfirmDelete = new PopupWithConfirmation({ popupSelector: '.popup_delete-place'});
const formAddValidate = new FormValidator(selectorSet, formAddPlaceSubmit);
const formEditValidate = new FormValidator(selectorSet, formProfileSubmit);
const formAvatarValidate = new FormValidator(selectorSet, formAvatarSubmit);
const userInfo = new UserInfo (profileSelectors)
const popupImageAdd = new PopupWithImage ({ popupSelector: '.popup_show-image' });
///Создание карточек////////////////////////
const createCard = (item) => {
  const card = new Card(item, '#place', {
    handleCardClickImage: () => {popupImageAdd.open(item);},
    handleCardClickDelete: () => {placeConfirmDelete.open(()=>{
      api.deleteCard(item._id)
        .then((result) => {
          console.log(result);
          card.removeCardElement();
          placeConfirmDelete.close();
        })
        .catch(err=>console.log(`Ошибка: ${err}`));
      });
    },
    handleCardClickLikeOn: () => {
      api.putLike(item._id)
        .then(result=>card.setCountLike(result))
        .catch(err=>console.log(`Ошибка: ${err}`));
    },
    handleCardClickLikeOff: () =>{
      api.pullOffLike(item._id)
        .then(result=> card.setCountLike(result))
        .catch(err=>console.log(`Ошибка: ${err}`));
    }
  });
  const cardElement = card.createCard();
  return cardElement
}

const renderCard = new Section ({renderer: item=>renderCard.addItem(createCard(item))}, '.places');

//Форма добавления данных пользователя
const profileFormSubmit = new PopupWithForm ({popupSelector: '.popup_edit-profile'}, {submitForm: (data) => {
  api.setUserMe(data)
  .then((res) => {userInfo.setUserInfo(res);profileFormSubmit.close();})
  .catch((err) => {console.log(`Ошибка: ${err}`);})
  .finally(() => {profileFormSubmit.renderLoading(false);});
}});
//Форма Добавление и отрисовки карточки
const placeFormSubmit = new PopupWithForm ( {popupSelector: '.popup_add-place'}, {submitForm: (item) => {
  api.setNewCard(item)
  .then((post) => {
    const cardElement = createCard(post);
    renderCard.addItem(cardElement);
    placeFormSubmit.close();
  })
  .catch((err) => {console.log(`Ошибка: ${err}`);})
  .finally(() => {placeFormSubmit.renderLoading(false);});
}});
//Форма обновления аватара
const avatarFormSubmit = new PopupWithForm ({popupSelector: '.popup_edit-avatar'},{submitForm: (avatar) => {
    api.updateAvatar(avatar.link)
    .then(newAvatar=>{userInfo.setAvatar(newAvatar);avatarFormSubmit.close();})
    .catch(err=>console.log(`Ошибка: ${err}`))
    .finally(()=>avatarFormSubmit.renderLoading(false));
  }
});
//слушатели событий
profileEdit.addEventListener('click', ()=>{
  formEditValidate.resetErrorField();
  const userData = userInfo.getUserInfo();
  profileTitleInput.value = userData.name;
  profileInfoInput.value = userData.about;
  profileFormSubmit.open();
});
buttonAddPlace.addEventListener('click', ()=> {formAddValidate.resetErrorField();placeFormSubmit.open();});
avatarEditButton.addEventListener('click', ()=> {formAvatarValidate.resetErrorField();avatarFormSubmit.open();});
formEditValidate.enableValidation();
formAddValidate.enableValidation();
formAvatarValidate.enableValidation();
placeFormSubmit.setEventListeners();
profileFormSubmit.setEventListeners();
popupImageAdd.setEventListeners();
placeConfirmDelete.setEventListeners();
avatarFormSubmit.setEventListeners();

Promise.all([api.getUserMe(), api.getInitialCards()])
.then(([userData, initialCards])=>{
  userInfo.setUserInfo(userData);
  userInfo.setAvatar(userData);
  renderCard.renderItems(initialCards);
})
.catch(err=>console.log(err));
