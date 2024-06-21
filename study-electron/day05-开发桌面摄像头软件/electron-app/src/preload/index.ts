/* eslint-disable @typescript-eslint/explicit-function-return-type */
/*
 * @Author: zhangchunjie8 zhangchunjie8@jd.com
 * @Date: 2024-06-06 20:09:31
 * @LastEditors: zhangchunjie8 zhangchunjie8@jd.com
 * @LastEditTime: 2024-06-19 11:04:17
 * @FilePath: /study-2024/study-electron/day05-开发桌面摄像头软件/electron-app/src/preload/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  quit: () => {
    ipcRenderer.send('quit')
  },
  drag: (opt: { x: number; y: number }) => {
    ipcRenderer.invoke('drag', opt);
  }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
