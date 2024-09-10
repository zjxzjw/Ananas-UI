<template>
  <div class="bottom-tabs">
    <router-link :to="up"> < {{ up }}</router-link>
    <router-link :to="down">{{ down }} ></router-link>
  </div>
</template>

<script setup>
const props = defineProps({
  up: {
    type: String,
    default: "",
  },
  down: {
    type: String,
    default: "",
  },
});
</script>

<style scoped lang="scss">
.bottom-tabs {
  margin-top: 3rem;
  box-sizing: border-box;
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  border: 1px solid #c9c8c8;
  border-radius: 10px;
  background-color: #fff;

  a {
    display: block;
    width: 50%;
    height: 100%;
    text-align: center;
    line-height: 50px;
    text-decoration: none;
    color: #ffcf3f;
    border-radius: 10px;
  }

  a:hover {
    background-color: #f8f8f8;
    border-left: 1px solid #c9c8c8;
    border-right: 1px solid #c9c8c8;
  }
}

@media (max-width: 568px) {
  .bottom-tabs {
    height: 30px;
    border-radius: 5px;

    a {
      line-height: 30px;
      font-size: 8px;
      border-radius: 5px;
    }
  }
}
</style>
