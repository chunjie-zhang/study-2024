/*
 * @Author: zhangchunjie8 zhangchunjie8@jd.com
 * @Date: 2024-06-18 10:38:05
 * @LastEditors: zhangchunjie8 zhangchunjie8@jd.com
 * @LastEditTime: 2024-06-18 10:47:27
 * @FilePath: /study-2024/study-electron/day05-开发桌面摄像头软件/electron-app/src/main/ipcMain.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Menu, app, ipcMain } from 'electron'

ipcMain.on('quit', () => {
  const template = [
    {
      label: '退出',
      click: () => {
        app.quit()
      }
    }
  ]
  const menu = Menu.buildFromTemplate(template)
  menu.popup()
})
