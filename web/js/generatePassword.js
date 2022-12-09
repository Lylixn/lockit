const crypto = require("crypto");

function generatePassword() {

    let passwordText = "";
    let password = document.getElementById("generated_password");
    let length = document.getElementById("length");

    for (let i = 0; i <= length.value - 1; i++) {
        let chars = getValableChar();
        let pos = crypto.randomInt(0, chars.length - 1);
        passwordText += chars.charAt(pos);
    }

    checkStrength(passwordText);
    password.innerText = passwordText;

}

function getValableChar() {

    let chars = ""

    if (number.checked) {
        chars += Character.number
    }
    if (letter.checked) {
        chars += Character.letter
    }
    if (special.checked) {
        chars += Character.special
    }

    return chars;

}