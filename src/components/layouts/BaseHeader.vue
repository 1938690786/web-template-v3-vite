<script lang="ts" setup>
import { toggleDark } from "~/composables";
</script>

<template>
  <div class="base-header">
    <div class="left">Element Plus</div>
    <div class="right">
      <div class="theme-config" h="full" @click="toggleDark()">
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.base-header {
  height: 60px;
  border-bottom: solid 1px #dcdfe6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding: 0 20px;
  .theme-config {
    padding: 0 20px;
    cursor: pointer;
  }
}
</style>
