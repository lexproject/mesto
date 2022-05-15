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
const popupImage = document.querySelector('.popup__image');
const popupTitle = document.querySelector('.popup__title-image');
const popups = document.querySelectorAll('.popup');

//Массив с предустановленными карточками
const initialCards = [
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


//Функция открытия модальных окон
function openPopup (popup) {
  document.addEventListener('keydown', closeEventKey);
  popup.classList.add('popup_opened');
}

//Функция закрытия модальных окон
function closePopup(popup) {
  document.removeEventListener('keydown', closeEventKey);
  popup.classList.remove('popup_opened');
}

function closeEventKey(event) {
  const key = event.key;
    if (key === "Escape") {
     closePopup(document.querySelector('.popup_opened'));
    }
  }

//Функция открытия изображения в модальном окне
function showPopupImage (cardImage, cardTitle) {
  popupTitle.textContent = cardTitle;
  popupImage.src = cardImage;
  popupImage.alt = cardTitle;
  openPopup (popupImageOpen);
}

//Функция создания карточки из шаблона
function createCard(placeTitle, placeImage) {
  const placeElement = placeTemplate.querySelector('.place-card').cloneNode(true);
  const Image = placeElement.querySelector('.place-card__image');
  Image.src = placeImage;
  Image.alt = placeTitle;
  placeElement.querySelector('.place-card__title').textContent = placeTitle;
  placeElement.querySelector('.place-card__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('place-card__like_active');
  });
  placeElement.querySelector('.place-card__delete').addEventListener('click', function (evt) {
    evt.target.closest('.place-card').remove();
  });
  placeElement.querySelector('.place-card__image').addEventListener('click', function () {
    showPopupImage(placeImage, placeTitle);
  });
  return placeElement;
}

//Слушатель и Функция автоматического заполнения карточками по умолчанию
window.addEventListener("DOMContentLoaded", () => {
  initialCards.forEach((item)=>{
    placeInteractive.prepend(createCard(item.name, item.link));
  });
});

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
  placeInteractive.prepend(createCard(inputPlaceTitle.value, inputPlaceLink.value));
  formAddPlaceSubmit.reset();
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

