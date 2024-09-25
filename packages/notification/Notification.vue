<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import AnIcon from '../icon/index.vue'
import { ANotificationProps } from './types';
import { getLastOffsetBottom } from './methods';
import { watch } from 'vue';

const props = defineProps<ANotificationProps>();
const anNotificationRef = ref<HTMLElement | null>(null);
const boxHeight = ref(0);

const horizontal = computed(() => {
  return props.position?.endsWith("left") ? "left" : "right";
});
const vertical = computed(() => {
  return props.position?.startsWith("top") ? "top" : "bottom";
});

const cssComputed = computed(() => {
  return {
    [vertical.value]: topOffset.value + "px",
    [horizontal.value]: "50px"
  };
});

const adjustHeight = () => {
  if (!anNotificationRef.value) return;
  boxHeight.value = anNotificationRef.value.getBoundingClientRect().height;
};


const lastOffsetBottom = computed(() => getLastOffsetBottom(props.position!, props.id))
const topOffset = computed(() => lastOffsetBottom.value + props.offset)
const offsetBottom = computed(() => topOffset.value + boxHeight.value)

let timeId = 0
onMounted(() => {
  if(props.duration === 0) return
  timeId = window.setTimeout(() => {
    props.toggleVisible(false);
  }, props.duration);
})

onUnmounted(() => {
  clearTimeout(timeId);
})

watch(props.visible, (val) => {
  if(!val) {
    boxHeight.value = -props.offset!;
  }
})

const iconName = computed(() => {
  if(props.icon) {
    return props.icon
  }
  switch (props.type) {
    case "success":
      return "check-circle"
    case "warning":
      return "help-circle"
    case "info":
      return "information"
    case "error":
      return "close-circle"
    default:
      return ""
  }
});

const iconColor = computed(() => {
  switch (props.type) {
    case "success":
      return "#67c23a";
    case "warning":
      return "#e6a23c";
    case "info":
      return "#909399";
    case "error":
      return "#f56c6c";
    default:
      return "";
  }
})

defineExpose({
  offsetBottom
})

</script>

<template>
  <transition
    :name="`an-fade`"
    @enter="adjustHeight"
    @after-leave="onDestroy(id)"
  >
    <div
      v-show="visible.value"
      ref="anNotificationRef"
      class="an-notification"
      :class="[horizontal]"
      :style="[cssComputed]"
    >
    <div v-show="iconName" class="an-notification__icon">
      <AnIcon :name="iconName" :color="iconColor" ></AnIcon>
    </div>
    <div class="an-notification__content">
      <div class="an-notification__header">
        <div class="an-notification__title">{{ title }}</div>
        <div v-if="!hideClose" class="an-notification__close" @click="toggleVisible(false)">
          <AnIcon name="close" size="1em"></AnIcon>
        </div>
      </div>
      <div class="an-notification__message">{{ message }}</div>
    </div>
    </div>
  </transition>
</template>

<style lang="scss">
$an-notification-padding: 10px;
$an-notification-backgroundColor: #fafafa;

.an-fade-enter-from{
  opacity: 0;
  &.left {
    transform: translate(-100%);
  }
  &.right {
    transform: translate(100%);
  }
}
.an-fade-leave-to {
  opacity: 0;
}
.an-notification {
  position: fixed;
  display: flex;
  z-index: 3000;
  background-color: $an-notification-backgroundColor;
  border-radius: 6px;
  border: 1px solid #d8d9da;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, .12);
  padding: $an-notification-padding;
  transition: all .5s;
  &__content {
    min-width: 200px;
    padding: 0 $an-notification-padding;
  }
  &__header {
    display: flex;
    font-size: 18px;
    min-height: 32px;
    font-weight: bold;
    margin-bottom: 15px;
    justify-content: space-between;
    align-items: center;
  }
  &__message {
    padding-bottom: $an-notification-padding;
  }
}
</style>
