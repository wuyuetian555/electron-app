<template>
  <div class="header drag">
    <div class="header-title">
      <svg-icon icon="logo" size="36px"></svg-icon>
      <span> 精灵小助手 </span>
    </div>
    <div class="header-operate">
      <svg-icon
        icon="minus"
        size="28px"
        class="no-drag"
        @click="windowOperation('minimize')"
      ></svg-icon>
      <svg-icon
        v-show="!isMaximized"
        icon="maximize"
        size="28px"
        class="no-drag"
        @click="windowOperation('Maximized')"
      ></svg-icon>
      <svg-icon
        v-show="isMaximized"
        icon="window-maximize"
        size="28px"
        class="no-drag"
        @click="windowOperation('unmaximize')"
      ></svg-icon>
      <svg-icon
        icon="close_bold"
        size="28px"
        class="no-drag"
        @click="windowOperation('close')"
      ></svg-icon>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const isMaximized = ref(false)
const closeType = ref(0)
const windowOperation = (action) => {
  console.log(window.api)
  window.api.windowOp(action, closeType)
}
window.api.onWindowMaximized(() => {
  isMaximized.value = true
})

window.api.onWindowUnmaximized(() => {
  isMaximized.value = false
})
</script>

<style scoped lang="scss">
.header {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header-title {
    display: flex;
    align-items: center;

    span {
      font-weight: bold;
      font-family: 'Courier New', Courier, monospace;
      cursor: default;
    }
  }
}
</style>
