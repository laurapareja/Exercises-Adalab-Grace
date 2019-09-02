'use strict';
const users = [
    { name: 'María', isPremium: false },
    { name: 'Lucía', isPremium: true },
    { name: 'Susana', isPremium: true },
    { name: 'Rocío', isPremium: false },
    { name: 'Inmaculada', isPremium: false },
];

const welcomeUsers = users.map(user => {
    if (user.isPremium === true) {
        return `Bienvenida ${user.name}. Gracias por confiar en nosotros`;
    } else {
        return `Bienvenida ${user.name}.`;
    }
});

console.log(welcomeUsers);

// console.log(users.map((u) => u.isPremium ? `Bienvenida ${u.name}. Gracias por confiar en nosotros` : `Bienvenida ${u.name}`));