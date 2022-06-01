const editButton = document.querySelector('.profile__edit-button')
const popup = document.querySelector('.popup')
const popupClose = document.querySelector('.popup__close')
const profileName = document.querySelector('.profile__full-name')
const profileJob = document.querySelector('.profile__job')
const popupInputName = document.querySelector('.popup__input_type_name')
const popupInputJob = document.querySelector('.popup__input_type_job')
const popupSubmit = document.querySelector('.popup__submit')
const form = document.querySelector('.popup__form')

function open() {
    popup.classList.remove('popup_open')
    profileName.textContent = popupInputName.value
    profileJob.textContent = popupInputJob.value
}

editButton.addEventListener('click', function() {
    popup.classList.add('popup_open')
    popupInputName.value = profileName.textContent
    popupInputJob.value = profileJob.textContent
})

popupClose.addEventListener('click', open)


function formSubmitHandler(evt) {
    evt.preventDefault()
    profileName.textContent = popupInputName.value
    profileJob.textContent = popupInputJob.value
    open()
}

form.addEventListener('submit', formSubmitHandler)