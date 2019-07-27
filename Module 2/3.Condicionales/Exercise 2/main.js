'use script';
const username = document.querySelector('.username');

debugger

const user = 'Pablo';

if (user === 'Laura' || user === 'Sara') {
    // console.log('Bienvenida')
    username.innerHTML = 'Bienvenida ' + user;

} else {
    // console.log('Lo siento pero el usuario que has introducido no está registrado')
    username.innerHTML = 'Lo siento pero el usuario que has introducido no está registrado';
}

//error: I didn't define the second condition properly
// I wrote
// (user === 'Laura' || 'Sara')
// so  (user === 'Laura' || true)
// All names will be true