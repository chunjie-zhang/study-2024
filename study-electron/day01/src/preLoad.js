const { ipcRenderer, contextBridge } = require('electron');

window.a = 2;
console.log('======preload window', window.a);

window.addEventListener('DOMContentLoaded', () => {
  const domArr = ['electron', 'node', 'chrome'];
  domArr.forEach((item) => {
    const el = document.querySelector(`#${item}`);
    el.innerHTML = `${item}: ${process.versions[item]}`
  });
})

ipcRenderer.on('add', () => {
  console.log('增加成功');
})

// 和render进行通信
contextBridge.exposeInMainWorld('api', {
  saveFile: () => {
    ipcRenderer.send('saveFile')
  },
  bus: (callback) => {
    ipcRenderer.on('mainIpc', (event, value) => {
      callback(value)
    });
  },
  upload: async () => {
    const file = await ipcRenderer.invoke('selectFile');
    console.log(file);
  },
  changeTitle: async (txt) => {
    ipcRenderer.send('updateTitle', txt);
  }
})


ipcRenderer.on('双向通信1', (val) => {
  console.log('=====双向通信1', val);
});

ipcRenderer.send('双向通信')
