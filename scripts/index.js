const editProfile = document.querySelector('.profile__edit-button');
const buttonAddPlace = document.querySelector('.profile__add-button');
const openPopupEdit = document.querySelector('.popup_edit-profile');
const openPopupAdd = document.querySelector('.popup_add-place');
const openPopupImage = document.querySelector('.popup_show-image');
const closePopupButton = document.querySelectorAll('.popup__close');
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__job');
const titleInput = document.querySelector('.popup__input_type_title');
const infoInput = document.querySelector('.popup__input_type_info');
const formSubmit = document.querySelectorAll('.popup__form');
const interactivePlace = document.querySelector('.places');

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

//Функция закрытия модальных окон
function closePopup(elementPopup) {
  elementPopup.classList.remove('popup_opaciti');
  setTimeout(()=> {
    elementPopup.classList.remove('popup_opened');
  },300);
}

//Функция создания карточки из шаблона
function createPlaceElement(placeTitle, placeImage) {
  const placeTemplate = document.querySelector('#place').content;
  const placeElement = placeTemplate.querySelector('.place-card').cloneNode(true);
  placeElement.querySelector('.place-card__image').src = placeImage;
  placeElement.querySelector('.place-card__image').alt = placeTitle;
  placeElement.querySelector('.place-card__title').textContent = placeTitle;
  placeElement.querySelector('.place-card__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('place-card__like_active');
  });
  interactivePlace.prepend(placeElement);
}

//Слушатель и Функция автоматического заполнения карточками по умолчанию
window.addEventListener("DOMContentLoaded", () => {
  initialCards.forEach((item)=>{
    createPlaceElement(item.name, item.link);
  });
});

//Функция отправки формы
function submitForm(e) {
  e.preventDefault();
  const etarget = e.target;
  const formNodes = etarget.childNodes;
  let infoInputForm = formNodes[3];
  let titleInputForm = formNodes[1];
  if(infoInputForm.type === 'text') {
    nameProfile.textContent = titleInputForm.value;
    jobProfile.textContent = infoInputForm.value;
  }
  if(infoInputForm.type === 'url') {
    createPlaceElement(titleInputForm.value, infoInputForm.value);
    titleInputForm.value = '';
    infoInputForm.value = '';
  }
  const targetItem = etarget.closest('.popup');
  closePopup(targetItem);
}

//Функция открытия формы редактирования профайла
function showEditForm () {
  titleInput.value = nameProfile.textContent;
  infoInput.value = jobProfile.textContent;
  openPopupEdit.classList.add('popup_opened');
  setTimeout(()=> openPopupEdit.classList.add('popup_opaciti'),100);
}

//Функция открытия формы добавления места
function showAddForm () {
  openPopupAdd.classList.add('popup_opened');
  setTimeout(()=> openPopupAdd.classList.add('popup_opaciti'),100);
}

//Функция открытия изображения в модальном окне
function showPopupImage (item) {
  const placeCardImage = item[3];
  const placeCardTitle = item[5];
  const popupImage = document.querySelector('.popup__image');
  const popupTitle = document.querySelector('.popup__title-image');
  popupTitle.textContent = placeCardTitle.textContent;
  popupImage.src = placeCardImage.src;
  popupImage.alt = placeCardImage.alt;
  openPopupImage.classList.add('popup_opened');
  setTimeout(()=> openPopupImage.classList.add('popup_opaciti'),100);
}

//Функция интеракивного взаимодействия с карточками
interactivePlace.addEventListener('click', (e) =>{
  const etarget = e.target;
  const targetItem = etarget.closest('.place-card');
  if(etarget.classList.value === 'place-card__delete') {
    targetItem.remove();
}
  if (etarget.classList.value === 'place-card__image'){
    showPopupImage(targetItem.childNodes);
  }
});

formSubmit.forEach((item)=>{
  item.addEventListener('submit', submitForm);});
editProfile.addEventListener('click', showEditForm);
buttonAddPlace.addEventListener('click', showAddForm);
closePopupButton.forEach(function(elementClose) {
  elementClose.addEventListener('click', (ev) => {
    const etarget = ev.target;
    const targetItem = etarget.closest('.popup');
    closePopup(targetItem);
  });
});
