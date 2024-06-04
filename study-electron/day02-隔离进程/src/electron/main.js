const { ipcMain, app } = require("electron");
const { createWindow } = require("./window");

ipcMain.on('init', (event, val) => {
  console.log(val);
})

app.on('ready', () => {
  createWindow();
});