<template>
  <div class="code-box">
    <div style="display: flex;">
      <div
        class="show-code"
        @click="showCode = showCode === 'container-show' ? 'container-hide' : 'container-show'"
      >
        {{ showText }}
      </div>
      <div class="show-code" @click="toPlayground">演练场</div>
    </div>
    <transition
      name="code-box"
      @enter="hEnter"
    >
      <div ref="codeRef" :class="showCode" v-show="showCode === 'container-show'">
        <highlightjs :code="code" language="JavaScript" />
      </div>
    </transition>
    </div>
</template>

<script setup>
const hEnter = () => {
  const height = codeRef.value.scrollHeight;
  codeRef.value.style.height = height + "px";
}
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
const codeRef = ref(null);

onMounted(() => {
  getCode();
});

// toPlayground
const sourceHash = computed(() => {
  return btoa(unescape(encodeURIComponent(JSON.stringify(code.value))));
});

const toPlayground = () => {
  console.log(`${window.location.origin}/?${code.value}#/playground`)
  window.open(`${window.location.origin}/?${sourceHash.value}#/playground`, '_blank')
}

</script>

<style scoped lang="scss">
.code-box-enter-from,
.code-box-leave-to {
  height: 0px!important;
}

.code-box{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;
}

.container-show {
  overflow: hidden;
  transition: all .5s;
  width: 100%;
  border-radius: 0.2rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
}

.container-hide {
  height: 0px;
  width: 100%;
  overflow: hidden;
  transition: all .5s;
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
