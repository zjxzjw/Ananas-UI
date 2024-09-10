<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  message: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: ''
  },
  duration: {
    type: Number,
    default: 1500
  },
  secondary: {
    type: Boolean,
    default: false
  },
  top: {
    type: [Number, String],
    default: 16 // 默认值
  }
});

const show = ref(false);

const anMessageClass = computed(() => ({
  'an-message': true,
  [`an-message-${props.type}`]: true,
  [`an-message-secondary-${props.type}`]: props.secondary
}));

// 计算样式对象
const computedStyle = computed(() => ({
  top: `${props.top}px`
}));

onMounted(() => {
  show.value = true;
  // 开始计时器，等待一段时间后隐藏消息
  const timeoutId = setTimeout(() => {
    show.value = false;
  }, props.duration);

  // 将计时器保存在一个可访问的地方以便取消
  const clearTimer = () => clearTimeout(timeoutId);
  onUnmounted(clearTimer);
});
</script>

<template>
  <Transition name="bounce">
    <div :class="anMessageClass" v-show="show" :style="computedStyle">
      <div class="an-message-content">{{ message }}</div>
    </div>
  </Transition>
</template>


<style lang="scss" scoped>
.an-message {
  position: absolute;
  top: 1rem;
  left: calc(50% - 6.25rem);
  z-index: 99;
  padding: 8px 24px;
  border-radius: 4px;
  box-sizing: border-box;
  width: 15rem;
  height: 5vh;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  .an-message-content {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
  }

  &-primary {
    color: #ffcf3f;
  }

  &-success {
    color: #66d476;
  }

  &-error {
    color: #f56c6c;
  }

  &-info {
    color: #909399;
  }

  &-secondary-primary {
    color: #ffcf3f;
    border: 1px solid #ffcf3f;
    background-color: #ffcf3f1a;
    box-shadow: 0 0 0 0;
  }

  &-secondary-success {
    color: #66d476;
    border: 1px solid #66d476;
    background-color: rgb(102, 212, 118, 0.1);
    box-shadow: 0 0 0 0;
  }

  &-secondary-error {
    color: #e94135;
    border: 1px solid #e94135;
    background-color: rgb(233, 64, 52, 0.1);
    box-shadow: 0 0 0 0;
  }

  &-secondary-info {
    color: #0000008c;
    border: 1px solid #aaa9a9;
    background-color: #f2f2f21a;
  }
}

.bounce-enter-active,
.bounce-leave-active {
  transition: all 0.3s ease;
}

.bounce-enter-from,
.bounce-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.15);
  }

  100% {
    transform: scale(1);
  }
}
</style>
