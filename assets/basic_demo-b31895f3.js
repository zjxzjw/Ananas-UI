const e=`<template>\r
    <an-checkbox v-model="selectedHobbies" :options="hobbies" />\r
    <p>您选择的兴趣爱好有: {{ selectedHobbies }}</p>\r
</template>\r
\r
<script setup>\r
import { ref } from 'vue'\r
\r
const selectedHobbies = ref()\r
\r
const hobbies = [\r
  { label: '唱', value: 'sing' },\r
  { label: '跳', value: 'dance' },\r
  { label: 'Rap', value: 'rap' },\r
  { label: '篮球', value: 'basketball' },\r
  { label: 'Music', value: 'music' }\r
]\r
<\/script>\r
`;export{e as default};
