const { ipcMain, dialog, BrowserWindow } = require("electron");
const fs = require('fs')

ipcMain.on('saveFiles', async (event, val) => {
  console.log('=====',val);
  const res = await dialog.showSaveDialog({
    title: '请创建文件'
  })
  fs.writeFileSync(res.filePath, val);
})