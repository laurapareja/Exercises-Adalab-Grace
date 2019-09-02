'use script';

// debugger
const buttonElement = document.querySelector('.alert');

function handleButtonClick(event) {
    console.log(event.currentTarget);
}

buttonElement.addEventListener('click', handleButtonClick);

// si clickas obtienes el elemento que esta declarado con la funcion clickable