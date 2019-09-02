'use strict';

fetch('https://api.rand.fun/number/integer')
    .then(response => response.html())
    .then(data => document.body.innerHTML = data.result)
    .catch(error => console.log(`Ha sucedido un error: ${error}`));