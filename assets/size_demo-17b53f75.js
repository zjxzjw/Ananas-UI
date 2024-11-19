const r=`<template>\r
  <an-textarea placeholder="你的崩溃在窗外零碎。" v-model="textareaValue" :cols="cols" :rows="rows"/>\r
</template>\r
\r
<script setup>\r
import {ref} from 'vue'\r
\r
const textareaValue = ref('')\r
\r
const cols = ref(30)\r
\r
const rows = ref(2)\r
<\/script>\r
`;export{r as default};
