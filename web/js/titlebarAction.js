const {ipcRenderer} = require('electron')

let close = document.getElementById("close");
let reduce = document.getElementById("reduce");
let minmaximize = document.getElementById("minmaximize");

close.addEventListener("click", () => {
    ipcRenderer.send("close");
});

minmaximize.addEventListener("click", () => {
    ipcRenderer.send("minmaximise");
});

reduce.addEventListener("click", () => {
    ipcRenderer.send("reduce");
});