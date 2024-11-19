const n=`<template>\r
  <div>\r
    <an-number-animation :num="num" :size="size" :duration="duration" />\r
  </div>\r
  <an-space :inline="true">\r
    <an-button type="primary" @click="increaseNum">num + 10000</an-button>\r
    <an-button type="primary" @click="reduceNum">num - 10000</an-button>\r
    <an-button type="primary" @click="increaseSize">size + 10px</an-button>\r
    <an-button type="primary" @click="reduceSize">size - 10px</an-button>\r
    <an-button type="primary" @click="increaseDuration">duration + 1</an-button>\r
    <an-button type="primary" @click="reduceDuration">duration - 1</an-button>\r
  </an-space>\r
</template>\r
<script setup lang="ts">\r
const num: Ref<number> = ref(12133)\r
const size: Ref<number | string> = ref(24)\r
const duration: Ref<number> = ref(1)\r
\r
const increaseNum = () => {\r
  num.value += 10000\r
}\r
\r
const reduceNum = () => {\r
  num.value -= 10000\r
}\r
\r
const increaseSize = () => {\r
  (size.value as number) += 10\r
}\r
\r
const reduceSize = () => {\r
  if((size.value as number) <= 10) {\r
    return\r
  }\r
  (size.value as number) -= 10\r
}\r
\r
const increaseDuration = () => {\r
  duration.value ++\r
}\r
\r
const reduceDuration = () => {\r
  if(duration.value <= 0) {\r
    return\r
  }\r
  duration.value --\r
}\r
<\/script>\r
`;export{n as default};
