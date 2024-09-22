const n=`<template>
  <an-tree :options="treeOptions" number-color="red" text-color="green" />
</template>

<script setup>
const state = reactive({
  treeOptions: [
    {
      label: "一级 1",
      children: [
        {
          label: "二级 1-1",
          children: [
            {
              label: "三级 1-1-1",
            },
          ],
        },
      ],
    },
    {
      label: "一级 1",
      children: [
        {
          label: "二级 1-1",
          children: [
            {
              label: "三级 1-1-1",
            },
          ],
        },
      ],
    },
    {
      label: "一级 1",
      children: [
        {
          label: "二级 1-1",
          children: [
            {
              label: "三级 1-1-1",
            },
          ],
        },
      ],
    },
  ],
});

const { treeOptions } = state;
<\/script>
`;export{n as default};
