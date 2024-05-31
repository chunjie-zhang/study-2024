const { BrowserWindow } = require('electron');
const path = require("path")

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    height: 800,
    width: 800,
    alwaysOnTop: true,
    frame: true,
    webPreferences: {
      preload: path.resolve(__dirname, 'preload.js')
    }
  })

  mainWindow.webContents.openDevTools();

  mainWindow.loadFile(path.resolve(__dirname, '../web/index.html'));
}

module.exports = {
  createWindow,
}