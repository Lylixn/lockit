import {createWindow} from "./createWindow";
import * as path from "path";

export async function createMainWindow() {
  const window = createWindow({
    minWidth: 500,
    width: 900,

    height: 450,
    minHeight: 450,

    autoHideMenuBar: true,
    frame: false,
    icon: "../../icon.png",

    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
    },
  });

  return await window
      .loadFile(path.join(__dirname, `../../web/index.html`))
      .then(() => {
          console.log("index.html loaded");
          return window;
      });
}