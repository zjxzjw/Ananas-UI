<template>
  <an-input v-model="val" placeholder="也可以是圆角的" round/>
</template>

<script setup>
import {ref} from 'vue'

const val = ref('')
</script>
