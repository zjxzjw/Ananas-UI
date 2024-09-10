<template>
  <an-breadcrumb :data="data" separator=">"/>
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
