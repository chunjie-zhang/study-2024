// node运行时环境 - 创建并控制浏览器窗口。
const { BrowserWindow, app, ipcMain, dialog } = require('electron');
const path = require('path');
const menu  = require('./src/menu');


// 创建窗口
const createWindow = () => {
  // 创建浏览器窗口 主进程
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 800,
    frame: true, // 不展示标题头，但是应用也不可拖拽了
    isAlwaysOnTop: true, // 前窗口是否始终在其它窗口之前.
    // transparent: true, // 窗口透明
    webPreferences: { // —— 网页功能设置
      preload: path.resolve(__dirname, 'src/preLoad.js')
    }
  })

  // 打开某个链接
  // mainWindow.loadURL('https://jd.com');
  // 打开控制台
  mainWindow.webContents.openDevTools();
  // 加载文件
  mainWindow.loadFile(path.resolve(__dirname, 'src/index.html'))
  // 拖拽缩放比例为1
  mainWindow.setAspectRatio(1);
  // 创建菜单
  menu.createMenu(mainWindow);
}

// app启动完成
app.whenReady().then(() => { 
  createWindow();
 })

// mac应用关闭应用还会存在应用坞中，这里做适配
app.on('window-all-closed', () => {
  // mac平台
  if(process.platform !== 'darwin') app.quit()
  console.log('=======app窗口都关闭了')
})

// 监听app程序坞点击激活
app.on('activate', () => {
  console.log('=======监听app点击激活')
  // createWindow();
})
// console.log(window.a)

// 双向通信

ipcMain.on('双向通信', (event) => {
  BrowserWindow.fromWebContents(event.sender).webContents.send('双向通信1', '已经收到双向通信1通知');
  event.sender.send('双向通信1', '已经收到双向通信1通知')
})

ipcMain.on('saveFile', () => {
  console.log('=======savefile')
})

ipcMain.handle('selectFile', async () => {
  const file = await dialog.showOpenDialog()
  console.log(file.filePaths[0]);
  return file.filePaths[0];
})

ipcMain.on('updateTitle', (event, value) => {
  console.log(value);
  BrowserWindow.fromWebContents(event.sender).title = value;
})