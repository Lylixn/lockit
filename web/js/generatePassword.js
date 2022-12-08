function generatePassword() {

    let passwordText = "";
    let password = document.getElementById("generated_password");
    let length = document.getElementById("length");

    for (let i = 0; i <= length.value - 1; i++) {
        var char = Math.floor(Math.random() * getValableChar().length);

        passwordText += getValableChar().charAt(char)
    }

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