const n=`<template>\r
  <an-space>\r
    <an-button @click="hClick1" type="success">success</an-button>\r
    <an-button @click="hClick2" type="info">info</an-button>\r
    <an-button @click="hClick3" type="primary">warning</an-button>\r
    <an-button @click="hClick4" type="error">error</an-button>\r
  </an-space>\r
</template>\r
\r
<script setup>\r
import {AnNotification} from 'ananas-ui'\r
\r
const hClick1 = () => {\r
  AnNotification({\r
    message: 'success',\r
    title: 'success',\r
    type: "success",\r
    duration: 5000,\r
  })\r
}\r
const hClick2 = () => {\r
  AnNotification({\r
    message: 'info',\r
    title: 'info',\r
    type: "info",\r
    duration: 0,\r
  })\r
}\r
const hClick3 = () => {\r
  AnNotification({\r
    message: 'warning',\r
    title: 'warning',\r
    type: "warning",\r
    duration: 0,\r
  })\r
}\r
const hClick4 = () => {\r
  AnNotification({\r
    message: 'This is an error message',\r
    title: 'error',\r
    type: "error",\r
    duration: 5000,\r
  })\r
}\r
<\/script>\r
`;export{n as default};
