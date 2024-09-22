const n=`<template>
  <an-radio
    :options="options"
    filed-label="name"
    filed-value="id"
    :radio-index="radioIndex"
    inline
    customColor="#66d476"
  />
</template>

<script setup>
const state = reactive({
  options: [
    {
      name: "选项一",
      id: "1",
    },
    {
      name: "选项二",
      id: "2",
    },
    {
      name: "选项三",
      id: "3",
    },
  ],
});

const { options } = state;

const radioIndex = ref(0);
<\/script>
`;export{n as default};
