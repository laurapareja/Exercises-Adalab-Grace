'use script';
const number = document.querySelector('.number');

debugger
const numb = 19;

if (numb === 0) {
    console.log('El número es 0')
} else if (numb < 0) {
    console.log('El número es negativo')
} else if (numb + 2 >= 13 && numb + 2 <= 20) {
    console.log('El número más 2 es: mayor 13 pero menor o igual que 20')
} else if (numb > 20 && numb <= 50) {
    console.log('El número es mayor que 20 pero menor que 50')
} else {
    console.log('el número no es 123123125')
}