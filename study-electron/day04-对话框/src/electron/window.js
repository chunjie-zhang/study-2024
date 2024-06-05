const { BrowserWindow, screen, shell } = require('electron');
const path = require("path")

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    height: 800,
    width: 800,
    alwaysOnTop: true,
    frame: true,
    webPreferences: {
      preload: path.resolve(__dirname, 'preload.js'),
    }
  })

  mainWindow.webContents.openDevTools();

  mainWindow.loadFile(path.resolve(__dirname, '../web/index.html'));

  mainWindow.webContents.setWindowOpenHandler((detail) => {
    console.log(detail);
    shell.openExternal(detail.url)
    return { action: "deny"}
  })
  
  return mainWindow;
}

module.exports = {
  createWindow,
}