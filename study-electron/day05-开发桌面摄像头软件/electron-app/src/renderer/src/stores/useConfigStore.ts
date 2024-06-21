/*
 * @Author: zhangchunjie8 zhangchunjie8@jd.com
 * @Date: 2024-06-07 18:42:02
 * @LastEditors: zhangchunjie8 zhangchunjie8@jd.com
 * @LastEditTime: 2024-06-17 20:41:52
 * @FilePath: /study-2024/study-electron/day05-开发桌面摄像头软件/electron-app/src/renderer/src/stores/useConfigStore.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfigStore = defineStore(
  'main',
  () => {
    const cameraConfig = ref({
      pageComp: 'camera', // 展示那个模块
      deviceId: '', // 摄像头设备id
      borderWidth: '', // 摄像头边框宽度
      borderColor: '', // 摄像头边框颜色
      rounded: false // 摄像头是否圆角
    })
    return {
      cameraConfig
    }
  },
  {
    persist: true
  }
)
