const n=`<template>\r
  <p>\r
    <an-radio :options="options" filed-label="name" filedValue="id" :radio-index="radioIndex" inline/>\r
  </p>\r
  <p>\r
    <an-radio :options="options" filed-label="name" filedValue="id" :radio-index="radioIndex"/>\r
  </p>\r
</template>\r
\r
<script setup>\r
import {ref, reactive} from 'vue'\r
\r
const state = reactive({\r
  options: [\r
    {\r
      name: '第一',\r
      id: '1'\r
    },\r
    {\r
      name: '第二',\r
      id: '2'\r
    },\r
    {\r
      name: '第三',\r
      id: '3'\r
    }\r
  ]\r
})\r
\r
const {options} = state\r
\r
const radioIndex = ref(0)\r
<\/script>\r
`;export{n as default};
