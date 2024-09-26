const n=`<template>\r
  <an-radio :options="options" filed-label="name" filed-value="id" inline :radio-index="radioIndex"/>\r
</template>\r
\r
<script setup>\r
import {ref, reactive} from 'vue'\r
\r
const state = reactive({\r
  options: [\r
    {\r
      name: '选项一',\r
      id: '1'\r
    },\r
    {\r
      name: '选项二',\r
      id: '2'\r
    },\r
    {\r
      name: '选项三',\r
      id: '3'\r
    }\r
  ]\r
})\r
\r
const {options} = state\r
\r
const radioIndex = ref(0)\r
<\/script>\r
\r
`;export{n as default};
