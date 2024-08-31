<template>
  <div class="clipboard">
    <div class="clipboard-header drag">
      <span></span>
      <span class="clipboard-heade-title">剪切板</span>
      <HeaderOperate :minus="false" :maximize="false"></HeaderOperate>
    </div>
    <div class="clipboard-container">
      <div>
        <n-input round size="small" placeholder="搜索" clearable>
          <template #suffix>
            <n-icon :component="FlashOutline" />
          </template>
        </n-input>
      </div>
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
    align-items: center;
    background: linear-gradient(135deg, rgba(255, 213, 128, 0.2), rgba(112, 76, 255, 0.3));
    padding: 5px;
    span,
    .header-operate {
      flex: 1;
      text-align: center;
    }
    .header-operate {
      text-align: right;
    }
    .clipboard-heade-title {
      color: #000;
    }
  }
  .clipboard-container {
    padding: 5px;
  }
}
</style>
