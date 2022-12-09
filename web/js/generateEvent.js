let number = document.getElementById("number");
let letter = document.getElementById("letter");
let special = document.getElementById("special");
let length = document.getElementById("length");
let regenerate = document.getElementById("regenerate");
let length_text = document.getElementById("length_text");

length_text.innerText = "LENGTH (" + length.value + ")";

let clicked = false;

number.addEventListener("change", () => generatePassword());
letter.addEventListener("change", () => generatePassword());
special.addEventListener("change", () => generatePassword());
length.addEventListener("change", () => {
    length_text.innerText = "LENGTH (" + length.value + ")";
    generatePassword()
});
length.addEventListener("mousedown", () => {
    clicked = true;
});
length.addEventListener("mouseup", () => {
    clicked = false;
});
length.addEventListener("mousemove", () => {
    if (length.value > 8 && length.value < 50) {
        if (clicked) {
            length_text.innerText = "LENGTH (" + length.value + ")";
            generatePassword()
        }
    }
});
regenerate.addEventListener("click", () => generatePassword());
window.addEventListener("load", () => generatePassword());