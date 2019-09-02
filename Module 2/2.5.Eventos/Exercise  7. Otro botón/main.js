"use scrict";

const button = document.querySelector('.button');

const changeButton = (event) => {
    button.classList.toggle('on');
}


button.addEventListener('click', changeButton);