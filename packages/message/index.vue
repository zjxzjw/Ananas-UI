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
  id: {
    type: String,
    required: true
  },
  onDestroy: {
    type: Function,
    required: true
  },
  gap: {
    type: Number,
    default: 20
  }
});

const gapString = computed(() => `${props.gap}px`);

const show = ref(false);

const anMessageClass = computed(() => ({
  'an-message': true,
  [`an-message-${props.type}`]: true,
  [`an-message-secondary-${props.type}`]: props.secondary
}));

let timeoutId = null;

onMounted(() => {
  show.value = true;
  // 开始计时器，等待一段时间后隐藏消息
  timeoutId = setTimeout(() => {
    show.value = false;
  }, props.duration);

});

// 将计时器保存在一个可访问的地方以便取消
const clearTimer = () => clearTimeout(timeoutId);
onUnmounted(clearTimer);

const handleEnter = (el) => {
  el.style.height = el.offsetHeight + 'px';
};
const handleAfterLeave = (el) => {
  props.onDestroy(props.id);
};

</script>

<template>
  <Transition
    name="bounce"
    @enter="handleEnter"
    @after-leave="handleAfterLeave"
    >
    <div :class="anMessageClass" v-show="show">
      <div class="an-message-content">{{ message }}</div>
    </div>
  </Transition>
</template>


<style lang="scss" scoped>
.an-message {
  padding: 8px 24px;
  border-radius: 4px;
  box-sizing: border-box;
  min-width: 20vw;
  text-align: center;
  margin-bottom: v-bind(gapString);
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
  transition: all .3s ease;
}

.bounce-enter-from,
.bounce-leave-to {
  opacity: 0;
  transform: translateY(-50%);
}
.bounce-leave-to {
  height: 0px!important;
  padding: 0px 24px;
  margin-top: v-bind("'-' + gapString");
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
