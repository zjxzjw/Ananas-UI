<template>
  <!-- 切换对齐方式的按钮 -->
  <an-space>
    <an-button type="success" @click="showModal = true">点我</an-button>
    <p>切换：</p>
    <an-button type="primary" @click="footerAlign = 'left'">左对齐</an-button>
    <an-button type="primary" @click="footerAlign = 'center'">居中对齐</an-button>
    <an-button type="primary" @click="footerAlign = 'right'">右对齐</an-button>
  </an-space>

  <AnModal v-model="showModal" :footer-align="footerAlign">
    <template #header>
      自定义标题
    </template>
    <template #close-icon>
      <an-icon name="close" @click="showModal = false"/>
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
import { ref } from 'vue'

const showModal = ref(false)
const footerAlign = ref('center') // 默认居中对齐
</script>
