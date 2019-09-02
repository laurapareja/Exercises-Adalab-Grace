'use strict';

function selectTeacher() {
    const teacherSelected = event.currentTarget;
    const favorite = teacherSelected.querySelector('.favorite');

    teacherSelected.classList.toggle('teacher--selected');
    if (favorite.textContent === 'Añadir') {
        favorite.innerHTML = 'Quitar';
    } else if (favorite.textContent === 'Quitar') {
        favorite.innerHTML = 'Añadir';
    }

}

const isra = document.querySelector('.teacher--isra');
isra.addEventListener('click', selectTeacher);
const tuerto = document.querySelector('.teacher--tuerto');
tuerto.addEventListener('click', selectTeacher);
const nasi = document.querySelector('.teacher--nasi');
nasi.addEventListener('click', selectTeacher);