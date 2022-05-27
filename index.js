let like = document.querySelectorAll('.element__like');
console.log(like);

function showClick() {
    alert('Вы кликнули по элементу');
}

like.addEventListener('click', showClick());