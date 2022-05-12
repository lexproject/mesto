const editProfile = document.querySelector('.profile__edit-button');
const buttonAddPlace = document.querySelector('.profile__add-button');
const openPopupEdit = document.querySelector('.popup_edit-profile');
const openPopupAdd = document.querySelector('.popup_add-place');
const openPopupImage = document.querySelector('.popup_show-image');
const closePopupButtons = document.querySelectorAll('.popup__close');
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__job');
const profileTitleInput = document.querySelector('.popup__input_profile-title');
const profileInfoInput = document.querySelector('.popup__input_profile-info');
const formProfileSubmit = document.querySelector('.popup__form_edit-profile');
const formAddPlaceSubmit = document.querySelector('.popup__form_add-place');
const interactivePlace = document.querySelector('.places');
const placeTemplate = document.querySelector('#place').content;
const inputPlaceTitle = document.querySelector('.popup__input_title-image');
const inputPlaceLink = document.querySelector('.popup__input_image-place');
const popupImage = document.querySelector('.popup__image');
const popupTitle = document.querySelector('.popup__title-image');
const popups = document.querySelectorAll('.popup');
const inputErrorSpans = document.querySelectorAll('.popup__input-error');
const inputErrors = document.querySelectorAll('.popup__input');
let itemPopup = '';
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
//Функция удаления сообщения об ошибках
function clearErrorSpan() {
  const errorSpanList = Array.from(inputErrorSpans);
  errorSpanList.some((spanElement) => {
    if(spanElement.textContent !== ''){spanElement.textContent = ''}
  });
}
//Функция удаления подсветки ошибки
function clearErrorInput() {
  const errorInputList = Array.from(inputErrors);
  errorInputList.some((inputElement) => {
    if(inputElement.classList.contains('popup__input_type_error')) {
      inputElement.classList.remove('popup__input_type_error');
    }
  });
}
function closeEventKey(event) {
  const key = event.key;
    if (key === "Escape") {
     closePopup(itemPopup);
    }
  }

//Функция открытия модальных окон
function openPopup (popup) {
  itemPopup = popup;
  document.addEventListener('keydown', closeEventKey);
  clearErrorInput();
  clearErrorSpan();
  popup.classList.add('popup_opened');
  setTimeout(()=> popup.classList.add('popup_opaciti'),100);
}

//Функция закрытия модальных окон
function closePopup(popup) {
  if(!document.activeElement.classList.contains('popup__input')) {
    document.removeEventListener('keydown', closeEventKey);
  }
  if(popup === openPopupAdd) {
    clearInputFormAddPlace();
  }
  popup.classList.remove('popup_opaciti');
  setTimeout(()=> {
    popup.classList.remove('popup_opened');
  },300);
}



//Функция открытия изображения в модальном окне
function showPopupImage (cardImage, cardTitle) {
  popupTitle.textContent = cardTitle;
  popupImage.src = cardImage;
  popupImage.alt = cardTitle;
  openPopup (openPopupImage);
}

//Функция создания карточки из шаблона
function createCard(placeTitle, placeImage) {
  const placeElement = placeTemplate.querySelector('.place-card').cloneNode(true);
  placeElement.querySelector('.place-card__image').src = placeImage;
  placeElement.querySelector('.place-card__image').alt = placeTitle;
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
    interactivePlace.prepend(createCard(item.name, item.link));
  });
});
//Функция удаления текста в полях формы добавления места
function clearInputFormAddPlace() {
  inputPlaceTitle.value = '';
  inputPlaceLink.value = '';
}

//Функция открытия формы редактирования профайла
function showEditForm () {
  profileTitleInput.value = nameProfile.textContent;
  profileInfoInput.value = jobProfile.textContent;
  openPopup (openPopupEdit);
}

//Функция открытия формы добавления места
function showAddForm () {
  openPopup (openPopupAdd);
}

//Функция отправки формы профиля
formProfileSubmit.addEventListener('submit', (evt) => {
  evt.preventDefault();
  nameProfile.textContent = profileTitleInput.value;
  jobProfile.textContent = profileInfoInput.value;
  closePopup(openPopupEdit);
});
//Функция отправки формы добавления места
formAddPlaceSubmit.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if(!inputPlaceTitle.validity.valid || !inputPlaceLink.validity.valid) {return false;}
  interactivePlace.prepend(createCard(inputPlaceTitle.value, inputPlaceLink.value));
  clearInputFormAddPlace();
  closePopup(openPopupAdd);
});
//слушатели событий
editProfile.addEventListener('click', showEditForm);
buttonAddPlace.addEventListener('click', showAddForm);

closePopupButtons.forEach((elementClose) => {
  elementClose.addEventListener('click', (evt) => {
    const etarget = evt.target;
    const targetItem = etarget.closest('.popup');
    closePopup(targetItem);
  });
});

popups.forEach((itemClose) => {
  itemClose.addEventListener('click', (evt) => {
    const etarget = evt.target;
    closePopup(etarget);
  });
});

