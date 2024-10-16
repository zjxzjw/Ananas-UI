const e=`<template>
  <an-textarea placeholder="只能输入50个" v-model="textareaValue" :max-length="maxlength"/>
</template>

<script setup>
import {ref} from 'vue'

const textareaValue = ref('')

const maxlength = ref(50)
<\/script>
`;export{e as default};
