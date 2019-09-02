'use script';

debugger

// const classEl = `('.class')`;
const itemJs = document.querySelector('.js-item');

const numb = itemJs.innerHTML;
const number = parseInt(numb);


function getEl(itemJs) {
    if (itemJs === true) {
        return 'document.querySelector' + (classEl);

    } else {
        return console.error('No existe ningún elemento con clase, id o tag llamado');
    }
}

function par(number) {
    if (numb % 2 === 0) {
        return 'Este número es PAR'
    } else {
        return 'Este número es IMPAR'
    }

}

const combination = getEl(itemJs) + par(number);
console.log = combination;