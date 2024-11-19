const n=`<template>\r
  <an-table :data="data" custom>\r
    <template #operation>\r
      <an-space>\r
        <an-button type="primary">修改</an-button>\r
        <an-button type="error">删除</an-button>\r
      </an-space>\r
    </template>\r
  </an-table>\r
</template>\r
\r
<script setup>\r
const data = {\r
  columns: [{\r
    title: '名称'\r
  },\r
    {\r
      title: '歌手'\r
    },\r
    {\r
      title: '专辑'\r
    },\r
    {\r
      title: '操作'\r
    }\r
  ],\r
  item: [{\r
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
`;export{n as default};
