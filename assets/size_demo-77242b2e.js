const a=`<template>\r
  <an-data-table :data="tableData" width="100%" table-height="200px">\r
    <an-data-table-column label="名称" prop="name" width="150px" />\r
    <an-data-table-column label="歌手" prop="people" width="180px" />\r
    <an-data-table-column label="专辑" prop="album" width="100px" />\r
    <an-data-table-column label="Actions" width="150px" prop="action">\r
      <template #default="{ row }">\r
        <an-space>\r
          <an-button type="primary">Edit</an-button>\r
          <an-button type="success">Delete</an-button>\r
        </an-space>\r
      </template>\r
    </an-data-table-column>\r
  </an-data-table>\r
</template>\r
\r
<script setup>\r
import { ref } from 'vue';\r
\r
const tableData = ref([\r
  {name: '黄昏之时', people: 'RADWIMPS', album: '你的名字。'},\r
  {name: '梦灯笼', people: 'RADWIMPS', album: '你的名字。'},\r
  {name: '前前前世', people: 'RADWIMPS', album: '你的名字。'},\r
  {name: '没有什么大不了的', people: 'RADWIMPS', album: '你的名字。'},\r
  {name: '无法看见彼此', people: 'RADWIMPS', album: '你的名字。'},\r
  {name: '火花', people: 'RADWIMPS', album: '你的名字。'},\r
]);\r
<\/script>\r
`;export{a as default};
