let number = document.getElementById("number");
let letter = document.getElementById("letter");
let special = document.getElementById("special");
let length = document.getElementById("length");
let regenerate = document.getElementById("regenerate");
let length_text = document.getElementById("length_text");

length_text.innerText = "LENGTH (" + length.value + ")";

let clicked = false;
lenght_value = length.value;

number.addEventListener("change", () => generatePassword());
letter.addEventListener("change", () => generatePassword());
special.addEventListener("change", () => generatePassword());
length.addEventListener("change", () => {
    length_text.innerText = "LENGTH (" + length.value + ")";
    generatePassword()
});
length.addEventListener("mousedown", () => {
    clicked = true;
    lenght_value = length.value;
});
length.addEventListener("mouseup", () => {
    clicked = false;
    lenght_value = length.value;
});
length.addEventListener("mousemove", () => {
    if (lenght_value !== length.value){
        if (length.value >= 8 && length.value <= 50) {
            if (clicked) {
                length_text.innerText = "LENGTH (" + length.value + ")";
                generatePassword()
                lenght_value = length.value;
            }
        }
    }
});
regenerate.addEventListener("click", () => generatePassword());
window.addEventListener("load", () => generatePassword());