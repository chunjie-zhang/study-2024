const { ipcRenderer, shell } = require("electron");
const fs = require('fs')

// shell.openExternal('https://jd.com');

ipcRenderer.send('init', 'ok')

window.api = {
  a: 1
}
fs.writeFileSync('a.txt', 'aaaa')