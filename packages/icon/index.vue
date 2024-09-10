<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
import "../assets/iconfont.js"
import { computed } from 'vue'

export default {
  name: "AnIcon"
}
</script>

<script setup>
const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: '2rem'
  }
});

const iconName = computed(() => {
  return `#icon-${props.name}`;
});
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  cursor: pointer;
  font-size: v-bind(size);
}
</style>
