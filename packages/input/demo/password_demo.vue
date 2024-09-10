<template>
  <an-input v-model="val" placeholder="看不见我~" password/>
</template>

<script setup>
import {ref} from 'vue'

const val = ref('')
</script>
