<template>
  <div class="header drag">
    <div class="header-title">
      <svg-icon icon="logo" size="36px"></svg-icon>
      <span> 精灵小助手 </span>
    </div>
    <HeaderOperate></HeaderOperate>
  </div>
</template>

<script setup>
import HeaderOperate from '../../components/HeaderOperate.vue'
</script>

<style scoped lang="scss">
.header {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, rgba(255, 213, 128, 0.2), rgba(112, 76, 255, 0.3));
  padding: 0px 10px 0 10px;
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
