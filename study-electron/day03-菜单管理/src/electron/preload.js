const { ipcRenderer, shell, contextBridge } = require("electron");

ipcRenderer.send('init', 'ok')

contextBridge.exposeInMainWorld('api', {
  a: 1,
  getMenuData: (callback) => {
    ipcRenderer.on('toPreload', (event, val) => {
      console.log('preload');
      callback(val)
    })
  }
})

window.api = {
  a: 2
}

window.addEventListener('contextmenu', () => {
  ipcRenderer.send('mainPopMenu')
});