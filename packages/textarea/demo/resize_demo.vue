<template>
  <an-textarea placeholder="街景一直在后退。" v-model="textareaValue" resize/>
</template>

<script setup>
import {ref} from 'vue'

const textareaValue = ref('')
</script>
