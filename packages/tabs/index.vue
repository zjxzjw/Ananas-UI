<template>
    <div class="tabs" :style="{ width: width, height: height }" v-if="filteredTabs.length > 0">
      <div class="tabs-header">
        <div
          v-for="(tab, index) in filteredTabs"
          :key="index"
          :class="{ 'is-active': tab.active }"
          @click="selectTab(index)"
        >
          {{ tab.title }}
          <an-icon name="close" size="1.2em" v-if="tab.closable" @click.stop="() => closeTabByTitle(tab.title)" />
        </div>
      </div>
      <div class="tabs-body">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, provide, watch, getCurrentInstance, computed } from 'vue';
  
  export default {
    name: 'AnTabs',
    props: {
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: 'auto'
      }
    },
    setup(props) {
      const tabs = ref([]);
      const { slots } = getCurrentInstance();
  
      onMounted(() => {
        if (slots.default) {
          slots.default().forEach((vnode, index) => {
            if (vnode.type.name === 'AnPane') {
              tabs.value.push({ ...vnode.props, active: index === 0, visible: true });
            }
          });
        }
      });
  
      const selectTab = (index) => {
        const filteredIndex = filteredTabs.value.findIndex(tab => tab.title === tabs.value[index].title);
        if (filteredIndex !== -1) {
          tabs.value.forEach((tab, i) => (tab.active = i === index));
        }
      };
  
      const selectTabByTitle = (title) => {
        const index = tabs.value.findIndex(tab => tab.title === title);
        if (index !== -1) {
          // 设置标签页为可见
          tabs.value[index].visible = true;
          // 激活该标签页
          selectTab(index);
        }
      };
  
      const closeTabByTitle = (title) => {
        const index = tabs.value.findIndex(tab => tab.title === title);
        if (index >= 0) {
          // 将当前标签页设置为不可见
          tabs.value[index].visible = false;
          // 如果关闭的是当前激活的标签页，则激活下一个可见的标签页
          if (tabs.value[index].active) {
            const nextActiveTab = tabs.value.find((tab, i) => i > index && tab.visible);
            if (nextActiveTab) {
              selectTab(tabs.value.indexOf(nextActiveTab));
            } else {
              const prevActiveTab = tabs.value.slice(0, index).reverse().find(tab => tab.visible);
              if (prevActiveTab) {
                selectTab(tabs.value.indexOf(prevActiveTab));
              }
            }
          }
        }
      };
  
      const filteredTabs = computed(() => tabs.value.filter(tab => tab.visible));
  
      // 监听 tabs 数组的变化，确保组件重新渲染
      watch(tabs, (newTabs) => {
        // 可以在这里执行一些额外的逻辑，例如日志记录
      }, { deep: true });
  
      provide('tabs', { tabs, selectTab, selectTabByTitle, closeTabByTitle });
  
      return {
        tabs,
        selectTab,
        selectTabByTitle,
        closeTabByTitle,
        filteredTabs
      };
    }
  };
  </script>
  
  <style scoped lang="scss">
  .tabs {
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    overflow: hidden;
    background-color: #fff;
    border: 1px solid #e0e0e0;
  }
  
  .tabs-header {
    display: flex;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .tabs-header > div {
    padding: 12px 20px;
    cursor: pointer;
    position: relative;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .tabs-header > div.is-active {
    z-index: 1;
    border-bottom: 3px solid var(--color-primary);
  }
  
  .tabs-header > div button {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    color: #999;
    transition: color 0.3s;
  }
  
  .tabs-header > div button:hover {
    color: #ff4d4f;
  }
  
  .tabs-body {
    padding: 20px;
    //border-top: 1px solid #e0e0e0;
  }
  </style>