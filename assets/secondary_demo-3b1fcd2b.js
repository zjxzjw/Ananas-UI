const n=`<template>
  <an-space>
    <an-button @click="onDefault" secondary>Default</an-button>
    <an-button type="primary" @click="onPrimary" secondary>Primary</an-button>
    <an-button type="success" @click="onSuccess" secondary>Success</an-button>
    <an-button type="error" @click="onError" secondary>Error</an-button>
    <an-button type="info" @click="onInfo" secondary>Info</an-button>
  </an-space>
</template>

<script setup>
import AnMessage from '../../../packages/message/index.js'

const onDefault = () => {
  AnMessage({
    message: '这是一条消息提示'
  })
}

const onPrimary = () => {
  AnMessage({
    message: '这是一条消息提示',
    type: 'primary',
    secondary: true
  })
}

const onSuccess = () => {
  AnMessage({
    message: '这是一条消息提示',
    type: 'success',
    secondary: true
  })
}

const onError = () => {
  AnMessage({
    message: '这是一条消息提示',
    type: 'error',
    secondary: true
  })
}

const onInfo = () => {
  AnMessage({
    message: '这是一条消息提示',
    type: 'info',
    secondary: true
  })
}
<\/script>
`;export{n as default};
