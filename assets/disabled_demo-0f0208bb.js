const n=`<template>
  <an-select :options="options" disabled/>
</template>

<script setup>
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
<\/script>
`;export{n as default};
