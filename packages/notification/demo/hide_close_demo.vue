<template>
  <an-space>
    <an-button @click="hClick1" secondary>隐藏按钮</an-button>
    <an-button @click="hClick2" secondary>显示按钮</an-button>
  </an-space>
</template>

<script setup>
import { AnNotification } from 'ananas-ui'

const hClick1 = () => {
  AnNotification({
    message: '隐藏关闭按钮',
    title: '关闭按钮',
    hideClose: true,
    duration: 5000,
  })
}
const hClick2 = () => {
  AnNotification({
    message: '默认显示关闭按钮',
    title: '关闭按钮',
    duration: 0,
  })
}
</script>
