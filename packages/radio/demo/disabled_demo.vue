<template>
  <an-radio :options="options" filed-label="name" filed-value="id" inline/>
</template>

<script setup>
import {reactive} from 'vue'

const state = reactive({
  options: [
    {
      name: '园游会',
      id: '1',
      disabled: true
    },
    {
      name: '甜甜的',
      id: '2'
    },
    {
      name: '简单爱',
      id: '3'
    }
  ]
})

const {options} = state
</script>
