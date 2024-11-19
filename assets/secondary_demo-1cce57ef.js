const n=`<template>\r
  <an-space>\r
    <an-button @click="onDefault" secondary>Default</an-button>\r
    <an-button type="primary" @click="onPrimary" secondary>Primary</an-button>\r
    <an-button type="success" @click="onSuccess" secondary>Success</an-button>\r
    <an-button type="error" @click="onError" secondary>Error</an-button>\r
    <an-button type="info" @click="onInfo" secondary>Info</an-button>\r
  </an-space>\r
</template>\r
\r
<script setup>\r
import {AnMessage} from 'ananas-ui'\r
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
    type: 'primary',\r
    secondary: true\r
  })\r
}\r
\r
const onSuccess = () => {\r
  AnMessage({\r
    message: '这是一条消息提示',\r
    type: 'success',\r
    secondary: true\r
  })\r
}\r
\r
const onError = () => {\r
  AnMessage({\r
    message: '这是一条消息提示',\r
    type: 'error',\r
    secondary: true\r
  })\r
}\r
\r
const onInfo = () => {\r
  AnMessage({\r
    message: '这是一条消息提示',\r
    type: 'info',\r
    secondary: true\r
  })\r
}\r
<\/script>\r
`;export{n as default};
