import { TitleBar } from "./event/titlebar.js";
import { CheckboxGestion } from "./event/checkbox.js";
import {Copy} from "./event/copy.js";
import {generatePassword} from "./utils/generatePassword.js";
import {Regenerate} from "./event/regenerate.js";
import {LengthBar} from "./event/length.js";

class App {

    constructor() {
        console.log("App started");
        this.listener();
        window.addEventListener("load", () => generatePassword());
        console.log("Load Password generated");
    }

    listener() {
        new TitleBar();
        console.log("TitleBar started");
        new CheckboxGestion();
        console.log("CheckboxGestion started");
        new Copy();
        console.log("Copy started");
        new Regenerate();
        console.log("Regenerate started");
        new LengthBar();
        console.log("LengthBar started");
    }

}

new App();