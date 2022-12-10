const electron = require("electron");

export class TitleBar {
    close = document.getElementById("close");
    reduce = document.getElementById("reduce");
    minmaximize = document.getElementById("minmaximize");

    constructor () {
        this.close.addEventListener("click", () => {
            electron.ipcRenderer.send("close");
            console.log("close");
        });

        this.minmaximize.addEventListener("click", () => {
            electron.ipcRenderer.send("minmaximise");
            console.log("minmaximise");
        });

        this.reduce.addEventListener("click", () => {
            electron.ipcRenderer.send("reduce");
            console.log("reduce");
        });
    };
}