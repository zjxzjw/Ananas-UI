<template>
  <div :class="anCardClass">
    <div class="an-card-header">
      <slot name="header"></slot>
    </div>
    <div class="an-card-body">
      <slot name="body"></slot>
    </div>
    <div class="an-card-footer">
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
    default: '100'
  },
  height: {
    type: String,
    default: '100%'
  },
  hoverable: {
    type: Boolean,
    default: false
  }
})

const anCardClass = computed(() => {
  return {
    'an-card': true,
    'an-card-hover-able': props.hoverable
  }
})
</script>

<style lang="scss" scoped>
.an-card {
  padding: 1rem;
  width: v-bind(width);
  height: v-bind(height);
  border-radius: 4px;
  font-size: 0.8rem;
  border: 1px solid #d9d9d9;
  cursor: pointer;

  @keyframes shadow {
    from {
      //box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.1);
    }
    to {
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
  }

  .an-card-header {
    height: 6vh;
    font-size: 1.2rem;
  }

  .an-card-body {
    color: #606270;
  }

  .an-card-footer {
    height: 6vh;
    line-height: 6vh;
  }
}

.an-card-hover-able {
  &:hover {
    border: 1px solid white;
    animation: shadow 0.8s forwards;
  }
}
</style>
