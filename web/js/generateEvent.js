let number = document.getElementById("number");
let letter = document.getElementById("letter");
let special = document.getElementById("special");
let length = document.getElementById("length");
let regenerate = document.getElementById("regenerate");
let length_text = document.getElementById("length_text");

length_text.innerText = "LENGTH (" + length.value + ")";

number.addEventListener("change", () => generatePassword());
letter.addEventListener("change", () => generatePassword());
special.addEventListener("change", () => generatePassword());
length.addEventListener("change", () => {
    generatePassword()
    length_text.innerText = "LENGTH (" + length.value + ")";
});
regenerate.addEventListener("click", () => generatePassword());
window.addEventListener("load", () => generatePassword());