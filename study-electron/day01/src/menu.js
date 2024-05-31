const { Menu } = require('electron');

// 常见菜单
const createMenu = (win) => {
  const menu = [
    {
      label: '菜单',
      submenu: [
        {
          label: '增加',
          click: () => {
            win.webContents.send('add')
            win.webContents.send('mainIpc', 'zhangchunjie8')
            console.log('=====aaa');
          }
        }
      ]
    }
  ]

  Menu.setApplicationMenu(Menu.buildFromTemplate(menu))
}

module.exports = {
  createMenu,
}