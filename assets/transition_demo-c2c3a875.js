const n=`<template>\r
  <!-- 选择不同动画效果的按钮 -->\r
  <an-space>\r
    <an-button type="success" @click="showModal = true">点我</an-button>\r
    <p>切换：</p>\r
    <an-button type="default" @click="setTransition('modal')">Modal</an-button>\r
    <an-button type="default" @click="setTransition('fade-modal')">Fade</an-button>\r
    <an-button type="default" @click="setTransition('slide-modal')">Slide</an-button>\r
    <an-button type="default" @click="setTransition('slide-left-modal')">Slide Left</an-button>\r
    <an-button type="default" @click="setTransition('slide-right-modal')">Slide Right</an-button>\r
    <an-button type="default" @click="setTransition('zoom-modal')">Zoom</an-button>\r
  </an-space>\r
\r
  <AnModal v-model="showModal" :transition-name="transitionName">\r
    <template #header>\r
      自定义标题\r
    </template>\r
    <template #close-icon>\r
      <an-icon name="close" @click="showModal = false"/>\r
    </template>\r
    <template #body>\r
      这是自定义的内容。\r
    </template>\r
    <template #footer>\r
      <an-button type="primary" @click="showModal = false">确定</an-button>\r
    </template>\r
  </AnModal>\r
</template>\r
\r
<script setup>\r
import { ref } from 'vue'\r
\r
const showModal = ref(false)\r
const transitionName = ref('modal') // 默认使用 modal 动画\r
\r
// 设置过渡效果的方法\r
function setTransition(name) {\r
  transitionName.value = name\r
}\r
<\/script>\r
`;export{n as default};
