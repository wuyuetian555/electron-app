<template>
  <div class="common-layout">
    <el-container style="height: 100vh">
      <el-header style="padding: 0px">
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside>
          <Aside></Aside>
        </el-aside>
        <el-main></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import Header from './components/Header.vue'
import Aside from './components/Aside.vue'
</script>
<style scoped lang="scss">
.el-aside {
  max-width: 50px;
}

.el-main {
  flex: 1;
}
</style>
