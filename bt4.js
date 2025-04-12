const btn = document.querySelector("#btn");
const text = document.querySelector("#text");
const background = document.querySelector("#background");
const icon = document.querySelector("#icon");
btn.addEventListener("click", function () {
    background.style.backgroundColor = "grey";
    text.style.display = "block";
});
icon.addEventListener("click", function () {
    text.style.display = "none";  
    background.style.backgroundColor = ""; 
});
