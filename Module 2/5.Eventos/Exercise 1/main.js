'use script';

// debugger

const button = document.querySelector('.alert');

const textElem = document.querySelector('.text');


function showMessage() {
    textElem.innerHTML = `Mi primer click, ¡ole yo y la mujer que me parió!`;
}

button.addEventListener('click', showMessage);


// error cometido, poner document.queryselector('.text').textContent. No salía nada porque estaba cogiendo el valor del texto, como lo usamos en el ejercicio de numero par. en este caso solo quiero acceder a la caja de contenido, que es p. al elemento. por lo que pongo solo el queryselector