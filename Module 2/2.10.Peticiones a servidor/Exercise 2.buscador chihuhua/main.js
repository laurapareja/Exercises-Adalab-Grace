function getDogImage() {
    fetch("https://dog.ceo/api/breed/chihuahua/images/random")
        .then(response => response.json())
        .then(data => {
            const img = document.querySelector("img");
            img.src = data.message;
            img.alt = "Un perro";
            // console.log(data);

        });
}
const btn = document.querySelector(".js-dog");
btn.addEventListener("click", getDogImage);