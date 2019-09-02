"use scrict";

const people = [{
        name: "Laura",
        surname: "Pareja",
        phone: "901"
    },
    {
        name: "Raquel",
        surname: "Martín",
        phone: "902"
    },
    {
        name: "Tamara",
        surname: "Sanchez",
        phone: "903"
    }
];
const selector = document.querySelector("#selector");
const name = document.querySelector(".name");
const surname = document.querySelector(".surname");
const phone = document.querySelector(".phone");


for (const person of people) {
    const newContentUser = document.createTextNode(person.name);
    const userOption = document.createElement("option");

    userOption.appendChild(newContentUser);
    selector.appendChild(userOption);
}

const handle = function() {
    for (const person of people) {
        if (person.name === selector.value) {
            name.value = person.name;
            surname.value = person.surname;
            phone.value = person.phone;
        }
    }
}
selector.addEventListener("change", handle);