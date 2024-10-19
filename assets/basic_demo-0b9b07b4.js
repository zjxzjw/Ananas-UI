const n=`<script setup lang='ts'>\r
import { ref } from 'vue'\r
\r
const visible = ref(false)\r
const visible2 = ref(false)\r
\r
const handleClick = () => {\r
  visible2.value = true\r
  setTimeout(() => {\r
    visible2.value = false\r
  }, 3000)\r
}\r
\r
<\/script>\r
\r
<template>\r
  <an-space>\r
    <AnButton @click="visible = true">显示</AnButton>\r
    <AnButton @click="visible = false">隐藏</AnButton>\r
  </an-space>\r
  <br>\r
  <br>\r
  <AnLoading :visible="visible" message="loading...">\r
    <AnCard>\r
      <template #header>卡片标题</template>\r
      <template #body>卡片内容</template>\r
      <template #footer>卡片底部</template>\r
    </AnCard>\r
  </AnLoading>\r
  <h3>全屏加载</h3>\r
  <AnButton @click="handleClick">全屏</AnButton>\r
  <AnLoading :visible="visible2" fullScreen></AnLoading>\r
</template>\r
\r
<style>\r
\r
</style>\r
`;export{n as default};
