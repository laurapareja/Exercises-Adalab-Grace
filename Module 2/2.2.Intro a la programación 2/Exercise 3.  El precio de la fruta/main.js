'use strict';

const result = document.querySelector('.result');

const age = 27;
const hourday = 24;

const houryear = hourday * 365;
const resulthours = houryear * age;

// result.innerHTML = resulthours;

// we can include days and months to know the real result
const daysLivedAfterBirthday = 9;
const monthsLivedAfterBirthday = 1;


const extrahours = (daysLivedAfterBirthday * hourday) + (monthsLivedAfterBirthday * 31 * hourday);


const total = resulthours + extrahours;

result.innerHTML = total;