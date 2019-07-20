'use strict';
debugger
const resultValue = document.querySelector('.age').innerHTML;
const resultElement = document.querySelector('.age')
const hourday = 24;

const hourYear = hourDay * 365;

resultElement.innerHTML = `${resultValue* hourYear}`;

// we can include days and months to know the real result
// const daysLivedAfterBirthday = 9;
// const monthsLivedAfterBirthday = 1;


// const extrahours = (daysLivedAfterBirthday * hourday) + (monthsLivedAfterBirthday * 31 * hourday);


// const total = resulthours + extrahours;

// result.innerHTML = total;