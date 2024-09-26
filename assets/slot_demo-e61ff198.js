const n=`<template>\r
  <an-button type="primary" @click="showModal = true">点我</an-button>\r
  <AnModal v-model="showModal">\r
    <template #header>\r
      <an-icon name="close" @click="showModal = false" size="1.5em"/>\r
    </template>\r
    <template #close-icon>\r
      <an-icon name="close" @click="showModal = false" size="1.5em"/>\r
    </template>\r
    <template #body>\r
      <an-space :inline="true">\r
        <an-input v-model="val" placeholder="搜索">\r
          <template #end>\r
            <an-icon name="search" size="1.5em"/>\r
          </template>\r
        </an-input>\r
        <an-table :data="data"/>\r
      </an-space>\r
    </template>\r
    <template #footer>\r
      <an-space>\r
        <an-button type="success" @click="showModal = false">取消</an-button>\r
        <an-button type="primary" @click="showModal = false">确定</an-button>\r
      </an-space>\r
    </template>\r
  </AnModal>\r
</template>\r
\r
<script setup>\r
import {ref} from 'vue'\r
\r
const showModal = ref(false)\r
const value = ref('')\r
\r
const data = {\r
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
    }, {\r
      name: '一路向北',\r
      user: '周杰伦',\r
      text: 'J III MP3 Player'\r
    }\r
  ]\r
}\r
<\/script>\r
\r
`;export{n as default};
