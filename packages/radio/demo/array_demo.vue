<template>
  <p>
    <an-radio :options="options" filed-label="name" filedValue="id" :radio-index="radioIndex" inline/>
  </p>
  <p>
    <an-radio :options="options" filed-label="name" filedValue="id" :radio-index="radioIndex"/>
  </p>
</template>

<script setup>
import {ref, reactive} from 'vue'

const state = reactive({
  options: [
    {
      name: '第一',
      id: '1'
    },
    {
      name: '第二',
      id: '2'
    },
    {
      name: '第三',
      id: '3'
    }
  ]
})

const {options} = state

const radioIndex = ref(0)
</script>
