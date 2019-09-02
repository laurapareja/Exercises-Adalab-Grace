'use script';

// debugger

const text = document.querySelector('.js-text');

function addLorem() {

    text.innerHTML = text.innerHTML + 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro reprehenderit voluptatum eos autem. Nobis possimus, nihil similique et earum corrupti deleniti reprehenderit assumenda neque in esse sed beatae iure eius!';
}

text.addEventListener('mouseover', addLorem);


// errores. no había puesto que se viera el resultado, para eso hay que poner text.innerHTML = lo que se va a añadir. si metemos la const textInput fuera de la funcion, solo se va a añadir el texto una vez, si se mete dentro de la funcion se aplica tantas veces se active la funcion.