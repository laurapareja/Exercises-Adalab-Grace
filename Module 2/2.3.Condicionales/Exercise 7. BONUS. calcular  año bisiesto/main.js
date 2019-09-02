'use scrict';

debugger
const year = 2012;
if (year / 4 % 0) {

    console.log('this is a Leap Year');
} else if ((year + 1) / 4 % 0) {
    console.log(`next Leap year is ${year + 1}`);
} else if ((year + 2) / 4 % 0) {
    console.log(`next Leap year is ${year + 2}`);
} else if ((year + 3) / 4 % 0) {
    console.log(`next Leap year is ${year + 3}`);
}


// cada 4 años desde 0.
// en consola aparece el siguiente año bisiesto