<template>
  <div class="container">
    <p v-if="showFullText" v-text="fullText"></p>
    <p v-else :class="{ truncated: shouldTruncate }" v-text="truncatedText"></p>
  </div>
</template>

<script>
export default {
  name: 'AnEllipsis'
}
</script>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  fullText: {
    type: String,
    default: ""
  },
  showFullText: {
    type: Boolean,
    default: false
  },
  maxLength: {
    type: Number,
    default: 30
  }
});

// 计算属性
const truncatedText = computed(() =>
    props.showFullText ? props.fullText : `${props.fullText.substring(0, props.maxLength)}...`
);

const shouldTruncate = computed(() =>
    !props.showFullText && props.fullText.length > props.maxLength
);
</script>

<style scoped>
.truncated {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
