<template>
  <an-textarea placeholder="基本的Textarea" v-model="textareaValue"/>
</template>

<script setup>
import {ref} from 'vue'

const textareaValue = ref('')
</script>
