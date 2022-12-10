import {sleep} from "../utils/sleep.js";

export class Copy {

    copy = document.getElementById("copy_password");
    password = document.getElementById("generated_password");

    constructor() {
        this.copy.addEventListener("click", () => {
            this.copyPassword();
        });
    }

    copyPassword() {
        navigator.clipboard.writeText(this.password.innerText)
            .then(() => {
                console.log('Text copied to clipboard');
            })
            .catch(err => {
                console.log('Error in copying text: ', err);
            });

        this.copy.innerText = "Copied !";
        sleep(1500).then(r => {
            this.copy.innerText = "Copy password";
        })
    }

}