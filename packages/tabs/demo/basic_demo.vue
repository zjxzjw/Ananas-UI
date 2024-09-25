<template>
  <an-space :inline="true">
    <an-space>
      <an-button type="primary" size="large" @click="toggleUserManagement">关闭指定标签页内容</an-button>
      <an-button type="success" size="large" @click="openConfigManagement">打开指定标签页</an-button>
      <an-button type="error" size="large" @click="closeRoleManagement">关闭指定标签页</an-button>
    </an-space>
    <AnTabs ref="tabsRef" width="80vw" height="50vh">
      <AnPane title="用户管理" :visible="showUserManagement" :closable="true">这里是用户管理的内容。</AnPane>
      <AnPane title="配置管理" :visible="showConfigManagement" :closable="true">这里是配置管理的内容。</AnPane>
      <AnPane title="角色管理" :visible="showRoleManagement" :closable="true">这里是角色管理的内容。</AnPane>
      <AnPane title="你好" :visible="showRoleManagement" :closable="true">这里是角色管理的内容。</AnPane>
      <AnPane title="安抚" :visible="showRoleManagement" :closable="true">这里是角色管理的内容。</AnPane>
      <AnPane title="版本" :visible="showRoleManagement" :closable="true">这里是角色管理的内容。</AnPane>
    </AnTabs>
  </an-space>
</template>

<script>
import { inline } from '@floating-ui/core';
import { ref } from 'vue';

export default {
  data() {
    return {
      showUserManagement: true,
      showConfigManagement: true,
      showRoleManagement: true
    };
  },
  methods: {
    toggleUserManagement() {
      this.showUserManagement = !this.showUserManagement;
    },
    openConfigManagement() {
      this.$refs.tabsRef.selectTabByTitle('角色管理');
    },
    closeRoleManagement() {
      this.$refs.tabsRef.closeTabByTitle('角色管理');
    }
  }
};
</script>