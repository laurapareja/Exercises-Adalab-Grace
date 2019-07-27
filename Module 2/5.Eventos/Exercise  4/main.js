'use script';

debugger


const text = document.querySelector('.textContainer');

function changeBackg() {
    if (window.scrollY < 250) {
        text.classList.add('text1');
    }
}

window.addEventListener('scroll', changeBackg);


// error. Se me olvidó el punto de la clase textContainer en la variable text U.U!!