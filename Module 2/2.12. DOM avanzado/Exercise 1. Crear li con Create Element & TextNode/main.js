'use scrict';
const list = document.querySelector('.list');


// const newContent = document.createTextNode(numbers);

const numbers = [1, 2, 3];

for (const number of numbers) {
    const newItem = document.createElement('li');
    const newContent = document.createTextNode(number);

    newItem.appendChild(newContent);
    list.appendChild(newItem);
}




console.log(newItem);
console.log(newContent);