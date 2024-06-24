<template>
  <svg
    :class="'svg-icon-' + icon"
    aria-hidden="true"
    class="svg-icon"
    :style="{ 'font-size': size }"
  >
    <title>{{ title }}</title>
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String
  },
  size: { type: String }
})

const iconName = computed(() => {
  return `#icon-${props.icon}`
})
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
