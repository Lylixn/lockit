const crypto = require("crypto");

function generatePassword() {

    let passwordText = "";
    let password = document.getElementById("generated_password");
    let length = document.getElementById("length");

    for (let i = 0; i <= length.value - 1; i++) {
        // let char = Math.floor(Math.random() * getValableChar().length);
        let typeChar = getValableChar();
        switch (typeChar[crypto.randomInt(1, typeChar.length)]) {
            case "number":
                let pos1 = crypto.randomInt(1, Character.number.length - 1);
                console.log(pos1);
                passwordText += Character.number.charAt(pos1);
                break;
            case "letter":
                let pos2 = crypto.randomInt(1, Character.letter.length - 1);
                console.log(pos2);
                passwordText += Character.letter.charAt(pos2);
                break;
            case "special":
                let pos3 = crypto.randomInt(1, Character.special.length - 1);
                console.log(pos3);
                passwordText += Character.special.charAt(pos3);
                break;
        }
    }

    checkStrength(passwordText);
    password.innerText = passwordText;

}

function getValableChar() {

    let chars = []

    if (number.checked) {
        chars.push("number")
    }
    if (letter.checked) {
        chars.push("letter")
    }
    if (special.checked) {
        chars.push("special")
    }

    return chars;

}