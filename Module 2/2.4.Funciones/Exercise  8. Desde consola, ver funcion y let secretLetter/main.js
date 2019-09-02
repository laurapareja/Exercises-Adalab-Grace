'use scrict';

let secretLetter = 'y';

function mySecretLetter() {
    secretLetter = 'x';
    return secretLetter;
}
console.log(mySecretLetter()); // devuelve "x"
console.log(secretLetter); // devuelve "y"

// si la funcion es la primera console log que sale, los dos valores son x. porque se ejecuta la funcion que da un valor a secretLetter: x... y esa es la que hereda la variable let.