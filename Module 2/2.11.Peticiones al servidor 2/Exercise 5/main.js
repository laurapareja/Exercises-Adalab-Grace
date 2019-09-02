"use scrict";

const body = document.querySelector('body');
const actualTheme = localStorage.getItem("theme");

body.className = actualTheme;


function changeColors(idradio, classcolor) {
    const handle = function() {
        body.className = classcolor;
        localStorage.setItem("theme", classcolor);
    }

    document.querySelector(idradio).addEventListener("change", handle);

}

changeColors("#theme1", "dark");
changeColors("#theme2", "light");