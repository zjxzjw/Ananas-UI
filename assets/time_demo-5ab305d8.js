const n=`<template>\r
  <an-space>\r
    <an-button @click="one">1s</an-button>\r
    <an-button type="primary" @click="two">2s</an-button>\r
    <an-button type="success" @click="three">3s</an-button>\r
    <an-button type="error" @click="four">4s</an-button>\r
    <an-button type="info" @click="five">5s</an-button>\r
  </an-space>\r
</template>\r
\r
<script setup>\r
import AnMessage from '../../../packages/message/index.js'\r
\r
const one = () => {\r
  AnMessage({\r
    message: '这是一条消息提示',\r
    duration: 1000\r
  })\r
}\r
\r
const two = () => {\r
  AnMessage({\r
    message: '这是一条消息提示',\r
    type: 'primary',\r
    duration: 2000\r
  })\r
}\r
\r
const three = () => {\r
  AnMessage({\r
    message: '这是一条消息提示',\r
    type: 'success',\r
    duration: 3000\r
  })\r
}\r
\r
const four = () => {\r
  AnMessage({\r
    message: '这是一条消息提示',\r
    type: 'error',\r
    duration: 4000\r
  })\r
}\r
\r
const five = () => {\r
  AnMessage({\r
    message: '这是一条消息提示',\r
    type: 'info',\r
    duration: 5000\r
  })\r
}\r
<\/script>\r
`;export{n as default};
