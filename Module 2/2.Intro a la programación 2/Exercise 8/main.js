'use strict';

const result = document.querySelector('.list');



const firstDogImage = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';



result.innerHTML =
    `<img src="${firstDogImage}">
	<p>${firstDogName}</p>
<img src="${secondDogImage}">
	<p>${secondDogName}</p>
<img src="${thirdDogImage}">
	<p>${thirdDogName}</p>`;



// Ejemplo
// const element = document.querySelector('#element');
// const textToShow = 'Hey, this is important.';



// // ES6
// element.innerHTML = `
// <div class="popup">
//   <span>${textToShow}</span>
// </div>`;