export function getAvailableChar() {

    let number = document.getElementById("number");
    let letter = document.getElementById("letter");
    let special = document.getElementById("special");

    let chars = ""

    if (number.checked) {
        chars += "0123456789"
    }
    if (letter.checked) {
        chars += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if (special.checked) {
        chars += "!@#$%^&*()_+~`|}{[]\:;?><,./-="
    }

    return chars;

}