<template>
  <p>
    <an-input v-model="val" placeholder="小" size="small"/>
  </p>
  <p>
    <an-input v-model="val" placeholder="中" size="medium"/>
  </p>
  <p>
    <an-input v-model="val" placeholder="大" size="large"/>
  </p>
  <p>
    <an-input v-model="val" placeholder="大大" size="large-max"/>
  </p>
</template>

<script setup>
import {ref} from 'vue'

const val = ref('')
</script>
