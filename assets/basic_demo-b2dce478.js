const n=`<template>
  <an-radio :options="options" filed-label="name" filed-value="id" :radio-index="radioIndex" inline/>
</template>

<script setup>
import {ref, reactive} from 'vue'

const state = reactive({
  options: [
    {
      name: '搁浅',
      id: '1'
    },
    {
      name: '退后',
      id: '2'
    },
    {
      name: '枫',
      id: '3'
    }
  ]
})

const {options} = state

const radioIndex = ref(0)
<\/script>
`;export{n as default};
