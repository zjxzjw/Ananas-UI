const n=`<template>
  <an-space>
    <an-button @click="hClick1" secondary>自动关闭</an-button>
    <an-button @click="hClick2" secondary>手动关闭</an-button>
  </an-space>
</template>

<script setup>
import {AnNotification} from 'ananas-ui'

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
`;export{n as default};
