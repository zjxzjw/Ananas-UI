<template>
  <span class="number-animation">{{ current }}</span>
</template>

<script>
export default {
  name: 'AnNumberAnimation'
}
</script>

<script setup>
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
    type: String,
    default: '24px'
  }
});

let current = ref('');

const numberGrow = () => {
  let step = Math.ceil((props.num * 100) / (props.duration * 1000));
  let start = 0;
  let timer = setInterval(() => {
    start += step;
    if (start > props.num) {
      clearInterval(timer);
      start = props.num;
      timer = null;
    }
    if (start === 0) {
      start = props.num;
      clearInterval(timer);
    }
    current.value = start.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
  }, props.duration * 100);
}

onMounted(() => {
  numberGrow();
})
</script>

<style scoped lang="scss">
.number-animation {
  font-size: v-bind(size);
}
</style>
