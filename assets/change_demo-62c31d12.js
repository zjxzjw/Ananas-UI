const n=`<template>\r
  <an-select :options="options" @change="change"/>\r
</template>\r
\r
<script setup>\r
import AnMessage from '../../../packages/message/index.js'\r
import {reactive} from 'vue'\r
\r
const state = reactive({\r
  options: [\r
    {\r
      label: '选项一',\r
      value: '1',\r
    },\r
    {\r
      label: '选项二',\r
      value: '2'\r
    },\r
    {\r
      label: '选项三',\r
      value: '3'\r
    }\r
  ]\r
})\r
\r
const {options} = state\r
\r
const change = (val) => {\r
  AnMessage({\r
    message: '这是一条消息提示',\r
    type: 'primary'\r
  })\r
}\r
<\/script>\r
`;export{n as default};
