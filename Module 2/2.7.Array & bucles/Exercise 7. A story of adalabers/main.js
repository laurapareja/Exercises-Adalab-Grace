'use strict';

const adalabers = [{
    name: 'María',
    age: 29,
    job: 'diseñadora'
}, {
    name: 'Lucía',
    age: 31,
    job: 'ingeniera química'
}, {
    name: 'Susana',
    age: 34,
    job: 'periodista'
}, {
    name: 'Rocío',
    age: 25,
    job: 'actriz'
}, {
    name: 'Inmaculada',
    age: 21,
    job: 'diseñadora'
}];

function countAdalabers() {
    console.log(adalabers.length);
}
let average = 0;

function averageAge() {
    for (let age = 0; age < adalabers.length; age++) {
        average += adalabers[age].age / adalabers.length;
    }
    console.log(average);
}

function theYoungest() {
    const youngest = Math.min(adalabers[0].age, adalabers[1].age, adalabers[2].age, adalabers[3].age, adalabers[4].age);

    for (let adalaber = 0; adalaber < adalabers.length; adalaber++) {
        if (adalabers[adalaber].age === youngest) {
            console.log(adalabers[adalaber].name);
        }
    }
    console.log(youngest);
}

function countDesigners() {
    let designers = [];
    for (let adalaber = 0; adalaber < adalabers.length; adalaber++) {
        if (adalabers[adalaber].job === 'diseñadora') {
            designers.push(adalabers[adalaber]);
            // console.log(adalabers[adalaber].name);
        }
    }
    console.log(designers.length);
    console.log(designers);
}

countAdalabers();
averageAge();
theYoungest();
countDesigners();