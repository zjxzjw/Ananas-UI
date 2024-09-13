<template>
  <div class="typewriter">
    <span ref="text" v-text="currentText"></span>
  </div>
</template>

<script>
export default {
  props: {
    texts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentText: '',
      currentIndex: 0,
      typingIndex: 0,
      typingInterval: null,
      delay: 100, // 每个字符之间的延迟（毫秒）
      pauseDuration: 2000 // 文本完全显示后暂停的时间（毫秒）
    };
  },
  watch: {
    texts: {
      immediate: true,
      handler(newVal) {
        this.resetTyping();
      }
    }
  },
  methods: {
    resetTyping() {
      clearInterval(this.typingInterval);
      this.currentText = '';
      this.currentIndex = 0;
      this.typingIndex = 0;
      this.startTyping();
    },
    startTyping() {
      const text = this.texts[this.currentIndex];
      let i = 0;
      this.typingInterval = setInterval(() => {
        if (i < text.length) {
          this.currentText = text.slice(0, i + 1); // 修正为 i + 1
          i++;
        } else {
          clearInterval(this.typingInterval);
          // 完整文本显示后，暂停一段时间再切换到下一个文本
          setTimeout(() => {
            this.currentIndex = (this.currentIndex + 1) % this.texts.length;
            this.typingIndex = 0;
            this.startTyping();
          }, this.pauseDuration);
        }
      }, this.delay);
    }
  }
}
</script>

<style scoped>
.typewriter {
  /* 可以添加一些样式 */
}
</style>
