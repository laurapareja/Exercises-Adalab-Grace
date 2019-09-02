'use strict';
const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

const list = document.querySelector('.list');
const button = document.querySelector('.button');

function addListenersToFilmList() {
    const movies = document.querySelectorAll('li');
    for (let movie of movies) {
        movie.addEventListener('click', showNameConsole);
    }
}

function createFilmList() {
    list.innerHTML = `<li class="inception">${inception}</li><li class="theButterFlyEffect">${theButterFlyEffect}</li><li class="eternalSunshineOfTheSM">${eternalSunshineOfTheSM}</li><li class="blueVelvet">${blueVelvet}</li><li class="split">${split}</li>`;
    addListenersToFilmList();
}

function showNameConsole(event) {
    const film = event.currentTarget;
    console.log(film.textContent);
}

button.addEventListener('click', createFilmList);