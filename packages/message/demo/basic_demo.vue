<template>
  <an-space>
    <an-button @click="onDefault" secondary>Default</an-button>
    <an-button type="primary" @click="onPrimary">Primary</an-button>
    <an-button type="success" @click="onSuccess">Success</an-button>
    <an-button type="error" @click="onError">Error</an-button>
    <an-button type="info" @click="onInfo">Info</an-button>
  </an-space>
</template>

<script setup>
import {AnMessage} from 'ananas-ui'

const onDefault = () => {
  AnMessage({
    message: '这是一条消息提示'
  })
}

const onPrimary = () => {
  AnMessage({
    message: '这是一条消息提示',
    type: 'primary'
  })
}

const onSuccess = () => {
  AnMessage({
    message: '这是一条消息提示',
    type: 'success'
  })
}

const onError = () => {
  AnMessage({
    message: '这是一条消息提示',
    type: 'error'
  })
}

const onInfo = () => {
  AnMessage({
    message: '这是一条消息提示',
    type: 'info'
  })
}
</script>
