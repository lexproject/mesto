const editProfile = document.querySelector('.profile__edit-button');
const buttonAddPlace = document.querySelector('.profile__add-button');
const openPopup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close');
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__job');
const titleInput = document.querySelector('.popup__input_type_title');
const infoInput = document.querySelector('.popup__input_type_info');
const formSubmit = document.querySelector('.popup__form');
const formTitle = document.querySelector('.popup__title');
const popupContainer = document.querySelector('.popup__form-container');
const popupImageContainer = document.querySelector('.popup__image-container');
const buttonSubmit = document.querySelector('.popup__button');
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

//Функция открытия модального окна
function showPopup() {
  openPopup.classList.add('popup_opened');
  setTimeout(()=> openPopup.classList.add('popup_opaciti'),100);
}

//Функция показа окна формы
function showPopupForm() {
  popupContainer.classList.add('popup_opened');
}

//Функция закрытия модальных окон
function closePopup() {
  openPopup.classList.remove('popup_opaciti');
  setTimeout(()=> {
    openPopup.classList.remove('popup_opened');
    popupContainer.classList.remove('popup_opened');
    popupImageContainer.classList.remove('popup_opened');
},300);
}

//Функция создания карточки из шаблона
function createPlaceElement(placeTitle, placeImage) {
  const placeTemplate = document.querySelector('#place').content;
  const places = document.querySelector('.places');
  const placeElement = placeTemplate.querySelector('.place-card').cloneNode(true);
  placeElement.querySelector('.place-card__image').src = placeImage;
  placeElement.querySelector('.place-card__image').alt = placeTitle;
  placeElement.querySelector('.place-card__title').textContent = placeTitle;
  placeElement.querySelector('.place-card__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('place-card__like_active');
  });
  places.prepend(placeElement);
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
  if(infoInput.type === 'text') {
    nameProfile.textContent = titleInput.value;
    jobProfile.textContent = infoInput.value;
  }
  if(infoInput.type === 'url') {
    createPlaceElement(titleInput.value, infoInput.value);
  }
  closePopup();
}

//Функция подготовки формы редактирования профайла
function showEditForm () {
  formTitle.textContent = 'Редактировать профиль';
  buttonSubmit.textContent = 'Сохранить';
  titleInput.value = nameProfile.textContent;
  infoInput.value = jobProfile.textContent;
  infoInput.type = 'text';
  infoInput.removeAttribute('placeholder')
  titleInput.removeAttribute('placeholder')
  showPopup();
  showPopupForm();
}

//Функция подготовки формы добавления места
function showAddForm () {
  formTitle.textContent = 'Новое место';
  buttonSubmit.textContent = 'Создать';
  infoInput.type = 'url';
  infoInput.setAttribute('placeholder', 'Ссылка на картинку');
  infoInput.value = '';
  infoInput.setAttribute('required', '');
  titleInput.setAttribute('required', '');
  titleInput.value = '';
  titleInput.setAttribute('placeholder', 'Название');
  showPopup();
  showPopupForm();
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
  showPopup();
  popupImageContainer.classList.add('popup_opened');
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


formSubmit.addEventListener('submit', submitForm);
editProfile.addEventListener('click', showEditForm);
buttonAddPlace.addEventListener('click', showAddForm);
closePopupButton.addEventListener('click',closePopup);
document.querySelector('#popupDel').addEventListener('click',closePopup);;

