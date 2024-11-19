const t=`<template>\r
  <an-space>\r
    <an-button @click="hClick1" secondary>top-right</an-button>\r
    <an-button @click="hClick2" secondary>top-left</an-button>\r
    <an-button @click="hClick3" secondary>bottom-right</an-button>\r
    <an-button @click="hClick4" secondary>bottom-left</an-button>\r
  </an-space>\r
</template>\r
\r
<script setup>\r
import { AnNotification } from 'ananas-ui'\r
\r
const hClick1 = () => {\r
  AnNotification({\r
    message: 'top-right',\r
    title: 'top-right',\r
    position: 'top-right',\r
  })\r
}\r
const hClick2 = () => {\r
  AnNotification({\r
    message: 'top-left',\r
    title: 'top-left',\r
    position: 'top-left',\r
  })\r
}\r
const hClick3 = () => {\r
  AnNotification({\r
    message: 'bottom-right',\r
    title: 'bottom-right',\r
    position: 'bottom-right',\r
  })\r
}\r
const hClick4 = () => {\r
  AnNotification({\r
    message: 'bottom-left',\r
    title: 'bottom-left',\r
    position: 'bottom-left',\r
  })\r
}\r
<\/script>\r
`;export{t as default};
