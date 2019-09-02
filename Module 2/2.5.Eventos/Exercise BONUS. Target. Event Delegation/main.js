'use strict';
const teachers = document.querySelector('.teachers');
const teacherLis = document.querySelectorAll('.teacher');


function selectTeacher() {
    const teachersSelected = event.currentTarget;

    const teacherSelected = event.target;

    // console.log(teachersSelected);
    // console.log(teacherSelected);

    let targetTeacher;
    for (const teacher of teacherLis) {
        if (teacher.contains(event.target)) {
            targetTeacher = teacher;
        }
    }

    const favorite = targetTeacher.querySelector('.favorite');

    targetTeacher.classList.toggle('teacher--selected');

    if (favorite.textContent === 'Añadir') {
        favorite.innerHTML = 'Quitar';
    } else if (favorite.textContent === 'Quitar') {
        favorite.innerHTML = 'Añadir';
    }

}


teachers.addEventListener('click', selectTeacher);