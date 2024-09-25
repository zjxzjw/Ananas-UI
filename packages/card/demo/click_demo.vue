<template>
  <AnCard @click="handleCardClick">
    <template #header>卡片标题</template>
    <template #body>卡片内容</template>
    <template #footer>卡片底部</template>
  </AnCard>
</template>

<script setup>
const handleCardClick = () => {
  alert('点击了卡片')
}
</script>
