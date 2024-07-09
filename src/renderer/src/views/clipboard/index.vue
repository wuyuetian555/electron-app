<template>
  <div class="clipboard">
    <div class="clipboard-header drag">
      <HeaderOperate :minus="false" :maximize="false"></HeaderOperate>
    </div>
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
