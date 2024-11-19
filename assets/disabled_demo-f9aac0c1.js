const n=`<template>\r
  <an-radio :options="options" filed-label="name" filed-value="id" inline/>\r
</template>\r
\r
<script setup>\r
import {reactive} from 'vue'\r
\r
const state = reactive({\r
  options: [\r
    {\r
      name: '园游会',\r
      id: '1',\r
      disabled: true\r
    },\r
    {\r
      name: '甜甜的',\r
      id: '2'\r
    },\r
    {\r
      name: '简单爱',\r
      id: '3'\r
    }\r
  ]\r
})\r
\r
const {options} = state\r
<\/script>\r
`;export{n as default};
