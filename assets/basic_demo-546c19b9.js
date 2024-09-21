const n=`<script setup>
import { AnNotification } from '../index'

const hClick1 = () => {
  AnNotification({
    message: '自动关闭',
    title: '基础用法'
  })
}
const hClick2 = () => {
  AnNotification({
    message: '需要手动关闭',
    title: '基础用法',
    duration: 0,
  })
}
<\/script>

<template>
  <an-space>
    <an-button @click="hClick1" secondary>自动关闭</an-button>
    <an-button @click="hClick2" secondary>需要手动关闭</an-button>
  </an-space>
</template>

<style>

</style>  
`;export{n as default};
