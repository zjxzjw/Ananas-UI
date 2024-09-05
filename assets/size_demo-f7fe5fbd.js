const e=`<template>
  <an-textarea placeholder="你的崩溃在窗外零碎。" v-model="textareaValue" :cols="cols" :rows="rows"/>
</template>

<script setup>
import {ref} from 'vue'

const textareaValue = ref('')

const cols = ref(30)

const rows = ref(2)
<\/script>
`;export{e as default};
