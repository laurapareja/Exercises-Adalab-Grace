'use strict';
const text = document.querySelector('.text');
const addResult = document.querySelector('.js-addResult');

const cestaPeras = {
    max: 10,
    min: 1,
    actual: 5,
    initial: 1,
};

text.innerHTML = `La cesta de Peras puede tener: <li>como máximo ${cestaPeras.max}</li><li>como mínimo ${cestaPeras.min}</li> <li> El número actual de peras es ${cestaPeras.actual}</li><li>El número inicial de peras es ${cestaPeras.initial}</li>`;


cestaPeras.addPeras = peras => {
    cestaPeras.actual = cestaPeras.actual + peras;
    addResult.innerHTML = `He añadido ${peras} peras. El número actual de peras es ${cestaPeras.actual}. `;
}

cestaPeras.sustractPeras = peras => {
    cestaPeras.actual = cestaPeras.actual - peras;
    addResult.innerHTML += `He quitado ${peras} peras. En total ahora me quedan ${cestaPeras.actual} peras.`;
    console.log(cestaPeras.actual);
}

cestaPeras.resetPeras = function() {
    cestaPeras.actual = cestaPeras.initial;
    console.log(cestaPeras.actual);
}

cestaPeras.addPeras(5);
cestaPeras.sustractPeras(3);