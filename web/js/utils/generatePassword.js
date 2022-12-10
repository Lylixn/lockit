const crypto = require("crypto");
import {checkStrength} from "./checkStrength.js";
import {getAvailableChar} from "./getAvailableChar.js";


export function generatePassword() {

    let passwordText = "";
    let password = document.getElementById("generated_password");
    let length = document.getElementById("length");

    const chars = getAvailableChar();

    for (let i = 0; i < length.value; i++) {
        let pos = crypto.randomInt(0, chars.length - 1);
        passwordText += chars[pos];
    }

    checkStrength(passwordText);
    password.innerText = passwordText;

}