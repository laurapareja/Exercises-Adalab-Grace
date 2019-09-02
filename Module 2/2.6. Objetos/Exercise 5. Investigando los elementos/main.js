'use strict';

const input = document.querySelector('.js-input');

function showConsole() {
    console.dir(input);
}


input.addEventListener('change', showConsole);

// value = content of input
// nodeName = INPUT
// required = false