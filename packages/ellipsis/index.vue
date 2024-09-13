<script>
export default {
  name: 'AnEllipsis',
  data() {
    return {
      fullText: "这是一段很长的文字，当文字过长时，可能会超出容器的宽度，这时候就需要使用文本省略功能来处理这个问题。这是一个演示文本省略的例子。",
      showFullText: false
    };
  },
  computed: {
    truncatedText() {
      return this.showFullText ? this.fullText : `${this.fullText.substring(0, 50)}...`;
    },
    shouldTruncate() {
      return !this.showFullText && this.fullText.length > 50;
    }
  },
  methods: {
    toggleText() {
      this.showFullText = !this.showFullText;
    }
  }
}
</script>

<template>
  <div class="container">
    <p v-if="showFullText" v-text="fullText"></p>
    <p v-else :class="{ truncated: shouldTruncate }" v-text="truncatedText"></p>
    <button @click="toggleText">切换文本</button>
  </div>
</template>

<style scoped>
.truncated {
  white-space: nowrap; /* 防止换行 */
  overflow: hidden; /* 隐藏超出的内容 */
  text-overflow: ellipsis; /* 显示省略号 */
}
</style>
