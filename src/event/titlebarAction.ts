const { ipcMain } = require("electron");

export class TitleBar {
    private window: Electron.BrowserWindow;
    constructor(window: Electron.BrowserWindow) {
        this.window = window;
        this.close();
        this.minmaximise();
        this.reduce();
    }

    close() {
        ipcMain.on("close", () => {
            this.window.close();
        });
    }

    minmaximise() {
        ipcMain.on("minmaximise", () => {
            if (this.window.isMaximized()) {
                this.window.unmaximize();
            } else {
                this.window.maximize();
            }
        });
    }

    reduce() {
        ipcMain.on("reduce", () => {
            this.window.minimize();
        });
    }
}