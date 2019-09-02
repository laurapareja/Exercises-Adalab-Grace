'use strict';
const numbers = [3, 6, 7, 4, 9];
let result = 0;

// a)
//for (let number = 0; number < numbers.length; number++) {
//     result += numbers[number] / numbers.length;
// }

// total 29. 29/5= 5.8
// console.log(result);

numbers.push(10);
//b)
//el bucle tiene que ir después de meter el número en la array

// for (let number = 0; number < numbers.length; number++) {
//     result += numbers[number] / numbers.length;
// }


function average(numbers) {
    for (let number = 0; number < numbers.length; number++) {
        result += numbers[number] / numbers.length;
    }
    console.log(result);
    console.log(numbers);
}
average(numbers);