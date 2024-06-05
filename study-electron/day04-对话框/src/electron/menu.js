const { Menu, shell, app, dialog } = require("electron");
const createWin = require('./window');

const isMac = process.platform == "darwin";

const createMenu = (win) => {
  const menu = isMac ? [{
    label: app.name,
    submenu: [
      {
        label: '访问网站',
        accelerator: 'CommandOrControl+I',
        click: async() => {
          const res = await dialog.showMessageBox({
            title: '访问网站',
            detail: "确定要访问baidu吗?",
            buttons: ['取消', '确认'], // 按钮展示文案
            cancelId: 1, // esc按钮效果是按钮的那一个
            checkboxLabel: '确认访问百度', // 选择框
            checkboxChecked: true, // 默认选择框勾选
          })
          console.log('=====', res);
          if (!res.checkboxChecked) {
            return dialog.showErrorBox('温馨提示', '没有勾选')
          }
          if (res.response == 1) shell.openExternal('https://baidu.com')
          ;
        },
      },
      {
        label: '渲染进程事件',
        click:  () => {
          win.webContents.send('toPreload', '渲染进程事件菜单点击')
        },
      },
    ],
  }, {
    label: '操作',
    submenu: [
      {
        label: '打开窗口',
        accelerator: 'CommandOrControl+Y',
        click: async () => {
          const res = await dialog.showMessageBox({
            title: '退出登录',
            detail: "确定退出登录吗?",
            buttons: ['取消', '退出'],
            cancelId: 1
          })
          if (res.response == 1) createWin.createWindow();
        }
      },
      // 分割线等
      { type: 'separator' },
      {
        label: "关闭",
        accelerator: 'CommandOrControl+U',
        // 点击后触发的默认事件
        role: isMac ? 'hide' : 'quite'
      },
    ]
  }, 
] : [];
  Menu.setApplicationMenu(Menu.buildFromTemplate(menu))
}

module.exports = {
  createMenu,
}
