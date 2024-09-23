<script setup lang='ts'>
import { computePosition, offset, shift } from '@floating-ui/dom'
import { ref } from 'vue';
import { AnTooltipProps } from './types'
// TODO 箭头位置 placement

defineOptions({
  name: 'AnTooltip',
})

withDefaults(defineProps<AnTooltipProps>(), {
  placement: 'bottom',
  content: '',
}) 

const anHostTooltipRef = ref<HTMLElement | null>(null)
const anTooltipFloatingBoxRef = ref<HTMLElement | null>(null)
const visible = ref(false)

const updatePosition = () => {
  computePosition(
    anHostTooltipRef.value!,
    anTooltipFloatingBoxRef.value!,
    {
      placement: 'bottom',
      middleware: [offset(10), shift()]
    },
  ).then(({ x, y }) => {
    Object.assign(anTooltipFloatingBoxRef.value!.style, {
      transform: `translate(${x}px, ${y}px)`,
    })
  })
}

const slots = defineSlots()
console.log(slots)

const handleMouseEnter = () => {
  visible.value = true
  updatePosition()
}
const handleMouseLeave = () => {
  visible.value = false
}

</script>

<template>
  <div
    class="an-host-tooltip"
    ref="anHostTooltipRef"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <slot name="reference"></slot>
    <transition
      name="an-tooltip-fade"
    >
      <div
        v-show="visible"
        ref="anTooltipFloatingBoxRef"
        class="an-tooltip-floating-box"
        >
        <template
          v-if="slots.default"
        >
          <slot></slot>
        </template>
        <span v-else>{{ content }}</span>
        <div class="an-tooltip-arrow"></div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss">
.an-tooltip-fade-enter-from,
.an-tooltip-fade-leave-to {
  opacity: 0;
}
.an-host-tooltip {
  position: relative;
  display: inline-flex;
}
.an-tooltip-floating-box {
  position: absolute;
  border: 1px solid #ccc;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.3);
  transition: opacity .4s;
}
</style>
