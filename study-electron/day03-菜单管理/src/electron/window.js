const { BrowserWindow, screen } = require('electron');
const path = require("path")

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    height: 800,
    width: 800,
    alwaysOnTop: true,
    frame: true,
    webPreferences: {
      preload: path.resolve(__dirname, 'preload.js'),
      // contextIsolation: false, // 预加载脚本不隔离
      // nodeIntegration: true, // 开启node
      // sandbox: false,
    }
  })

  mainWindow.webContents.openDevTools();

  mainWindow.loadFile(path.resolve(__dirname, '../web/index.html'));
  setTimeout(() => {
    // mainWindow.center();
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;
    mainWindow.setBounds({width: 850, height: 850, x: width / 2 - 425, y: height / 2 - 425}, true);
  }, 1000)
  return mainWindow;
}

module.exports = {
  createWindow,
}