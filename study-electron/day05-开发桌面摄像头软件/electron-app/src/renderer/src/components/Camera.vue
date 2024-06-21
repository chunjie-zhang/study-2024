<!--
 * @Author: zhangchunjie8 zhangchunjie8@jd.com
 * @Date: 2024-06-07 10:37:50
 * @LastEditors: zhangchunjie8 zhangchunjie8@jd.com
 * @LastEditTime: 2024-06-17 20:43:02
 * @FilePath: /study-2024/study-electron/day05-开发桌面摄像头软件/electron-app/src/renderer/src/components/Camera.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div
    class="w-screen h-screen flex"
    :class="{ 'rounded-full': cameraConfig.rounded }"
    :style="`border: solid ${cameraConfig.borderWidth} ${cameraConfig.borderColor}`"
  >
    <video class="object-cover" :class="{ 'rounded-full': cameraConfig.rounded }"></video>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { useConfigStore } from '@renderer/stores/useConfigStore'

const { cameraConfig } = useConfigStore()

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const initComp = async () => {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    ElMessage.error('不支持获取摄像头设备')
    return
  }

  const constraints = {
    audio: false,
    video: {
      deviceId: { exact: cameraConfig.deviceId }
    }
  }
  try {
    const mediaStream = await navigator.mediaDevices.getUserMedia(constraints)
    const video = document.querySelector('video')
    if (video) {
      video.srcObject = mediaStream
      video.play()
    }
  } catch (err: any) {
    ElMessage.error(err.name + ': ' + err.message)
  }
}

onMounted(() => {
  initComp()
})
</script>
<style lang="scss"></style>
