const n=`<template>\r
  <an-table :data="data" align="left"/>\r
</template>\r
\r
<script setup>\r
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
`;export{n as default};
