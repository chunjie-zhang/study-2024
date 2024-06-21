import { BrowserWindow, ipcMain } from 'electron'

export default () => {
  ipcMain.handle('drag', (event, opt) => {
    const win = BrowserWindow.fromWebContents(event.sender)!
    const [x, y] = win.getPosition()
    win.setPosition(x + opt.x, y + opt.y)
  })
}
