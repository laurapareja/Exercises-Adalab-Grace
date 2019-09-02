'use script';

debugger

// const classEl = `('.boxes')`;

function getEl(classEl) {
    return document.querySelector(classEl);
}

const btnEl = getEl('.clase');
console.log(btnEl);