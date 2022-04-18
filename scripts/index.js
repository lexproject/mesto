let editPopup = document.querySelector('.profile__edit-button');
let openPopup = document.querySelector('.popup');
let closeForm = document.querySelector('.popup__close');
let nameProfile = document.querySelector('.profile__title');
let jobProfile = document.querySelector('.profile__job');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let saveButton = document.querySelector('.popup__form');

function formSubmit(e) {
  e.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup();
}

function showPopup() {
  openPopup.classList.add('popup_opened');
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

function closePopup() {
  openPopup.classList.remove('popup_opened');
}

saveButton.addEventListener('submit', formSubmit);
editPopup.addEventListener('click', showPopup);
closeForm.addEventListener('click', closePopup);

