const n=`<template>
   <an-space>
     <an-button type="primary" @click="showModal = true">点我</an-button>
     <p>切换：</p>
     <an-button type="default" @click="setDimensions('400px', '400px')">px</an-button>
     <an-button type="default" @click="setDimensions('50vw', '50vh')">vw / vh</an-button>
     <an-button type="default" @click="setDimensions('30rem', '20rem')">rem</an-button>
     <an-button type="default" @click="setDimensions('80%', '70%')">%</an-button>
   </an-space>

    <AnModal v-model="showModal" :width="modalWidth" :height="modalHeight">
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
import { ref } from 'vue';
import AnSpace from "@packages/space/index.vue";

const showModal = ref(false);
const modalWidth = ref('400px');
const modalHeight = ref('400px');

function setDimensions(width, height) {
  modalWidth.value = width;
  modalHeight.value = height;
}
<\/script>
`;export{n as default};
