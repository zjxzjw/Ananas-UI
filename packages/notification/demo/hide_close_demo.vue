<script setup>
import { AnNotification } from '../index'

const hClick1 = () => {
  AnNotification({
    message: '隐藏关闭按钮',
    title: '关闭按钮',
    type: "success",
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

<template>
  <an-space>
    <an-button @click="hClick1" secondary>隐藏关闭按钮</an-button>
    <an-button @click="hClick2" secondary>默认显示关闭按钮</an-button>
  </an-space>
</template>

<style>

</style>  
