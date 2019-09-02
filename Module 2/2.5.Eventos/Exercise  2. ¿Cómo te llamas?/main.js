'use script';

// debugger

const button = document.querySelector('.alert');

const text = document.querySelector('.text');

function showMessage() {
    const name = text.value;
    console.log(`Hola ${name}`);
}

button.addEventListener('click', showMessage);


// errores. Se me ha olvidado poner clase en el HTML U.U. Había declarado la const name fuera de la función por lo que el navegador lo leía antes. Se me ha olvidado poner () después de console.log