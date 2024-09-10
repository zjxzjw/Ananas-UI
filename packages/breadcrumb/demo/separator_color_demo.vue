<template>
  <an-breadcrumb :data="data" separator=">" separator-color="#66d476"/>
</template>

<script setup>
const data = [
  {
    text: '以父之名',
    path: '/ananas'
  },
  {
    text: '夜曲',
    path: '/ananas'
  },
  {
    text: '夜的第七章',
    path: '/ananas'
  }
]
</script>
