/*
 * @Author: zhangchunjie8 zhangchunjie8@jd.com
 * @Date: 2024-06-19 11:17:05
 * @LastEditors: zhangchunjie8 zhangchunjie8@jd.com
 * @LastEditTime: 2024-06-19 20:24:18
 * @FilePath: /study-2024/study-electron/day05-开发桌面摄像头软件/electron-app/src/main/tray.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { Menu, Tray } = require('electron')
import path from 'path'

const createTray = () => {
  const tray = new Tray(
    path.resolve(
      __dirname,
      process.platform === 'darwin' ? '../../resources/camera.png' : '../../resources/camera.png'
    )
  )
  const contextMenu = Menu.buildFromTemplate([{ label: '退出', role: 'quit' }])
  tray.setToolTip('张春节的工具箱')
  tray.setContextMenu(contextMenu)
}
export default createTray
