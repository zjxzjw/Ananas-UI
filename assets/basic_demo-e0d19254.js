const n=`<template>\r
  <an-radio :options="options" filed-label="name" filed-value="id" :radio-index="radioIndex" inline/>\r
</template>\r
\r
<script setup>\r
import {ref, reactive} from 'vue'\r
\r
const state = reactive({\r
  options: [\r
    {\r
      name: '搁浅',\r
      id: '1'\r
    },\r
    {\r
      name: '退后',\r
      id: '2'\r
    },\r
    {\r
      name: '枫',\r
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
