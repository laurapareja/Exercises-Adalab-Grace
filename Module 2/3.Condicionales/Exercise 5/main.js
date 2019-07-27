'use script';

const activableDiv = document.querySelector('.notification');

// .js-item, una clase preferible en html

const title = document.querySelector('.title');
const text = document.querySelector('.text');

debugger

if (activableDiv.classList.contains('warning')) {
    title.innerHTML = 'AVISO';
    text.innerHTML = 'Tenga cuidado';


} else if (activableDiv.classList.contains('error')) {
    title.innerHTML = 'ERROR';
    text.innerHTML = 'Ha surgido un error';

} else if (activableDiv.classList.contains('success')) {
    title.innerHTML = 'CORRECTO';
    text.innerHTML = 'Los datos son correctos';
}