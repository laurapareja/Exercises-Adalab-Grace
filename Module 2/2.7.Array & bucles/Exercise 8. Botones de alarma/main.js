'use strict';

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('.body');

function changeBackground() {
    body.classList.toggle('on');
}


for (let button of buttons) {
    button.addEventListener('click', changeBackground);
}