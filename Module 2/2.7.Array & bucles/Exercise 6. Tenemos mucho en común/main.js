'use strict;'
const form = document.querySelector('.form');
const button = document.querySelector('.button');
const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');

const favorites = [];

function saveFavorite(event) {
    event.preventDefault();
    favorites.push(input1.value);
    favorites.push(input2.value);
    for (let favorite of favorites) {
        console.log(`¡A mí también me encantó ${favorite}. Tenemos mucho en común, humana.`)
    }
}


button.addEventListener('click', saveFavorite);
form.addEventListener('submit', saveFavorite);