<template>
  <div>
    <an-number-animation :num="num" :size="size" :duration="duration" />
  </div>
  <an-space :inline="true">
    <an-button type="primary" @click="increaseNum">num + 10000</an-button>
    <an-button type="primary" @click="reduceNum">num - 10000</an-button>
    <an-button type="primary" @click="increaseSize">size + 10px</an-button>
    <an-button type="primary" @click="reduceSize">size - 10px</an-button>
    <an-button type="primary" @click="increaseDuration">duration + 1</an-button>
    <an-button type="primary" @click="reduceDuration">duration - 1</an-button>
  </an-space>
</template>
<script setup lang="ts">
const num: Ref<number> = ref(12133)
const size: Ref<number | string> = ref(24)
const duration: Ref<number> = ref(1)

const increaseNum = () => {
  num.value += 10000
}

const reduceNum = () => {
  num.value -= 10000
}

const increaseSize = () => {
  (size.value as number) += 10
}

const reduceSize = () => {
  if((size.value as number) <= 10) {
    return
  }
  (size.value as number) -= 10
}

const increaseDuration = () => {
  duration.value ++
}

const reduceDuration = () => {
  if(duration.value <= 0) {
    return
  }
  duration.value --
}
</script>
