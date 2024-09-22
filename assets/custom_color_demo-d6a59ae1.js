const e=`<template>\r
  <an-checkbox v-model="selectedHobbies" :options="hobbies" custom-color="#66d476"/>\r
  <p>您选择的兴趣爱好有: {{ selectedHobbies }}</p>\r
</template>\r
\r
<script setup>\r
import { ref } from 'vue'\r
\r
const selectedHobbies = ref()\r
\r
const hobbies = [\r
  { label: '阅读', value: 'reading' },\r
  { label: '音乐', value: 'music' },\r
  { label: '旅行', value: 'traveling' },\r
  { label: '摄影', value: 'photography' }\r
]\r
<\/script>\r
`;export{e as default};
