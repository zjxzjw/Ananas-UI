const n=`<template>\r
  <an-space>\r
    <an-button @click="hClick1" secondary>隐藏按钮</an-button>\r
    <an-button @click="hClick2" secondary>显示按钮</an-button>\r
  </an-space>\r
</template>\r
\r
<script setup>\r
import { AnNotification } from 'ananas-ui'\r
\r
const hClick1 = () => {\r
  AnNotification({\r
    message: '隐藏关闭按钮',\r
    title: '关闭按钮',\r
    hideClose: true,\r
    duration: 5000,\r
  })\r
}\r
const hClick2 = () => {\r
  AnNotification({\r
    message: '默认显示关闭按钮',\r
    title: '关闭按钮',\r
    duration: 0,\r
  })\r
}\r
<\/script>\r
`;export{n as default};
