const { Menu, shell, app } = require("electron");
const createWin = require('./window');

const isMac = process.platform == "darwin";

const createMenu = (win) => {
  const menu = isMac ? [{
    label: app.name,
    submenu: [
      {
        label: '访问网站',
        accelerator: 'CommandOrControl+I',
        click:  () => {
          shell.openExternal('https://jd.com')
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
        click: () => {
          createWin.createWindow();
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
