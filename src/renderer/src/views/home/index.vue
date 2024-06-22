<template>
  <el-button>Default</el-button>
  <el-button type="primary" @click="getSelectedText">Primary</el-button>
  <el-input v-model="value"></el-input>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')
</script>

<style lang="scss"></style>
