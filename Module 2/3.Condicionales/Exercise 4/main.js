'use script';

debugger

// ---
// 1 year = 15years
// 2nd year = 9years
// 3rd or > = =5
// ---

const yearsDog = 8;

const firstyear = 15;
const secondyear = 15 + 9;
const moreyear = secondyear + (yearsDog - 2) * 5;


if (yearsDog === 0) {
    console.log(' Dog is a puppy ^.^!')
} else if (yearsDog === 1) {
    console.log('Dog is ' + firstyear + ' years old')

} else if (yearsDog === 2) {
    console.log('Dog is ' + secondyear + ' years old')
} else {
    console.log('Dog is ' + moreyear + ' years old')
}