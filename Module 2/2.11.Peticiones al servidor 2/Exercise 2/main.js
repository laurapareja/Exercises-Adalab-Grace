'use scrict';
const inputNameEl = document.querySelector(".js-input");
const name = document.querySelector(".js-name");



function searchStarWars(event) {
    event.preventDefault();
    const inputName = `${inputNameEl.value}`;

    fetch(`https://swapi.co/api/people?search=${inputName}`, {
        method: 'GET',
        // body: JSON.stringify({
        //     //     inputName: 1
        // })
    })

    .then(response => response.json())
        .then(data => {
            name.innerHTML = "";
            const characters = data.results;

            for (const character of characters) {
                name.innerHTML = name.innerHTML + `<li>${character.name} (${character.gender})</li>`;
                // name.innerHTML += `<li>${character.name} (${character.gender})</li>`;
            }
        });
}

const form = document.querySelector('.js-form');
form.addEventListener("submit", searchStarWars);




// counter = counter + 1
// counter += 1