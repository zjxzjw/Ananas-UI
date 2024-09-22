const n=`<template>\r
   <an-space>\r
     <an-button type="primary" @click="showModal = true">点我</an-button>\r
     <p>切换：</p>\r
     <an-button type="default" @click="setDimensions('400px', '400px')">px</an-button>\r
     <an-button type="default" @click="setDimensions('50vw', '50vh')">vw / vh</an-button>\r
     <an-button type="default" @click="setDimensions('30rem', '20rem')">rem</an-button>\r
     <an-button type="default" @click="setDimensions('80%', '70%')">%</an-button>\r
   </an-space>\r
\r
    <AnModal v-model="showModal" :width="modalWidth" :height="modalHeight">\r
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
import { ref } from 'vue';\r
import AnSpace from "@packages/space/index.vue";\r
\r
const showModal = ref(false);\r
const modalWidth = ref('400px');\r
const modalHeight = ref('400px');\r
\r
function setDimensions(width, height) {\r
  modalWidth.value = width;\r
  modalHeight.value = height;\r
}\r
<\/script>\r
`;export{n as default};
