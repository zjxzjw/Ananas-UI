<template>
  <NavBar />
  <div class="container">
    <div class="left-menu">
      <li
        v-for="(item, index) in page[0].children"
        :key="index"
        :class="{ active: activeIndex == index }"
        @click="switchMenu(item, index)"
      >
        <span>{{ item.name }}</span>
      </li>
    </div>
    <div class="right-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnHome",
};
</script>

<script setup>
import page from "@/router/page/index";
import NavBar from "@/components/nav_bar.vue";

const router = useRouter();

const activeIndex = ref(localStorage.getItem("currentMenu") || 0);

const switchMenu = (item, index) => {
  activeIndex.value = index;
  localStorage.setItem("currentMenu", JSON.stringify(index));
  router.push({ name: item.name });
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
}

.left-menu {
  width: 25rem;
  background-color: #f9f9f9;
  overflow-y: auto;
  height: calc(100vh - 60px);
}

li {
  list-style: none;
  line-height: 40px;
  padding: 0 10px;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 13px;
}

li > span {
  margin-left: 3vw;
}

li.active {
  border-left: 4px solid #ffcf3f;
  /* background: #ffcf3f33; */
  background: #fff;
  color: #ffcf3f;
}

.right-content {
  box-sizing: border-box;
  padding: 1.5rem;
  width: 100%;
  height: calc(100vh - 60px);
  overflow-y: auto;
}

/* 修改垂直滚动条 */
::-webkit-scrollbar {
  width: 0.2rem; /* 修改宽度 */
}

/* 修改滚动条轨道背景色 */
::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}

/* 修改滚动条滑块颜色 */
::-webkit-scrollbar-thumb {
  background-color: #ffcf3f;
}

/* 修改滚动条滑块悬停时的颜色 */
::-webkit-scrollbar-thumb:hover {
  background-color: rgba(255, 207, 63, 0.56);
}
</style>
