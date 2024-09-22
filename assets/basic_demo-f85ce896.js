const n=`<template>\r
  <an-space>\r
    <an-button @click="onDefault" secondary>Default</an-button>\r
    <an-button type="primary" @click="onPrimary">Primary</an-button>\r
    <an-button type="success" @click="onSuccess">Success</an-button>\r
    <an-button type="error" @click="onError">Error</an-button>\r
    <an-button type="info" @click="onInfo">Info</an-button>\r
  </an-space>\r
</template>\r
\r
<script setup>\r
import AnMessage from '../../../packages/message/index.js'\r
\r
const onDefault = () => {\r
  AnMessage({\r
    message: '这是一条消息提示'\r
  })\r
}\r
\r
const onPrimary = () => {\r
  AnMessage({\r
    message: '这是一条消息提示',\r
    type: 'primary'\r
  })\r
}\r
\r
const onSuccess = () => {\r
  AnMessage({\r
    message: '这是一条消息提示',\r
    type: 'success'\r
  })\r
}\r
\r
const onError = () => {\r
  AnMessage({\r
    message: '这是一条消息提示',\r
    type: 'error'\r
  })\r
}\r
\r
const onInfo = () => {\r
  AnMessage({\r
    message: '这是一条消息提示',\r
    type: 'info'\r
  })\r
}\r
<\/script>\r
`;export{n as default};
