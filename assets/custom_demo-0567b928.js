const t=`<template>
  <an-breadcrumb :data="data" text-background-color="#FFCF3F19" text-color="#ffcf3f" text-border-radius="5px" text-border-color="#ffcf3f"/>
</template>

<script setup>
const data = [
  {
    text: '以父之名',
    path: '/ananas'
  },
  {
    text: '夜曲',
    path: '/ananas'
  },
  {
    text: '夜的第七章',
    path: '/ananas'
  }
]
<\/script>
`;export{t as default};
