'use strict';
const users = [
    { name: 'María', isPremium: false, pin: 2389 },
    { name: 'Lucía', isPremium: true, pin: 2384 },
    { name: 'Susana', isPremium: true, pin: 2837 },
    { name: 'Rocío', isPremium: false, pin: 5232 },
    { name: 'Inmaculada', isPremium: false, pin: 8998 },
];

const failUser = users.find(user => user.pin === 5232);
const failUserPosition = users.findIndex(user => user.pin === failUser.pin);

users.splice(failUserPosition, 1);
console.log(failUser);
console.log(failUserPosition);
console.log(users);