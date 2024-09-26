<script setup lang='ts'>
import {
  computePosition,
  offset,
  shift,
  arrow
} from '@floating-ui/dom'
import { ref } from 'vue';
import { AnTooltipProps } from './types';
import { useClickOutside } from './hooks/useClickOutside';
import { useAutoUpdate } from './hooks/useAutoUpdate';

defineOptions({
  name: 'AnTooltip',
})

const props = withDefaults(defineProps<AnTooltipProps>(), {
  placement: 'bottom',
  trigger: 'hover',
  content: '',
}) 

const anHostTooltipRef = ref<HTMLElement | null>(null)
const anTooltipFloatingBoxRef = ref<HTMLElement | null>(null)
const anTooltipArrowRef = ref<HTMLElement | null>(null)
const visible = ref(false)

const updatePosition = () => {
  computePosition(
    anHostTooltipRef.value!,
    anTooltipFloatingBoxRef.value!,
    {
      placement: props.placement,
      middleware: [
        offset(10),
        shift(),
        arrow({
          element: anTooltipArrowRef.value!,
        }),
      ]
    },
  ).then(({ x, y, middlewareData }) => {
    if (middlewareData.arrow) {
    const {x: arrowX, y: arrowY} = middlewareData.arrow;
    if(props.placement.startsWith('bottom')) {
      Object.assign(anTooltipArrowRef.value!.style, {
        left: arrowX != null ? `${arrowX}px` : '',
        top: '-5px',
      });
    }
    if(props.placement.startsWith('top')) {
      Object.assign(anTooltipArrowRef.value!.style, {
        left: arrowX != null ? `${arrowX}px` : '',
        bottom: '-5px',
        transform: 'rotate(225deg)'
      });
    }
    if(props.placement.startsWith('left')) {
      Object.assign(anTooltipArrowRef.value!.style, {
        right: '-5px',
        top: arrowY != null ? `${arrowY}px` : '',
        transform: 'rotate(135deg)'
      });
    }
    if(props.placement.startsWith('right')) {
      Object.assign(anTooltipArrowRef.value!.style, {
        left: '-5px',
        top: arrowY != null ? `${arrowY}px` : '',
        transform: 'rotate(-45deg)'
      });
    }
  }
    Object.assign(anTooltipFloatingBoxRef.value!.style, {
      left: `${x}px`,
      top: `${y}px`
    })
  })
}

useAutoUpdate(anHostTooltipRef, anTooltipFloatingBoxRef, updatePosition);

const slots = defineSlots()

const handleMouseEnter = () => {
  if(props.trigger === 'click') return
  visible.value = true
}
const handleMouseLeave = () => {
  if(props.trigger === 'click') return
  visible.value = false
}

const handleClick = () => {
  if(props.trigger === 'click') {
    visible.value = !visible.value
  }
}

if(props.trigger === 'click') {
  useClickOutside(anTooltipFloatingBoxRef, (e) => {
    if(anHostTooltipRef.value!.contains(e.target as HTMLElement)) return
    visible.value = false
  })
}

</script>

<template>
  <div
    class="an-host-tooltip"
    ref="anHostTooltipRef"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @click="handleClick"
  >
    <slot name="reference"></slot>
    <teleport to='body'>
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
          <div ref="anTooltipArrowRef" class="an-tooltip-arrow"></div>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<style lang="scss">
.an-tooltip-fade-enter-from,
.an-tooltip-fade-leave-to {
  opacity: 0;
}
.an-host-tooltip {
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
.an-tooltip-arrow {
  position: absolute;
  width: 8px;
  height: 8px;
  border-left: 1px solid #ccc;
  border-top: 1px solid #ccc;
  border-right: 1px solid transparent;
  border-bottom: 1px solid transparent;
  transform: rotate(45deg);
  background-color: #fff;
}
</style>
