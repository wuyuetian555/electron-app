<template>
  <div class="header-operate">
    <svg-icon
      v-if="minus"
      icon="minus"
      size="28px"
      class="no-drag"
      @click="windowOperation('minimize')"
    ></svg-icon>
    <svg-icon
      v-if="maximize"
      v-show="!isMaximized"
      icon="maximize"
      size="28px"
      class="no-drag"
      @click="windowOperation('Maximized')"
    ></svg-icon>
    <svg-icon
      v-if="maximize"
      v-show="isMaximized"
      icon="window-maximize"
      size="28px"
      class="no-drag"
      @click="windowOperation('unmaximize')"
    ></svg-icon>
    <svg-icon
      v-if="close"
      icon="close_bold"
      size="28px"
      class="no-drag"
      @click="windowOperation('close')"
    ></svg-icon>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'
defineProps({
  minus: { type: Boolean, default: true },
  close: { type: Boolean, default: true },
  maximize: { type: Boolean, default: true }
})
const isMaximized = ref(false)
const closeType = ref(0)
const windowOperation = (action) => {
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
.header-operate {
  .svg-icon {
    border-radius: 8px;
    transition: all 0.2s;
    cursor: pointer;
    &:hover {
      background-color: rgba(255, 255, 255, 0.9);
    }
  }
}
</style>
