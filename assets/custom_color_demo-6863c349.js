const o=`<template>
  <an-space>
    <an-button type="primary" @click="changeColor('red')" background="red" text-color="white">红色</an-button>
    <an-button type="primary" @click="changeColor('orange')" background="orange" text-color="white">橙色</an-button>
    <an-button type="primary" @click="changeColor('yellow')" background="yellow" text-color="white">黄色</an-button>
    <an-button type="primary" @click="changeColor('green')" background="green" text-color="white">绿色</an-button>
    <an-button type="primary" @click="changeColor('cyan')" background="cyan" text-color="white">青色</an-button>
    <an-button type="primary" @click="changeColor('blue')" background="blue" text-color="white">蓝色</an-button>
    <an-button type="primary" @click="changeColor('purple')" background="purple" text-color="white">紫色</an-button>
  </an-space>

  <AnModal v-model="showModal.isShow" :header-color="showModal.color">
    <template #header>
      自定义标题
    </template>
    <template #close-icon>
      <an-icon name="close" @click="showModal.isShow = false"/>
    </template>
    <template #body>
      这是自定义的内容。
    </template>
    <template #footer>
      <an-button type="primary" :background="showModal.color" @click="showModal.isShow = false">确定</an-button>
    </template>
  </AnModal>
</template>

<script setup>
import { ref } from 'vue'

const showModal = ref({
  isShow: false,
  color: 'red' // 初始颜色
})

// 改变颜色的方法
function changeColor(color) {
  showModal.value.isShow = true; // 显示模态框
  showModal.value.color = color; // 设置新的颜色
}
<\/script>
`;export{o as default};
