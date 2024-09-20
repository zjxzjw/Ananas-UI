<template>
  <!-- 选择不同动画效果的按钮 -->
  <an-space>
    <an-button type="success" @click="showModal = true">点我</an-button>
    <p>切换：</p>
    <an-button type="default" @click="setTransition('modal')">Modal</an-button>
    <an-button type="default" @click="setTransition('fade-modal')">Fade</an-button>
    <an-button type="default" @click="setTransition('slide-modal')">Slide</an-button>
    <an-button type="default" @click="setTransition('slide-left-modal')">Slide Left</an-button>
    <an-button type="default" @click="setTransition('slide-right-modal')">Slide Right</an-button>
    <an-button type="default" @click="setTransition('zoom-modal')">Zoom</an-button>
  </an-space>

  <AnModal v-model="showModal" :transition-name="transitionName">
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
const transitionName = ref('modal') // 默认使用 modal 动画

// 设置过渡效果的方法
function setTransition(name) {
  transitionName.value = name
}
</script>
