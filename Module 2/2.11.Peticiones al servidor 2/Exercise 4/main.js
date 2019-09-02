"use scrict";

const form = document.querySelector(".js-form");
const inputName = document.querySelector(".js-input-name");
const outputText = document.querySelector(".js-list");
const rawNames = localStorage.getItem("name");
const name = JSON.parse(rawNames);

inputName.value = name;
outputText.innerHTML = name;

function updateText(event) {
    event.preventDefault();
    const name = inputName.value;
    localStorage.setItem("name", JSON.stringify(name));
    outputText.innerHTML = name;
}

form.addEventListener("submit", updateText);

/// he cometido todos los errores posibles. Gracias miguel

// // let nameList = [];
// if (rawNames !== null) {
//     name = JSON.parse(rawName);
// }
// outputText.innerHTML = name;

// // for (const name of nameList) {
// //     outputText.innerHTML += `<li>${name}</li>`;
// // }

// function updateText(event) {
//     event.preventDefault();
//     // outputText.innerHTML += `<li>${inputName.value}</li>`;

//     const name = inputName.value;
//     // nameList.push(name);
//     inputName.value = name;

//     localStorage.setItem("name", JSON.stringify(name));
// }

// form.addEventListener("submit", updateText);

// /// he cometido todos los errores posibles. Gracias miguel