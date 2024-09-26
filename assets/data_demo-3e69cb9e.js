const n=`<template>\r
  <an-select :options="options" :filed-label="filedLabel"/>\r
</template>\r
\r
<script setup>\r
import {ref, reactive} from 'vue'\r
\r
const filedLabel = ref('name')\r
\r
const state = reactive({\r
  options: [\r
    {\r
      name: '选项一',\r
      value: '1',\r
    },\r
    {\r
      name: '选项二',\r
      value: '2'\r
    },\r
    {\r
      name: '选项三',\r
      value: '3'\r
    }\r
  ]\r
})\r
\r
const {options} = state\r
<\/script>\r
`;export{n as default};
