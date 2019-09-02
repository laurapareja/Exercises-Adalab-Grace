'use strict';

const result = document.querySelector('.messageFriend');

const nameFriend = "Sara";
const message = `Hola ${nameFriend} encantada de conocerte.`


// const message = ("Hola ") + nameFriend + (", encantada de conocerte.");


// console.log(`Hola ${nameFriend} encantada de conocerte.`);

result.innerHTML = message;