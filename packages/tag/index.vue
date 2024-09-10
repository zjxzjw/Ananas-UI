<template>
  <div :class="anTagClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AnTag",
};
</script>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
  secondary: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "default",
  },
  color: {
    type: String,
    default: "",
  },
  backgroundColor: {
    type: String,
    default: "",
  },
  round: {
    type: Boolean,
    default: false,
  },
  scale: {
    type: Boolean,
    default: false,
  },
});

const anTagClass = computed(() => {
  return {
    "an-tag": true,
    [`an-tag-${props.type}`]: props.type,
    [`an-tag-${props.type}-secondary`]: props.secondary,
    [`an-tag-scale`]: props.scale,
    [`an-tag-${props.size}`]: props.size,
    "an-tag-round": props.round,
    "an-tag-color": props.color,
    "an-tag-backgroundColor": props.backgroundColor,
  };
});
</script>

<style lang="scss" scoped>
.an-tag {
  display: inline-block;
  padding: 0 10px;
  border-radius: 4px;
  line-height: 1.5;
  font-size: 12px;
  color: #0000008c;
  //margin: 0.2rem;
  border: 1px solid #aaa9a9;
  background-color: #f2f2f21a;
  cursor: pointer;

  &-primary {
    color: #fff;
    background-color: #ffcf3f;
    border: 1px solid #ffcf3f;
  }

  &-success {
    color: #fff;
    background-color: #66d476;
    border: 1px solid #66d476;
  }

  &-error {
    color: #fff;
    background-color: #e94135;
    border: 1px solid #e94135;
  }

  &-info {
    color: #0000008c;
    border: 1px solid #f2f2f2;
    background-color: #f2f2f2;
  }

  &-primary-secondary {
    color: #ffcf3f;
    background-color: #ffcf3f1a;
    border: 1px solid #ffcf3f;
  }

  &-success-secondary {
    color: #66d476;
    background-color: #66d4761a;
    border: 1px solid #66d476;
  }

  &-error-secondary {
    color: #e94135;
    background-color: #e941351a;
    border: 1px solid #e94135;
  }

  &-info-secondary {
    color: #a6a0a0;
    background-color: #f2f2f21a;
    border: 1px solid #7c7a7a;
  }

  &-min {
    padding: 0 3px;
    font-size: 8px;
  }

  &-small {
    padding: 0 5px;
    font-size: 10px;
  }

  &-large {
    padding: 0 15px;
    font-size: 14px;
  }

  &-max {
    padding: 5px 20px;
    font-size: 16px;
  }

  &-color {
    color: v-bind(color);
  }

  &-backgroundColor {
    border: 1px solid v-bind(backgroundColor);
    background-color: v-bind(backgroundColor);
  }

  &-scale:hover {
    animation: scale 0.6s normal;
  }
}

@keyframes scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.an-tag-round {
  border-radius: 20px;
}
</style>
