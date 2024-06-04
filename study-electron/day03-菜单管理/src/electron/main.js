const { ipcMain, app } = require("electron");
const { createWindow } = require("./window");
const { createMenu } = require('./menu');
require('./contextMenu')

ipcMain.on('init', (event, val) => {
  console.log(val);
})

app.on('ready', () => {
  const win = createWindow();
  createMenu(win)
});