import { app, BrowserWindow } from "electron";
import {createMainWindow} from "./utils/createMainWindow";
import {TitleBar} from "./event/titlebarAction";

class App {
  private mainWindow: Electron.CrossProcessExports.BrowserWindow;
  constructor() {
    this.init();
  }

  listeners() {
    new TitleBar(this.mainWindow);
  }

  init() {
    app.whenReady().then(async () => {
      console.log("App ready");
      this.mainWindow = await createMainWindow();

      app.on("activate", async function () {
        if (BrowserWindow.getAllWindows().length === 0) {
          this.mainWindow = await createMainWindow();
        }
      });

      this.listeners();
    });
  }
}

new App();
