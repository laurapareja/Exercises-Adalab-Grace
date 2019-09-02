"use scrict";

const form = document.querySelector(".js-form");
const inputName = document.querySelector(".js-input-name");
const inputSurname = document.querySelector(".js-input-surname");
const outputText = document.querySelector(".js-text")


const dataSaved = localStorage.getItem("infouser");
const userInfo = JSON.parse(dataSaved);


if (dataSaved !== null) {
    inputName.value = userInfo.name;
    inputSurname.value = userInfo.surname;
}


function updateText(event) {
    event.preventDefault();

    const nameUser = inputName.value;
    const surnameUser = inputSurname.value;
    const infoUser = {
        name: nameUser,
        surname: surnameUser
    };

    localStorage.setItem("infouser", JSON.stringify(infoUser));
    outputText.innerHTML = `${infoUser.name} ${infoUser.surname}`;
}


form.addEventListener("keyup", updateText);