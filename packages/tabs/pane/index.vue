<template>
    <div v-show="active && visible" class="tab-pane">
      <slot></slot>
    </div>
  </template>
  
  <script>
  import { inject, computed, watch } from 'vue';
  
  export default {
    name: 'AnPane',
    props: {
      title: String,
      visible: {
        type: Boolean,
        default: true
      },
      closable: {
        type: Boolean,
        default: false
      }
    },
    setup(props) {
      const { tabs, selectTab } = inject('tabs');
      const index = computed(() => tabs.value.findIndex(tab => tab.title === props.title));
  
      watch(index, newIndex => {
        if (newIndex >= 0) {
          selectTab(newIndex);
        }
      }, { immediate: true });
  
      // 监听 visible 属性的变化
      watch(() => props.visible, (newValue) => {
        if (newValue) {
          // 当 visible 变为 true 时，确保标签页被激活
          selectTab(index.value);
        }
      });
  
      const closeTab = () => {
        const idx = index.value;
        if (idx >= 0) {
          // 将当前标签页设置为不可见
          tabs.value[idx].visible = false;
          // 如果关闭的是当前激活的标签页，则激活下一个可见的标签页
          if (tabs.value[idx].active) {
            const nextActiveTab = tabs.value.find((tab, i) => i > idx && tab.visible);
            if (nextActiveTab) {
              selectTab(tabs.value.indexOf(nextActiveTab));
            } else {
              const prevActiveTab = tabs.value.slice(0, idx).reverse().find(tab => tab.visible);
              if (prevActiveTab) {
                selectTab(tabs.value.indexOf(prevActiveTab));
              }
            }
          }
        }
      };
  
      return {
        active: computed(() => tabs.value[index.value]?.active),
        closeTab
      };
    }
  };
  </script>
  
  <style scoped>
  .tab-pane {
    padding: 0px 0px;
    background-color: #fff;
    width: calc(100% - 40px);
  }
  </style>