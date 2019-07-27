'use script';

debugger

function par(numb) {
    if (numb % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

const result = par(prompt('el texto que quiero que salga para introducir texto'));

// console.log(par(numb));

// % calcula el resto de numb/2

// para simplificar se puede expresar
// function par(num) {
//     return (num % 2 === 0);
// }