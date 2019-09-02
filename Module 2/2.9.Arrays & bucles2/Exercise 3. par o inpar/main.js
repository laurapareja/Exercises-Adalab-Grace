'use strict';
const lostNumbers = [4, 8, 15, 16, 23, 42];
let evenLostNumbers = [];
let oddLostNumbers = [];


function bestLostNumber() {
    for (let lostNumber of lostNumbers) {
        if (lostNumber % 2 === 0) {
            evenLostNumbers.push(lostNumber);
        } else {
            oddLostNumbers.push(lostNumber);
        }
    }
}

console.log(evenLostNumbers);
console.log(oddLostNumbers);

bestLostNumber();