import {generatePassword} from "../utils/generatePassword.js";

export class CheckboxGestion {

    number = document.getElementById("number");
    letter = document.getElementById("letter");
    special = document.getElementById("special");

    constructor() {
        number.addEventListener("change", () => {
            this.checkboxGestion();
            generatePassword();
        });
        letter.addEventListener("change", () => {
            this.checkboxGestion();
            generatePassword();
        });
        special.addEventListener("change", () => {
            this.checkboxGestion();
            generatePassword();
        });
    }

    checkboxGestion() {
        // Number
        number.disabled = !(letter.checked || special.checked);
        // Letter
        letter.disabled = !(number.checked || special.checked);
        // Special
        special.disabled = !(letter.checked || number.checked);
    }

}