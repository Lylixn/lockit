import {createWindow} from "./createWindow";
import * as path from "path";

export async function createMainWindow() {
    let window = createWindow({
        minWidth: 165,
        width: 800,

        height: 600,
        minHeight: 200,

        autoHideMenuBar: true,
        frame: false,

        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    let paths = path.join(__dirname, `../../web/index.html`)
    console.log(paths)

    return await window
        .loadFile(paths)
        .then(() => {
            console.log("index.html loaded");
            return window;
        });
}