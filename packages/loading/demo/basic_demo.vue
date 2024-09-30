<script setup lang='ts'>
import { ref } from 'vue'
import AnLoading from '../Loading.vue'

const visible = ref(false)
const visible2 = ref(false)

const handleClick = () => {
  visible2.value = true
  setTimeout(() => {
    visible2.value = false
  }, 3000)
}

</script>

<template>
  <h3>基本用法</h3>
  <an-space>
    <AnButton @click="visible = true">显示</AnButton>
    <AnButton @click="visible = false">隐藏</AnButton>
  </an-space>
  <br>
  <br>
  <AnLoading :visible="visible" message="loading...">
    <AnCard>
      <template #header>卡片标题</template>
      <template #body>卡片内容</template>
      <template #footer>卡片底部</template>
    </AnCard>
  </AnLoading>
  <h3>全屏加载</h3>
  <AnButton @click="handleClick">全屏</AnButton>
  <AnLoading :visible="visible2" fullScreen></AnLoading>
</template>

<style>

</style>
