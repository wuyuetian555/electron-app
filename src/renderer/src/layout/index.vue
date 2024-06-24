<template>
  <div class="common-layout">
    <el-container style="height: 100vh">
      <el-header style="padding: 0px 10px 0 10px">
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside></el-aside>
        <el-main></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import Header from './components/Header.vue'
</script>
<style scoped lang="scss">
.el-aside {
  flex: 1;
}

.el-main {
  flex: 3;
}
</style>
