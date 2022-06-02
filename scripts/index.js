const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const profileName = document.querySelector('.profile__full-name');
const profileJob = document.querySelector('.profile__job');
const popupInputName = document.querySelector('.popup__input_type_name');
const popupInputJob = document.querySelector('.popup__input_type_job');
const popupSubmit = document.querySelector('.popup__submit');
const form = document.querySelector('.popup__form');

function close() {
    popup.classList.remove('popup_open');
}

editButton.addEventListener('click', function() {
    popup.classList.add('popup_open');
    popupInputName.value = profileName.textContent;
    popupInputJob.value = profileJob.textContent;
})

popupClose.addEventListener('click', close);


function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = popupInputName.value;
    profileJob.textContent = popupInputJob.value;
    close();
}

form.addEventListener('submit', formSubmitHandler);