'use strict';
const times = [56, 9, 45, 28, 35];

const media = times.reduce((acc, time) => acc + time, 0);
console.log(media);