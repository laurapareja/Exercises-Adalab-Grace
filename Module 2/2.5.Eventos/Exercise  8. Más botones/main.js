"use scrict";

const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');

function handleButtonClick() {
    const buttonSelected = event.currentTarget;
    buttonSelected.classList.toggle('on');
}

button1.addEventListener('click', handleButtonClick);
button2.addEventListener('click', handleButtonClick);