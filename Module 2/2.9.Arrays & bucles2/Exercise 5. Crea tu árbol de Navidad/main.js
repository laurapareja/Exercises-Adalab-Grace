'use strict';

const page = document.querySelector('.page');
const content = '💩';
const star = '🚽';

page.innerHTML = `</br>${star}</br>`;

function createTree(number) {
    let treeItems = '';
    let size = number;
    for (let treeItem = 1; treeItem <= number; treeItem = treeItem + 2) {
        // treeItems = treeItem === 0 ? star : content.repeat(treeItem);

        treeItems = content.repeat(treeItem);
        page.innerHTML += `</br>${treeItems}</br>`;
        console.log(treeItems);
    }
    const treeResult = `</br>🧻</br>`;

    page.innerHTML += treeResult;
    // treeItems.length = number;

}
createTree(7);

// FUNCIONA, pero es muy loco. 2 "bucles" en uno, why not?
// function createTree(number) {
//     let treeItems = '';
//     let size = number;
//     for (let treeItem = 0; treeItem < number; treeItem++) {
//         let content = '💩';
//         treeItems += content;
//         page.innerHTML += `</br>${treeItems}</br>`;
//         console.log(treeItems);
//     }
//     const treeResult = `</br>🧻</br>`;
//     page.innerHTML += treeResult;
//     // treeItems.length = number;
// }