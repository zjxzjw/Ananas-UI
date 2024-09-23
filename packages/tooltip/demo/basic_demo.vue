<script setup lang='ts'>
import AnTooltip from '../index'
</script>

<template>
  <div>
    <AnTooltip content="内容">
      <template #reference>
        <AnButton>提示框</AnButton>
      </template>
    </AnTooltip>
  </div>
</template>

<style>

</style>
