import {BrowserWindow} from "electron";

export function createWindow(options: Electron.BrowserWindowConstructorOptions) {
    return new BrowserWindow(options);
}