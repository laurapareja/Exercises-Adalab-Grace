'use strict';


const button = document.querySelector('.button');

function showConsole(event) {
    console.log(event);
}

button.addEventListener('click', showConsole);
// type: click