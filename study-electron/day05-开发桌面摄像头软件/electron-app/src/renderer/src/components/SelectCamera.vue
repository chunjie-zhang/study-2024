<!--
 * @Author: zhangchunjie8 zhangchunjie8@jd.com
 * @Date: 2024-06-07 17:09:43
 * @LastEditors: zhangchunjie8 zhangchunjie8@jd.com
 * @LastEditTime: 2024-06-17 20:21:01
 * @FilePath: /study-2024/study-electron/day05-开发桌面摄像头软件/electron-app/src/renderer/src/components/SelectCamera.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="select">
    <div class="select__title">参数设置</div>
    <el-form :model="cameraConfig" label-width="auto">
      <el-form-item label="请选择摄像头">
        <el-select
          :model-value="cameraConfig.deviceId"
          placeholder="请选择摄像头"
          clearable
          filterable
          @change="handleSelectChange"
        >
          <el-option
            v-for="item in cameraList"
            :key="item.deviceId"
            :label="item.label"
            :value="item.deviceId"
            size="large"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="摄像头边框宽度">
        <el-input v-model="cameraConfig.borderWidth" />
      </el-form-item>
      <el-form-item label="摄像头边框颜色">
        <el-input v-model="cameraConfig.borderColor" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useConfigStore } from '@renderer/stores/useConfigStore'

const { cameraConfig } = useConfigStore()

// 电脑所有的摄像头设备
const cameraList = ref<any>([])

const handleSelectChange = (val) => {
  cameraConfig.deviceId = val
}

const initComp = async () => {
  const enumeratorList = await navigator.mediaDevices.enumerateDevices()
  // 排除音频设备
  cameraList.value = enumeratorList.filter((item) => {
    return item.kind === 'videoinput'
  })
}
initComp()
</script>
<style lang="scss" scoped>
.select {
  height: 100vh;
  width: 100vw;
  background: #2c3e50;
  padding: 15px;

  &__save {
    margin-top: 40px;
    width: 100%;
  }

  &__title {
    font-size: 16px;
    color: #fff;
    text-align: center;
    margin-bottom: 12px;
    margin-top: 30px;
  }

  ::v-deep .el-select-dropdown {
    width: 100%;
  }

  ::v-deep .el-select__popper {
    width: 100%;
  }
}
</style>
