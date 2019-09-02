'use strict';
const text = document.querySelector('.text');

const adalaber1 = {
    name: 'Susana',
    age: 34,
    job: 'periodista'
};

adalaber1.run = phrase => `Estoy ${phrase}`;
adalaber1.runAMarathon = distance => `Estoy corriendo un maratón de ${distance} kilómetros`;


text.innerHTML = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job}.`;

console.log(adalaber1.run('corriendo'));
console.log(adalaber1.runAMarathon('50'));