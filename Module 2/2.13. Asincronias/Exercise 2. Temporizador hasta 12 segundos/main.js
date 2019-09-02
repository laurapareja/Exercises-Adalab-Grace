'use scrict';

let counter = 0;
const time = document.querySelector('.time');

function incrementAndShowCounter() {
    if (counter < 12) {
        counter++;
        time.innerHTML = counter;
    }
}

setInterval(incrementAndShowCounter, 1000);