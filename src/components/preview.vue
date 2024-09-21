<template>
  <div class="code-box">
    <div
        class="show-code"
        @click="
        showCode = showCode === 'container-show' ? 'container-hide' : 'container-show'
      "
    >
      {{ showText }}
    </div>
    <div :class="showCode">
      <highlightjs :code="code" language="JavaScript" />
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
.code-box{
  width: 100%;
  display: flex;
  justify-content: left;
}

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
  background-color: #ffffff;
  width: 5%;
  text-align: center;
  cursor: pointer;
  font-size: 0.7rem;
  color: var(--color-text);
  border-radius: 0.2rem;
  line-height: 1.5rem;
  height: 1.5rem;
  margin: 1rem 1rem 1rem 0;
  transition: box-shadow 0.5s, color 0.5s;
  //box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  border: 1px solid rgb(0, 0, 0, 0.2);

  &:hover {
    color: #66d476;
    //box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  }
}

.code-container {
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  border: 1px solid red;
}
</style>
