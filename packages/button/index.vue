<template>
  <button :class="button_class" :style="button_style" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'AnButton'
}
</script>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'default',
  },
  round: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  secondary: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'default'
  },
  background: {
    type: String,
  },
  textColor: {
    type: String,
  },
  transform: {
    type: String,
    default: '',
  },
  width: {
    type: [String, Number],
    default: null,
  },
  height: {
    type: [String, Number],
    default: null,
  }
});

const button_class = computed(() => {
  return [
    'an-button',
    `an-button-${props.type}`,
    `an-button-size-${props.size}`,
    props.round ? 'an-button-round' : '',
    props.disabled ? 'an-button-disabled' : '',
    props.secondary ? `an-button-${props.type}-secondary` : '',
    props.background ? `an-button-background` : '',
    props.textColor ? `an-button-text-color` : ''
  ];
});

const button_style = computed(() => {
  const style = {};
  if (props.width) {
    style.width = typeof props.width === 'number' ? `${props.width}px` : props.width;
  }
  if (props.height) {
    style.height = typeof props.height === 'number' ? `${props.height}px` : props.height;
  }
  if (props.transform) {
    style.transform = props.transform;
  }
  return style;
});
</script>

<style scoped lang="scss">
/* 按钮 */
.an-button {
  // 移除了默认的宽度和高度，因为现在可以通过 props 自定义
  display: inline-block;
  border-radius: 0.3rem;
  padding: 0 4px;
  font-size: 0.75rem;
  line-height: 1;
  box-sizing: border-box;
  color: #2235468c;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    opacity: 0.7;
    transform: v-bind(transform);
  }
}

/* 默认 */
.an-button-default {
  border: 1px solid #d9d9d9;
  background-color: #fff;

  &:hover {
    color: #ffcf3f;
    border: 1px solid #ffcf3f;
  }
}

/* 主题 */
.an-button-primary {
  color: #fff;
  border: 1px solid #ffcf3f;
  background-color: #ffcf3f;
}

/* 成功 */
.an-button-success {
  color: #fff;
  border: 1px solid #66d476;
  background-color: #66d476;
}

/* 错误 */
.an-button-error {
  color: #fff;
  border: 1px solid #e94135;
  background-color: #e94034;
}

/* 信息 */
.an-button-info {
  color: #0000008c;
  border: 1px solid #bdbdbd;
  background-color: #f2f2f2;
}

.an-button-primary-secondary {
  color: #ffcf3f;
  border: 1px solid #ffcf3f;
  background-color: #ffcf3f1a;
}

.an-button-success-secondary {
  color: #66d476;
  border: 1px solid #66d476;
  background-color: rgb(102, 212, 118, 0.1);
}

.an-button-error-secondary {
  color: #e94135;
  border: 1px solid #e94135;
  background-color: rgb(233, 64, 52, 0.1);
}

.an-button-info-secondary {
  color: #0000008c;
  border: 1px solid #aaa9a9;
  background-color: #f2f2f21a;
}

/* 圆角 */
.an-button-round {
  border-radius: 20px;
}

/* 禁用 */
.an-button-disabled {
  cursor: no-drop;
  opacity: 0.6;

  &:hover,
  &:focus {
    cursor: no-drop;
    opacity: 0.6;
  }
}

.an-button-size-default {
  width: 5rem;
  height: 32px;
  font-size: 0.75rem;
}

.an-button-size-small {
  width: 4rem;
  height: 24px;
  font-size: 0.6rem;
}

.an-button-size-large {
  width: 6rem;
  height: 40px;
  font-size: 0.9rem;
}

/* 按钮背景颜色 */
.an-button-background {
  background-color: v-bind(background);
  border: 1px solid v-bind(background);

  &:hover {
    color: #2235468c;
    border: 1px solid v-bind(background);
  }
}

/* 按钮文字颜色 */
.an-button-text-color {
  color: v-bind(textColor);
  border: 1px solid v-bind(textColor);

  &:hover {
    color: v-bind(textColor);
    border: 1px solid v-bind(textColor);
  }
}
</style>
