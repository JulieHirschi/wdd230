const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const main = document.querySelector("main");

modeButton.addEventListener("click", (e) => {
    console.log("clicked");
    body.classList.toggle('dark-mode');
    main.classList.toggle('dark-mode');
});