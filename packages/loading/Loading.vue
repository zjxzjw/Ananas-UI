<script setup lang='ts'>
import { AnLoadingProps } from './types';

defineOptions({
  name: 'AnLoading'
})

withDefaults(defineProps<AnLoadingProps>(), {
  visible: true,
  iconName: 'spinner',
  message: '',
  fullScreen: false
})

</script>

<template>
  <teleport to="body" v-if="fullScreen">
    <transition
      name="an-loading-fade"
    >
      <div v-if="visible" class="an-loading-mask">
        <an-icon class="loading-icon" :name="iconName" color="white"></an-icon>
        <span>{{ message }}</span>
      </div>
    </transition>
    <slot></slot>
  </teleport>
  <div class="an-loading" v-else>
    <transition
      name="an-loading-fade"
    >
      <div v-if="visible" class="an-loading-mask">
        <an-icon class="loading-icon" :name="iconName" color="white"></an-icon>
        <span>{{ message }}</span>
      </div>
    </transition>
    <slot></slot>
  </div>
</template>

<style lang="scss">
.an-loading-fade-enter-active,
.an-loading-fade-leave-active {
  transition: opacity .4s;
  opacity: 1;
}
.an-loading-fade-enter-from,
.an-loading-fade-leave-to {
  opacity: 0;
}

.an-loading {
  position: relative;
  pointer-events: none;
  user-select: none;
}

.an-loading-mask {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 9998;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(144, 143, 143, 0.7);
  color: white;
}

.loading-icon {
  animation: spin 3s linear infinite;
}

/* 旋转的动画 */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}


</style>