<template>
  <div :class="anCardClass" :style="cardStyle" @click="handleClick">
    <div class="an-card-header" :style="headerStyle">
      <slot name="header"></slot>
    </div>
    <div class="an-card-body" :style="bodyStyle">
      <slot name="body"></slot>
    </div>
    <div class="an-card-footer" :style="footerStyle">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnCard"
}
</script>

<script setup>
import {computed} from 'vue';

const props = defineProps({
  width: {
    type: String,
    default: 'auto'
  },
  height: {
    type: String,
    default: 'auto'
  },
  hoverAble: {
    type: Boolean,
    default: false
  },
  borderColor: {
    type: String,
    default: '#d9d9d9'
  },
  backgroundColor: {
    type: String,
    default: 'white'
  },
  borderRadius: {
    type: [String, Number],
    default: '4px'
  },
  boxShadow: {
    type: String,
    default: ''
  },
  hoverBoxShadow: {
    type: String,
    default: '0 2px 12px 0 rgba(0, 0, 0, 0.1)'
  },
  headerHeight: {
    type: [String, Number],
    default: '6vh'
  },
  footerHeight: {
    type: [String, Number],
    default: '6vh'
  }
});

const emit = defineEmits(['click']);

const anCardClass = computed(() => {
  return {
    'an-card': true,
    'an-card-hover-able': props.hoverAble
  };
});

const cardStyle = computed(() => ({
  width: props.width,
  height: props.height,
  border: `1px solid ${props.borderColor}`,
  backgroundColor: props.backgroundColor,
  borderRadius: props.borderRadius,
  boxShadow: props.boxShadow
}));

const headerStyle = computed(() => ({
  height: props.headerHeight,
  fontSize: '1.2rem'
}));

const bodyStyle = computed(() => ({
  color: '#606270'
}));

const footerStyle = computed(() => ({
  height: props.footerHeight,
  lineHeight: props.footerHeight
}));

function handleClick(event) {
  emit('click', event);
}
</script>

<style lang="scss" scoped>
.an-card {
  padding: 1rem;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;

  .an-card-header {
    display: flex;
    align-items: center;
  }

  .an-card-body {
    margin: 1rem 0;
  }

  .an-card-footer {
    text-align: left;
  }
}

.an-card-hover-able:hover {
  border-color: white;
  box-shadow: v-bind(hoverBoxShadow);
}
</style>
