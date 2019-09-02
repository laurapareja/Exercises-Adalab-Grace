'use scrict';

// ToDo: crear cache o cargarla del LS
const characterCache = {};


function getData(ev) {
    ev.preventDefault();
    const inputElValue = document.querySelector(".js-input").value;
    // mirar si esta en la cache
    // si esta, pintamos
    // si no, la buscamos en fetch ...
    // la subimos al localstorage
    const name = document.querySelector(".js-name");
    const gender = document.querySelector(".js-gender");
    const url = `https://swapi.co/api/people?search=${inputElValue}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const characters = data.results;
            const characterList = [];

            name.innerHTML = "";
            for (let character of characters) {

                name.innerHTML += `<li>${character.name}</li>`
                    // name.innerHTML = character.name;
                    // gender.innerHTML = character.gender;

                characterObj = {
                    name: character.name,
                    gender: character.gender
                }
                characterList.push(characterObj);
                characterCache[inputElValue] = characterList;
            }

            console.log(characterList);
            console.log(data.results.name);

        })

}

const form = document.querySelector('.js-form');
form.addEventListener("keyup", getData);