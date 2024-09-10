<template>
  <an-table :data="data" />
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => [],
  },
});
</script>
