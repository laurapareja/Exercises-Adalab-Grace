'use scrict';
const inputNameEl = document.querySelector(".js-input");
const text = document.querySelector('.js-text');
const repos = document.querySelector(".js-repos");

function searchGithub(event) {
    event.preventDefault();
    const inputName = inputNameEl.value;
    console.log(`Voy a buscar ${inputName}`);

    fetch(`https://api.github.com/orgs/${inputName}/repos`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            for (let repo of data) {
                const repositorio = repo.name;
                repos.innerHTML += `<li>${repositorio}</li>`
            }
        });
    text.innerHTML += `: ${inputNameEl.value}`;
}

const form = document.querySelector('.js-form');
form.addEventListener("submit", searchGithub);