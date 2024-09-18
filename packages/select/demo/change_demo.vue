<template>
  <an-select :options="options" @change="change"/>
</template>

<script setup>
import AnMessage from '../../../packages/message/index.js'
import {reactive} from 'vue'

const state = reactive({
  options: [
    {
      label: '选项一',
      value: '1',
    },
    {
      label: '选项二',
      value: '2'
    },
    {
      label: '选项三',
      value: '3'
    }
  ]
})

const {options} = state

const change = (val) => {
  AnMessage({
    message: '这是一条消息提示',
    type: 'primary'
  })
}
</script>
