'use strict';
const links = document.querySelectorAll('a');

function handleClickLinks(event) {
    event.preventDefault();
};

for (let link of links) {
    link.addEventListener('click', handleClickLinks);
}