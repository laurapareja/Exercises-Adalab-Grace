'use strict';
const runners = [
    { name: 'Gregory Goyle', time: 56 },
    { name: 'Nymphadora Tonks', time: 9 },
    { name: 'Luna Lovegood', time: 45 },
    { name: 'Cedric Diggory', time: 28 },
    { name: 'Cho Chang', time: 35 },

];

let acc = 0;
const winner = runners.reduce((acc, runner) => {
    if (runner.time > acc.time) {
        acc = runner;
    } else {
        acc = acc;
    }
    return acc
});

console.log(winner);