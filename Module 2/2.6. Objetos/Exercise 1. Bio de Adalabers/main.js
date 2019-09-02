'use strict';
const text = document.querySelector('.text');

const adalaber1 = {
    name: 'Susana',
    age: 34,
    job: 'periodista'
};
const adalaber2 = {
    name: 'Rocío',
    age: 25,
    job: 'actriz'
};

text.innerHTML = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job}.`;

text.innerHTML += `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.job}.`;