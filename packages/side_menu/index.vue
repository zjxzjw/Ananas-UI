<template>
    <div class="menu-list">
      <li v-for="(item, index) in menuItems" :key="index" class="menu-item" :class="{ 'active': item.active }">
        <!-- 如果是子菜单 -->
        <template v-if="item.children && item.children.length > 0">
          <span @click="toggleSubmenu(index)" class="menu-link">{{ item.title }}</span>
          <ul v-if="item.open" class="submenu">
            <li v-for="(subItem, subIndex) in item.children" :key="subIndex" class="menu-item" :class="{ 'active': subItem.active }">
              <a :href="subItem.link" target="_blank" class="menu-link" @click.prevent="selectItem(subItem)">
                {{ subItem.title }}
              </a>
            </li>
          </ul>
        </template>
        <!-- 如果不是子菜单 -->
        <template v-else>
          <a :href="item.link" target="_blank" class="menu-link" @click.prevent="selectItem(item)">
            {{ item.title }}
          </a>
        </template>
      </li>
    </div>
</template>

<script>
export default {
  name: 'AnSideMenu',
  data() {
    return {
      menuItems: [
        // 示例数据
        {
          title: '主页',
          link: '#home',
          active: true,
          open: false,
          children: []
        },
        {
          title: '产品',
          link: '#products',
          active: false,
          open: false,
          children: [
            { title: '产品A', link: '#product-a', active: false },
            { title: '产品B', link: '#product-b', active: false }
          ]
        },
        {
          title: '服务',
          link: '#services',
          active: false,
          open: false,
          children: []
        }
      ]
    };
  },
  methods: {
    toggleSubmenu(index) {
      this.menuItems[index].open = !this.menuItems[index].open;
    },
    selectItem(item) {
      this.deselectAll();
      item.active = true;
    },
    deselectAll() {
      this.menuItems.forEach(item => {
        item.active = false;
        if (item.children) {
          this.deselectChildren(item.children);
        }
      });
    },
    deselectChildren(children) {
      children.forEach(child => {
        child.active = false;
        if (child.children) {
          this.deselectChildren(child.children);
        }
      });
    }
  }
};
</script>

<style scoped>
.menu-item {
  position: relative;
  list-style: none;
  margin: 0;
  padding-left: 0;
}

.menu-link {
  display: block;
  padding: 10px;
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
