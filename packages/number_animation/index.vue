<template>
  <span class="number-animation">{{ current }}</span>
</template>

<script>
export default {
  name: 'AnNumberAnimation'
}
</script>

<script setup>
import { status } from './utils'
const props = defineProps({
  num: {
    type: Number,
    default: 0
  },
  duration: {
    type: Number,
    default: 1000
  },
  size: {
    type: [String, Number],
    default: '24px'
  },
  isReverse: {
    type: Boolean,
    default: false
  }
});

const size = computed(() => {
  if(typeof props.size === 'number') {
    return props.size + 'px'
  }
  return props.size
})

let current = ref('');
let runQueue = ref([]);


const numberRunning = (start, end) => {
  let step = Math.ceil((Math.abs(end-start) * 100) / (props.duration * 1000));
  let currentNum = start;
  return () => new Promise(res => {
    let timer = setInterval(() => {
      if(start < end) {
        currentNum += step;
      } else {
        currentNum -= step;
      }
      if (
        (start < end && currentNum >= end) ||
        (start > end && currentNum <= end)
      ) {
        clearInterval(timer);
        currentNum = end;
        timer = null;
        runQueue.value[0].status = status.finished
        runQueue.value.shift()
        runQueue.value = [...runQueue.value]
        res()
      }
      current.value = currentNum.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }, props.duration * 100);
  })
}

watch(
  () => props.num,
  (num, preNum) => {
  runQueue.value.push({
    status: status.noStart,
    task: numberRunning(preNum, num)
  })
  runQueue.value = [...runQueue.value]
})

watch(runQueue, async (cur, pre) => {
  if(runQueue.value.length && runQueue.value[0].status === status.noStart) {
    runQueue.value[0].status = status.running
    runQueue.value[0].task()
  }
})

onMounted(() => {
  runQueue.value.push({
    status: status.noStart,
    task: numberRunning(0, props.num)
  });
  runQueue.value = [...runQueue.value]
})
</script>

<style scoped lang="scss">
.number-animation {
  font-size: v-bind(size);
}
</style>
