'use strict';

function get100Numbers() {
    const arr = [];

    for (let i = 0; i <= 100; i++) {
        const result = arr.push(i);
    }
    console.log(arr);

}
get100Numbers();