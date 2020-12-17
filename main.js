const { app,  BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 500,
    height: 300,
    webPreferences: {
      nodeIntegration:  true
    }
  })

  win.loadFile("index.html");
  // win.webContents.openDevTools();
}

app.whenReady().then(createWindow);
