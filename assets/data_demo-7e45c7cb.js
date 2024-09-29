const n=`<template>
  <an-select :options="options" :filed-label="filedLabel"/>
</template>

<script setup>
import {ref, reactive} from 'vue'

const filedLabel = ref('name')

const state = reactive({
  options: [
    {
      name: '选项一',
      value: '1',
    },
    {
      name: '选项二',
      value: '2'
    },
    {
      name: '选项三',
      value: '3'
    }
  ]
})

const {options} = state
<\/script>
`;export{n as default};
