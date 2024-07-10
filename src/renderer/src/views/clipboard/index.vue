<template>
  <div class="clipboard">
    <div class="clipboard-header drag">
      <HeaderOperate :minus="false" :maximize="false"></HeaderOperate>
    </div>
    <n-space>
      <n-button>Default</n-button>
      <n-button type="tertiary"> Tertiary </n-button>
      <n-button type="primary"> Primary </n-button>
      <n-button type="info"> Info </n-button>
      <n-button type="success"> Success </n-button>
      <n-button type="warning"> Warning </n-button>
      <n-button type="error"> Error </n-button>
    </n-space>
  </div>
</template>

<script setup>
import HeaderOperate from '../../components/HeaderOperate.vue'
</script>

<style lang="scss" scoped>
.clipboard {
  .clipboard-header {
    display: flex;
    justify-content: flex-end;
    background: linear-gradient(135deg, rgba(255, 213, 128, 0.2), rgba(112, 76, 255, 0.3));
    padding: 5px;
  }
}
</style>
