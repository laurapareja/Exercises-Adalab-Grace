'use scrict';
const inputNameEl = document.querySelector(".js-input");
const name = document.querySelector(".js-name");
const photo = document.querySelector(".js-img");
const repos = document.querySelector(".js-repos");
const url = document.querySelector(".js-link");


function searchGithub(event) {
    event.preventDefault();
    const inputName = inputNameEl.value;
    console.log(`Voy a buscar ${inputName}`);

    fetch(`https://api.github.com/users/${inputName}`)
        .then(response => response.json())
        .then(data => {

            console.log(data);
            name.innerHTML = data.login;
            photo.src = data.avatar_url;
            repos.innerHTML = data.public_repos;
            url.href = data.html_url;
            url.innerHTML = data.html_url;
        });
}

const form = document.querySelector('.js-form');
form.addEventListener("submit", searchGithub);


// error, estaba seleccionando el input fuera del evento, asi que no tenia valor.