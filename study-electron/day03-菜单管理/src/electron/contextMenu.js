const { ipcMain, app, Menu } = require("electron");

ipcMain.on('mainPopMenu', () => {
  const template = [
    {
      label: "隐藏应用",
      click: () => {
        app.hide();
      },
    },
    { type: 'separator' },
    {
    label: "退出",
    click: () => {
      app.quit();
    }
  }]
 const menu = Menu.buildFromTemplate(template);
 menu.popup()
})