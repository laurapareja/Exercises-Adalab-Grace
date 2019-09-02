'use script';

function changeBackg(event) {
    // console.log(event);
    if (event.key === "r") {
        document.querySelector('body').classList.add('text1');
    }
}

document.addEventListener('keydown', changeBackg);

// document no hay que definirlo, al igual que window.
// en el condicional, hay que especificar que key viene del evento. hay que escribir event.key. si lo escribes solo, el ordenador no entiende que es key. hay que poner "" para señalar que valor la key. hay que poner keydown para referirse a cuando se pulsa una tecla (key tal cual no hace nada)