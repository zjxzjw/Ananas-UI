<template>
  <an-select :options="options" @change="change" :model-value="value"/>
</template>

<script setup>
import {ref, reactive} from 'vue'

const value = ref('3')

const state = reactive({
  options: [
    {
      label: '选项一',
      value: '1',
      disabled: true
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

const change = (value) => {
  console.log(value)
}
</script>
