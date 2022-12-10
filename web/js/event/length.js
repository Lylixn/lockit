import {generatePassword} from "../utils/generatePassword.js";

export class LengthBar {

    length = document.getElementById("length");
    length_text = document.getElementById("length_text");

    clicked = false;
    length_value = length.value;

    constructor() {
        this.length_text.innerText = "LENGTH (" + this.length.value + ")";

        this.length.addEventListener("change", () => {
            this.length_text.innerText = "LENGTH (" + this.length.value + ")";
            generatePassword()
        });
        this.length.addEventListener("mousedown", () => {
            this.clicked = true;
            this.length_value = this.length.value;
        });
        this.length.addEventListener("mouseup", () => {
            this.clicked = false;
            this.length_value = this.length.value;
        });

        this.length.addEventListener("mousemove", () => {
            if (this.length_value !== this.length.value){
                if (this.length.value >= 8 && this.length.value <= 50) {
                    if (this.clicked) {
                        this.length_text.innerText = "LENGTH (" + this.length.value + ")";
                        generatePassword()
                        this.length_value = this.length.value;
                    }
                }
            }
        });
    }

}