const e=`<template>
    <an-checkbox v-model="selectedHobbies" :options="hobbies" />
    <p>您选择的兴趣爱好有: {{ selectedHobbies }}</p>
</template>

<script setup>
import { ref } from 'vue';

const selectedHobbies = ref();
const hobbies = [
  { label: '阅读', value: 'reading' },
  { label: '音乐', value: 'music' },
  { label: '旅行', value: 'traveling' },
  { label: '摄影', value: 'photography' }
];
<\/script>
`;export{e as default};
