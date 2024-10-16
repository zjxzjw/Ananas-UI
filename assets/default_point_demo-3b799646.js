const n=`<template>
  <an-radio :options="options" filed-label="name" filed-value="id" inline :radio-index="radioIndex"/>
</template>

<script setup>
import {ref, reactive} from 'vue'

const state = reactive({
  options: [
    {
      name: '选项一',
      id: '1'
    },
    {
      name: '选项二',
      id: '2'
    },
    {
      name: '选项三',
      id: '3'
    }
  ]
})

const {options} = state

const radioIndex = ref(0)
<\/script>

`;export{n as default};
