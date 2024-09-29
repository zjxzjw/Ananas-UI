const e=`<template>
  <an-button type="primary" @click="showModal = true">点我</an-button>
  <AnModal v-model="showModal">
    <template #header>
      自定义标题
    </template>
    <template #close-icon>
      <an-icon name="close" @click="showModal = false" size="1.5em"/>
    </template>
    <template #body>
      这是自定义的内容。
    </template>
    <template #footer>
      <an-button type="primary" @click="showModal = false">确定</an-button>
    </template>
  </AnModal>
</template>

<script setup>
import {ref} from 'vue'

const showModal = ref(false)
<\/script>

`;export{e as default};
