<template>
  <div class="menu-list">
    <li v-for="(item, index) in menuItems" :key="index" class="menu-item" :class="{ 'active': item.active }">
      <template v-if="item.children && item.children.length > 0">
        <span @click="toggleSubmenu(index)" class="menu-link">{{ item.title }}</span>
        <ul v-if="item.open" class="submenu">
          <li v-for="(subItem, subIndex) in item.children" :key="subIndex" class="menu-item"
              :class="{ 'active': subItem.active }">
            <a class="menu-link" @click="navigateTo(subItem)">
              {{ subItem.title }}
            </a>
          </li>
        </ul>
      </template>
      <template v-else>
        <a class="menu-link" @click="navigateTo(item)">
          {{ item.title }}
        </a>
      </template>
    </li>
  </div>
</template>

<script>
export default {
  name: 'AnSideMenu'
}
</script>

<script setup>
import {useRouter} from "vue-router"

const props = defineProps({
  menuItems: Array,
  default: []
})

const router = useRouter()

const toggleSubmenu = (index) => {
  props.menuItems[index].open = !props.menuItems[index].open;
};

const selectItem = (item) => {
  deselectAll();
  item.active = true;
};

const deselectAll = () => {
  props.menuItems.forEach(item => {
    item.active = false;
    if (item.children) {
      deselectChildren(item.children);
    }
  });
};

const deselectChildren = (children) => {
  children.forEach(child => {
    child.active = false;
    if (child.children) {
      deselectChildren(child.children);
    }
  });
};

const navigateTo = (item) => {
  selectItem(item);
  router.push(item.link);
};
</script>

<style scoped lang="scss">
.menu-item {
  position: relative;
  list-style: none;
  margin: 0;
  padding-left: 0;
}

.menu-link {
  display: block;
  padding: 10px 20px;
  text-decoration: none;
  color: #333;
}

.submenu {
  margin-left: 1rem; /* 控制子菜单的缩进 */
}

.menu-link:hover {
  background-color: #e9ecef;
}

.active {
  border-left: 4px solid #ffcf3f;
  background: #fff;
  color: #ffcf3f;
}
</style>
