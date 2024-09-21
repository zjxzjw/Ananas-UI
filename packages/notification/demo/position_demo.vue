<template>
  <an-space>
    <an-button @click="hClick1" secondary>top-right</an-button>
    <an-button @click="hClick2" secondary>top-left</an-button>
    <an-button @click="hClick3" secondary>bottom-right</an-button>
    <an-button @click="hClick4" secondary>bottom-left</an-button>
  </an-space>
</template>

<script setup>
import { AnNotification } from '../index'

const hClick1 = () => {
  AnNotification({
    message: 'top-right',
    title: 'top-right',
    position: 'top-right',
  })
}
const hClick2 = () => {
  AnNotification({
    message: 'top-left',
    title: 'top-left',
    position: 'top-left',
  })
}
const hClick3 = () => {
  AnNotification({
    message: 'bottom-right',
    title: 'bottom-right',
    position: 'bottom-right',
  })
}
const hClick4 = () => {
  AnNotification({
    message: 'bottom-left',
    title: 'bottom-left',
    position: 'bottom-left',
  })
}
</script>
