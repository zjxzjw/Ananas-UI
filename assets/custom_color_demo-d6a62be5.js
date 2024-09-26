const o=`<template>\r
  <an-space>\r
    <an-button type="primary" @click="changeColor('red')" background="red" text-color="white">红色</an-button>\r
    <an-button type="primary" @click="changeColor('orange')" background="orange" text-color="white">橙色</an-button>\r
    <an-button type="primary" @click="changeColor('yellow')" background="yellow" text-color="white">黄色</an-button>\r
    <an-button type="primary" @click="changeColor('green')" background="green" text-color="white">绿色</an-button>\r
    <an-button type="primary" @click="changeColor('cyan')" background="cyan" text-color="white">青色</an-button>\r
    <an-button type="primary" @click="changeColor('blue')" background="blue" text-color="white">蓝色</an-button>\r
    <an-button type="primary" @click="changeColor('purple')" background="purple" text-color="white">紫色</an-button>\r
  </an-space>\r
\r
  <AnModal v-model="showModal.isShow" :header-color="showModal.color">\r
    <template #header>\r
      自定义标题\r
    </template>\r
    <template #close-icon>\r
      <an-icon name="close" @click="showModal.isShow = false"/>\r
    </template>\r
    <template #body>\r
      这是自定义的内容。\r
    </template>\r
    <template #footer>\r
      <an-button type="primary" :background="showModal.color" @click="showModal.isShow = false">确定</an-button>\r
    </template>\r
  </AnModal>\r
</template>\r
\r
<script setup>\r
import { ref } from 'vue'\r
\r
const showModal = ref({\r
  isShow: false,\r
  color: 'red' // 初始颜色\r
})\r
\r
// 改变颜色的方法\r
function changeColor(color) {\r
  showModal.value.isShow = true; // 显示模态框\r
  showModal.value.color = color; // 设置新的颜色\r
}\r
<\/script>\r
`;export{o as default};
