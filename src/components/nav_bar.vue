<template>
  <div class="nav-bar">
    <span class="logo">
      <span style="color: #ffcf3f">Ananas</span>
      <span style="color: #66d476"> UI</span>
      <span style="margin-left: 0.5rem; padding: 10px">

      </span>
    </span>
    <div class="nav-list">
      <router-link to="/ananas" class="nav-item">首页</router-link>
      <router-link to="/fast" class="nav-item">文档</router-link>
      <a class="nav-item" @click="toGitHub"> GitHub </a>
      <router-link to="/" class="nav-item">0.2.3</router-link>
    </div>
  </div>
</template>

<script setup>
const toGitEE = () => {
  window.open("https://gitee.com/zjxzjw/ananas-ui", "_blank");
};
const toGitHub = () => {
  window.open("https://github.com/zjxzjw/Ananas-UI", "_blank");
};
</script>

<style scoped>
.nav-bar {
  height: 60px;
  background-color: #fff;
  box-shadow: 0 1px 4px #00000014;
  position: relative;
}

.logo {
  position: absolute;
  top: 50%;
  left: 8rem;
  transform: translate(-50%, -50%);
  font-size: 1.7rem;
  font-weight: 600;
  cursor: pointer;
}

.nav-list {
  position: absolute;
  top: 50%;
  right: 3%;
  transform: translateY(-50%);
  display: flex;
  font-size: 14px;
  font-weight: 600;
  color: #333;
}

.nav-item {
  text-decoration: none;
  color: #333;
  padding: 0 20px;
  transition: all 0.3s;
  cursor: pointer;
}

@media (max-width: 568px) {
  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.7rem;
    font-weight: 600;
    cursor: pointer;
  }

  .nav-list {
    display: none;
  }
}
</style>
