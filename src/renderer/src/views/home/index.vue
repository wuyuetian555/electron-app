<template>
  <el-button type="primary" @click="getSelectedText">Primary</el-button>
  <el-input v-model="selectedText"></el-input>
</template>

<script setup>
import { bdTranslate } from '@/api/bdTranslate.js'
import { ref } from 'vue'
const selectedText = ref('')
const getSelectedText = async () => {
  console.log(window.electron)
  const result = await window.electron.ipcRenderer.send('getSelectedText')
  console.log(result)
  const result2 = await bdTranslate({ q: 'red and blue', to: 'zh', salt: Date.now() })
  console.log(result2)
  // selectedText.value = window.electronAPI.getSelectedText()
}
</script>

<style lang="scss"></style>
