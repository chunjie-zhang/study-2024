const { ipcMain, app, Menu, dialog } = require("electron");

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
    click: async () => {
      const res = await dialog.showMessageBox({
        title: '退出登录',
        detail: "确定退出登录吗?",
        buttons: ['取消', '退出'],
        cancelId: 1
      })
      if (res.response == 1) app.quit();
    }
  }]
 const menu = Menu.buildFromTemplate(template);
 menu.popup()
})