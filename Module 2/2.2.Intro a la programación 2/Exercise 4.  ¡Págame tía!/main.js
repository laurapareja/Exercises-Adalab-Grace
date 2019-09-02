'use strict';

const toPay = document.querySelector('.toPay');

const toPayAna = document.querySelector('.toPayAna');

const gastos = (128 - 2) / 9;
toPay.innerHTML = gastos;
toPayAna.innerHTML = gastos + 2;