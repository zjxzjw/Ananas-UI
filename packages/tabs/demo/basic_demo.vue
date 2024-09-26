<template>
  <an-space :inline="true">
    <an-space>
      <an-button type="primary" :width="150" @click="toggleUserManagement">关闭指定标签页内容</an-button>
      <an-button type="success" :width="150" @click="openConfigManagement">打开指定标签页</an-button>
      <an-button type="error" :width="150" @click="closeRoleManagement">关闭指定标签页</an-button>
    </an-space>
    <AnTabs ref="tabsRef" width="80vw" height="50vh">
      <AnPane title="搁浅" :visible="showUserManagement" :closable="true">久未放晴的天空，依旧留着你的笑容</AnPane>
      <AnPane title="退后" :visible="showConfigManagement" :closable="true">天空灰的好像哭过，离开你以后</AnPane>
      <AnPane title="枫" :visible="showRoleManagement" :closable="true">乌云在我们心里搁下一块阴影，我聆听沉寂已久的心情</AnPane>
      <AnPane title="其他" :visible="showUserManagement" :closable="true">
        <an-table :data="tableData" />
      </AnPane>
    </AnTabs>
  </an-space>
</template>

<script setup>
import { toRefs } from 'vue';

const showUserManagement = ref(true);
const showConfigManagement = ref(true);
const showRoleManagement = ref(true);

const tableData = {
  columns: [
    {
      title: '名称'
    },
    {
      title: '歌手'
    },
    {
      title: '专辑'
    }
  ],
  item: [
    {
      name: '一路向北',
      user: '周杰伦',
      text: 'J III MP3 Player'
    },
    {
      name: '一路向北',
      user: '周杰伦',
      text: 'J III MP3 Player'
    },
    {
      name: '一路向北',
      user: '周杰伦',
      text: 'J III MP3 Player'
    }
  ]
};

const toggleUserManagement = () => {
  showUserManagement.value = !showUserManagement.value;
};

const openConfigManagement = () => {
  tabsRef.value.selectTabByTitle('搁浅');
};

const closeRoleManagement = () => {
  tabsRef.value.closeTabByTitle('枫');
};

// 创建一个 ref 来引用 AnTabs 组件
const tabsRef = ref(null);
</script>