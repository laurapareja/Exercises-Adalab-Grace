'use strict';
const nameDog = document.querySelector('.js-dogName');
const imgDog = document.querySelector('.js-dogImg');

function getRandomNumber() {
    return fetch("https://api.rand.fun/number/integer?max=87")
        .then(response => response.json())
        .then(data => {
            const randomNumber = data.result;
            console.log(`el numero random es ${randomNumber}`)
            return randomNumber;
        })
};

function getBreedsImage() {
    fetch('https://dog.ceo/api/breeds/list')
        .then(breedsResponse => breedsResponse.json())
        .then(breedsData => {
            const breeds = breedsData.message;
            console.log(breeds);
            const numberP = getRandomNumber();
            numberP.then(randomNumber => {
                    console.log(breeds[randomNumber]);
                    nameDog.innerHTML = breeds[randomNumber];
                    return fetch('https://dog.ceo/api/breed/' + breeds[randomNumber] + '/images/random');
                })
                .then(data => data.json())
                .then(data => imgDog.src = data.message)
        })
}




const btn = document.querySelector(".js-dog");
btn.addEventListener("click", getBreedsImage)