const { ipcRenderer } = require("electron");

ipcRenderer.send('init', 'ok')