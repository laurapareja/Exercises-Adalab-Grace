'use strict';
const list = document.querySelector('.list');

const tasks = [
    { name: "Recoger setas en el campo", completed: true },
    { name: "Comprar pilas", completed: true },
    { name: "Poner una lavadora de blancos", completed: true },
    {
        name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
        completed: false
    }
];

for (let task of tasks) {
    if (task.completed === true) {
        list.innerHTML += `<li class="task">${task.name} <input class="check" type="checkbox"></li>`;
    } else {
        list.innerHTML += `<li class="task">${task.name}<input class="check" type="checkbox"></li>`;
    }
}
const checkboxes = document.querySelectorAll('.check');
const listItems = document.querySelectorAll('.task');

function changeStateTask(event) {
    const taskSelected = event.currentTarget;
    let targetTask;
    for (const listItem of listItems) {
        if (listItem.contains(event.target))
            targetTask = listItem;
    }
    targetTask.classList.toggle('done');
    if (targetTask.classList.contains('done')) {
        taskSelected.checked = true;
        console.log(taskSelected);
    } else {
        taskSelected.checked = false;
    }

}

for (let checkbox of checkboxes) {
    checkbox.addEventListener('change', changeStateTask);
}