const n=`<template>\r
  <an-space :inline="true">\r
    <an-space>\r
      <an-button type="primary" :width="150" @click="toggleUserManagement">关闭指定标签页内容</an-button>\r
      <an-button type="success" :width="150" @click="openConfigManagement">打开指定标签页</an-button>\r
      <an-button type="error" :width="150" @click="closeRoleManagement">关闭指定标签页</an-button>\r
    </an-space>\r
    <AnTabs ref="tabsRef" width="80vw" height="50vh">\r
      <AnPane title="搁浅" :visible="showUserManagement" :closable="true">久未放晴的天空，依旧留着你的笑容</AnPane>\r
      <AnPane title="退后" :visible="showConfigManagement" :closable="true">天空灰的好像哭过，离开你以后</AnPane>\r
      <AnPane title="枫" :visible="showRoleManagement" :closable="true">乌云在我们心里搁下一块阴影，我聆听沉寂已久的心情</AnPane>\r
      <AnPane title="其他" :visible="showUserManagement" :closable="true">\r
        <an-table :data="tableData" />\r
      </AnPane>\r
    </AnTabs>\r
  </an-space>\r
</template>\r
\r
<script setup>\r
import { toRefs } from 'vue';\r
\r
const showUserManagement = ref(true);\r
const showConfigManagement = ref(true);\r
const showRoleManagement = ref(true);\r
\r
const tableData = {\r
  columns: [\r
    {\r
      title: '名称'\r
    },\r
    {\r
      title: '歌手'\r
    },\r
    {\r
      title: '专辑'\r
    }\r
  ],\r
  item: [\r
    {\r
      name: '一路向北',\r
      user: '周杰伦',\r
      text: 'J III MP3 Player'\r
    },\r
    {\r
      name: '一路向北',\r
      user: '周杰伦',\r
      text: 'J III MP3 Player'\r
    },\r
    {\r
      name: '一路向北',\r
      user: '周杰伦',\r
      text: 'J III MP3 Player'\r
    }\r
  ]\r
};\r
\r
const toggleUserManagement = () => {\r
  showUserManagement.value = !showUserManagement.value;\r
};\r
\r
const openConfigManagement = () => {\r
  tabsRef.value.selectTabByTitle('搁浅');\r
};\r
\r
const closeRoleManagement = () => {\r
  tabsRef.value.closeTabByTitle('枫');\r
};\r
\r
// 创建一个 ref 来引用 AnTabs 组件\r
const tabsRef = ref(null);\r
<\/script>`;export{n as default};
