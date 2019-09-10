'use strict';
const runners = [
    { name: 'Gregory Goyle', time: 56 },
    { name: 'Nymphadora Tonks', time: 9 },
    { name: 'Luna Lovegood', time: 45 },
    { name: 'Cedric Diggory', time: 28 },
    { name: 'Cho Chang', time: 35 },
];

const orderedRunner = runners.sort((a, b) => a.time - b.time);
const orderedBRunner = runners.sort((a, b) => b.time - a.time);
console.log(orderedRunner);
console.log(orderedBRunner);