<template>
  <transition :name="transitionName">
    <div v-if="visible" class="modal-mask" @click.self="close">
      <div class="modal-wrapper">
        <div :style="{ width: modalWidth, height: modalHeight }" class="modal-container" @click.stop>
          <div class="modal-header" :style="{ color: headerColor }">
            <slot name="header">默认标题</slot>
            <div class="modal-close-icon" @click="close">
              <slot name="close-icon"></slot>
            </div>
          </div>

          <div class="modal-body" :style="{ color: bodyColor }">
            <slot name="body">默认内容</slot>
          </div>

          <div :class="['modal-footer', footerClass]">
            <slot name="footer">
              <button @click="close">关闭</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'AnModal',
}
</script>

<script setup>
import { ref, watch, computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  transitionName: {
    type: String,
    default: 'modal', // 默认的过渡名称
  },
  width: {
    type: [String, Number],
    default: '400px', // 默认宽度
  },
  height: {
    type: [String, Number],
    default: '400px', // 默认高度
  },
  footerAlign: {
    type: String,
    default: 'right', // 默认右对齐
    validator: (value) => ['left', 'center', 'right'].includes(value)
  },
  headerColor: {
    type: String,
    default: '#42b983', // 默认标题颜色
  },
  bodyColor: {
    type: String,
    default: '#333', // 默认内容颜色
  }
});

const emit = defineEmits(['update:modelValue']);

const visible = ref(props.modelValue);

// 监听 props 的变化并同步到内部状态
watch(() => props.modelValue, (newValue) => {
  visible.value = newValue;
}, { immediate: true });

// 当点击遮罩层时关闭模态框
function close() {
  emit('update:modelValue', false);
}

// 计算样式
const modalWidth = computed(() => props.width + (typeof props.width === 'number' ? 'px' : ''));
const modalHeight = computed(() => props.height + (typeof props.height === 'number' ? 'px' : ''));

// 计算 footer 类名
const footerClass = computed(() => `footer-align-${props.footerAlign}`);
</script>

<style scoped lang="scss">
.modal-mask, .fade-modal-mask, .slide-modal-mask, .zoom-modal-mask, .slide-left-modal-mask, .slide-right-modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper, .fade-modal-wrapper, .slide-modal-wrapper, .zoom-modal-wrapper, .slide-left-modal-wrapper, .slide-right-modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container, .fade-modal-container, .slide-modal-container, .zoom-modal-container, .slide-left-modal-container, .slide-right-modal-container {
  margin: 0 auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 0.3em;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%; // 确保容器的高度是100%
}

/* 淡入淡出效果 */
.fade-modal-enter-active, .fade-modal-leave-active {
  transition: opacity .3s;
}
.fade-modal-enter-from, .fade-modal-leave-to /* .fade-modal-leave-active in <2.1.8 */ {
  opacity: 0;
}

/* 滑动效果 - 上下 */
.slide-modal-enter-active, .slide-modal-leave-active {
  transition: transform .3s;
}
.slide-modal-enter, .slide-modal-leave-to /* .slide-modal-leave-active in <2.1.8 */ {
  transform: translateY(-100%);
}

/* 滑动效果 - 左右 */
.slide-left-modal-enter-active, .slide-left-modal-leave-active {
  transition: transform .3s;
}
.slide-left-modal-enter, .slide-left-modal-leave-to /* .slide-left-modal-leave-active in <2.1.8 */ {
  transform: translateX(-100%);
}

.slide-right-modal-enter-active, .slide-right-modal-leave-active {
  transition: transform .3s;
}
.slide-right-modal-enter, .slide-right-modal-leave-to /* .slide-right-modal-leave-active in <2.1.8 */ {
  transform: translateX(100%);
}

/* 放大缩小效果 */
.zoom-modal-enter-active, .zoom-modal-leave-active {
  transition: all .3s;
}
.zoom-modal-enter, .zoom-modal-leave-to /* .zoom-modal-leave-active in <2.1.8 */ {
  opacity: 0;
  transform: scale(0.5);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  & h3, .fade-modal-header h3, .slide-modal-header h3, .zoom-modal-header h3, .slide-left-modal-header h3, .slide-right-modal-header h3 {
    margin-top: 0;
    color: inherit; // 使用继承的颜色
  }

  .modal-close-icon {
    cursor: pointer;
  }
}

.modal-body, .fade-modal-body, .slide-modal-body, .zoom-modal-body, .slide-left-modal-body, .slide-right-modal-body {
  flex: 1; // 使内容区域占据剩余空间
  margin: 20px 0 0 0; // 顶部间距
  overflow-y: auto; // 如果内容过多，允许滚动
  color: inherit; // 使用继承的颜色
}

.modal-footer, .fade-modal-footer, .slide-modal-footer, .zoom-modal-footer, .slide-left-modal-footer, .slide-right-modal-footer {
  margin-top: auto; // 将 footer 推到最底部
  &.footer-align-left {
    text-align: left;
  }

  &.footer-align-center {
    text-align: center;
  }

  &.footer-align-right {
    text-align: right;
  }
}
</style>
