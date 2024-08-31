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
    primaryColorHover: 'rgba(112, 76, 255, .5)',
    primaryColorPressed: 'rgba(112, 76, 255, .8)',
    fontSizeSmall: '12px',
    fontSizeMedium: '12px'
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
  },
  Tabs: {
    common: {
      fontSize: '13px',
      fontSizeMedium: '13px'
    }
  }
}
</script>

<style lang="scss"></style>
