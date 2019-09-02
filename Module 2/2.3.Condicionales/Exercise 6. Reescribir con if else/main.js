'use script';

let avocados;
const avocadoPrice = 1.5;
const money = 33;

if (money >= avocadoPrice) {
    avocados = money / avocadoPrice;
} else {
    avocados = 0;
}

const price = money >= avocadoPrice ? money / avocadoPrice : 0;