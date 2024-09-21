<template>
  <an-space>
    <an-button @click="hClick1" type="success">success</an-button>
    <an-button @click="hClick2" type="info">info</an-button>
    <an-button @click="hClick3" type="primary">warning</an-button>
    <an-button @click="hClick4" type="error">error</an-button>
  </an-space>
</template>

<script setup>
import {AnNotification} from '../index'

const hClick1 = () => {
  AnNotification({
    message: 'success',
    title: 'success',
    type: "success",
    duration: 5000,
  })
}
const hClick2 = () => {
  AnNotification({
    message: 'info',
    title: 'info',
    type: "info",
    duration: 0,
  })
}
const hClick3 = () => {
  AnNotification({
    message: 'warning',
    title: 'warning',
    type: "warning",
    duration: 0,
  })
}
const hClick4 = () => {
  AnNotification({
    message: 'This is an error message',
    title: 'error',
    type: "error",
    duration: 5000,
  })
}
</script>
