<template>
  <an-tree :options="treeOptions" />
</template>

<script setup>
const state = reactive({
  treeOptions: [
    {
      label: "帅",
      children: [
        {
          label: "气",
          children: [
            {
              label: "的我",
            },
          ],
        },
      ],
    },
    {
      label: "勤",
      children: [
        {
          label: "劳",
          children: [
            {
              label: "的我",
            },
          ],
        },
      ],
    },
    {
      label: "躺",
      children: [
        {
          label: "平",
          children: [
            {
              label: "的我",
            },
          ],
        },
      ],
    },
  ],
});

const { treeOptions } = state;
</script>
