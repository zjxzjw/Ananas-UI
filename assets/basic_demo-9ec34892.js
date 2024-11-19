const n=`<template>\r
  <an-space>\r
    <an-button @click="hClick1" secondary>自动关闭</an-button>\r
    <an-button @click="hClick2" secondary>手动关闭</an-button>\r
  </an-space>\r
</template>\r
\r
<script setup>\r
import {AnNotification} from 'ananas-ui'\r
\r
const hClick1 = () => {\r
  AnNotification({\r
    message: '自动关闭',\r
    title: '基础用法'\r
  })\r
}\r
const hClick2 = () => {\r
  AnNotification({\r
    message: '需要手动关闭',\r
    title: '基础用法',\r
    duration: 0,\r
  })\r
}\r
<\/script>\r
`;export{n as default};
