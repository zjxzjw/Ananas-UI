<template>
  <span>{{ current }}</span>
</template>

<script>
export default {
  name: 'AnNumberAnimation',
  props: {
    num: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 2
    }
  },
  data() {
    return {
      current: '0'
    };
  },
  methods: {
    numberGrow() {
      let step = Math.ceil((this.num * 100) / (this.duration * 1000));
      let start = 0;
      let timer = setInterval(() => {
        start += step;
        if (start > this.num) {
          clearInterval(timer);
          start = this.num;
          timer = null;
        }
        if (start === 0) {
          start = this.num;
          clearInterval(timer);
        }
        this.current = start.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
      }, this.duration * 100);
    }
  },
  mounted() {
    this.numberGrow();
  }
}
</script>
