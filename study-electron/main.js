// node运行时环境 - 创建并控制浏览器窗口。
const { BrowserWindow, app } = require('electron');
const path = require('path');

// 创建窗口
const createWindow = () => {
  // 创建浏览器窗口 主进程
  const mainWindow = new BrowserWindow({
    width: 300,
    height: 300,
    frame: false, // 不展示标题头，但是应用也不可拖拽了
    isAlwaysOnTop: true, // 前窗口是否始终在其它窗口之前.
    transparent: true, // 窗口透明
  })

  // 打开某个链接
  // mainWindow.loadURL('https://jd.com');
  // 打开控制台
  // mainWindow.webContents.openDevTools();
  // 加载文件
  mainWindow.loadFile(path.resolve(__dirname, 'src/index.html'))
  // 拖拽缩放比例为1
  mainWindow.setAspectRatio(1);
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
// app.on('activate', () => {
//   console.log('=======监听app点击激活')
//   createWindow();
// })

