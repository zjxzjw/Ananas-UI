<script setup lang='ts'>
import AnTooltip from '../index'
</script>

<template>
  <div class="box">
    <div class="center">
      <AnTooltip content="prompts info" placement="top-start">
        <template #reference>
          <AnButton>top-start</AnButton>
        </template>
      </AnTooltip>
      <AnTooltip content="prompts info" placement="top">
        <template #reference>
          <AnButton>top</AnButton>
        </template>
      </AnTooltip>
      <AnTooltip content="prompts info" placement="top-end">
        <template #reference>
          <AnButton>top-end</AnButton>
        </template>
      </AnTooltip>
    </div>
    <div class="between">
      <AnTooltip content="prompts info" placement="left-start">
        <template #reference>
          <AnButton>left-start</AnButton>
        </template>
      </AnTooltip>
      <AnTooltip content="prompts info" placement="right-start">
        <template #reference>
          <AnButton>right-start</AnButton>
        </template>
      </AnTooltip>
    </div>
    <div class="between">
      <AnTooltip content="prompts info" placement="left">
        <template #reference>
          <AnButton>left</AnButton>
        </template>
      </AnTooltip>
      <AnTooltip content="prompts info" placement="right">
        <template #reference>
          <AnButton>right</AnButton>
        </template>
      </AnTooltip>
    </div>
    <div class="between">
      <AnTooltip content="prompts info" placement="left-end">
        <template #reference>
          <AnButton>left-end</AnButton>
        </template>
      </AnTooltip>
      <AnTooltip content="prompts info" placement="right-end">
        <template #reference>
          <AnButton>right-end</AnButton>
        </template>
      </AnTooltip>
    </div>
    <div class="center">
      <AnTooltip content="prompts info" placement="bottom-start">
        <template #reference>
          <AnButton>bottom-start</AnButton>
        </template>
      </AnTooltip>
      <AnTooltip content="prompts info" placement="bottom">
        <template #reference>
          <AnButton>bottom</AnButton>
        </template>
      </AnTooltip>
      <AnTooltip content="prompts info" placement="bottom-end">
        <template #reference>
          <AnButton>bottom-end</AnButton>
        </template>
      </AnTooltip>
    </div>
  </div>
</template>

<style>
.box {
  width: 600px;
}

.center {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 40px;
}
.between {
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 40px;
}
</style>
