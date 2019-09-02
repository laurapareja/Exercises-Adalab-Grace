'use scrict';
const strawberry = document.querySelector('.fruit-strawberry');
const banana = document.querySelector('.fruit-banana');
const kiwi = document.querySelector('.fruit-kiwi');

function handleFruitClick(event) {
    // Asignamos a una constante el elemento
    // sobre el que pusimos el `listener`
    // para trabajar cómodamente con él
    const selectedFruit = event.currentTarget;

    selectedFruit.classList.toggle('fruit--selected');
}

strawberry.addEventListener('click', handleFruitClick);
banana.addEventListener('click', handleFruitClick);
kiwi.addEventListener('click', handleFruitClick);