'use strict';
const pins = [2389, 2384, 2837, 5232, 8998];

const correctPins = pins.filter(pin => pin % 2 === 0);
console.log(correctPins);