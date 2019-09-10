"use script";
debugger;

const inputText = document.querySelector(".input");
const inputP = document.querySelector(".p");

function changePara(event) {
    const inputValue = event.currentTarget;
    inputP.innerHTML = `${inputValue.value}`;
}

inputText.addEventListener("keyup", changePara);

// no se pone return. sino el inner.HTML. llamar a la variable y el valor de la variable en el inner. definir el inputvalue con current