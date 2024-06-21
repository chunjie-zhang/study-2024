<!--
 * @Author: zhangchunjie8 zhangchunjie8@jd.com
 * @Date: 2024-06-06 20:09:31
 * @LastEditors: zhangchunjie8 zhangchunjie8@jd.com
 * @LastEditTime: 2024-06-18 11:20:45
 * @FilePath: /study-2024/study-electron/day05-开发桌面摄像头软件/electron-app/src/renderer/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="app">
    <div class="app__setting">
      <el-icon v-if="cameraConfig.pageComp === 'selectCamera'" @click="handleSettingClick('camera')"
        ><CameraFilled
      /></el-icon>
      <el-icon v-else @click="handleSettingClick('selectCamera')"><Setting /></el-icon>
      <el-button @click="handleNotification">通知</el-button>
    </div>
    <div class="app__container" @contextmenu="handleQuit">
      <SelectCamera v-if="cameraConfig.pageComp === 'selectCamera'"></SelectCamera>
      <Camera v-else></Camera>
    </div>
    <div class="app__bottom">
      <el-icon v-if="cameraConfig.pageComp !== 'selectCamera'" @click="handleCameraCircle">
        <ChromeFilled />
      </el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import Camera from './components/Camera.vue'
import SelectCamera from './components/SelectCamera.vue'
import { useConfigStore } from '@renderer/stores/useConfigStore'
import useDrag from '@renderer/hooks/useDrag'

const { cameraConfig } = useConfigStore()
// 开启拖拽
const { drag } = useDrag()
drag.run()

// 切换组件
const handleSettingClick = (val) => {
  cameraConfig.pageComp = val
}

// 处理摄像头圆角
const handleCameraCircle = () => {
  cameraConfig.rounded = !cameraConfig.rounded
}

// 处理退出
const handleQuit = () => {
  window.api.quit()
}

const handleNotification = () => {
  new Notification('张春节的camera通知', {
    body: '请选择摄像头'
  })
}
</script>
<style lang="scss" scoped>
.app {
  position: relative;
  &:hover {
    .app__setting {
      display: block;
    }
    .app__bottom {
      display: block;
    }
  }
  &__setting {
    display: none;
    position: absolute;
    left: 50%;
    top: 30px;
    z-index: 50;
    transform: translate(-50%, -50%);
    cursor: pointer;
    & > .el-icon {
      font-size: 22px;
      color: #fff;
    }
  }
  &__bottom {
    display: none;
    position: absolute;
    left: 50%;
    bottom: 10px;
    transform: translateX(-50%);
    & > .el-icon {
      font-size: 22px;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>
