<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <router-view></router-view>
  </n-config-provider>
</template>

<script setup>
import { NConfigProvider, lightTheme } from 'naive-ui'
console.log(lightTheme)
const themeOverrides = {
  common: {
    primaryColor: 'rgba(112, 76, 255, 1)',
    textColor: '#f00'
  },
  Button: {
    textColor: '#FF0000'
  },
  Select: {
    peers: {
      InternalSelection: {
        textColor: '#FF0000'
      }
    }
  }
}
</script>

<style lang="scss"></style>
