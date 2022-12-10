import {generatePassword} from "../utils/generatePassword.js";

export class Regenerate {

    regenerate = document.getElementById("regenerate");

    constructor() {
        this.regenerate.addEventListener("click", () => generatePassword());
    }

}