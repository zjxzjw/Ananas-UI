<template>
  <div>
    <div :class="showCode">
      <highlightjs :code="code" language="JavaScript" />
    </div>
    <div
      class="show-code"
      @click="
        showCode = showCode === 'container-show' ? 'container-hide' : 'container-show'
      "
    >
      {{ showText }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  comp: {
    type: String,
  },
  demo: {
    type: String,
  },
});

const showText = computed(() => {
  return showCode.value === "container-show" ? "隐藏代码" : "显示代码";
});

const code = ref("");

async function getCode() {
  code.value = (
    await import(`../../packages/${props.comp}/demo/${props.demo}.vue?raw`)
  ).default;
}

const showCode = ref("container-hide");

onMounted(() => {
  getCode();
});
</script>

<style scoped lang="scss">
.container-show {
  margin-top: 1rem;
  width: 100%;
  border-radius: 0.2rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
}

.container-hide {
  margin-top: 1rem;
  width: 100%;
  display: none;
}

.show-code {
  width: 90%;
  text-align: center;
  cursor: pointer;
  font-size: 0.8rem;
  color: black;
  border-radius: 0.2rem;
  line-height: 1.5rem;
  height: 1.5rem;
  margin: 1rem 0;
  transition: box-shadow 0.5s, color 0.5s;

  &:hover {
    //box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.08);
    color: #66d476;
  }
}

.code-container {
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  border: 1px solid red;
}
</style>
