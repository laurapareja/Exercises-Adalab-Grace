'use script';

debugger

// const classEl = `('.class')`;


function getEl(classEl) {
    if (classEl === true) {
        return 'document.querySelector' + (classEl);

    } else {
        return console.error('No existe ningún elemento con clase, id o tag llamado');
    }
}

const btnEl = getEl();