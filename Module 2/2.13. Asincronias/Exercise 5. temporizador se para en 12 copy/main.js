'use scrict';

let counter = 0;
let temp;

const time = document.querySelector('.time');

function incrementAndShowCounter() {

    counter++;
    time.innerHTML = counter;
    if (counter === 12) {
        clearInterval(temp);
    }
}
temp = setInterval(incrementAndShowCounter, 1000);