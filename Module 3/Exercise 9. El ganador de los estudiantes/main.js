'use strict';
const runners = [
    { name: 'Gregory Goyle', time: 56, student: true },
    { name: 'Nymphadora Tonks', time: 9, student: false },
    { name: 'Cedrica Diggory', time: 27, student: true },
    { name: 'Cedricals Diggory', time: 27, student: true },


    { name: 'Luna Lovegood', time: 45, student: true },

    { name: 'Cedric Diggory', time: 28, student: true },
    { name: 'Cho Chang', time: 28, student: true },

    { name: 'Cedrica Diggory', time: 28, student: true },


];
let acc = 0;

const winnerStudent = runners
    .filter(runner => runner.student === true)
    .reduce((acc, runner) => {
        if (runner.time < acc.time) {
            acc = runner;
        }
        return acc;
    });

const winners = runners
    .filter(runner => runner.student === true)
    .filter((runner) =>
        runner.time === winnerStudent.time
    );


console.log(winnerStudent.time);
console.log(winners)