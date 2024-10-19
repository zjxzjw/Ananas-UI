<template>
  <an-space>
    <an-button @click="one">1s</an-button>
    <an-button type="primary" @click="two">2s</an-button>
    <an-button type="success" @click="three">3s</an-button>
    <an-button type="error" @click="four">4s</an-button>
    <an-button type="info" @click="five">5s</an-button>
  </an-space>
</template>

<script setup>
import {AnMessage} from 'ananas-ui'

const one = () => {
  AnMessage({
    message: '这是一条消息提示',
    duration: 1000
  })
}

const two = () => {
  AnMessage({
    message: '这是一条消息提示',
    type: 'primary',
    duration: 2000
  })
}

const three = () => {
  AnMessage({
    message: '这是一条消息提示',
    type: 'success',
    duration: 3000
  })
}

const four = () => {
  AnMessage({
    message: '这是一条消息提示',
    type: 'error',
    duration: 4000
  })
}

const five = () => {
  AnMessage({
    message: '这是一条消息提示',
    type: 'info',
    duration: 5000
  })
}
</script>
