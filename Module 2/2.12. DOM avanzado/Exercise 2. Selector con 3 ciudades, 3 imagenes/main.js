'use scrict';

const nuevaYork = document.querySelector("#nueva-york");


const madridPicture1 = "https://media.timeout.com/images/103793769/630/472/image.jpg";
const madridPicture2 = "https://media.timeout.com/images/103793769/630/472/image.jpg";
const madridPicture3 = "https://media.timeout.com/images/103793769/630/472/image.jpg";

const parisPicture1 = "https://cdn.pixabay.com/photo/2015/04/24/18/36/paris-738106_960_720.jpg";
const parisPicture2 = "https://cdn.pixabay.com/photo/2015/04/24/18/36/paris-738106_960_720.jpg";
const parisPicture3 = "https://cdn.pixabay.com/photo/2015/04/24/18/36/paris-738106_960_720.jpg";

const nuevaYorkPicture1 = "https://cdn.pixabay.com/photo/2018/06/25/16/49/new-york-3497368_960_720.jpg";
const nuevaYorkPicture2 = "https://cdn.pixabay.com/photo/2018/06/25/16/49/new-york-3497368_960_720.jpg";
const nuevaYorkPicture3 = "https://cdn.pixabay.com/photo/2018/06/25/16/49/new-york-3497368_960_720.jpg";



function selectImg(city, picture1, picture2, picture3) {
    const handle = function() {
        const img1 = document.querySelector(".img1");
        const img2 = document.querySelector(".img2");
        const img3 = document.querySelector(".img3");

        img1.src = picture1;
        img2.src = picture2;
        img3.src = picture3;

    }
    document.querySelector(city).addEventListener("change", handle);
}

selectImg("#madrid", madridPicture1, madridPicture2, madridPicture3);
selectImg("#paris", parisPicture1, parisPicture2, parisPicture3);
selectImg("#nueva-york", nuevaYorkPicture1, nuevaYorkPicture2, nuevaYorkPicture3);