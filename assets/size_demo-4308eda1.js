const r=`<template>\r
  <p>\r
    <an-input v-model="val" placeholder="小" size="small"/>\r
  </p>\r
  <p>\r
    <an-input v-model="val" placeholder="中" size="medium"/>\r
  </p>\r
  <p>\r
    <an-input v-model="val" placeholder="大" size="large"/>\r
  </p>\r
  <p>\r
    <an-input v-model="val" placeholder="大大" size="large-max"/>\r
  </p>\r
</template>\r
\r
<script setup>\r
import {ref} from 'vue'\r
\r
const val = ref('')\r
<\/script>\r
`;export{r as default};
