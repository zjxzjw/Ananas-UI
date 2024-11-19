const e=`<template>\r
  <an-button type="primary" @click="showModal = true">点我</an-button>\r
  <AnModal v-model="showModal">\r
    <template #header>\r
      自定义标题\r
    </template>\r
    <template #close-icon>\r
      <an-icon name="close" @click="showModal = false" size="1.5em"/>\r
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
import {ref} from 'vue'\r
\r
const showModal = ref(false)\r
<\/script>\r
\r
`;export{e as default};
