'use scrict';

let counter = 0;
const time = document.querySelector('.js-time');

function incrementAndShowCounter() {
    counter++;

    if (counter === 1) {
        time.innerHTML = `escrito hace ${counter} segundo`;
    } else if (counter < 60) {
        time.innerHTML = `escrito hace ${counter} segundos`;
    } else if (counter === 60) {
        time.innerHTML = `escrito hace 1 minuto`;
    } else if (counter >= 120) {
        time.innerHTML = `escrito hace ${parseInt(counter/60)} minutos`;
    }

}

setInterval(incrementAndShowCounter, 1000);