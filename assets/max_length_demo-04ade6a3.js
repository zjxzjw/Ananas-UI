const e=`<template>\r
  <an-textarea placeholder="只能输入50个" v-model="textareaValue" :max-length="maxlength"/>\r
</template>\r
\r
<script setup>\r
import {ref} from 'vue'\r
\r
const textareaValue = ref('')\r
\r
const maxlength = ref(50)\r
<\/script>\r
`;export{e as default};
