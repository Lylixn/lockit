const crypto = require("crypto");

function generatePassword() {

    let passwordText = "";
    let password = document.getElementById("generated_password");
    let length = document.getElementById("length");

    for (let i = 0; i <= length.value - 1; i++) {
        // let char = Math.floor(Math.random() * getValableChar().length);
        let char = crypto.randomInt(0, getValableChar().length - 1);

        passwordText += getValableChar().charAt(char);
    }

    checkStrength(passwordText);
    password.innerText = passwordText;

}

function getValableChar() {

    let chars = ""

    if (number.checked) {
        chars += Character.number;
    }
    if (letter.checked) {
        chars += Character.letter;
    }
    if (special.checked) {
        chars += Character.special;
    }

    return chars;

}