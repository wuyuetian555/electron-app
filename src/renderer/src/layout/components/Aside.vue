<template>
  <div class="aside">
    <svg-icon icon="music" size="32px"></svg-icon>
    <svg-icon icon="clipboard" size="32px"></svg-icon>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.aside {
  height: 100%;
  background: linear-gradient(135deg, rgba(112, 76, 255, 0.7), rgba(255, 213, 128, 0.51));
  border-bottom-right-radius: 35px;
  border-top-right-radius: 35px;
  padding: 35px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .svg-icon {
    border-radius: 8px;
    transition: all 0.2s;
    margin-bottom: 25px;
    cursor: pointer;
    &:hover {
      background-color: rgba(255, 255, 255, 1);
    }
  }
}
</style>
