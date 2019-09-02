'use strict';

const getMessage = () => {
    const msg = document.querySelector('.js-message');
    msg.innerHTML = 'Su sesión ha expirado';
}
setTimeout(getMessage, 10000);