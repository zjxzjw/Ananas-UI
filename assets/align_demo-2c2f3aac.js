const n=`<template>\r
  <!-- 切换对齐方式的按钮 -->\r
  <an-space>\r
    <an-button type="success" @click="showModal = true">点我</an-button>\r
    <p>切换：</p>\r
    <an-button type="primary" @click="footerAlign = 'left'">左对齐</an-button>\r
    <an-button type="primary" @click="footerAlign = 'center'">居中对齐</an-button>\r
    <an-button type="primary" @click="footerAlign = 'right'">右对齐</an-button>\r
  </an-space>\r
\r
  <AnModal v-model="showModal" :footer-align="footerAlign">\r
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
const footerAlign = ref('center') // 默认居中对齐\r
<\/script>\r
`;export{n as default};
